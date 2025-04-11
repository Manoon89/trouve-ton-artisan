import React from 'react' ;
import Logo from '../assets/images/logo.png' ;
import Search from '../assets/icons/search.svg' ;

export default function Nav() {

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
                <li>
                    <a href="#">MENU TODO</a>
                </li>
            </ul>
        </nav>

    )
}