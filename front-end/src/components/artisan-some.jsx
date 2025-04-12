import React from 'react' ;

export default function SomeDetails(props) {
    return(
        <section>
            {/*TODO : étoiles pour la note*/}
            <h2>{props.title-month}</h2>
            <h3>{props.title-list}</h3>
            <div>{props.note}</div>
            <p>{props.specialite}</p>
            <p>{props.ville}</p>
        </section>
    ) ;
} ;