import React from "react";
import { NavLink } from "react-router-dom";

export default function SideMenuFAQ(){
    return(
        <div className="sidemenu">
            <NavLink to="/"><i className="fa-solid fa-arrow-left" id="arrow-btn"
            style={{fontSize:"30px", marginBottom:"20px", color:"white"}}
            ></i></NavLink>
            <h1 id="categorie">Questions plus fréquentes</h1>
            <section className="border">
                {/* Section Border */}
            </section>
        </div>
    )
}