import React from "react";
import { NavLink } from "react-router-dom";

export default function SideMenu(){
    return(
        <div className="side-menu">
            <NavLink to="/home"><i className="fa-solid fa-arrow-left" id="arrow-btn"
            style={{fontSize:"30px", marginBottom:"20px", color:"white"}}
            ></i></NavLink>
            <h1 id="categorie">Catégories</h1>
            <section className="border">
                {/* Section Border */}
            </section>

            {/* TODO : Mettre les éléments de la sidebar en fonction des catégories */}
        </div>
    )
}
