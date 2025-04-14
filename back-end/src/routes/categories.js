/**
 * @file routes/categorie.js
 * @description Ce fichier contient la route qui permet de récupérer toutes les catégories dans la base de données. 
 */

const express = require('express');
const router = express.Router();

const controllerCategories = require('../controllers/categories') ;

/**
 * @swagger
 * /categories:
 *      get:
 *          summary: récupère toutes les catégories
 *          tags: [Categories]
 *          responses: 
 *              200: 
 *                  description: récupère la liste de toutes les catégories de la base de données
 *                  content: 
 *                      application/json
 *              500: 
 *                  description: erreur interne du serveur
 */
router.get('/categories', controllerCategories.getAll) ;

module.exports = router ;