'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestAllenamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TestAllenamento.belongsTo(models.Test,{
        foreignKey: 'idtest',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      TestAllenamento.belongsTo(models.Allenamento,{
        foreignKey: 'idallenamento',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  TestAllenamento.init({
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    idallenamento: { 
      type: DataTypes.INTEGER, 
      references:{ model: 'Allenamento', key: 'id'} 
    },
    idtest: { 
      type: DataTypes.INTEGER, 
      references:{ model: 'Tests', key: 'id'} 
    },
    sequenza: { type: DataTypes.INTEGER },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'TestAllenamento',
  });
  return TestAllenamento;
};