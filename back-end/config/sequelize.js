const { Sequelize } = require('sequelize') ;

// TODO : penser à changer les informations lors du passage à l'hébergement en ligne
// Connexion à la base de données via sequelize :
const sequelize = new Sequelize('trouve-ton-artisan', 'root', '', {
    host: localhost, 
    dialect: 'mysql', 
});

exports.databaseConnexion = async () => {
    try {
        await sequelize.authenticate() ;
        console.log('Connexion réussie à la base de données') ;
    }
    catch (error) {
        console.error('Echec de la connexion :', error) ;
    }
} ;