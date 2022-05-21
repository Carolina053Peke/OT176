module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'contacts',
      [
        {
          name: 'test',
          phone: '123456789',
          email: 'lalala@gmail.com',
          message: 'lalala',
          createdAt: new Date(),
        },
        {
          name: 'test',
          phone: '123456789',
          email: 'lalala@gmail.com',
          message: 'lalala',
          createdAt: new Date(),
        },
        {
          name: 'test',
          phone: '123456789',
          email: 'lalala@gmail.com',
          message: 'lalala',
          createdAt: new Date(),
        },
        {
          name: 'test',
          phone: '123456789',
          email: 'lalala@gmail.com',
          message: 'lalala',
          createdAt: new Date(),
        },
        {
          name: 'test',
          phone: '123456789',
          email: 'lalala@gmail.com',
          message: 'lalala',
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('contacts', null, {});
  },
};
