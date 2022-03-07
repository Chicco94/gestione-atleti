'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Allenamento', // table name
      'completato', // new field name
      {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      }
    )
  },

  async down (queryInterface, Sequelize) {
  }
};
