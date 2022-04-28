'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // categoryId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Categories',
      //     key: 'id',
      //   }
      // },
      deletedAt: {
        type: Sequelize.DATE
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ba675d39d20614d2e668752f050416a28c0875c6
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
<<<<<<< HEAD
=======
>>>>>>> 84c923b6da09d0b38b8cb54cc117b293381f54e9
>>>>>>> ba675d39d20614d2e668752f050416a28c0875c6
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('News');
  }
};