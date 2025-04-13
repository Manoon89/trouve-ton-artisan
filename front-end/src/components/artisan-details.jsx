import React from 'react' ;
import Map from "../assets/icons/map-marker.png";

export default function AllDetails(props) {
    return(
        <section>
            {/*TODO : étoiles pour la note*/}
            <img src="{props.img}" alt="image de l'artisan" />
            <div>{props.note}</div>
            <p>{props.specialite}</p>
            <p>
                <img src={Map} alt="icône de carte" className="icon" />
                {props.ville}
            </p>
            <p>{props.apropos}</p>
        </section>
    ) ;
} ;