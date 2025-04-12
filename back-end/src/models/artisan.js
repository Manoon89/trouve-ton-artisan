const { DataTypes } = require('sequelize') ;
const { sequelize } = require('../../config/sequelize') ;
const Ville = require('./ville') ;
const Specialite = require('./specialite') ;

const Artisan = sequelize.define('Artisan', {
    id_artisan: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_artisan: {
        type: DataTypes.STRING(45), 
        allowNull: false
    }, 
    note_artisan: {
        type: DataTypes.DECIMAL(2,1), 
    }, 
    a_propos_artisan: {
        type: DataTypes.STRING(250)
    }, 
    email_artisan: {
        type: DataTypes.STRING(45), 
        allowNull: false, 
        unique: true
    }, 
    site_web_artisan: {
        type: DataTypes.STRING(150)
    }, 
    lien_image_artisan: {
        type: DataTypes.STRING(150)
    }, 
    id_specialite: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    id_ville: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
}, {
    tableName: 'artisan', 
    timestamps: false
}) ;

Artisan.belongsTo(Ville, {foreignKey: 'id_ville'}) ;
Artisan.belongsTo(Specialite, {foreignKey: 'id_specialite'}) ;

module.exports = Artisan ;