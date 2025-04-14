import React, {useEffect, useState} from 'react' ;
import Logo from '../assets/images/logo.png' ;
import Search from '../assets/icons/search.png' ;
import { Link, useNavigate } from 'react-router-dom' ;
const BACKEND_URL = "https://trouve-ton-artisan-1.onrender.com";

export default function Nav() {

    // On crée un tableau vide qui sera complété lors de la récupération des données par l'API. 
    const [categories, setCategories] = useState([]) ;
    // On fait pareil pour les données de la barre de recherche. 
    const [searchTerm, setSearchTerm] = useState('');
    // On récupère le hook navigate pour rediriger l'utilisateur
    const navigate = useNavigate() ;

    // On récupère avec fetch les informations de l'api ; on stocke la réponse en json puis les données complètent le tableau
    // défini ci-dessus pour les catégories (donc pour le menu)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('${BACKEND_URL}/api/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories :', error);
            }
        };
    
        fetchCategories();
    }, []); // Cette fonction s'exécutera seulement une fois après le premier rendu

    // On crée maintenant une fonction pour gérer la soumission du formulaire de recherche
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Pour empêcher la page de se recharger
        if (searchTerm) {
            navigate(`/name/${searchTerm}`) ;
        }
    } ;

    return (
    
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                    <a href="/" className="navbar-brand w-25">
                        <img src={Logo} alt="logo du site trouve ton artisan" className="logo w-100"/>
                    </a>

                    <form onSubmit={handleSearchSubmit} method="post" className="d-none d-md-flex me-2 search-big">
                        <input 
                            type="text" 
                            name="searchbar" 
                            id="searchbar" 
                            placeholder="Rechercher" 
                            className="form-control me-2 custom-border"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" name="submit" id="submit" className="btn bg-light border border-light rounded p-2">
                            <img src={Search} alt="loupe de recherche"/>
                        </button>
                    </form>

                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <div className="navbar-toggler-icon"></div>
                        <div className="menu-text">Menu</div>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <form onSubmit={handleSearchSubmit} method="post" className="d-block d-md-none">
                            <input 
                                type="text" 
                                name="searchbar" 
                                id="searchbar" 
                                placeholder="Rechercher" 
                                className="form-control me-2 custom-border"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" name="submit" id="submit" className="btn bg-light border border-light rounded p-2">
                                <img src={Search} alt="loupe de recherche"/>
                            </button>
                        </form>

                        <ul className="navbar-nav flex-row w-100 justify-content-between mb-2 me-4">
                            {categories.map((categorie) => (
                                <li key={categorie.id_categorie} className="nav-item">
                                    <Link to={`/categories/${categorie.id_categorie}`} className="nav-link" target="_blank" >
                                        {categorie.nom_categorie}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

            </div>
        </nav>

    )
}