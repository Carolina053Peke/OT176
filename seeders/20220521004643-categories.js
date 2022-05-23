module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.bulkInsert('Categories', [
			{
				name: 'Technology',
				description: 'Technology description',
				image: 'https://www.google.com/url?sa=i&',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Technology',
				description: 'Technology description',
				image: 'https://www.google.com/url?sa=i&',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Technology',
				description: 'Technology description',
				image: 'https://www.google.com/url?sa=i&',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.bulkDelete('Categories', null, {});
	},
};
