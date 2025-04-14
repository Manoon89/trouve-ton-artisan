import React from 'react' ;

export default function Card(props) {
    return(
                <section className="card">
                    {/*TODO : étoiles pour la note*/}
                    <h2 className="card-header">{props.titleList}</h2>
                    <div className="card-body">
                        <div className="note">{props.note}</div>
                        <div className="d-flex justify-content-around">
                            <p>{props.specialite}</p>
                            <p className="fst-italic">{props.ville}</p>
                        </div>
                    </div>
                </section>
    ) ;
} ;