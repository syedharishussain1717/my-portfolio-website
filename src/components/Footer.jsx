function Footer() {
  return (
    <footer className="footer">

      {/* Copyright */}
      <p>&copy; Syed Haris Hussain</p>

      {/* Footer Links */}
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a href="mailto:youremail@example.com">
          Email
        </a>
      </div>

    </footer>
  );
}

export default Footer;