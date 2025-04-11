import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import MonthArtisan from '../components/artisan-of-month';
import Bulb from '../assets/icons/bulb.svg' ;
import Arrow from '../assets/icons/arrow-right.svg' ;

export default function Accueil() {
    return (
        <div>
            <Header title="Trouve ton artisan !" />
            <main>
                <section>
                    {/* TODO : taille de l'image à paramétrer ailleurs*/}
                    <img src={Bulb} alt="icône de lampe" width="2%" />
                    <h2>Fonctionnement du site</h2>
                    <p>1 - Choisir la catégorie d'artisanat dans le menu</p>
                    <p>2 - Choisir un artisan</p>
                    <p>3 - Le contacter via le formulaire de contact</p>
                    <p>4 - Une réponse sera apportée sous 48h</p>
                </section>

                <section>
                    <img src={Arrow} alt="icône de lampe" width="2%" />
                    <h2>Les artisans du mois</h2>
                    <MonthArtisan title="TODO" note="TODO" specialite="TODO" ville="TODO" />
                    <MonthArtisan title="TODO" />
                    <MonthArtisan title="TODO" />
                </section>
            </main>
            <Footer />
        </div>
    ) ;
} ;