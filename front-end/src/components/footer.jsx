import React from 'react' ;
import logo from '../assets/images/logo.png' ;

export default function Footer() {
    return (
        <footer className="bg-primary container-fluid p-4 m-auto mt-4">
            <div className="row d-flex w-md-75 m-auto">
                <section className="col-md-4">
                    <img src={logo} alt="logo du site trouve ton artisan" width="30%"/>
                </section>

                <section className="col-md-4">
                    <p>Adresse et contact :</p>
                    <address>
                        <p>Lyon</p>
                        <p>101 cours Charlemagne</p>
                        <p>CS 20033</p>
                        <p>69269 LYON CEDEX 02</p>
                        <p>France</p>
                        <a href="tel:+33(0)426734000">+33 (0)4 26 73 40 00</a>
                    </address>
                </section>

                <section className="col-md-4">
                    <a href="#">Mentions légales</a>                
                    <a href="#">Données personnelles</a>
                    <a href="#">Accessibilité</a>
                    <a href="#">Politique des cookies</a>
                    <a href="#">Gestion des cookies</a>
                </section>
            </div>
        </footer>
    )
}