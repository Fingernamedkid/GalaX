import React from "react";
import "./OpenHome.css";
import Footer from "../components/Footer";
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
                    <Footer />
                </footer>

            </div>
    );
}
export default OpenHome;