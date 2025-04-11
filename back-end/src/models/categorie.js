const { DataTypes } = require('sequelize') ; // Attention toujours utiliser DataTypes avec un T majuscule. 
const { sequelize } = require('../../config/sequelize') ;
/*const Specialite = require('./specialite') ;*/


const Categorie = sequelize.define('Categorie', {
    id_categorie: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_categorie: {
        type: DataTypes.STRING(20), 
        allowNull: false
    }
}, {
    tableName: 'categorie', 
    timestamps: false
}) ;

/*Categorie.hasMany(Specialite, {foreignKey: 'id_categorie', constraints: false}) ;*/

module.exports = Categorie ;