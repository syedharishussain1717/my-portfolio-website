import { useState } from "react";
function Contact() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                subject,
                message
            })
        });

        const data = await response.json();

        alert(data.message);

        setEmail("");
        setSubject("");
        setMessage("");
    };
    return (

        <section className="contact">

            <h1>Contact Me</h1>
            <p className="contact-subtitle">
                Have a project or an idea in mind? Let's talk.
            </p>

            <div className="contact-container">

                {/* Form */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="7"
                            placeholder="Write your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <div className="form-buttons">
                            <button type="reset" className="btn-clear">
                                Clear Form
                            </button>
                            <button type="submit" className="btn-send">
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>

                {/* Info */}
                <div className="contact-info">

                    <h2>Let's Get In Touch</h2>

                    <p className="info-text">
                        Feel free to contact me for any questions,
                        opportunities, or collaboration.
                    </p>

                    <div className="info">

                        <a href="mailto:syedharishussainshah17@gmail.com" className="info-item">
                            <span className="info-icon">✉️</span>
                            <span className="info-detail">
                                <strong>Email</strong>
                                syedharishussainshah17@gmail.com
                            </span>
                        </a>

                        <a href="tel:+923004773570" className="info-item">
                            <span className="info-icon">📞</span>
                            <span className="info-detail">
                                <strong>Phone</strong>
                                +92 300 4773570
                            </span>
                        </a>

                        <a href="#" target="_blank" rel="noreferrer" className="info-item">
                            <span className="info-icon">💼</span>
                            <span className="info-detail">
                                <strong>LinkedIn</strong>
                                LinkedIn Profile
                            </span>
                        </a>

                        <a href="#" target="_blank" rel="noreferrer" className="info-item">
                            <span className="info-icon">💻</span>
                            <span className="info-detail">
                                <strong>GitHub</strong>
                                GitHub Profile
                            </span>
                        </a>

                        <a href="#" target="_blank" rel="noreferrer" className="info-item">
                            <span className="info-icon">📸</span>
                            <span className="info-detail">
                                <strong>Instagram</strong>
                                Instagram Profile
                            </span>
                        </a>

                    </div>
                </div>

            </div>
        </section>

    );

}

export default Contact;