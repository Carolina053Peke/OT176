module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('slides', [
      {
        imageUrl: 'http://testimage.test/img.png',
        text: 'This is a Testing New',
        order: 1,
        organizationId: 1,
      },
      {
        imageUrl: 'http://testimage.test/img.png',
        text: 'This is a Testing New',
        order: 1,
        organizationId: 1,
      },
      {
        imageUrl: 'http://testimage.test/img.png',
        text: 'This is a Testing New',
        order: 1,
        organizationId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('slides', null, {});
  },
};
