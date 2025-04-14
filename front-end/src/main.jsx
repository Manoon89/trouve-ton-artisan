import React from 'react' ;
import { StrictMode } from 'react' ;
import { createRoot } from 'react-dom/client' ;
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx' ;
import './styles/main.scss' ;
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* penser à rajouter le BrowserRouter ! Sans ça les routes ne fonctionnent pas !!*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)