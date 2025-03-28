
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/profile.jpg";
import ContactForm from "./components/ContactForm";
import AnimatedBlob from "./components/AnimatedBlob";
import InteractiveCursor from "./components/InteractiveCursor";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import "./App.css";
import ProjectsSection from "./components/ProjectsSection";

const sections = ["Home", "Projects", "Skills", "Experience", "Education", "Contact"];

function App() {
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            const sectionElements = document.querySelectorAll("#Home, #Projects, #Skills, #Experience, #Education, #Contact");
            sectionElements.forEach((section) => {
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveSection(section.getAttribute("id"));
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <InteractiveCursor />
            <nav className="transparent-nav">
                {sections.map((section) => (
                    <button
                        key={section}
                        className={activeSection === section ? "active" : ""}
                        onClick={() => document.getElementById(section).scrollIntoView({ behavior: "smooth" })}
                    >
                        {section}
                    </button>
                ))}
            </nav>

            <section id="Home">
                <div className="hero">
                    <AnimatedBlob />
                    <motion.img
                        src={profilePic}
                        alt="Profile"
                        className="profile-pic"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    />
                    <h1>Hello, I'm Harshvardhan Khoje</h1>
                    <p>A passionate Computer Science Master's Student at Syracuse University.</p>
                    <p>Expertise in Machine Learning, Software Development, and Web Development.</p>
                </div>
            </section>

            

            

            <section id="Experience">
                <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
            </section>

            <section id="Education">
                <EducationSection />
            </section>

            <section id="Contact">
                <ContactForm />
            </section>
        
      






</div>
    );
}

export default App;
