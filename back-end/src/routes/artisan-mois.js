/**
 * @file routes/artisan-mois.js
 * @description Ce fichier contient la route qui permet de récupérer les artisans du mois dans la base de données. 
 */

const express = require('express');
const router = express.Router();

const controllerArtisansMois = require('../controllers/artisans-mois') ;

/**
 * @swagger
 * /artisan-mois:
 *      get:
 *          summary: récupère les artisans du mois en cours
 *          tags: [ArtisanMois]
 *          responses: 
 *              200: 
 *                  description: récupère la liste des artisans du mois courant de la base de données
 *                  content: 
 *                      application/json
 *              400: 
 *                  description: aucun artisan du mois n'a été trouvé
 *              500: 
 *                  description: erreur interne du serveur
 */
router.get('/artisan-mois', controllerArtisansMois.getAll) ;

module.exports = router ;