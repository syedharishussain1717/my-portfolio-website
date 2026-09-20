import { Link } from "react-router-dom";
function Hero() {

    return (
        <section className="hero">

            {/* Left Section */}
            <div className="hero-content">

                <h1>
                    Hi, I'm <span>Syed Haris Hussain</span>
                </h1>

                <h2>Computer Science Enthusiast & Web Developer</h2>

                <p>
                    I'm passionate about building websites, exploring new technologies,
                    and continuously improving my skills. I enjoy turning ideas into
                    simple and useful digital experiences.
                </p>

                <div className="hero-buttons">

                    <Link to="/projects" className="btn">
                        View Projects
                    </Link>

                    <Link to="/contacts" className="btn">
                        Get In Touch
                    </Link>

                </div>

            </div>

            {/* Right Section */}
            <div className="hero-image">

                <img
                    src="/profile.jpeg"
                    alt="Syed Haris Hussain"
                    className="image"
                />

            </div>

        </section>
    );
}

export default Hero;