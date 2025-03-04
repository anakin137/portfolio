
import React, { useEffect, useRef } from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('fade-in');
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="experience-section" ref={sectionRef}>
            <h2>Experience</h2>
            <div className="experience-item">
                <h3>Software Engineer - CATS GLOBAL</h3>
                <p>Feb 2023 - Aug 2023</p>
                <ul>
                    <li>Developed asset management software for 1000+ employees using Figma, HTML, CSS, and JavaScript.</li>
                    <li>Collaborated with cross-functional teams, reducing delivery time by 2 weeks.</li>
                    <li>Identified critical user experience issues and redesigned processes to improve usability.</li>
                </ul>
            </div>
        </section>
    );
};

export default ExperienceSection;
