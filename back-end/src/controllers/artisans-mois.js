/**
 * @file controllers/artisans-mois.js
 * @description Ce fichier contient la fonction qui permet de récupérer les artisans du mois en cours.  
 */

const ArtisanMois = require ('../models/artisan-mois') ;
const Artisan = require('../models/artisan');
const MoisAnnee = require('../models/mois-annee');
const Specialite = require('../models/specialite') ;
const Ville = require('../models/ville') ;

/**
 * Cette fonction récupère les artisans du mois dans la base de données. 
 * 
 * Elle va : 
 * - définir des constantes pour récupérer le mois & l'année de la date du jour, 
 * - récupérer les artisans de la table artisans du mois, en incluant les modèles des tables étrangères nécessaires, 
 * - filter les artisans en fonction du mois & de l'année de la date du jour.
 * 
 * @param {Object} req - objet de la requête http
 * @param {Object} res - objet de la réponse http
 * 
 * @returns Cette fonction retourne une réponse JSON avec la liste des artisans du mois en cours ; ou avec un message indiquant
 * qu'aucun artisan a été trouvé ; ou indiquant qu'il y a eu une erreur interne du serveur. 
 */
exports.getAll = async (req, res) => {
    try {

        const now = new Date() ;
        const currentMonth = now.getMonth() ;
        const currentYear = now.getFullYear() ;

        const artisanMois = await ArtisanMois.findAll({
            include: [
                {
                    model: MoisAnnee
                }, 
                {
                    model: Artisan, 
                    include: [
                        { model : Specialite, attributes: ['nom_specialite']}, 
                        { model : Ville, attributes: ['nom_ville']}
                    ]
                }, 
            ]
        });

        const filtered = artisanMois.filter(am => {
            const date = new Date(am.MoisAnnee.mois_annee);
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        });

        if (filtered.length === 0) {
            return res.status(404).json({ error: "Aucun artisan trouvé pour le mois en cours." });
        }

        res.status(200).json(filtered) ;
    } 
    catch (error) {
        console.error('Erreur lors de la récupération des artisans du mois', error); 
        res.status(500).json({error: 'erreur interne du serveur'});
    }
} ;