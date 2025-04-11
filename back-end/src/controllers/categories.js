const Categorie = require('../models/categorie') ;

exports.getAll = async (req, res, next) => {
    try {
        const categorie = await Categorie.find({
            attributes: ['nom_categorie'] 
        });
        res.json(categories) ;
    } 
    catch (error) {
        console.error('Erreur lors de la récupération des catégories', error); 
        res.status(500).json({error: 'erreur serveur'});
    }
} ;