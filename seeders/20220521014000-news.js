module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'news',
      [
        {
          name: 'testNew',
          content: 'This is a Testing New',
          image: 'http://testimage.test/img.png',
          categoryId: 1,
          user_id: 1,
          type: 'news',
          createdAt: '2020-12-01',
          updatedAt: '2020-12-01',
        },
        {
          name: 'testNew',
          content: 'This is a Testing New',
          image: 'http://testimage.test/img.png',
          categoryId: 1,
          user_id: 1,
          type: 'news',
          createdAt: '2020-12-01',
          updatedAt: '2020-12-01',
        },
        {
          name: 'testNew',
          content: 'This is a Testing New',
          image: 'http://testimage.test/img.png',
          categoryId: 1,
          user_id: 1,
          type: 'news',
          createdAt: '2020-12-01',
          updatedAt: '2020-12-01',
        },
        {
          name: 'testNew',
          content: 'This is a Testing New',
          image: 'http://testimage.test/img.png',
          categoryId: 1,
          user_id: 1,
          type: 'news',
          createdAt: '2020-12-01',
          updatedAt: '2020-12-01',
        },
        {
          name: 'testNew',
          content: 'This is a Testing New',
          image: 'http://testimage.test/img.png',
          categoryId: 1,
          user_id: 1,
          type: 'news',
          createdAt: '2020-12-01',
          updatedAt: '2020-12-01',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('news', null, {});
  },
};
