import { Link } from "react-router-dom";
function CTA() {
    return (

        <section className="cta">

            <h2>Let's Build Something <span>Together</span></h2>

            <p>Have a project or opportunity in mind?</p>

            <Link to="/contacts" className="btn cta-btn">
                Get In Touch <span className="cta-arrow">→</span>
            </Link>

        </section>
    );
}

export default CTA;