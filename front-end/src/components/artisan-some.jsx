import React from 'react' ;

export default function SomeDetails(props) {
    return(
        <section className="some bg-light">
            {/*TODO : étoiles pour la note*/}
            {/*Titre qui s'affichera pour la page liste-artisans*/}
            <h2>{props.titleList}</h2>
            {/*Titre qui s'affichera pour les artisans du mois car le h2 est déjà utilisé sur la page d'accueil*/}
            <h3>{props.titleMonth}</h3>
            <div className="note">{props.note}</div>
            <div className="d-flex justify-content-around">
                <p>{props.specialite}</p>
                <p className="fst-italic">{props.ville}</p>
            </div>
        </section>
    ) ;
} ;