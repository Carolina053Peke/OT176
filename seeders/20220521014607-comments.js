module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'comments',
			[
				{
					user_id: 1,
					body: 'lalala',
					news_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('comments', null, {});
	},
};
