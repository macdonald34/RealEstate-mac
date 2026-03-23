import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">RealEstate</a>
                </div>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a href="/" className="nav-link">Home</a>
                    <a href="/listings" className="nav-link">Listings</a>
                    <a href="/about" className="nav-link">About</a>
                    <a href="/contact" className="nav-link">Contact</a>
                    <a href="/login" className="nav-link nav-link-btn">Sign In</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;