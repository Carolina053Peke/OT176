module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Organizations', {
      type: Sequelize.BIGINT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Organizations', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
//
