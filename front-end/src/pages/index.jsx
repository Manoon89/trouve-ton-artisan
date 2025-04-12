import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import SomeDetails from "../components/artisan-some";
import Bulb from '../assets/icons/bulb.svg' ;
import Arrow from '../assets/icons/arrow-right.svg' ;

export default function Accueil() {
    
    // On crée un tableau vide qui sera complété lors de la récupération des données par l'API. 
       const [artisansMois, setArtisansMois] = useState([]) ;
    
    // On récupère avec fetch les informations de l'api ; on stocke la réponse en json puis les données complètent le tableau
    // défini ci-dessus. L'url est dynamique et dès lors que l'id change, les données changent également. 
    useEffect(() => {
        const fetchArtisansMois = async () => {
            try{
                const response = await fetch(`http://localhost:5000/api/artisan-mois`);
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
                    <img src={Arrow} alt="icône flèche" width="2%" />
                    <h2>Les artisans du mois</h2>

                    {artisansMois.length === 0 ? (
                        <p>Chargement des artisans...</p>
                    ) : (
                        artisansMois.map(artisansMois => (
                            <Link 
                                to={`/detail-artisan/${artisansMois.Artisan?.id_artisan}`}
                                key={`${artisansMois.id_artisan}-${artisansMois.id_mois_annee}`}
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
                </section>
            </main>
            <Footer />
        </div>
    ) ;
} ;

