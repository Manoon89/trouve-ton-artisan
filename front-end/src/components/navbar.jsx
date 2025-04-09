import React from 'react' ;
import search from '../assets/icons/search.svg' ;
import logo from '../assets/images/logo.png' ;

export default function Nav() {

    return (
    
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            {/*TODO : corriger le lien pour qu'il renvoie vers la page d'accueil*/}
            <a className="navbar-brand" href="#" >
                <img src={logo} alt="logo du site trouve ton artisan" width="40%" />
            </a>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                    <img src={search} width="10px" />
                </button>
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Catégories : TODO</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">idem</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

    )
}