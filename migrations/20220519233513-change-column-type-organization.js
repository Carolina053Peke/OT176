module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Organizations', 'phone', {
      type: Sequelize.BIGINT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Organizations', 'phone', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
//
