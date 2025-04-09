const { Datatypes } = require('sequelize') ;
const Artisan = require('./artisan') ;

const ArtisanMois = sequelize.define('ArtisanMois', {
    id_artisan_mois: {
        type: Datatypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    mois_annee: {
        type: Datatypes.STRING(15), 
        allowNull: false
    },
    id_artisan: {
        type: Datatypes.INTEGER, 
        allowNull: false
    }
}, {
    tableName: 'artisan_mois', 
    timestamps: false
}) ;

ArtisanMois.hasMany(Artisan, {foreignKey: 'id_artisan', constraints: false}) ;

module.exports = ArtisanMois ;