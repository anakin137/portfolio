
import React from 'react';
import './EducationSection.css';

const EducationSection = () => (
    <section id="Education" className="timeline-section">
        <h2>Education</h2>
        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>Syracuse University</h3>
                    <p>M.S. in Computer Science (2024 - Present)</p>
                    <p>Courses: Algorithms, Machine Learning, Data Mining, Formal Verification, OS</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>MVP's KBTCOE, SPPU</h3>
                    <p>B.E. in Computer Engineering (2020 - 2024)</p>
                    <p>Courses: Data Structures, OOP, DBMS, AI, Cloud Computing</p>
                </div>
            </div>
        </div>
    </section>
);

export default EducationSection;
