import React, { useState, useEffect } from 'react';
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import SomeDetails from "../components/artisan-some";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom' ;

export default function Liste() {

    // On crée un tableau vide qui sera complété lors de la récupération des données par l'API. 
    const [artisans, setArtisans] = useState ([]) ;
    const { id, name } = useParams() ; // On récupère l'ID de l'artisan depuis l'URL
    const navigate = useNavigate() ;

    // On récupère avec fetch les informations de l'api ; on stocke la réponse en json puis les données complètent le tableau
    // défini ci-dessus. L'url est dynamique et dès lors que l'id change, les données changent également. 
    useEffect(() => {
        const fetchArtisans = async () => {
            try {
                let url = '';

                if (id) {
                    url = `http://localhost:5000/api/artisans/categorie/${id}`;
                }

                else if (name) {
                    url = `http://localhost:5000/api/artisans/name/${name}`;
                }

                const response = await fetch(url);
                const data = await response.json();

                if (data.error || data.length === 0) {
                    // Si aucun artisan n'est trouvé ou s'il y a une erreur, redirige vers la page 404
                    navigate('/page-404');
                } else {
                    setArtisans(data);
                }

            } catch (error) {
                console.error('Erreur lors de la récupération des artisans :', error);
            }
        };

        fetchArtisans();
    }, [id, name]);

    return (
        <div>
            <Header title="Liste des artisans TODO : rajouter la catégorie ou le nom recherchés" />
            <main>
            {artisans.length === 0 ? (
                    <p>Aucun artisan trouvé correspondant à cette recherche</p>
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