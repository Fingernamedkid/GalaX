import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
   
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="menu">
            <section className="section-menu">
                

                <h1 style={{color:"white", fontSize:"20px", textAlign:"center"}} className="Welcome">Welcome to your GalaX account "[username] !"</h1>
                <br></br>
                <button className="logout" title="Déconnexion"><i className="fa-solid fa-power-off"></i></button>

                <button className="search" id="rechercher" title="Rechercher" onClick={() => setShowSearch(!showSearch)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                {showSearch && <input type="text" className="bar"  placeholder="Rechercher"/>}

                <NavLink to="/user"><button className="gear" title="Voir Profil"><i className="fa-solid fa-gear"></i></button></NavLink>
                
                <ul className="list">
                    <NavLink to="/films"><li id="link">Films</li></NavLink>
                    <NavLink to="/series"><li id="link">Séries</li></NavLink>
                </ul>
           </section>
        </div>
    )
}

export default Menu;
