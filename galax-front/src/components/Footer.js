import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return(
        <div className="footer">
            <section className="flex justify-center space-x-20 sm:space-x-4" style={{ marginLeft: "10%" }}>
                <NavLink to="/faq"><h1 className="info info-border">FAQs</h1></NavLink>
                <NavLink to="/home"><h1 className="info info-border">Home</h1></NavLink>
                <NavLink to="/about"><h1 className="info info-border">About</h1></NavLink>
            </section>
            <br></br>
            {/* <section className="contact-us">
                <p style={{color:"white"}}>Lorsen - Rachel et Tri©Copyright - 2024 GalaX</p>
            </section> */}
        </div>
    )
}

export default Footer;


