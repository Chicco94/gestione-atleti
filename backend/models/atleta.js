'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atleta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atleta.init({
    id: {type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true },
    nome: DataTypes.STRING,
    cognome: DataTypes.STRING,
    tessera: DataTypes.STRING,
    data_nascita: DataTypes.DATE,
    sesso: DataTypes.STRING,
    piede_partenza_blocchi: DataTypes.STRING,
    primo_piede: DataTypes.INTEGER,
    secondo_piede: DataTypes.INTEGER,
    passi_ostacoli_alti: DataTypes.INTEGER,
    passi_ostacoli_bassi: DataTypes.INTEGER,
    rincorsa_lungo: DataTypes.INTEGER,
    passi_lungo: DataTypes.INTEGER,
    piede_stacco_lungo: DataTypes.STRING,
    rincorsa_alto_1: DataTypes.INTEGER,
    rincorsa_alto_2: DataTypes.INTEGER,
    passi_alto: DataTypes.INTEGER,
    piede_stacco_alto: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Atleta',
  });
  return Atleta;
};