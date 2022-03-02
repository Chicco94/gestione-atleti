'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AtletaAllenamento', {
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
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
