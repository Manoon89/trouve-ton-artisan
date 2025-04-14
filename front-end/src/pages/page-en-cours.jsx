import React from 'react' ;
import Header from "../components/header" ;
import Footer from "../components/footer" ;
import { Helmet } from 'react-helmet' ;

export default function EnCours() {
    return (
        <div>
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <Header title="Page en cours de construction... merci de votre patience :)" />
            <main>
            </main>
            <Footer />
        </div>
    ) ;
} ;