/**
 * @file controllers/categories.js
 * @description Ce fichier contient la fonction qui permet de récupérer toutes les catégories de la base de données. 
 */

const Categorie = require('../models/categorie') ;

/**
 * Cette fonction récupère toutes les catégories de la base de données. 
 * 
 * @param {Object} req - objet de la requête http
 * @param {Object} res - objet de la réponse http
 * 
 * @returns Cette fonction retourne une réponse JSON avec la liste des catégories, ou une erreur.
 */
exports.getAll = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.json(categories) ;
    } 
    catch (error) {
        console.error('Erreur lors de la récupération des catégories', error); 
        res.status(500).json({error: 'erreur interne du serveur'});
    }
} ;