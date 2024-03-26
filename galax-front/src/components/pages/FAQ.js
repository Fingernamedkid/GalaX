import React, {useState} from "react";
import SideMenuFAQ from "../SideMenuFAQ";


export default function FAQ() {
  
   const [afficheRep,  setAfficheRep] = useState(false);
    
   const handleClick = () =>{setAfficheRep(!afficheRep)};

  
    return (
        <div className="fa-container bckg-faq">

            <div className="side">
                <SideMenuFAQ />
            </div>
            
           
       

       <div className="main-content">
            <section className="faq-active">
                    <h3 className="faq-titre"> Comment puis-je regarder des films et des séries sur ce site ?</h3>
                    <br></br>
                    <p className="faq-reponse">{afficheRep ? "Pour regarder des films et des séries sur notre site, il vous suffit de vous inscrire gratuitement et de parcourir notre catalogue.": " "} </p>
                    <button className="faq-toggle" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre"> Y a-t-il des frais cachés associés à l'utilisation de ce service ?</h3>
                    <br></br>
                    <p className="faq-reponse">{afficheRep ? "Non, notre service est totalement gratuit. Il n'y a aucun frais caché.": " "} </p>
                    <button className="faq-toggle" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre"> Comment puis-je rechercher des films ou des séries spécifiques ?</h3>
                    <br></br>
                    <p className="faq-reponse">{afficheRep ? "Vous pouvez utiliser notre barre de recherche située en haut de la page d'accueil pour rechercher des films ou des séries par titre, acteur, réalisateur, genre, ou toute autre information pertinente." : " "} </p>
                    <button className="faq-toggle" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Puis-je regarder du contenu sur plusieurs appareils en même temps ?</h3>
                    <br></br>
                    <p className="faq-reponse">{afficheRep ? "Pour regarder des films et des séries sur notre site, il vous suffit de vous inscrire gratuitement et de parcourir notre catalogue." : " "} </p>
                    <button className="faq-toggle" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Comment puis-je signaler un problème avec la lecture d'un film ou d'une série ?</h3>
                    <br></br>
                    <p className="faq-reponse">{afficheRep ? "Si vous rencontrez des problèmes de lecture, tels que des interruptions ou des erreurs de chargement, veuillez nous contacter via notre page de support." : " "}</p>
                    <button className="faq-toggle" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Est-ce que vous proposez des sous-titres pour les films et les séries ?</h3>
                    <br></br>
                    <p className="faq-reponse"> {afficheRep ? "Oui, nous proposons des sous-titres dans plusieurs langues pour la plupart de notre contenu." : " "}</p>
                    <button className="faq-toggle" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
                <section className="faq-active">
                    <h3 className="faq-titre">Est-ce que je peux télécharger des films et des séries pour les regarder hors ligne ?</h3>
                    <br></br>
                    <p className="faq-reponse">{afficheRep ? "Oui, sur notre site, vous pouvez télécharger certains contenus pour les regarder ultérieurement hors ligne." : " "}</p>
                    <button className="faq-toggle" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </button>
                </section>
                
            </div>


       </div>

    );
}
