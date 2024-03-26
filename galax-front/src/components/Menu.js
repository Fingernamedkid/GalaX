import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Menu() {
    const [showSearch, setShowSearch] = useState(false);

   
    const logout = useNavigate();
 
  

    return (
        <div className="menu">
            <section className="section-menu">
                <h1 style={{ color: "white", fontSize: "20px", textAlign: "center" }} className="Welcome">Welcome to your GalaX account "[username] !"</h1>
                <br></br>
                <button className="logout" title="Déconnexion" onClick={() => logout("/logout")}><i className="fa-solid fa-power-off"></i></button>

                <button className="search" id="rechercher" title="Rechercher" onClick={() => setShowSearch(!showSearch)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                {showSearch && <input type="text" className="bar" placeholder="Rechercher" />}

                <NavLink to="/user"><button className="gear" title="Voir Profil"><i className="fa-solid fa-gear"></i></button></NavLink>

               

                
                
                
            </section>

    <nav class="navbar navbar-expand-xl">
        <button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav"><span class="navbar-toggler-icon"></span></button>

        <div class="collapse navbar-collapse justify-content-between" id="nav">
            <ul class="navbar-nav">
            <NavLink to="/films"><li class="nav-item"><a class="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Films</a></li></NavLink>
            <NavLink to="/series"><li class="nav-item"><a class="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Series</a></li></NavLink>
            </ul>
        </div>
    </nav>      
        </div>
    );
}

export default Menu;
