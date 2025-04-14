import React from 'react' ;
import Map from "../assets/icons/map-marker.png";
import Stars from "../components/stars";

export default function AllDetails(props) {
    return(
        <div className="col-lg-6 align-items-center">
            <section className="d-flex flex-column flex-lg-row text-center artisan">
                <div className="artisan-first me-lg-4 w-100">
                    <img src="{props.img}" alt="image de l'artisan" className="mb-4 d-block" />
                    <Stars note={props.note} />
                    <span className="note m-4">{props.note}</span>
                    <h2 className="specialite mt-4">{props.specialite}</h2>
                    <p className="fst-italic mt-4 mb-4">
                        <img src={Map} alt="icône de carte" className="icon" />
                        {props.ville}
                    </p>
                </div>
                <div className="artisan-second ms-lg-4 d-flex flex-column justify-content-evenly">
                    <p className="text-justify">{props.apropos}</p>
                    <p className="mt-4 text-secondary">{props.site}</p>
                </div>
            </section>
        </div>
    ) ;
} ;