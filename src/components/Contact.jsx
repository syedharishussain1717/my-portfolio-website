import { useState } from "react";
function Contact() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch("https://syed-haris-hussain-shah-portfolio-backend.vercel.app/api/contact", {
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

            <div className="contact-container">

                <div className="contact-form">

                    <form onSubmit={handleSubmit}>

                        <label htmlFor="email">
                            Your Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="subject">
                            Subject
                        </label>

                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />

                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            rows="7"
                            placeholder="Write your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <div className="form-buttons">

                            <button type="reset">
                                Clear Form
                            </button>

                            <button type="submit">
                                Send Message
                            </button>

                        </div>

                    </form>

                </div>
                <div className="contact-info">

                    <div className="contact-info">

                        <h2>Let's Get In Touch</h2>

                        <p>
                            Feel free to contact me for any questions,
                            opportunities, or collaboration.
                        </p>

                        <div className="info">

                            <p>
                                <strong>Email:</strong>
                                syedharishussainshah17@gmail.com
                            </p>

                            <p>
                                <strong>Phone:</strong>
                                +92 300 4773570
                            </p>

                            <p>
                                <strong>LinkedIn:</strong>
                                <a href="#">LinkedIn Profile</a>
                            </p>

                            <p>
                                <strong>GitHub:</strong>
                                <a href="https://github.com/syedharishussain1717/WEB-MERN-Projects-.git" target="_blank">GitHub
                                    Profile</a>
                            </p>

                            <p>
                                <strong>Instagram:</strong>
                                <a href="#">Instagram Profile</a>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;