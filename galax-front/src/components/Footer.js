import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return(
        <div id="footer">
            <section id="bas-page">
                <NavLink to="/faq"><h1 id="info">FAQs</h1></NavLink>
                <NavLink to="/"><h1 id="info">Home</h1></NavLink>
                <NavLink to="/about"><h1 id="info">About</h1></NavLink>
            </section>
            <section id="border">
            </section>
            <section id="contact-us">
                <p style={{color:"white"}} id="copyright">Lorsen - Rachel et Tri©Copyright - 2024 GalaX</p>
            </section>
    
        </div>
    )
}

export default Footer;