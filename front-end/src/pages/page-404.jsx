import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import ImgError from "../assets/images/error.png" ;

export default function Error() {
    return (
        <div>
            <Header title="Page non trouvée" />
            <main className="d-flex justify-content-center">
                <img src={ImgError} alt="image d'erreur" className="error"/>
            </main>
            <Footer />
        </div>
    ) ;
} ;