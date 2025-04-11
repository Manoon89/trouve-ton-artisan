const { DataTypes } = require('sequelize') ;
const { sequelize } = require('../../config/sequelize') ;
const Categorie = require('./categorie') ;

const Specialite = sequelize.define('Specialite', {
    id_specialite: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_specialite: {
        type: DataTypes.STRING(30), 
        allowNull: false
    }, 
    id_categorie: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
}, {
    tableName: 'specialite', 
    timestamps: false
}) ;

console.log('Categorie:', Categorie);

Specialite.belongsTo(Categorie, {foreignKey: 'id_categorie'}) ;

module.exports = Specialite ;