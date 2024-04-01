import React from "react";
import Faq from "react-faq-component";
import SideMenuFAQ from "../SideMenuFAQ";

export default function FAQ() {
  

    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Comment puis-je regarder des films et des séries sur ce site ?",
                content: `Pour regarder des films et des séries sur notre site, il vous suffit de vous inscrire gratuitement et de parcourir notre catalogue.`,
            },
            {
                title: "Y a-t-il des frais cachés associés à l'utilisation de ce service?",
                content:
                    "Non, notre service est totalement gratuit. Il n'y a aucun frais caché.",
            },
            {
                title: "Comment puis-je rechercher des films ou des séries spécifiques?",
                content: "Vous pouvez utiliser notre barre de recherche située en haut de la page d'accueil pour rechercher des films ou des séries par titre, acteur, réalisateur, genre, ou toute autre information pertinente.",
            },
            {
                title: "Puis-je regarder du contenu sur plusieurs appareils en même temps?",
                content: "Pour regarder des films et des séries sur notre site, il vous suffit de vous inscrire gratuitement et de parcourir notre catalogue.",
            },
            {
                title: "Comment puis-je signaler un problème avec la lecture d'un film ou d'une série?",
                content: "Si vous rencontrez des problèmes de lecture, tels que des interruptions ou des erreurs de chargement, veuillez nous contacter via notre page de support.",
            },
            {
                title:"Est-ce que vous proposez des sous-titres pour les films et les séries?",
                content: "Oui, nous proposons des sous-titres dans plusieurs langues pour la plupart de notre contenu.",

            },
            {
                title: "Est-ce que je peux télécharger des films et des séries pour les regarder hors ligne?",
                content: "Oui, sur notre site, vous pouvez télécharger certains contenus pour les regarder ultérieurement hors ligne.",
            },
        ],
    };

    const styles = {
        titleTextColor: "blue",
        rowTitleColor: "blue",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className="fa-container">
            <div className="side">
                <SideMenuFAQ />
            </div>
            <div className="main-content">
                <Faq data={data} styles={styles} config={config} />
            </div>
        </div>
    );
}
