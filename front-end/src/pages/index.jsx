import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import SomeDetails from "../components/artisan-some";
import Bulb from '../assets/icons/bulb.png' ;
import Arrow from '../assets/icons/arrow-right.png' ;

export default function Accueil() {
    
    // On crée un tableau vide qui sera complété lors de la récupération des données par l'API. 
       const [artisansMois, setArtisansMois] = useState([]) ;
    
    // On récupère avec fetch les informations de l'api ; on stocke la réponse en json puis les données complètent le tableau
    // défini ci-dessus. L'url est dynamique et dès lors que l'id change, les données changent également. 
    useEffect(() => {
        const fetchArtisansMois = async () => {
            try{
                const response = await fetch(`https://trouve-ton-artisan-1.onrender.com/api/artisan-mois`);
                const data = await response.json();
                setArtisansMois(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données des artisans du mois :', error);
            }
        } ;

        fetchArtisansMois();
    }, []);    
    
    return (
        <div>
            <Header title="Trouve ton artisan !" />

            <main className="container-fluid">
                <div className="row g-5">                
                    <section className="col-lg-6">
                            <h2>
                                <img src={Bulb} alt="icône de lampe" className="icon" />
                                Fonctionnement du site
                            </h2>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6">
                                    <p className="step bg-light">1 - Choisir la catégorie d'artisanat dans le menu</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="step bg-light">2 - Choisir un artisan</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="step bg-light">3 - Le contacter via le formulaire de contact</p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="step bg-light">4 - Une réponse sera apportée sous 48h</p>
                                </div>
                            </div>
                    </section>

                    <section className="month col-lg-6">
                        <h2>
                            <img src={Arrow} alt="icône flèche" className="icon" />
                            Les <strong>artisans</strong> du mois
                        </h2>

                        <div className="row">
                            {artisansMois.length === 0 ? (
                                <p>Chargement des artisans...</p>
                            ) : (
                                artisansMois.map(artisansMois => (
                                    <Link 
                                        to={`/detail-artisan/${artisansMois.Artisan?.id_artisan}`}
                                        key={`${artisansMois.id_artisan}-${artisansMois.id_mois_annee}`}
                                        className="col-xxl-4"
                                        target="_blank"
                                    >
                                        <SomeDetails

                                            titleMonth={artisansMois.Artisan?.nom_artisan}
                                            note={artisansMois.Artisan?.note_artisan}
                                            specialite={artisansMois.Artisan?.Specialite?.nom_specialite}
                                            ville={artisansMois.Artisan?.Ville?.nom_ville}
                                        />
                                    </Link>
                                ))
                            )}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    ) ;
} ;

