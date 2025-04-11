const Artisan = require('../models/artisan') ;
// Ne pas oublier d'importer également les modèles Spécialité & Ville......
const Specialite = require('../models/specialite') ;
const Ville = require('../models/ville') ;

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