module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('slides', [
			{
				imageUrl: 'http://testimage.test/img.png',
				text: 'This is a Testing New',
				order: 1,
				organizationId: 1,
				createdAt: '2020-12-01',
				updatedAt: '2020-12-01',
			},
			{
				imageUrl: 'http://testimage.test/img.png',
				text: 'This is a Testing New',
				order: 1,
				organizationId: 1,
				createdAt: '2020-12-01',
				updatedAt: '2020-12-01',
			},
			{
				imageUrl: 'http://testimage.test/img.png',
				text: 'This is a Testing New',
				order: 1,
				organizationId: 1,
				createdAt: '2020-12-01',
				updatedAt: '2020-12-01',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('slides', null, {});
	},
};
