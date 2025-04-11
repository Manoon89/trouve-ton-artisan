import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import Form from "../components/form" ;

export default function Detail() {
    return (
        <div>
            <Header title="TODO : récupérer le nom de l'artisan concerné" />
            <main>
                <Artisan />
                <Form />
            </main>
            <Footer />
        </div>
    ) ;
} ;