import React from 'react' ;
import Stars from "../components/stars";

export default function Card(props) {
    return(
                <section className="card">
                    <h2 className="card-header">{props.titleList}</h2>
                    <div className="card-body">
                        <Stars note={props.note} />
                        <span className="note">{props.note}</span>
                        <div className="d-flex justify-content-around">
                            <p>{props.specialite}</p>
                            <p className="fst-italic">{props.ville}</p>
                        </div>
                    </div>
                </section>
    ) ;
} ;