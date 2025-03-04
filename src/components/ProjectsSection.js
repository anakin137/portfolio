
import React, { useEffect, useRef } from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
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
        <section id="projects" className="projects-section" ref={sectionRef}>
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project-box">
                    <h3>AI Timetable Management</h3>
                    <p>Built with HTML, CSS, AngularJS, and MySQL. Automated scheduling reduced conflicts, saved 5+ hours weekly.</p>
                </div>
                <div className="project-box">
                    <h3>Bank Management System</h3>
                    <p>Developed in Python. Automated account setup, reducing errors by 70%, and enhanced data retrieval speed by 30%.</p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
