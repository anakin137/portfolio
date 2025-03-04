
import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '15px',
        backgroundColor: '#333',
        color: 'white',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000
    }
};

export default Navbar;
