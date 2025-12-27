import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><a href="mailto:ayereprogress2@gmail.com">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Connect</h3>
                    <div className="social-icons">
                        <a href="https://x.com/MichaelAyere"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href="https://t.me/progress_ayere"><FontAwesomeIcon icon={faTelegram} /></a>
                        <a href="http://linkedIn.com/in/progress-ayere-2b2a19271"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/ProgressAyere"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
                <div className="footer-column3">
                    <h3>Progress Ayere</h3>
                    <p>Blockchain Educator and Community Leader.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <p>&copy; {currentYear} Progress Ayere — Built for Web3 Impact</p>
            </div>
        </footer>
    );
}

export default Footer;