import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import profileImage from '../../../assets/images/profile.png';

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content-wrapper">
                    <div className="hero-image-text">
                        <img src={profileImage} alt="It is the CEO" className="hero-image" />
                        <div className="hero-text">
                            <h1>Empowering the Future through Blockchain & Innovation</h1>
                            <p className="highlights1">Blockchain Educator | Smart Contract Developer | Web3 Community Builder</p>
                            <div className="button-group">
                                <button className="mainbtn explore-btn" onClick={() => navigate('/projects')}>Explore My Work</button>
                                <button className="mainbtn contact-btn" onClick={() => window.location.href = 'mailto:ayereprogress2@gmail.com'}>Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;