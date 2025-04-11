require("dotenv").config() ;
const { Sequelize } = require('sequelize') ;

// TODO : penser à changer les informations lors du passage à l'hébergement en ligne
// Connexion à la base de données via sequelize :
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST, 
        port: process.env.DB_PORT, 
        dialect: "mysql"
    }
);

const databaseConnexion = async () => {
    console.log("Tentative de connexion à la base de données...")
    try {
        await Promise.race([
            sequelize.authenticate(),
            new Promise((_, reject) => setTimeout(() => reject(new Error("connexion timeout")), 5000))
        ]);
        console.log('Connexion réussie à la base de données') ;
    }
    catch (error) {
        console.error('Echec de la connexion :', error) ;
        throw error ;
    }
} ;

module.exports = { sequelize, databaseConnexion } ;