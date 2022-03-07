'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtletaAllenamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // define association here
      AtletaAllenamento.belongsTo(models.Atleta,{
        foreignKey: 'idatleta',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      AtletaAllenamento.belongsTo(models.Allenamento,{
        foreignKey: 'idallenamento',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  AtletaAllenamento.init({
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    idallenamento: { 
      type: DataTypes.INTEGER, 
      references:{ model: 'Allenamento', key: 'id'} 
    },
    idatleta: { 
      type: DataTypes.INTEGER, 
      references:{ model: 'Atleta', key: 'id'} 
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'AtletaAllenamento',
  });
  return AtletaAllenamento;
};