function Footer() {
  return (
    <footer className="footer">

      {/* Copyright */}
      <p>
        &copy; {new Date().getFullYear()} <span>Syed Haris Hussain</span>. All rights reserved.
      </p>

      {/* Footer Links */}
      <div className="footer-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        <a href="mailto:syedharishussainshah17@gmail.com">
          Email
        </a>
      </div>

    </footer>
  );
}

export default Footer;