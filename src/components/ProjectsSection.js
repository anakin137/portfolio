
import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section id="Projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card" data-aos="fade-up">
          <h3>AI Image Caption Generator</h3>
          <p>An app that generates natural language captions for images using deep learning.</p>
        </div>
        <div className="project-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Resume Parser using NLP</h3>
          <p>A tool that extracts structured data from resumes using natural language processing.</p>
        </div>
        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Time Table Management using A.I</h3>
          <p>A system that automates academic timetable creation with AI-based scheduling.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
