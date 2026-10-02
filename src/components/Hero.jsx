import { Link } from "react-router-dom";
function Hero() {

    return (
        <section className="hero">

            {/* Left Section */}
            <div className="hero-content">

                <span className="hero-tag">👋 Welcome to my portfolio</span>

                <h1>
                    Hi, I'm <span>Syed Haris Hussain</span>
                </h1>

                <h2>
                    <span>Agentic AI</span> and Intelligent <span>Automation</span> Enthusiast
                    &amp; <span>MERN Stack</span> Developer
                </h2>

                <p>
                    Full-stack MERN developer exploring agentic AI and automation.
                </p>

                <div className="hero-stack">
                    <span>MongoDB</span>
                    <span>Express</span>
                    <span>React</span>
                    <span>Node.js</span>
                </div>

                <div className="hero-buttons">
                    <Link to="/projects" className="btn">
                        View Projects
                    </Link>

                    <Link to="/contacts" className="btn btn-secondary">
                        Get In Touch
                    </Link>
                </div>

            </div>

            {/* Right Section */}
            <div className="hero-image">
                <div className="image-wrapper">
                    <img
                        src="/profile.jpeg"
                        alt="Syed Haris Hussain"
                        className="image"
                    />
                </div>
            </div>

        </section>
    );
}

export default Hero;