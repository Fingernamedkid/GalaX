import React from "react";
import "./homeconnectcss/LogIn.css"


function LogIn() {
    return(
        <div>
            <form action="" method="post">
                <h1 className="header">Log In</h1>

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
                </form>

                    <footer>
                        <div className="social">  <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i> </div>

                        <h2>Copyright</h2>
                    </footer>


        </div>
);
}
export default LogIn;