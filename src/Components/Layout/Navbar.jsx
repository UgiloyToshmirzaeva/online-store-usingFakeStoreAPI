import React from "react";
import "./Navbar.css";

 const Navbar = () => {
    return(
        <nav className="navbar">
            <h2 className="logo">ONLINE STORE <mark>🛍</mark></h2>
            <div className="cart">🛒</div>
        </nav>
    )
} 

export default Navbar;