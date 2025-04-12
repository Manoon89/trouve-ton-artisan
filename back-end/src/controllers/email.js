const nodemailer = require('nodemailer');

// Dictionnaire pour stocker les temps d'envoi des emails (clé = email de l'utilisateur)
let cooldowns = new Map();

// On crée une fonction pour envoyer un faux email. On peut vérifier qu'elle fonctionne en regardant la console. 
// Un message "Simulation d'envoi" indique en format JSON les différents champs de cet email. 
exports.sendFakeEmail = async(req, res, next) => {
    const {name, senderEmail, object, message, to} = req.body; 

    // On bloque le nombre d'envois à un envoi toutes les 5 minutes
    const now = Date.now();
    const lastSent = cooldowns.get(senderEmail);
    if (lastSent && now - lastSent < 5 * 60 * 1000) {
        return res.status(429).json({ error: "Trop d'envois, réessayez plus tard." });
    }

    // On crée ici un transporteur qui n'affichera l'email qu'au format JSON dans la console. C'est à cet endroit qu'il faudrait
    // modifier la fonction si l'on souhaite envoyer réellement un email. 
    // A la place de jsonTransport... on indiquerait : 
    // service: 'gmail', auth: { user: email@gmail.com, pass: mot-de-passe }
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