'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Risultato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Risultato.init({
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    idallenamento: { 
      type: DataTypes.INTEGER, 
      references:{ model: 'Allenamento', key: 'id'} 
    },
    idatleta: { 
      type: DataTypes.INTEGER, 
      references:{ model: 'Atleta', key: 'id'} 
    },
    idtest: { 
      type: DataTypes.INTEGER, 
      references:{ model: 'Tests', key: 'id'} 
    },
    sequenza: { type: DataTypes.INTEGER },
    risultato: { type: DataTypes.FLOAT },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Risultato',
  });
  return Risultato;
};