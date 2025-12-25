import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import nftImage from '../../assets/images/my-nft.JPG';

function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
            document.body.classList.toggle('light-mode', savedTheme === 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.body.classList.toggle('light-mode', !newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };
    
    return (
        <header>
            <div className="container header-container">
                <div className="logo-name-container">
                    <img src={nftImage} alt="Progress' NFT" className="logo" />
                    <h2>Progress Ayere</h2>
                </div>
                <div className="header-actions">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </button>
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                </div>
                <nav className={menuOpen ? 'nav-open' : ''}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)} className={location.pathname === '/' ? 'active-link' : ''}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)} className={location.pathname === '/about' ? 'active-link' : ''}>About</Link></li>
                        <li><Link to="/projects" onClick={() => setMenuOpen(false)} className={location.pathname === '/projects' ? 'active-link' : ''}>Projects</Link></li>
                        <li><a href="mailto:ayereprogress2@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        <li><a href="https://tally.so/r/kdaZdR" className="btn-link" onClick={() => setMenuOpen(false)}>Let's Connect</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;