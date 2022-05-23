module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'members',
			[
				{
					name: 'John Doe',
					facebookUrl: 'https://www.facebook.com/john.doe',
					instagramUrl: 'https://www.instagram.com/john.doe',
					linkedinUrl: 'https://www.linkedin.com/john.doe',
					image: 'https://randomuser.me/api/portraits/',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
					deletedAt: new Date(),
					createdAt: '2020-12-01',
					updatedAt: '2020-12-01',
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('members', null, {});
	},
};
