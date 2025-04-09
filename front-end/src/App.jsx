import React from 'react' ;
import {Routes, Route} from 'react-router-dom' ;
import Accueil from "./pages/index" ;

export default function App() {

  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<Accueil/>}/>
      </Routes>

    </div>
  )
}