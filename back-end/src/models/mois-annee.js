const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/sequelize');

const MoisAnnee = sequelize.define('MoisAnnee', {
    id_mois_annee: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mois_annee: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'mois_annee',
    timestamps: false
});

module.exports = MoisAnnee;