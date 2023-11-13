import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <h2 className="logo">🛍</h2>
                </div>
                <div className="footer__links">
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/`}>Shop</Link></li>
                        <li><Link to={`/product`}>Products</Link></li>
                    </ul>
                </div>
                <div className="footer__social">
                    <ul>
                        <li><a href="#">📞</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
