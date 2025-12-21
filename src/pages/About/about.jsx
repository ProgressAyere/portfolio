import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUsers, faVideo, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEthereum, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../../assets/images/profile.png';

function About() {
    return (
        <main>
            {/* Section 1 - About Introduction */}
            <section className="head-section">
                <div className="container head-container">
                    <div className="head-content-wrapper">
                        <div className="head-image-text">
                            {/* Left Content - Image and Milestones */}
                            <div className="left-content">
                                <div className="image-milestone-container">
                                    <img src={profileImage} alt="It is the CEO" className="head-image" />
                                    <h3 className="photo-highlight">Milestones</h3>
                                    <div className="milestones-list">
                                        <div className="milestone-item">
                                            <span className="year">2023</span>
                                            <p>Began Blockchain Education</p>
                                        </div>
                                        <div className="milestone-item">
                                            <span className="year">2024</span>
                                            <p>Founded BCC</p>
                                        </div>
                                        <div className="milestone-item">
                                            <span className="year">2025</span>
                                            <p>Built First Smart Contract</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Text and Skills */}
                            <div className="right-content">
                                <div className="head-text">
                                    <h2 className="tag">Who is Progress Ayere?</h2>
                                    <p>As the Founder and Educator at Blockchain on Campus (BCC), my journey is fueled by a passion for demystifying Web3. I thrive on simplifying complex blockchain concepts, hosting engaging events, and creating educational animations that make the decentralized world accessible to all. My ultimate goal is to evolve into a proficient Smart Contract Auditor, ensuring the security and integrity of the future's digital infrastructure.</p>
                                    <div className="button-group">
                                        <a href="https://docs.google.com/document/d/1W5Kc-5bA_8C7YVaJgDZHul2pfVQgN1kJAw8oJb1x97o/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="second-btn">
                                            <FontAwesomeIcon icon={faDownload} />
                                            Download CV
                                        </a>
                                    </div>
                                </div>

                                {/* Skills Section */}
                                <section className="skills-section">
                                    <div className="container">
                                        <h2 className="skills-title">Skills Showcase</h2>
                                        <div className="skills-grid">
                                            <div className="skill-item">
                                                <div className="skill-header">
                                                    <FontAwesomeIcon icon={faEthereum} />
                                                    <span>Solidity</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{width: "30%"}}></div>
                                                </div>
                                                <span className="percentage">30%</span>
                                            </div>

                                            <div className="skill-item">
                                                <div className="skill-header">
                                                    <FontAwesomeIcon icon={faHtml5} />
                                                    <span>HTML</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{width: "97%"}}></div>
                                                </div>
                                                <span className="percentage">97%</span>
                                            </div>

                                            <div className="skill-item">
                                                <div className="skill-header">
                                                    <FontAwesomeIcon icon={faCss3Alt} />
                                                    <span>CSS</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{width: "90%"}}></div>
                                                </div>
                                                <span className="percentage">90%</span>
                                            </div>

                                            <div className="skill-item">
                                                <div className="skill-header">
                                                    <FontAwesomeIcon icon={faJsSquare} />
                                                    <span>JavaScript</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{width: "90%"}}></div>
                                                </div>
                                                <span className="percentage">90%</span>
                                            </div>

                                            <div className="skill-item">
                                                <div className="skill-header">
                                                    <FontAwesomeIcon icon={faShieldAlt} />
                                                    <span>Smart Contract Auditing</span>
                                                    <span className="learning-badge">Learning</span>
                                                </div>
                                            </div>

                                            <div className="skill-item">
                                                <div className="skill-header">
                                                    <FontAwesomeIcon icon={faUsers} />
                                                    <span>Community Management</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{width: "85%"}}></div>
                                                </div>
                                                <span className="percentage">85%</span>
                                            </div>

                                            <div className="skill-item full-width">
                                                <div className="skill-header">
                                                    <FontAwesomeIcon icon={faVideo} />
                                                    <span>Content Creation & Animation</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{width: "75%"}}></div>
                                                </div>
                                                <span className="percentage">75%</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;