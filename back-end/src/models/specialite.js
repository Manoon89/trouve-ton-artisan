const { Datatypes } = require('sequelize') ;
const Categorie = require('./categorie') ;

const Specialite = sequelize.define('Specialite', {
    id_specialite: {
        type: Datatypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_specialite: {
        type: Datatypes.STRING(30), 
        allowNull: false
    }, 
    id_categorie: {
        type: Datatypes.INTEGER, 
        allowNull: false
    }
}, {
    tableName: 'specialite', 
    timestamps: false
}) ;

Specialite.belongsTo(Categorie, {foreignKey: 'id_categorie', contraints: false}) ;

module.exports = Specialite ;