const { Datatypes } = require('sequelize') ;
const Artisan = require('./artisan') ;

const Ville = sequelize.define('Ville', {
    id_ville: {
        type: Datatypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_ville: {
        type: Datatypes.STRING(45), 
        allowNull: false
    }
}, {
    tableName: 'ville', 
    timestamps: false
}) ;

Ville.hasMany(Artisan, {foreignKey: 'id_ville', constraints: false}) ;

module.exports = Ville ;