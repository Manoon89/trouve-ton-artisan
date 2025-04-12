import React from 'react' ;

export default function SomeDetails(props) {
    return(
        <section>
            {/*TODO : étoiles pour la note*/}
            {/*Titre qui s'affichera pour la page liste-artisans*/}
            <h2>{props.titleList}</h2>
            {/*Titre qui s'affichera pour les artisans du mois car le h2 est déjà utilisé sur la page d'accueil*/}
            <h3>{props.titleMonth}</h3>
            <div>{props.note}</div>
            <p>{props.specialite}</p>
            <p>{props.ville}</p>
        </section>
    ) ;
} ;