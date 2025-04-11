import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import ImgError from "../assets/images/error.png" ;

export default function Error() {
    return (
        <div>
            <Header title="Page non trouvée" />
            <main>
                {/* TODO : redimensionner l'image ailleurs*/}
                <img src={ImgError} alt="image d'erreur" width="100%"/>
            </main>
            <Footer />
        </div>
    ) ;
} ;