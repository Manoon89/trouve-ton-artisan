const { Datatypes } = require('sequelize') ;
const Ville = require('./ville') ;
const Specialite = require('./specialite') ;

const Artisan = sequelize.define('Artisan', {
    id_artisan: {
        type: Datatypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_artisan: {
        type: Datatypes.STRING(45), 
        allowNull: false
    }, 
    note_artisan: {
        type: Datatypes.DECIMAL(2,1), 
    }, 
    a_propos_artisan: {
        type: Datatypes.STRING(250)
    }, 
    email_artisan: {
        type: Datatypes.STRING(45), 
        allowNull: false, 
        unique: true
    }, 
    site_web_artisan: {
        type: Datatypes.STRING(150)
    }, 
    lien_image_artisan: {
        type: Datatypes.STRING(150)
    }, 
    id_specialite: {
        type: Datatypes.INTEGER, 
        allowNull: false
    }, 
    id_ville: {
        type: Datatypes.INTEGER, 
        allowNull: false
    }
}, {
    tableName: 'artisan', 
    timestamps: false
}) ;

Artisan.belongsTo(Ville, {foreignKey: 'id_ville', contraints: false}) ;
Artisan.belongsTo(Specialite, {foreignKey: 'id_specialite', contraints: false}) ;

module.exports = Artisan ;