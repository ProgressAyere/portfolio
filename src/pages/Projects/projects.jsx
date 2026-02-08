import React, { useEffect, useRef, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faShield, faCode, faUsers, faCamera, faExternalLinkAlt, faVideo, faCoins, faPalette, faTools, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './projects.css';
import CallToAction from '../../components/CallToAction/CallToAction.jsx';

function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [bccSlide, setBccSlide] = useState(0);
    const slideShowRef = useRef(null);
    const bccSlideRef = useRef(null);

    const bccMedia = useMemo(() => [
        { type: 'video', src: require('../../assets/projects/BCC/BCC video1.mp4'), duration: null },
        { type: 'image', src: require('../../assets/projects/BCC/1.png'), duration: 5000 },
        { type: 'image', src: require('../../assets/projects/BCC/2.png'), duration: 5000 },
        { type: 'image', src: require('../../assets/projects/BCC/3.png'), duration: 5000 }
    ], []);

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

        const handleScroll = () => {
            const certItems = document.querySelectorAll('.highlights');
            certItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const itemCenter = rect.top + rect.height / 2;
                const viewportCenter = windowHeight / 2;
                const distance = Math.abs(viewportCenter - itemCenter);
                const maxDistance = windowHeight / 2;
                
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const scale = 1 + (1 - Math.min(distance / maxDistance, 1)) * 0.2;
                    item.style.transform = `scale(${scale})`;
                } else {
                    item.style.transform = 'scale(1)';
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

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

    useEffect(() => {
        const currentMedia = bccMedia[bccSlide];
        
        if (currentMedia.type === 'image') {
            const interval = setInterval(() => {
                setBccSlide((prev) => (prev + 1) % bccMedia.length);
            }, currentMedia.duration);
            return () => clearInterval(interval);
        }
    }, [bccSlide, bccMedia]);

    const handleVideoEnd = () => {
        setBccSlide((prev) => (prev + 1) % bccMedia.length);
    };

    const nextBccSlide = () => {
        setBccSlide((prev) => (prev + 1) % bccMedia.length);
    };

    const prevBccSlide = () => {
        setBccSlide((prev) => (prev - 1 + bccMedia.length) % bccMedia.length);
    };

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

                <section className="project-showcase">
                    <div className="project-container">
                        <div className="project-header">
                            <span className="project-role">My Projects</span>
                            <h2>Blockchain on Campus (BCC) Website</h2>
                            <p>Educational platform designed to simplify blockchain education for students and newcomers to Web3, providing clear resources and community engagement content.</p>
                        </div>
                        <div className="project-content">
                            <div className="project-media" ref={bccSlideRef}>
                                {bccMedia.map((media, index) => (
                                    <div key={index} className={`project-slide ${index === bccSlide ? 'active' : ''}`}>
                                        {media.type === 'video' ? (
                                            <video className="project-video" muted autoPlay playsInline onEnded={handleVideoEnd} key={index} ref={(el) => { if (el) el.playbackRate = 1.25; }}>
                                                <source src={media.src} type="video/mp4" />
                                            </video>
                                        ) : (
                                            <img src={media.src} alt={`BCC Screenshot ${index}`} className="project-image" loading="lazy" />
                                        )}
                                    </div>
                                ))}
                                <button className="slide-nav prev" onClick={prevBccSlide} aria-label="Previous slide">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button className="slide-nav next" onClick={nextBccSlide} aria-label="Next slide">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                                <div className="tech-grid">
                                    <div className="tech-logo" title="React">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                        <span className="tech-name">React</span>
                                    </div>
                                    <div className="tech-logo" title="Tailwind CSS">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                                        <span className="tech-name">Tailwind CSS</span>
                                    </div>
                                    <div className="tech-logo" title="Vercel">
                                        <svg viewBox="0 0 256 222" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M128 0C57.308 0 0 57.307 0 128c0 70.696 57.307 128 128 128 70.696 0 128-57.307 128-128C256 57.314 198.689.007 128 0Zm0 214.886c-47.94 0-86.886-38.946-86.886-86.886S80.06 41.114 128 41.114s86.886 38.946 86.886 86.886-38.946 86.886-86.886 86.886Z"/><circle cx="128" cy="128" r="50" fill="#000"/></svg>
                                        <span className="tech-name">Vercel</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-details">
                                <a href="https://bcc-yct.vercel.app" target="_blank" rel="noopener noreferrer" className="project-cta">
                                    View Live Site <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
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

                <CallToAction currentPage="projects" />
            </main>
        </>
    );
}

export default Projects;
