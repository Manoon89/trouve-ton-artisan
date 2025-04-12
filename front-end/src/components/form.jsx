import React, { useState } from 'react';

// On destructure la props & on indique directement ici le nom de la prop, à savoir : email. 
export default function Form({ email }) {

    // On définit ici les données vides du formulaire
    const [formData, setFormData] = useState({
        name: '', 
        senderEmail: '', 
        object: '',
        message: ''
    }) ;

    // On utilise du hook useState pour stocker les messages de statut
    const [messageStatus, setMessageStatus] = useState('') ;

    // On va ici gérer les changements dans le formulaire en modifiant les données stockées dans formData à chaque
    // changement d'un champ. 
    const handleChange = (e) => {
        setFormData({
            ...formData, // signifie que les données non changées restent identiques
            [e.target.name]: e.target.value // signifie que les données modifiées se mettent à jour
        });
    };

    // On gère ici la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // on bloque l'envoi par défaut du formulaire si la page se recharge

        // On extrait les données du formulaire pour les utiliser
        const {name, senderEmail, object, message} = formData; 

        if (!name || !senderEmail || !object || !message) {
            setMessageStatus('Tous les champs sont obligatoires. Merci de les remplir !');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
            setMessageStatus("Format d'email invalide.");
            return;
        }

        if (message.length < 30 || message.length > 200) {
            setMessageStatus('Votre message doit faire entre 30 et 200 caractères'); 
            return;
        }

        try {

            const response = await fetch(
                'http://localhost:5000/api/send-email', 
                {
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json'}, 
                    body: JSON.stringify({ ...formData, to: email})
                }
            );

            // On convertit le résultat en format JSON
            const result = await response.json();

            if (response.ok) {
                setMessageStatus('Message envoyé avec succès');
                // On réinitialise le formulaire puisque le message s'est bien envoyé
                setFormData({
                    name: '', 
                    senderEmail: '', 
                    object: '',
                    message: ''
                })
            }
            else {
                setMessageStatus(result.error || 'une erreur est survenue, votre message n\'a pas pu être envoyé');
            }
        } catch (error) {
        setMessageStatus('Erreur de communication avec le serveur. Veuillez réessayer')
        }
    } ;
 
    return(
        <form onSubmit={handleSubmit}>
            <h2>Contacter cet artisan</h2>

            <label htmlFor="name">Nom</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" name="senderEmail" id="senderEmail" value={formData.senderEmail} onChange={handleChange} />

            <label htmlFor="object">Objet</label>
            <input type="text" name="object" id="object" value={formData.object} onChange={handleChange} />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} />

            <input type="submit" value="Envoyer" />

            {messageStatus && <p>{messageStatus}</p>}
        </form>
    ) ;
} ;