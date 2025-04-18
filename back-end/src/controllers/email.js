/**
 * @file controllers/email.js
 * @description Ce fichier contient la fonction qui permet d'envoyer un faux e-mail. 
 */

const nodemailer = require('nodemailer');

// Dictionnaire pour stocker les temps d'envoi des emails (clé = email de l'utilisateur)
// Il pourrait être intéressant de retravailler pour récupérer l'IP de l'utilisateur. 
let cooldowns = new Map();

/**
 * Cette fonction envoie un faux e-mail. Elle récupère toutes les informations contenues dans le formulaire & les retourne
 * dans la console.  
 * 
 * Elle va : 
 * 
 * - récupérer dans le corps de la requête tous les champs de l'e-mail, ainsi que l'artisan destinataire, 
 * - bloquer le nombre d'envois à un envoi toutes les 5 minutes, 
 * - créer un transporteur qui ne fera qu'afficher l'email au format JSON dans la console, 
 * - stocker tous les champs de l'email dans une constante (mailOptions).
 * 
 * @param {Object} req - objet de la requête http
 * @param {Object} res - objet de la réponse http
 * 
 * @returns Cette fonction renvoie une réponse JSON, soit avec un message de succès ; soit avec un message indiquant que le nombre
 * d'envois est trop élevé ; soit avec un message précisant qu'une erreur est survenue lors de la simulation.
 */
exports.sendFakeEmail = async(req, res) => {
    const {name, senderEmail, object, message, to} = req.body; 

    const now = Date.now();
    const lastSent = cooldowns.get(senderEmail);
    if (lastSent && now - lastSent < 5 * 60 * 1000) {
        return res.status(429).json({ error: "Trop d'envois, réessayez plus tard." });
    }

    // C'est à cet endroit qu'il faudrait modifier la fonction si l'on souhaite envoyer réellement un email. 
    // A la place de jsonTransport... on indiquerait : service: 'gmail', auth: { user: email@gmail.com, pass: mot-de-passe }
    const transporter = nodemailer.createTransport({
        jsonTransport: true 
    });

    const mailOptions = {
        from: senderEmail, 
        to: to, 
        subject: object, 
        text: `${name} écrit :\n${message}` 
    } ;

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Simulation d'envoi :", info.message);
        res.status(200).json({ message: "Message simulé (non envoyé)" });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la simulation", details: error.message });
    }
};