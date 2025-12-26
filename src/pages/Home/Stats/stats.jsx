import React, { useEffect, useRef } from 'react';
import './stats.css';

function Stats() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const wrappers = entry.target.querySelectorAll('.third-wrapper');
                    
                    if (entry.isIntersecting) {
                        // Reset animations first
                        wrappers.forEach((wrapper) => {
                            wrapper.classList.remove('animate');
                        });
                        
                        // Trigger animations with delay
                        wrappers.forEach((wrapper, index) => {
                            setTimeout(() => {
                                wrapper.classList.add('animate');
                            }, index * 200);
                        });
                    } else {
                        // Reset animations when out of view
                        wrappers.forEach((wrapper) => {
                            wrapper.classList.remove('animate');
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="third-section" ref={sectionRef}>
            <div className="contain third-container">
                <div className="third-wrapper slide-from-left">
                    <h4>500+</h4>
                    <p>Students Reached</p>
                </div>
                <div className="third-wrapper slide-from-right">
                    <h4>10+</h4>
                    <p>Web3 Events Hosted</p>
                </div>
                <div className="third-wrapper slide-from-left">
                    <h4>5+</h4>
                    <p>Ambassadors Roles Held</p>
                </div>
            </div>
        </section>
    );
}

export default Stats;