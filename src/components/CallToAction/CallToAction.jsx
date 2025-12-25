import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './CallToAction.css';

function CallToAction({ currentPage }) {
    const navigate = useNavigate();
    const [displayedText, setDisplayedText] = useState('');
    const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const links = useMemo(() => 
        currentPage === 'home' 
        ? [
            { text: 'check out the about', path: '/about' },
            { text: 'check out the projects', path: '/projects' },
            { text: 'contact Progress Ayere', path: 'mailto:ayereprogress2@gmail.com' }
          ]
        : currentPage === 'about'
        ? [
            { text: 'check out the home', path: '/' },
            { text: 'check out the projects', path: '/projects' },
            { text: 'contact Progress Ayere', path: 'mailto:ayereprogress2@gmail.com' }
          ]
        : [
            { text: 'check out the home', path: '/' },
            { text: 'check out the about', path: '/about' },
            { text: 'contact Progress Ayere', path: 'mailto:ayereprogress2@gmail.com' }
          ]
    , [currentPage]);

    useEffect(() => {
        const currentText = links[currentLinkIndex].text;
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentLinkIndex((prev) => (prev + 1) % links.length);
                }
            }
        }, isDeleting ? 30 : 50);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentLinkIndex, links]);

    const handleClick = () => {
        const path = links[currentLinkIndex].path;
        if (path.startsWith('mailto:')) {
            window.location.href = path;
        } else {
            navigate(path);
        }
    };

    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-links">
                    <div className="cta-link-wrapper">
                        <button onClick={handleClick} className="cta-link">
                            <span className="cta-prefix">Want to know more: </span>{displayedText}<span className="cursor">|</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
