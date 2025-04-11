import React from 'react' ;

export default function MonthArtisan(props) {
    return(
        <section>
            <h3>{props.title}</h3>
            {/*TODO : étoiles pour la note*/}
            <div>{props.note}</div>
            <p>{props.specialite}</p>
            <p>{props.ville}</p>
        </section>
    ) ;
} ;