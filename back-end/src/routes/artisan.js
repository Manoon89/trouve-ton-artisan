/**
 * @file routes/artisan.js
 * @description Ce fichier contient les routes qui permettent de récupérer les informations d'un artisan selon 
 * différents paramètres. 
 */

const express = require('express');
const router = express.Router();

const controllerArtisan = require('../controllers/artisan') ;

/**
 * @swagger
 * /artisans/categorie/:id:
 *      get:
 *          summary: récupère les artisans qui font partie d'une catégorie en particulier.
 *          tags: [Artisans]
 *          responses: 
 *              200: 
 *                  description: la liste des artisans de la catégorie indiquée dans la requête est récupérée
 *                  content: 
 *                      application/json
 *              400: 
 *                  description: le paramètre catégorie n'est pas renseigné
 *              404: 
 *                  description: aucun artisan n'est trouvé pour cette catégorie
 *              500: 
 *                  description: erreur interne du serveur
 */
router.get('/artisans/categorie/:id', controllerArtisan.getArtisansByCategorie) ;

/**
 * @swagger
 * /artisans/name/:name:
 *      get:
 *          summary: récupère l'artisan qui correspond à un nom.
 *          tags: [Artisans]
 *          responses: 
 *              200: 
 *                  description: l'artisan dont le nom est indiqué dans la requête est récupéré
 *                  content: 
 *                      application/json
 *              404: 
 *                  description: aucun artisan n'est trouvé pour cette catégorie
 *              500: 
 *                  description: erreur interne du serveur
 */
router.get('/artisans/name/:name', controllerArtisan.getArtisansByName) ;

// Peut-être on aurait pu simplifier & n'utiliser que la fonction getArtisansByName...
/**
 * @swagger
 * /details-artisan/:id:
 *      get:
 *          summary: récupère l'artisan qui correspond à un identifiant en particulier
 *          tags: [Artisans]
 *          responses: 
 *              200: 
 *                  description: l'artisan dont l'identifiant est indiqué dans la requête est récupéré
 *                  content: 
 *                      application/json
 *              404: 
 *                  description: aucun artisan n'est trouvé pour cette catégorie
 *              500: 
 *                  description: erreur interne du serveur
 */
router.get('/details-artisan/:id', controllerArtisan.getArtisanById) ;

module.exports = router ;