import React from "react";
import "./homeconnectcss/OpenHome.css"
function OpenHome() {
    return(
        <div>

            <header >
                <nav className="navHome">

                    <ul className="ull">
                        <li><a  className="btn btn-outline-light" href="/log">Connexion</a></li>
                        <li><a className="btn btn-outline-info" href="sign">Inscription</a></li>
                    </ul>
                </nav>
            </header>

            <div className="welcome">

                <h1> Welcome to GalaX</h1>
            </div>

                <footer>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <h1>Copyright</h1>
                </footer>

            </div>
    );
}
export default OpenHome;