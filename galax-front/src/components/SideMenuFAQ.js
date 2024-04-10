import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import MsgValidation from "./MsgValidation";



export default function SideMenuFAQ(){

    const [affichage, setAffichage] = useState(true);
    const [message, setMessage] = useState('');

    function handleSendMessage(event){
        setMessage(event.target.value)
    }



    function HandleClick(event) {

        event.preventDefault();

        setAffichage(false)

    }




    return(
        <div className="sidemenu">
            <NavLink to="/home"><i className="fa-solid fa-arrow-left" id="arrow-btn"
                                   style={{fontSize:"30px", marginBottom:"20px", color:"white"}}></i>
            </NavLink>
            {
                affichage ?
                    (
                        <>
                            <h1 id="categorie">Ces questions-réponses ne vous conviennent pas? Veuillez svp saisir votre question ci-dessous. </h1>

                            <form>
                                <label>
                                    <input
                                        type="text"
                                        placeholder="ex:message"
                                        name="message"
                                        onChange={handleSendMessage}

                                        style={{padding:"10px", width:"250px", border:"5px solix purple", borderRadius:"50px", marginTop:"150px"}}
                                    />

                                </label>
                                <br/>
                                <button onClick={HandleClick} className="send-msg" style={{padding:"5px", borderRadius:"10px", color:"white"}}>Submit</button>

                            </form>
                        </>
                    ) : (

                        <MsgValidation
                            message={message}
                        />
                    )
            }
        </div>
    )
}