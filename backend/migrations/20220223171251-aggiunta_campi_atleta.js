'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
      queryInterface.addColumn('Atleta', 'piede_partenza_blocchi', { type: Sequelize.STRING}),
      queryInterface.addColumn('Atleta', 'primo_piede', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'secondo_piede', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'passi_ostacoli_alti', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'passi_ostacoli_bassi', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'rincorsa_lungo', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'passi_lungo', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'piede_stacco_lungo', { type: Sequelize.STRING}),
      queryInterface.addColumn('Atleta', 'rincorsa_alto_1', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'rincorsa_alto_2', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'passi_alto', { type: Sequelize.INTEGER}),
      queryInterface.addColumn('Atleta', 'piede_stacco_alto', { type: Sequelize.STRING}),
    ]);
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
