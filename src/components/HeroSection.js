
import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" style={styles.hero}>
            <h1>Welcome to My Portfolio</h1>
            <p>I am Harshvardhan Khoje, a Computer Science graduate student with experience in</p>
            <p><strong>Machine Learning, Software Development, and Web Development.</strong></p>
            <p>I build practical solutions that optimize workflows and solve real-world problems.</p>
        </section>
    );
};

const styles = {
    hero: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a2e',
        color: '#fff',
        textAlign: 'center'
    }
};

export default HeroSection;
