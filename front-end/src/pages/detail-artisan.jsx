import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import Form from "../components/form" ;

export default function Detail() {
    return (
        <div>
            <Header title="TODO : récupérer le nom de l'artisan concerné" />
            <main>
                <img src="#" alt="image de l'artisan" />
                {/*TODO : étoiles pour la note*/}
                <p>TODO : récupérer les informations de l'artisan (note, spécialité, localisation, à propos)</p>
                <Form />
            </main>
            <Footer />
        </div>
    ) ;
} ;