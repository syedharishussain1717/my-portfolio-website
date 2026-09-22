import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  
  // "isOpen" remembers whether the menu is open (true) or closed (false).
  const [isOpen, setIsOpen] = useState(false);

  // This runs when the button is clicked (replaces menuBtn.addEventListener)
  function toggleMenu() {
    setIsOpen(!isOpen); // flip true <-> false
  }

  // This runs when a nav link is clicked (replaces the links.forEach loop)
  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">

      <div className="logo">
        Syed Haris Hussain
      </div>

      {/* we just check isOpen and add it directly in the className.*/}
      <button
        className={isOpen ? "menu-btn active" : "menu-btn"}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Same idea here — "open" class is added based on isOpen */}
      <div className={isOpen ? "nav-links open" : "nav-links"}>

        <NavLink to="/" onClick={closeMenu}>Home</NavLink>

        <NavLink to="/about" onClick={closeMenu}>About Me</NavLink>

        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>

        <NavLink to="/contacts" onClick={closeMenu}>Contact Me</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;