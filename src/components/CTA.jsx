import { Link } from "react-router-dom";
function CTA() {
    return (

        <section className="cta">

            <h2>Let's Build Something Together</h2>

            <p>Have a project or opportunity in mind?</p>

            <Link to="/contacts" className="btn">
                Get In Touch
            </Link>

        </section>
    );
}

export default CTA;