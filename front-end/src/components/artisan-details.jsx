import React from 'react' ;

export default function AllDetails(props) {
    return(
        <section>
            <h2>{props.title}</h2>
            {/*TODO : étoiles pour la note*/}
            <div>{props.note}</div>
            <p>{props.specialite}</p>
            <p>{props.ville}</p>
        </section>
    ) ;
} ;