import React, { useState, useEffect } from 'react';
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import Form from "../components/form" ;
import AllDetails from "../components/artisan-details";
import { useParams } from 'react-router-dom';
const BACKEND_URL = "https://trouve-ton-artisan-back.onrender.com";

export default function Detail() {

    // On crée un tableau vide qui sera complété lors de la récupération des données par l'API. 
    const [artisan, setArtisan] = useState({}) ;
    const { id } = useParams(); // On récupère l'ID de l'artisan depuis l'URL

    // On récupère avec fetch les informations de l'api ; on stocke la réponse en json puis les données complètent le tableau
    // défini ci-dessus. L'url est dynamique et dès lors que l'id change, les données changent également. 
    useEffect(() => {
        const fetchArtisan = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/details-artisan/${id}`);
                const data = await response.json();
                setArtisan(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'artisan :', error);
            }
        };
    
        fetchArtisan();
    }, [id]); // On met à jour à chaque changement d'id dans l'URL

    return (
        <div>
            <Header title={artisan.nom_artisan} />
            <main className="row g-5">
                {/* Idéalement : il aurait fallu rajouter les liens des images. Comme elles sont non fournies on ne les affiche pas pour l'instant}*/}
                <AllDetails 
                    note={artisan.note_artisan} 
                    specialite={artisan.Specialite?.nom_specialite}
                    ville={artisan.Ville?.nom_ville} 
                    apropos={artisan.a_propos_artisan} 
                    site={artisan.site_web_artisan}
                />

                <Form email={artisan.email_artisan}/>
            </main>
            <Footer />
        </div>
    ) ;
} ;