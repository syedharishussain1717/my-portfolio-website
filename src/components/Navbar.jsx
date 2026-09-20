import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar">

            <div className="logo">
                Syed Haris Hussain
            </div>

            <div className="nav-links">

                <NavLink to="/">Home</NavLink>

                <NavLink to="/about">About Me</NavLink>

                <NavLink to="/projects">Projects</NavLink>

                <NavLink to="/contacts">Contact Me</NavLink>

            </div>

        </nav>
    );

}

export default Navbar;