import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `New Message from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
        window.location.href = `mailto:hkhoje@syr.edu?subject=${subject}&body=${body}`;
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <textarea name="message" placeholder="Message" onChange={handleChange} required />
            <button type="submit">Send Message</button>
            <p>Connect with me: <a href="https://www.linkedin.com/in/harsh-khoje/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </form>
    );
}

export default ContactForm;