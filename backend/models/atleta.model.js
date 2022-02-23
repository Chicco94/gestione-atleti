'use strict';
module.exports = (sequelize, DataTypes) => { 
    
    const Atleta = sequelize.define('Atleta', { 
        id: {type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true },
        nome: DataTypes.STRING,
        cognome: DataTypes.STRING,
    }, {
        freezeTableName: true
    })

    Atleta.associate = function(models) {
        // define your relations 
    }

    return Atleta;
};