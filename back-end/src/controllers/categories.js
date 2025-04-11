const Categorie = require('../models/categorie') ;

exports.getAll = async (req, res, next) => {
    try {
        const categories = await Categorie.findAll();
        res.json(categories) ;
    } 
    catch (error) {
        console.error('Erreur lors de la récupération des catégories', error); 
        res.status(500).json({error: 'erreur interne du serveur'});
    }
} ;