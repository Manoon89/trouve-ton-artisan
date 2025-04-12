const { DataTypes } = require('sequelize') ;
const { sequelize } = require('../../config/sequelize') ;
const Artisan = require('./artisan') ;
const MoisAnnee = require('./mois-annee') ;

const ArtisanMois = sequelize.define('ArtisanMois', {
    id_artisan: {
        type: DataTypes.INTEGER, 
        primaryKey: true
    }, 
    id_mois_annee: {
        type: DataTypes.INTEGER, 
        primaryKey: true
    }
}, {
    tableName: 'artisan_mois', 
    timestamps: false
}) ;

ArtisanMois.belongsTo(Artisan, {foreignKey: 'id_artisan'}) ;
ArtisanMois.belongsTo(MoisAnnee, {foreignKey: 'id_mois_annee'}) ;

module.exports = ArtisanMois ;