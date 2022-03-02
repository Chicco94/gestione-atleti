'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Risultato', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      idallenamento: { 
        type: Sequelize.INTEGER, 
        references:{
          model: 'Allenamento'
          ,key: 'id'
        } 
      },
      idatleta: { 
        type: Sequelize.INTEGER, 
        references:{
          model: 'Atleta'
          ,key: 'id'
        } 
      },
      idtest: { 
        type: Sequelize.INTEGER, 
        references:{
          model: 'Tests'
          ,key: 'id'
        } 
      },
      sequenza: { type: Sequelize.INTEGER },
      risultato: { type: Sequelize.FLOAT },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down (queryInterface, Sequelize) {
  }
};
