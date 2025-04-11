import React from 'react' ;

export default function AllDetails(props) {
    return(
        <section>
            {/*TODO : étoiles pour la note*/}
            <img src="{props.img}" alt="image de l'artisan" />
            <div>{props.note}</div>
            <p>{props.specialite}</p>
            <p>{props.ville}</p>
            <p>{props.apropos}</p>
        </section>
    ) ;
} ;