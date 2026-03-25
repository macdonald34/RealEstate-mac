import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Your trusted partner in finding the perfect home.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#properties">Properties</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: macmovesapartments.com</p>
                    <p>Phone: (555) 123-4567</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#facebook">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Real Estate. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;