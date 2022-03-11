'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Test.hasMany(models.TestAllenamento,{
        foreignKey: 'idtest',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      Test.hasMany(models.Risultato,{
        foreignKey: 'idatleta',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Test.init({
    id: {type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true },
    descr: DataTypes.STRING,
    gruppo: DataTypes.STRING,
    tipo: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Test',
  });
  return Test;
};