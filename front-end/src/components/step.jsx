import React from 'react' ;

export default function Step(props) {
    return(
        <form action="#" method="post">
            <h2>Contacter cet artisan</h2>

            <label htmlFor="name">Nom</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="object">Objet</label>
            <input type="text" name="object" id="object" />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>

            <input type="submit" name="send" id="send" value="Envoyer" />
        </form>
    ) ;
} ;