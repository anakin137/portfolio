
import React from 'react';
import SkillBox from './SkillBox';
import './SkillsSection.css';

const SkillsSection = () => {
    const skills = {
        "Languages": ["C++", "Python", "SQL", "Java", "HTML", "CSS", "JavaScript", "Haskell"],
        "Frameworks & Tools": ["AngularJS", "WordPress", "Docker", "Azure Data Studio", "MongoDB", "Jupyter Notebook", "Figma", "Tableau", "Power BI"]
    };

    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {Object.keys(skills).map(category => (
                    <SkillBox key={category} category={category} skills={skills[category]} />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
