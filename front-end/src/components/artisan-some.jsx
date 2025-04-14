import React from 'react' ;

export default function SomeDetails(props) {
    return(
        <section className="some bg-light">
            {/*TODO : étoiles pour la note*/}
            <h3>{props.titleMonth}</h3>
            <div className="note">{props.note}</div>
            <div className="d-flex justify-content-around">
                <p>{props.specialite}</p>
                <p className="fst-italic">{props.ville}</p>
            </div>
        </section>
    ) ;
} ;