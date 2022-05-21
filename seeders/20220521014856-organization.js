module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'organizations',
      [
        {
          name: 'testOrganization',
          image: 'http://testimage.test/img.png',
          address: 'testAddress',
          phone: 123456789,
          email: 'testing@gmail.com',
          welcomeText: 'This is a Testing New',
          aboutUsText: 'This is a Testing New',
          deletedAt: new Date(),
          facebook: 'https://www.facebook.com/john.doe',
          instagram: 'https://www.instagram.com/john.doe',
          linkedin: 'https://www.linkedin.com/john.doe',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('organizations', null, {});
  },
};
