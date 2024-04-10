import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export default function SideMenuFAQ(){

    const [inputValue, setInputValue] = useState("");

    const handleChange=() =>{
        setInputValue("");
//hi

    }
    return(
        <div className="sidemenu">
            <NavLink to="/home"><i className="fa-solid fa-arrow-left" id="arrow-btn"
            style={{fontSize:"30px", marginBottom:"20px", color:"white"}}
            ></i></NavLink>
            <h1 id="categorie">Questions plus fréquentes</h1>
            <section className="border">
                {/* Section Border */}
            </section>
            <br></br>
            <section className="notfoundquestions">
                <p style={{color:"white", fontSize:"20px"}}>Ces questions-réponses ne vous conviennent pas? Veuillez saisir votre question ci-dessous.</p>
                <br></br>
                <input type="text" style={{padding:"10px",width:"250px", border:"5px solid purple", borderRadius:"50px"}}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                
                <br></br>
                <button style={{margin:"20px", color:"greenyellow"}} 
                className="send-msg"
                onClick={handleChange}
                >Send</button>

            </section>
        </div>
    )
}