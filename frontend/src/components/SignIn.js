import React from "react";
import "./homeconnectcss/SignIn.css"


function SignIn() {
    return(
        <div>
            <form action="" method="post">
                <h1 class="header">Remplir le Formulaire</h1>

                <div className="case">
                    <label for="firstname"><span>F</span>irst <span>N</span>ame: <span>*</span></label>
                    <input type="text" name="firstName"/>
                </div>

                <div class="case">
                    <label for="lastname">Last <span>N</span>ame: <span>*</span></label>
                    <input type="text" name="lastName"/>

                </div>

                <div class="case">
                    <label for="DDN"><span>DOB</span>: <span>*</span></label>
                    <input type="date" name="Date de naissance"/>
                </div>


                <div class="case">
                    <label for="email"><span class="color_bleu">E</span>mail: <span class="color_bleu">*</span></label>
                    <input type="email" name="email"/>
                </div>

                <div class="case">
                    <label for="password"><span  className="color_bleu">P</span>assword: <span  className="color_bleu">*</span></label>
                    <input type="password" name="password" />
                </div>



                <div class="checkbox">
                    <input type="checkbox" name="color1" value="red" /> <span className="color_coche">Avis de Confidentialité</span>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="color2" value="green" /><span className="color_coche"> Termes d'utilisation</span>
                </div>

                <div className="submit">

                    <button type="submit" className="btn btn-outline-success">Soumettre</button>
                </div>

            </form>

            <footer>
                <div className="social">  <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i> </div>

                <h2>Copyright</h2>
            </footer>



        </div>


    );
}
export default SignIn;