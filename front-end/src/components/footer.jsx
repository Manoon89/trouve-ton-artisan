import React from 'react' ;
import logo from '../assets/images/logo.png' ;

export default function Footer() {
    return (
        <footer>
                {/* on met une balise div car il n'y a pas de titre pour cette section*/}
                <div>
                    <img src={logo} alt="logo du site trouve ton artisan" width="30%"/>
                </div>

                <section>
                    <h3>Adresse et contact :</h3>
                    <address>
                        <p>Lyon</p>
                        <p>101 cours Charlemagne</p>
                        <p>CS 20033</p>
                        <p>69269 LYON CEDEX 02</p>
                        <p>France</p>
                        <a href="tel:+33(0)426734000">+33 (0)4 26 73 40 00</a>
                    </address>
                </section>

                <div>
                    <a href="#">Mentions légales</a>                
                    <a href="#">Données personnelles</a>
                    <a href="#">Accessibilité</a>
                    <a href="#">Politique des cookies</a>
                    <a href="#">Gestion des cookies</a>
                </div>
        </footer>
    )
}