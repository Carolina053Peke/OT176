module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('testimonials', [
			{
				name: 'John Doe',
				image: 'http://testimage.test/img.png',
				content: 'This is a Testing New',
				createdAt: '2020-12-01',
				updatedAt: '2020-12-01',
			},
			{
				name: 'John Doe',
				image: 'http://testimage.test/img.png',
				content: 'This is a Testing New',
				createdAt: '2020-12-01',
				updatedAt: '2020-12-01',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('testimonials', null, {});
	},
};
