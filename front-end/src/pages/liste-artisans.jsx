import React, { useState, useEffect } from 'react';
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import SomeDetails from "../components/artisan-some";
import { useParams } from 'react-router-dom';

export default function Liste() {

    // On crée un tableau vide qui sera complété lors de la récupération des données par l'API. 
    const [artisans, setArtisans] = useState ([]) ;
    const { id } = useParams() ; // On récupère l'ID de l'artisan depuis l'URL

    // On récupère avec fetch les informations de l'api ; on stocke la réponse en json puis les données complètent le tableau
    // défini ci-dessus. L'url est dynamique et dès lors que l'id change, les données changent également. 
    useEffect(() => {
        const fetchArtisans = async () => {
            try {
                console.log(`Fetching artisans for category: ${id}`);
                const response = await fetch(`http://localhost:5000/api/artisans/categorie/${id}`);
                const data = await response.json();
                setArtisans(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des artisans :', error);
            }
        };

        fetchArtisans();
    }, [id]);

    return (
        <div>
            <Header title="Liste des artisans TODO : rajouter la catégorie ou le nom recherchés" />
            <main>
            {artisans.length === 0 ? (
                    <p>Aucun artisan trouvé pour cette catégorie.</p>
                ) : (
                    artisans.map(artisan => (
                        <SomeDetails
                            key={artisan.id_artisan}
                            titleList={artisan.nom_artisan} 
                            note={artisan.note_artisan} 
                            specialite={artisan.Specialite?.nom_specialite} 
                            ville={artisan.Ville?.nom_ville}
                        />
                    ))
                )}
            </main>
            <Footer />
        </div>
    ) ;
} ;