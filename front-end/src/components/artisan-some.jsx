import React from 'react' ;
import Stars from "../components/stars";

export default function SomeDetails(props) {
    return(
        <section className="some bg-light">
            <h3>{props.titleMonth}</h3>
            <div>
                <Stars note={props.note} className="d-inline"/>
                <span className="note ms-4">{props.note}</span>
            </div>
            <div className="d-flex justify-content-around">
                <p>{props.specialite}</p>
                <p className="fst-italic">{props.ville}</p>
            </div>
        </section>
    ) ;
} ;