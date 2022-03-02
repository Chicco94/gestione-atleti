'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TestAllenamento', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      idallenamento: { 
        type: Sequelize.INTEGER, 
        references:{
          model: 'Allenamento'
          ,key: 'id'
        } 
      },
      idtest: { 
        type: Sequelize.INTEGER, 
        references:{
          model: 'Test'
          ,key: 'id'
        } 
      },
      sequenza: { type: Sequelize.INTEGER },
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
