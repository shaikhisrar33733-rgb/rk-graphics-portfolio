import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="navbar-logo">
                <img src={logo} alt="RK Graphics" />
            </div>

            {/* Navigation */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                <li>
                    <a href="#home" className="active" onClick={closeMenu}>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>
                </li>

                <li>
                    <a href="#services" onClick={closeMenu}>
                        Services
                    </a>
                </li>
<li>
    <a href="#our-work" onClick={closeMenu}>
        Our Works
    </a>
</li>

                <li>
                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </li>

            </ul>

            {/* Get In Touch */}
            <a
                href="#contact"
                className="get-touch"
                onClick={closeMenu}
            >
                <span>Get In Touch</span>

                <div className="arrow">
                    ↗
                </div>
            </a>

            {/* Mobile Menu */}
            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                ☰
            </button>

        </nav>
    );
};

export default Navbar;