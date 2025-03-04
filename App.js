import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaDatabase, FaDocker, FaJs, FaNodeJs } from "react-icons/fa";
import profilePic from "./assets/profile.jpg";
import projects from "./data/projects.json";
import ContactForm from "./components/ContactForm";
import AnimatedBlob from "./components/AnimatedBlob";
import InteractiveCursor from "./components/InteractiveCursor";
import "./App.css";

const sections = ["Home", "About", "Projects", "Skills", "Contact"];

function App() {
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            const sectionElements = document.querySelectorAll("section");
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
            <nav>
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

            <section id="Home" style={{ position: 'relative', overflow: 'hidden' }}>
                <AnimatedBlob />
                <img src={profilePic} alt="Profile" style={{ width: 150, height: 150, borderRadius: "50%", position: 'relative', zIndex: 1 }} />
                <h1 style={{ position: 'relative', zIndex: 1 }}>Harshvardhan Khoje</h1>
                <p style={{ position: 'relative', zIndex: 1 }}>MS in Computer Science | Software Engineer | AI & Web Developer</p>
            </section>

            <section id="About">
                <h2>About Me</h2>
                <p>Passionate software engineer specializing in AI, Web Development, and Cloud Computing.</p>
            </section>

            <section id="Projects">
                <h2>Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="Skills">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <FaReact style={{ color: "#61DBFB" }} title="React" />
                    <FaPython style={{ color: "#3776AB" }} title="Python" />
                    <FaJs style={{ color: "#F7DF1E" }} title="JavaScript" />
                    <FaNodeJs style={{ color: "#68A063" }} title="Node.js" />
                    <FaDatabase style={{ color: "#4DB33D" }} title="SQL & MongoDB" />
                    <FaDocker style={{ color: "#0db7ed" }} title="Docker" />
                </div>
            </section>

            <section id="Contact">
                <h2>Contact</h2>
                <ContactForm />
            </section>
        </div>
    );
}

export default App;