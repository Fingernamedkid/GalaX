import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return(
        <div className="footer">
            <section className="bas-page">
                <NavLink to="/faq"><h1 className="info">FAQs</h1></NavLink>
                <NavLink to="/"><h1 className="info">Home</h1></NavLink>
                <NavLink to="/about"><h1 className="info">About</h1></NavLink>
            </section>
            <section className="border">
                {/* Section border */}
            </section>
            <section className="contact-us">
                <p style={{color:"white"}} className="copyright">Lorsen - Rachel et Tri©Copyright - 2024 GalaX</p>
            </section>
           

        </div>
    )
}

export default Footer;