'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utenti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Utenti.init({
    id: {type: DataTypes.STRING,
        primaryKey: true },
    nome: DataTypes.STRING,
    cognome: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Utenti',
  });
  return Utenti;
};