import React from "react";
import "./cssdiectory/LogIn.css";


function LogIn() {
    return(
        <div>
            <header>

                <h1 className="headerL">Log In</h1>



            </header>

            <form className={"form2"} action="" method="post">

                    <div className="case">
                        <label htmlFor="email"><span className="color_bleu">E</span>mail: <span className="color_bleu">* </span></label>
                        <input type="email" name="email" />
                    </div>

                    <div className="case">
                        <label htmlFor="password"><span  className="color_bleu">P</span>assword: <span  className="color_bleu">* </span></label>

                        <input type="password" name="password" />
                    </div>

                        <div className="submit">

                            <button type="submit" className="btn btn-outline-success">Connexion</button>
                        </div>

                <div className="linkpass">
                    <li><a  className="" href="/passRemove">Mot de Passe Oublier</a></li>

                </div>
                </form>

            <footer>
                <div className="social">  <i className="fa-brands fa-instagram"></i> </div>
                <div className="social">     <i className="fa-brands fa-facebook"></i> </div>

                <h2>Copyright</h2>
            </footer>



        </div>
);
}
export default LogIn;