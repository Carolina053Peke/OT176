module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('testimonials', [
      {
        name: 'John Doe',
        image: 'http://testimage.test/img.png',
        content: 'This is a Testing New',
      },
      {
        name: 'John Doe',
        image: 'http://testimage.test/img.png',
        content: 'This is a Testing New',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('testimonials', null, {});
  },
};
