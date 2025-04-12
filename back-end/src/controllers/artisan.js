const Artisan = require('../models/artisan') ;
// Ne pas oublier d'importer également les modèles Spécialité & Ville...... sinon ça ne fonctionne pas ;-)
const Specialite = require('../models/specialite') ;
const Ville = require('../models/ville') ;
const Categorie = require('../models/categorie') ;
const { sequelize } = require('../../config/sequelize') ;
const { Op } = require('sequelize') ;

exports.getArtisanById = async (req, res, next) => {
    try {
        // On utilise FindOne car findById est déprécié dans sequelize
        const artisan = await Artisan.findOne({
            where: {
                id_artisan: req.params.id
            }, 
            include: [
                // On va récupérer les informations souhaitées depuis les tables étrangères
                { model : Specialite, attributes: ['nom_specialite']}, 
                { model : Ville, attributes: ['nom_ville']}
            ]
        });

    if (!artisan) {
        return res.status(404).json({ error: "Artisan non trouvé" });
    }

    res.json(artisan) ;
    }
    catch (error) {
        console.error("Erreur lors de la récupération de l'artisan", error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
} ;

// Manque le filtre par catégorie. Ne fonctionne pas. On reviendra dessus plus tard. 
exports.getArtisansByCategorie = async (req, res, next) => {
    
    try {

        // On vérifie que le paramètre de recherche est bien présent
        const categorie = req.params.categorie ;

        if (!categorie) {
            return res.status(400).json({ error: "Le paramètre 'categorie' est requis" });
        }

        const artisans = await Artisan.findAll({
            include: [
                { 
                    model : Specialite, 
                    attributes: ['nom_specialite'], 
                    include: [
                        { 
                            model : Categorie, 
                            attributes: ['nom_categorie'], 
                            where: {nom_categorie: categorie}
                    }
                    ]
                }, 
                { 
                    model : Ville, 
                    attributes: ['nom_ville']}
            ], 
            logging: console.log
        }); 

        console.log(artisans);

        if (artisans.length === 0) {
            return res.status(404).json({ error: "Aucun artisan trouvé qui correspond à votre recherche"}) ;
        }

        res.json(artisans); 
    }
    catch (error) {
        console.error("Erreur lors de la récupération des artisans")
        res.status(500).json({ error: "Erreur interne du serveur", message: error.message }) ;
    }
} ;

exports.getArtisansByName = async(req, res, next) => {

    try { 

        const artisans = await Artisan.findAll({
            where: {
                nom_artisan: req.params.name
            }, 
            include: [
                // On va récupérer les informations souhaitées depuis les tables étrangères
                { model : Specialite, attributes: ['nom_specialite']}, 
                { model : Ville, attributes: ['nom_ville']}
            ]
        }); 

        if (!artisans) {
            return res.status(404).json({ error: "Artisan non trouvé" });
        }

        res.json(artisans); 
    }
    catch (error) {
        console.error("Erreur lors de la récupération des artisans")
        res.status(500).json({ error: "Erreur interne du serveur", message: error.message }) ;
    }
} ;