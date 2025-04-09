import {Link} from 'react-router-dom' ;

/* On crée un composant "Header" qu'on affectera à chaque page. Ce composant prend des props qui lui seront spécifiques, à savoir
le h1 (titre de page différent pour chaque page)*/

export default function Header(props) {

    return(
        <header>
            <div>
                {/* Logo avec lien cliquable pour revenir à l'accueil */}
                <Link to="/" className="headerLogo">
                    <img id="logo" src="../assets/images/logo.png" alt="logo du site trouve ton artisan" />
                </Link>

                {/* TODO : barre de recherche */}

                {/* TODO : menu */}
            </div>

            <h1>{props.title}</h1>
        </header>
    ) ;

} ;