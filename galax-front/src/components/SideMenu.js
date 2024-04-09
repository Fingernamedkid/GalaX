import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function SideMenu({list, setGenre, modeGenre}){
    const listgenre = list
    const mode = modeGenre
    console.log(list)
    
    return(
        <div className="side-menu">
            <NavLink to="/home"><i className="fa-solid fa-arrow-left" id="arrow-btn"
            style={{fontSize:"30px", marginBottom:"20px", color:"white"}}
            ></i></NavLink>
            <h1 id="categorie">Catégories</h1>
            <section className="border">
                {/* Section Border */}
            </section>
            <tr>

            {listgenre.map((genre) => (
                <li>

                <button onClick={setGenre([!mode[0], genre.name])}>

                    {genre.name}
                </button>
                </li>
            ))}
             </tr>
        </div>
    )
}
