'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allenamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Allenamento.init({
    id: {type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true },
    descr: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Allenamento',
  });
  return Allenamento;
};