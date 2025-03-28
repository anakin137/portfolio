
import React, { useEffect, useRef } from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    const handleWheel = (e) => {
      if (el && el.contains(e.target)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section id="Skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-scroll-wrapper" ref={scrollRef}>
          <div className="skills-tile">
            <h3>Languages</h3>
            <ul>
              <li>C</li><li>C++</li><li>Python</li><li>R</li><li>Dart</li>
              <li>SQL (PostgreSQL)</li><li>Java</li><li>HTML</li><li>CSS</li>
              <li>React</li><li>Angular JS</li><li>Wordpress</li>
            </ul>
          </div>
          <div className="skills-tile">
            <h3>Databases</h3>
            <ul>
              <li>MySQL</li><li>MongoDB</li><li>PostgreSQL</li><li>Firebase</li><li>Amazon S3</li>
            </ul>
          </div>
          <div className="skills-tile">
            <h3>Machine Learning</h3>
            <ul>
              <li>NumPy</li><li>Pandas</li><li>Supervised / Unsupervised</li><li>NLP</li>
            </ul>
          </div>
          <div className="skills-tile">
            <h3>Cloud</h3>
            <ul>
              <li>AWS (EC2, S3)</li><li>Microsoft Azure</li>
            </ul>
          </div>
          <div className="skills-tile">
            <h3>Tools</h3>
            <ul>
              <li>Git</li><li>VS Code</li><li>Android Studio</li><li>Linux</li>
              <li>Flutter</li><li>Tableau</li><li>Figma</li><li>Jupyter Notebook</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
