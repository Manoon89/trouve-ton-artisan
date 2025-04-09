const { Datatypes } = require('sequelize') ;
const Specialite = require('./specialite') ;

const Categorie = sequelize.define('Categorie', {
    id_categorie: {
        type: Datatypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_categorie: {
        type: Datatypes.STRING(20), 
        allowNull: false
    }
}, {
    tableName: 'categorie', 
    timestamps: false
}) ;

Categorie.hasMany(Specialite, {foreignKey: 'id_categorie', constraints: false}) ;

module.exports = Categorie ;