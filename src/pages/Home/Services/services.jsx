import React from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
        <section className="second-section">
            <div className="containers">
                <h2 className="subhead">What I Do</h2>
                <div className="second-wrapper">
                    <div className="second-container">
                        <FontAwesomeIcon icon={faGraduationCap} className="service-icon" />
                        <h4>Education</h4>
                        <p>Simplifying complex blockchain concepts to empower the next wave of builders and users.</p>
                    </div>
                    <div className="second-container">
                        <FontAwesomeIcon icon={faCode} className="service-icon" />
                        <h4>Smart Contracts</h4>
                        <p>Developing secure and efficient smart contracts to power decentralized applications.</p>
                    </div>
                    <div className="second-container">
                        <FontAwesomeIcon icon={faUsers} className="service-icon" />
                        <h4>Community Leadership</h4>
                        <p>Fostering inclusive and engaged communities around innovative Web3 projects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;