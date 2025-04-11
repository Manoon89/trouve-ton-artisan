import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import Card from "../components/artisan-card" ;

export default function Liste() {
    return (
        <div>
            <Header title="Liste des artisans TODO : rajouter la catégorie ou le nom recherchés" />
            <main>
                <Card title="TODO récupérer les infos de chaque artisan concerné" />
            </main>
            <Footer />
        </div>
    ) ;
} ;