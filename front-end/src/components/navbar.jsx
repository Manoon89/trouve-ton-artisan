import React, {useEffect, useState} from 'react' ;
import Logo from '../assets/images/logo.png' ;
import Search from '../assets/icons/search.svg' ;
import { Link } from 'react-router-dom' ;

export default function Nav() {

    // On crée un tableau vide qui sera complété lors de la récupération des données par l'API. 
    const [categories, setCategories] = useState([]) ;

    // On récupère avec fetch les informations de l'api ; on stocke la réponse en json puis les données complètent le tableau
    // défini ci-dessus
    useEffect(() => {
        fetch('http://localhost:3000/api/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Erreur lors de la récupération des catégories :', error)) ;
    }, 
    []);

    return (
    
        <nav>
            <a href="#">
                {/*TODO : taille de l'image à gérer aillers*/}
                <img src={Logo} alt="logo du site trouve ton artisan" width="30%"/>
            </a>

            <form action="#" method="post">
                <input type="text" name="searchbar" id="searchbar" placeholder="Rechercher" />
                {/*TODO : taille de l'image à gérer aillers*/}
                <button type="submit" name="submit" id="submit">
                    <img src={Search} alt="loupe de recherche" width="2%" />
                </button>
            </form>

            <ul>
                {categories.map((categorie) => (
                    <li key={categorie.id_categorie}>
                        <Link to={`/categories/${categorie.id_categorie}`}>
                            {categorie.nom_categorie}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    )
}