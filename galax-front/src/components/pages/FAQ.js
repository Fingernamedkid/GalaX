import React, { useState } from "react";
import SideMenuFAQ from "../SideMenuFAQ";

export default function FAQ() {
    const [expanded, setExpanded] = useState({
        rep1: false,
        rep2: false,
        rep3: false,
        rep4: false,
        rep5: false,
        rep6 : false,
        rep7 : false
    });

    const toggleAnswer = (section) => {
        setExpanded({
            ...expanded,
            [section]: !expanded[section]
        });
    };

    return (
        <div className="fa-container">
            <div className="side">
                <SideMenuFAQ />
            </div>
           
            <div className="main-content">
               
                <section className="faq-active">
                    <h3 className="faq-titre"> Comment puis-je regarder des films et des séries sur ce site ?</h3>
                    <br></br>
                    {expanded.rep1 && <p className="faq-reponse">Pour regarder des films et des séries sur notre site, il vous suffit de vous inscrire gratuitement et de parcourir notre catalogue. </p>}
                    <button className="faq-toggle" onClick={() => toggleAnswer('rep1')}>
                        {expanded.rep1 ? <i className="fas fa-times"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre"> Y a-t-il des frais cachés associés à l'utilisation de ce service ?</h3>
                    <br></br>
                    {expanded.rep2 && <p className="faq-reponse">Non, notre service est totalement gratuit. Il n'y a aucun frais caché. </p>}
                    <button className="faq-toggle" onClick={() => toggleAnswer('rep2')}>
                        {expanded.rep2 ? <i className="fas fa-times"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre"> Comment puis-je rechercher des films ou des séries spécifiques ?</h3>
                    <br></br>
                    {expanded.rep3 && <p className="faq-reponse">Vous pouvez utiliser notre barre de recherche située en haut de la page d'accueil pour rechercher des films ou des séries par titre, acteur, réalisateur, genre, ou toute autre information pertinente. </p>}
                    <button className="faq-toggle" onClick={() => toggleAnswer('rep3')}>
                        {expanded.rep3 ? <i className="fas fa-times"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Puis-je regarder du contenu sur plusieurs appareils en même temps ?</h3>
                    <br></br>
                    {expanded.rep4 && <p className="faq-reponse">Pour regarder des films et des séries sur notre site, il vous suffit de vous inscrire gratuitement et de parcourir notre catalogue. </p>}
                    <button className="faq-toggle" onClick={() => toggleAnswer('rep4')}>
                        {expanded.rep4 ? <i className="fas fa-times"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Comment puis-je signaler un problème avec la lecture d'un film ou d'une série ?</h3>
                    <br></br>
                    {expanded.rep5 && <p className="faq-reponse">Si vous rencontrez des problèmes de lecture, tels que des interruptions ou des erreurs de chargement, veuillez nous contacter via notre page de support.  </p>}
                    <button className="faq-toggle" onClick={() => toggleAnswer('rep5')}>
                        {expanded.rep5 ? <i className="fas fa-times"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Est-ce que vous proposez des sous-titres pour les films et les séries ?</h3>
                    <br></br>
                    {expanded.rep6 && <p className="faq-reponse"> Oui, nous proposons des sous-titres dans plusieurs langues pour la plupart de notre contenu.</p>}
                    <button className="faq-toggle" onClick={() => toggleAnswer('rep6')}>
                        {expanded.rep6 ? <i className="fas fa-times"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Est-ce que je peux télécharger des films et des séries pour les regarder hors ligne ?</h3>
                    <br></br>
                    {expanded.rep7 && <p className="faq-reponse"> Oui, sur notre site, vous pouvez télécharger certains contenus pour les regarder ultérieurement hors ligne.</p>}
                    <button className="faq-toggle" onClick={() => toggleAnswer('rep7')}>
                        {expanded.rep7 ? <i className="fas fa-times"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </section>
                
            </div>
        </div>
    );
}
