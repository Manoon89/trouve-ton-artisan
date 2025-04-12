const ArtisanMois = require ('../models/artisan-mois') ;
const Artisan = require('../models/artisan');
const MoisAnnee = require('../models/mois-annee');
const Specialite = require('../models/specialite') ;
const Ville = require('../models/ville') ;

exports.getAll = async (req, res, next) => {
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
                        // On va récupérer les informations souhaitées depuis les tables étrangères
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

        res.json(filtered) ;
    } 
    catch (error) {
        console.error('Erreur lors de la récupération des artisans du mois', error); 
        res.status(500).json({error: 'erreur interne du serveur'});
    }
} ;