import React, { useEffect, useRef } from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUsers, faVideo, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEthereum, faHtml5, faCss3Alt, faJsSquare, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../../assets/images/profile.png';
import CallToAction from '../../components/CallToAction/CallToAction.jsx';

function About() {
    const leftContentRef = useRef(null);
    const rightContentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= 768 && leftContentRef.current && rightContentRef.current) {
                const scrollY = window.scrollY;
                const triggerPoint = 200;
                
                if (scrollY > triggerPoint) {
                    const progress = Math.min((scrollY - triggerPoint) / 300, 1);
                    leftContentRef.current.style.setProperty('--scroll-progress', progress);
                    leftContentRef.current.classList.add('parallax-effect');
                    rightContentRef.current.classList.add('slide-up');
                } else {
                    leftContentRef.current.style.setProperty('--scroll-progress', 0);
                    leftContentRef.current.classList.remove('parallax-effect');
                    rightContentRef.current.classList.remove('slide-up');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main>
            {/* Section 1 - About Introduction */}
            <section className="head-section">
                <div className="container head-container">
                    <div className="head-content-wrapper">
                        <div className="head-image-text">
                            {/* Left Content - Image and Milestones */}
                            <div className="left-content" ref={leftContentRef}>
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
                            <div className="right-content" ref={rightContentRef}>
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
                                        <h2 className="skills-title">This is my <span className="tech-stack-highlight">Tech Stack</span></h2>
                                        <div className="skills-grid">
                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faHtml5} className="skill-icon html-icon" />
                                                <span>HTML</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faNode} className="skill-icon node-icon" />
                                                <span>Node JS</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css-icon" />
                                                <span>CSS</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faShieldAlt} className="skill-icon auditing-icon" />
                                                <span>Smart Contract Auditing</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faJsSquare} className="skill-icon js-icon" />
                                                <span>JavaScript</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faEthereum} className="skill-icon solidity-icon" />
                                                <span>Solidity</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faReact} className="skill-icon react-icon" />
                                                <span>React JS</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faUsers} className="skill-icon community-icon" />
                                                <span>Community Management</span>
                                            </div>

                                            <div className="skill-box">
                                                <div className="skill-icon nextjs-icon">N</div>
                                                <span>Next JS</span>
                                            </div>

                                            <div className="skill-box">
                                                <FontAwesomeIcon icon={faVideo} className="skill-icon content-icon" />
                                                <span>Content Creation</span>
                                            </div>

                                            <div className="skill-box">
                                                <svg className="skill-icon typescript-icon" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.244-.651-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"/>
                                                </svg>
                                                <span>Typescript</span>
                                            </div>

                                            <div className="skill-box">
                                                <svg className="skill-icon tailwind-icon" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                                                </svg>
                                                <span>Tailwind CSS</span>
                                            </div>

                                            <div className="skill-box">
                                                <div className="skill-icon framer-icon">F</div>
                                                <span>Framer Motion</span>
                                            </div>

                                            <div className="skill-box">
                                                <svg className="skill-icon sql-icon" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                                </svg>
                                                <span>SQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction currentPage="about" />
        </main>
    );
}

export default About;