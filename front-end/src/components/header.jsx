import React from 'react' ;
import Nav from './navbar' ;

/* On crée un composant "Header" qu'on affectera à chaque page. Ce composant prend des props qui lui seront spécifiques, à savoir
le h1 (titre de page différent pour chaque page)*/

export default function Header(props) {

    return(
        <header>
            <div>
                <Nav />
            </div>

            <h1>{props.title}</h1>
        </header>
    ) ;

} ;