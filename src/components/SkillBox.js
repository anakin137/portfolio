
import React from 'react';

const SkillBox = ({ category, skills }) => (
    <div className="skill-box">
        <h3>{category}</h3>
        <ul>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
    </div>
);

export default SkillBox;
