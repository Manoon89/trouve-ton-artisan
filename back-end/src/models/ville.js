const { DataTypes } = require('sequelize') ;
const { sequelize } = require('../../config/sequelize') ;

const Ville = sequelize.define('Ville', {
    id_ville: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    nom_ville: {
        type: DataTypes.STRING(45), 
        allowNull: false
    }
}, {
    tableName: 'ville', 
    timestamps: false
}) ;

module.exports = Ville ;