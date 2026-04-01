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
                    <a href="/">Mac_Moves Apartemnts</a>
                </div>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <a href="/" className="nav-link ">Home</a>
                    <a href="/listings" className="nav-link ">Listings</a>
                    <a href="/about" className="nav-link ">About</a>
                    <a href="/contact" className="nav-link nav-link-btn">Contact</a>
                    <a href="/signin" className="nav-link nav-link-btn">SignIn</a>
                    <a href="/signup" className="nav-link nav-link-btn">SignUp</a>
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