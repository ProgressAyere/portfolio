import React from 'react';
import './partners.css';
import o3Logo from '../../../assets/images/o3-logo.png';
import bccLogo from '../../../assets/images/bcc-logo.png';

function Partners() {
    return (
        <section className="fourth-section">
            <div className="fourth-container">
                <h1 className="collabs">Partnerships & Collaborations</h1>
            </div>
            <div className="logo-slider">
                <div className="logo-track">
                    {/* Duplicate logos for continuous scroll effect */}
                    {[...Array(4)].map((_, index) => (
                        <React.Fragment key={index}>
                            <img src={o3Logo} alt="O3 finance school logo" className="logo-item" />
                            <img src={bccLogo} alt="BCC logo" className="logo-item" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;