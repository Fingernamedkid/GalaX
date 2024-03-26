import React from "react";
import img from "../img/profil.png";

export default function User() {
    return (
        <div className="pageUser">
            <section className="profil">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={img} alt="" className="img1" />
                    <div style={{width:"400px", marginLeft:"100px" }}>
                    <h1 className="informations" style={{ marginTop: "20px", textAlign: "center" }}>

                    <p style={{ borderBottom: "1px solid black", fontSize:"20px" }}>Nom de l'utilisateur:</p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaq"<br/><br/>
                    <p style={{ borderBottom: "1px solid black", fontSize:"20px" }}>Informations personnelles:</p>
                    <p style={{ borderBottom: "1px solid black", fontSize:"15px"}}>Adresse Domicile:</p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptat <br /><br/>
                    <p style={{ borderBottom: "1px solid black", fontSize:"15px" }}>Code Postal:</p>
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et <br /><br/>
                    <p style={{ borderBottom: "1px solid black", fontSize:"15px" }}>Numéro de carte:</p>
                    **** **** **** ****<br /><br/>
                    <p style={{ borderBottom: "1px solid black", fontSize:"15px" }}>Date d'expiration :</p>
                    **/**/****
                    </h1>

                        
                    </div>
                </div>
            </section>
        </div>
    )
}



