import React from "react";
import "./cssdiectory/OpenHome.css";
function OpenHome() {
    return(
        <div className="backG">

            <div className="stars">
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>
                <span className="sstar"></span>

            </div>
            <header >
                <nav className="navHome">

                    <ul className="ull">
                        <li><a  className="btn btn-outline-light" href="/log">Connexion</a></li>
                        <li><a className="btn btn-outline-info" href="/sign">Inscription</a></li>
                    </ul>
                </nav>
            </header>

            <div className="welcome">

                <h1 className="tex"> Welcome to GalaX</h1>

            </div>


            <footer>
                <div className="social">  <i className="fa-brands fa-instagram"></i> </div>
                <div className="social">     <i className="fa-brands fa-facebook"></i> </div>

                <h2>Copyright</h2>
            </footer>



</div>

    );
}
export default OpenHome;