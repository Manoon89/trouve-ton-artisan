/**
 * @file controllers/artisan.js
 * @description Ce fichier contient le sfonctions qui permettent de récupérer un artisan en fonction de différents
 * paramètres.  
 */

const Artisan = require('../models/artisan') ;
// Ne pas oublier d'importer également les modèles Spécialité & Ville...... sinon ça ne fonctionne pas ;-)
const Specialite = require('../models/specialite') ;
const Ville = require('../models/ville') ;
const Categorie = require('../models/categorie') ;

/**
 * Cette fonction récupère un artisan dont l'identifiant est indiqué en requête. 
 * 
 * Elle va : 
 * - récupérer l'artisan correspondant à l'identifiant indiqué, en incluant les tables étrangères nécessaires
 * - vérifier s'il existe des artisans dans cette catégorie.
 * 
 * @param {Object} req - objet de la requête http
 * @param {Object} res - objet de la réponse http

* @returns Cette fonction retourne une réponse JSON avec soit un message de réussite ; soit un message indiquant qu'aucun artisan 
* n'a été trouvé pour cet identifiant ; soit qu'il y a une erreur interne du serveur. 
 */
exports.getArtisanById = async (req, res, next) => {
    try {
        // On utilise FindOne car findById est déprécié dans sequelize
        const artisan = await Artisan.findOne({
            where: {
                id_artisan: req.params.id
            }, 
            include: [
                { model : Specialite, attributes: ['nom_specialite']}, 
                { model : Ville, attributes: ['nom_ville']}
            ]
        });

    if (!artisan) {
        return res.status(404).json({ error: "Artisan non trouvé" });
    }

    res.status(200).json(artisan) ;
    }
    catch (error) {
        console.error("Erreur lors de la récupération de l'artisan", error);
        res.status(500).json({error: "Erreur interne du serveur"});
    }
} ;


/**
 * Cette fonction récupère la liste des artisans par catégorie indiquée en requête. 
 * 
 * Elle va : 
 * - stocker le paramètre de la requête "id" dans une constante, 
 * - vérifier que le paramètre est bien existant, 
 * - récupérer la liste des artisans de la catégorie, en incluant les tables étrangères nécessaires
 * - vérifier s'il existe des artisans dans cette catégorie.
 * 
 * @param {Object} req - objet de la requête http
 * @param {Object} res - objet de la réponse http

* @returns Cette fonction retourne une réponse JSON avec soit un message de réussite ; soit un message indiquant que le paramètre
* nécessaire pour la requête est manquant ; soit un message indiquant qu'aucun artisan n'a été trouvé pour cette catégorie ; 
* soit qu'il y a une erreur interne du serveur. 
 */
exports.getArtisansByCategorie = async (req, res) => {
    
    try {

        const categorie = req.params.id ;

        if (!categorie) {
            return res.status(400).json({ error: "Le paramètre 'categorie' est requis" });
        }

        const artisans = await Artisan.findAll({
            include: [
                { 
                    model : Specialite, 
                    attributes: ['nom_specialite'], 
                    where: {id_categorie: categorie},
                    include: [
                        { 
                            model : Categorie, 
                            attributes: ['nom_categorie'], 
                    }
                    ]
                }, 
                { 
                    model : Ville, 
                    attributes: ['nom_ville']}
            ], 
            logging: console.log
        }); 

        if (artisans.length === 0) {
            return res.status(404).json({ error: "Aucun artisan trouvé qui correspond à votre recherche"}) ;
        }

        res.status(200).json(artisans); 
    }
    catch (error) {
        console.error("Erreur lors de la récupération des artisans")
        res.status(500).json({ error: "Erreur interne du serveur", message: error.message }) ;
    }
} ;

/**
 * Cette fonction récupère un artisan dont le nom est indiqué en requête. 
 * 
 * Elle va : 
 * - récupérer l'artisan correspondant au nom indiqué, en incluant les tables étrangères nécessaires
 * - vérifier s'il existe des artisans dans cette catégorie.
 * 
 * @param {Object} req - objet de la requête http
 * @param {Object} res - objet de la réponse http

* @returns Cette fonction retourne une réponse JSON avec soit un message de réussite ; soit un message indiquant qu'aucun artisan 
* n'a été trouvé pour ce nom ; soit qu'il y a une erreur interne du serveur. 
 */
exports.getArtisansByName = async(req, res) => {

    try { 

        const artisans = await Artisan.findAll({
            where: {
                nom_artisan: req.params.name
            }, 
            include: [
                { model : Specialite, attributes: ['nom_specialite']}, 
                { model : Ville, attributes: ['nom_ville']}
            ]
        }); 

        if (!artisans) {
            return res.status(404).json({ error: "Artisan non trouvé" });
        }

        res.status(200).json(artisans); 
    }
    catch (error) {
        console.error("Erreur lors de la récupération des artisans")
        res.status(500).json({ error: "Erreur interne du serveur", message: error.message }) ;
    }
} ;