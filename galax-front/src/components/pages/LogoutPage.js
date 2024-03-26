import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage(){

    const  navigate = useNavigate();

    return(
        <div className="logout-container">
            <section className="logout-stn">
            <h1 className="logout-msg" style={{marginLeft:"40px", color:"white", fontSize:"20px"}}>Êtes-vous sûr de vouloir vous déconnecter?</h1>
            <br></br>
            <button className="log-btn1" onClick={() => navigate("/")}>Oui</button>
            <button className="log-btn2" onClick={() => navigate("/home")}>Non</button>
            </section>
        </div>
    )
}