import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import SomeDetails from "../components/artisan-some";
import { useParams } from 'react-router-dom';

export default function Liste() {
    return (
        <div>
            <Header title="Liste des artisans TODO : rajouter la catégorie ou le nom recherchés" />
            <main>
                {/*TODO récupérer les infos de chaque artisan concerné"*/}
            </main>
            <Footer />
        </div>
    ) ;
} ;