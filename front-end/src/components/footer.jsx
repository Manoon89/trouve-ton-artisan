import React from 'react' ;
import logo from '../assets/images/logo.png' ;
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="container-fluid">
                <div className="row text-center text-lg-start align-items-center">
                {/* on met une balise div car il n'y a pas de titre pour cette section*/}
                    <div className="col-lg-4">
                        <img src={logo} alt="logo du site trouve ton artisan" className="footerLogo"/>
                    </div>

                    <section className="col-lg-4">
                        <h3 className="text-decoration-underline fw-normal text-lg-end">Adresse et contact :</h3>
                        <address className="text-lg-end">
                            <p className="location">Lyon</p>
                            <p>101 cours Charlemagne<br/>
                            CS 20033<br/>
                            69269 LYON CEDEX 02<br/>
                            France<br/>
                            </p>
                            <a href="tel:+33(0)426734000">+33 (0)4 26 73 40 00</a>
                        </address>
                    </section>

                    <div className="col-lg-4 d-flex flex-column align-items-lg-end">
                        <Link to="/en-cours">Mentions légales</Link>
                        <Link to="/en-cours">Données personnelles</Link>
                        <Link to="/en-cours">Accessibilité</Link>
                        <Link to="/en-cours">Politique des cookies</Link>
                        <Link to="/en-cours">Gestion des cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}