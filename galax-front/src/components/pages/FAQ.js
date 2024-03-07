import React from "react";
import SideMenuFAQ from "../SideMenuFAQ";

export default function FAQ() {
    return (
        <div id="fa-container">
            <div id="side">
                <SideMenuFAQ />
            </div>
            {/* Contenu principal à droite */}
            <div id="main-content">
                
                
                {/* Vos sections FAQ ici */}
                <section className="faq-active">
                    <h3 className="faq-titre">Question 1</h3>
                    <p className="faq-reponse">Reponse 1</p>
                    <button className="faq-toggle">
                        <i className="fas fa-plus"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </section>

                {/* Autres sections FAQ ici */}

            </div>
        </div>
    );
}
