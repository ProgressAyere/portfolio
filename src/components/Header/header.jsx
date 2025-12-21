import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import nftImage from '../../assets/images/my-nft.JPG';

function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header>
            <div className="container header-container">
                <div className="logo-name-container">
                    <img src={nftImage} alt="Progress' NFT" className="logo" />
                    <h2>Progress Ayere</h2>
                </div>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
                <nav className={menuOpen ? 'nav-open' : ''}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)} style={{ color: location.pathname === '/' ? '#3b82f6' : 'white' }}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)} style={{ color: location.pathname === '/about' ? '#3b82f6' : 'white' }}>About</Link></li>
                        <li><Link to="/projects" onClick={() => setMenuOpen(false)} style={{ color: location.pathname === '/projects' ? '#3b82f6' : 'white' }}>Projects</Link></li>
                        <li><a href="mailto:ayereprogress2@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        <li><a href="https://tally.so/r/kdaZdR" className="btn-link" onClick={() => setMenuOpen(false)}>Let's Connect</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;