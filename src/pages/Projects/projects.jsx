import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faShield, faCode, faUsers, faCamera, faExternalLinkAlt, faVideo, faCoins, faPalette, faTools } from '@fortawesome/free-solid-svg-icons';
import './projects.css';

function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const slideShowRef = useRef(null);

    const slides = [
        { 
            type: 'image', 
            src: require('../../assets/gallery/Copy of _MG_4268.jpg'), 
            title: 'Community Speaker', 
            desc: 'Crypto Bootcamp Community' 
        },
        { 
            type: 'image', 
            src: require('../../assets/gallery/Copy of _MG_4744.jpg'), 
            title: 'Team Building', 
            desc: 'Blockchain Community Event' },
        { 
            type: 'image', 
            src: require('../../assets/gallery/DSC07726.JPG'), 
            title: 'FiL Lagos 2024', 
            desc: 'Major Blockchain Conference' 
        },
        { 
            type: 'image', 
            src: require('../../assets/gallery/Stellar-243.jpg'), 
            title: 'Stellar Community', 
            desc: 'Stellar Network Event' 
        },
        { 
            type: 'video', 
            src: require('../../assets/gallery/Hacking.mp4'),
            title: 'Building the Future',
            desc: 'Crafting innovative solutions through code'
        },
        { 
            type: 'image', 
            src: require('../../assets/gallery/Stellar-249.jpg'), 
            title: 'Stellar Ambassador', 
            desc: 'Community Leadership' 
        },
        { 
            type: 'image', 
            src: require('../../assets/gallery/IMG_2431.jpg'), 
            title: 'Frontend Developer', 
            desc: 'Hedera Africa Hackathon - Lagos' 
        }
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        let interval = null;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    interval = setInterval(() => {
                        setCurrentSlide((prev) => (prev + 1) % slides.length);
                    }, 3000);
                } else {
                    if (interval) {
                        clearInterval(interval);
                        interval = null;
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (slideShowRef.current) observer.observe(slideShowRef.current);
        
        return () => {
            if (interval) {
                clearInterval(interval);
            }
            observer.disconnect();
        };
    }, [isMobile, slides.length]);

    return (
        <>
            <main>
                <section className="head-section">
                    <div className="head-container">
                        <div className="head-image-text">
                            <div className="head-contents-wrapper">
                                <div className="little-head">
                                    <FontAwesomeIcon icon={faAward} />
                                    <span>Portfolio & Achievements</span>
                                </div>
                                <div className="head-contents">
                                    <h1>My Projects, Certifications & <span>Achievements</span></h1>
                                    <p>A showcase of my journey, from blockchain education to impactful collaborations and technical accomplishments.</p>
                                    <div className="head-icons">
                                        <div className="head-icons-container">
                                            <FontAwesomeIcon icon={faCode} />
                                            <div>
                                                <h4>15+</h4>
                                                <p>Projects</p>
                                            </div>
                                        </div>
                                        <div className="head-icons-container">
                                            <FontAwesomeIcon icon={faAward} />
                                            <div>
                                                <h4>8+</h4>
                                                <p>Certificates</p>
                                            </div>
                                        </div>
                                        <div className="head-icons-container">
                                            <FontAwesomeIcon icon={faUsers} />
                                            <div>
                                                <h4>500+</h4>
                                                <p>Students</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="head-image">
                                <img src={require('../../assets/images/progem-typing.png')} alt="The CEO is typing" />
                                <div className="head-image-description">
                                    <span>Active in Web3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mid-section">
                    <div className="mid-container">
                        <div className="mid-image-text">
                            <div className="little-mid">
                                <FontAwesomeIcon icon={faAward} />
                                <span>Verified Achievements</span>
                            </div>
                            <h2>Certifications & Achievements</h2>
                            <p>Recognized credentials from leading blockchain organizations and platforms</p>
                        </div>
                        <div className="highlights-grid">
                            {[
                                { 
                                    icon: faCode, 
                                    title: 'Responsive Web Design', 
                                    org: 'FreeCodeCamp', 
                                    year: '2024', 
                                    link: 'https://drive.google.com/file/d/1Yadz9p_Hn7wGP6BjHGa_idur_KwWjAu9/view?usp=sharing' 
                                },
                                { 
                                    icon: faCoins, 
                                    title: 'Crypto Beginners Course', 
                                    org: 'Quidax', 
                                    year: '2024', 
                                    link: 'https://drive.google.com/file/d/1yvXG741fD5c3n_K6pptUqsA9u-00JkFj/view?usp=sharing' 
                                },
                                { 
                                    icon: faShield, 
                                    title: 'Web Hacking For Beginners', 
                                    org: 'Cyber Twinkle', 
                                    year: '2025', 
                                    link: 'https://drive.google.com/file/d/1NDDFdaJkg1sp3sKFJn0IMG5VGX36GHFt/view?usp=sharing' 
                                },
                                { 
                                    icon: faVideo, 
                                    title: 'AI generated 3D Animation Videos', 
                                    org: 'Yasir Ahmed AI Academy', 
                                    year: '2024', 
                                    link: 'https://drive.google.com/file/d/1RBfWgkutUkiVBA1t5A8-4xXsh_o8bwX-/view?usp=sharing' 
                                },
                                { 
                                    icon: faCoins, 
                                    title: 'Career Opportunities in Blockchain', 
                                    org: 'Crypto Bootcamp Community', 
                                    year: '2022', 
                                    link: 'https://drive.google.com/file/d/1eCPivR2YhGecslnzSegF3ejI6-j_QaiD/view?usp=sharing' 
                                },
                                { 
                                    icon: faCode, 
                                    title: 'Hashgraph Developer Course', 
                                    org: 'The Hashgraph Association', 
                                    year: '2025', 
                                    link: 'https://drive.google.com/file/d/1SuZldgzVqKOtV3hX_UVGR0XRY_8Z42wf/view?usp=sharing' 
                                },
                                { 
                                    icon: faPalette, 
                                    title: 'Character Creation with AI', 
                                    org: 'CC AI Academy', 
                                    year: '2025', 
                                    link: 'https://drive.google.com/file/d/1PVfl-Z1S2qFYimgPNQlA_3jfhVym8njJ/view?usp=sharing' 
                                },
                                { 
                                    icon: faTools, 
                                    title: 'Hackers Toolkit', 
                                    org: 'Frank Anemaet', 
                                    year: '2025', 
                                    link: 'https://drive.google.com/file/d/1PSAXbTebFZSZGE4Zqm-J5fnHkveX7Hwl/view?usp=sharing' 
                                },
                                { 
                                    icon: faPalette, 
                                    title: 'Professional Logo Production', 
                                    org: 'F.E Academy', 
                                    year: '2025', 
                                    link: 'https://drive.google.com/file/d/1Mpolnn3THsx4Rm769RIQn8lRYEWNisjt/view?usp=sharing' 
                                }
                            ].map((cert, index) => (
                                <div className="highlights" key={index}>
                                    <div className="highlights-icon"><FontAwesomeIcon icon={cert.icon} /></div>
                                    <h3>{cert.title}</h3>
                                    <p>{cert.org}</p>
                                    <span className="year">{cert.year}</span>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="highlights-btn">
                                        View Credential <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {isMobile && (
                    <section className="photo-highlights mobile-header-only">
                        <div className="photo-container">
                            <div className="photo-header">
                                <div className="little-photo">
                                    <FontAwesomeIcon icon={faCamera} />
                                    <span>Visual Journey</span>
                                </div>
                                <h2>Photo Highlights</h2>
                                <p>Moments from speaking engagements, community events, and blockchain education initiatives</p>
                            </div>
                        </div>
                    </section>
                )}



                {isMobile && (
                    <section className="mobile-slideshow" ref={slideShowRef}>
                        <div className="slideshow-container">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`slide ${index === currentSlide ? 'active' : ''} ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
                                >
                                    <>
                                        {slide.type === 'video' ? (
                                            <video className="slide-video" muted autoPlay loop playsInline>
                                                <source src={slide.src} type="video/mp4" />
                                            </video>
                                        ) : (
                                            <img src={slide.src} alt={slide.title} className="slide-image" />
                                        )}
                                        {slide.title && slide.desc && (
                                            <div className="slide-overlay">
                                                <h4>{slide.title}</h4>
                                                <p>{slide.desc}</p>
                                            </div>
                                        )}
                                    </>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className="photo-highlights desktop-only">
                    <div className="photo-container">
                        <div className="photo-header">
                            <div className="little-photo">
                                <FontAwesomeIcon icon={faCamera} />
                                <span>Visual Journey</span>
                            </div>
                            <h2>Photo Highlights</h2>
                            <p>Moments from speaking engagements, community events, and blockchain education initiatives</p>
                        </div>
                        <div className="photo-grid">
                            {[
                                { 
                                    img: 'Copy of _MG_4268.jpg', 
                                    title: 'Community Speaker', 
                                    desc: 'Crypto Bootcamp Community' 
                                },
                                { 
                                    img: 'Copy of _MG_4744.jpg', 
                                    title: 'Team Building', 
                                    desc: 'Blockchain Community Event' 
                                },
                                { 
                                    img: 'DSC07726.JPG', 
                                    title: 'FiL Lagos 2024', 
                                    desc: 'Major Blockchain Conference' 
                                },
                                { 
                                    img: 'Stellar-243.jpg', 
                                    title: 'Stellar Community', 
                                    desc: 'Stellar Network Event' 
                                },
                                { 
                                    img: 'Stellar-249.jpg', 
                                    title: 'Stellar Ambassador', 
                                    desc: 'Community Leadership' 
                                },
                                { 
                                    img: 'IMG_2431.jpg', 
                                    title: 'Frontend Developer', 
                                    desc: 'Hedera Africa Hackathon - Lagos' 
                                }
                            ].map((photo, index) => (
                                <div className="photo-item" key={index}>
                                    <img src={require(`../../assets/gallery/${photo.img}`)} alt={photo.title} />
                                    <div className="photo-overlay">
                                        <h4>{photo.title}</h4>
                                        <p>{photo.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

export default Projects;
