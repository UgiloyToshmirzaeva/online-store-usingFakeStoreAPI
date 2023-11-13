import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <h2 className="logo">🛍</h2>
                </div>
                <div className="footer__links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer__social">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
