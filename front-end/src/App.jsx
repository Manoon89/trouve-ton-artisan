import React from 'react' ;
import {Routes, Route} from 'react-router-dom' ;
import Accueil from "./pages/index.jsx" ;
import Detail from "./pages/detail-artisan.jsx" ;
import Liste from "./pages/liste-artisans.jsx" ;
import Error from "./pages/page-404.jsx" ;
import EnCours from "./pages/page-en-cours.jsx" ;

export default function App() {

  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/detail-artisan/:id" element={<Detail />} />
        <Route path="/categories/:id" element={<Liste />} /> 
        <Route path="/name/:name" element={<Liste />} /> 
        <Route path="/page-404" element={<Error />} />
        <Route path="/en-cours" element={<EnCours />} />
      </Routes>

    </div>
  ) ;
} ;