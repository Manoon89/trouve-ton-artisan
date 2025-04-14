import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import ImgError from "../assets/images/error.png" ;
import { Helmet } from 'react-helmet' ;

export default function Error() {
    return (
        <div>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Header title="Page non trouvée" />
            <main className="d-flex justify-content-center">
                <img src={ImgError} alt="image d'erreur" className="error"/>
            </main>
            <Footer />
        </div>
    ) ;
} ;