<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const users = require('../utils/users');
=======
const jwt = require('../utils/jwt');


const { findById } = require('../controllers/userController');
>>>>>>> 84c923b6da09d0b38b8cb54cc117b293381f54e9

//roleId 1 = admin; roleId 2 = user

const authAdmin = async (req, res, next) => {
<<<<<<< HEAD
	const token =
		req.body.token || req.query.token || req.headers['x-access-token'];

	try {
		const verifyToken = jwt.verify(token, 'secret');
		const user = await users.getById(verifyToken.id);

		if (!user) {
			return res.status(404).json({
				data: {
					msg: 'User not found',
				},
			});
		} else if (user.roleId != 1) {
			return res.status(403).json({
				data: {
					msg: 'Access denied',
=======
	const token = req.cookies.token || req.body.token || req.query.token || req.headers['x-access-token'];

	try {
		if (token) {
			const verifyToken = await jwt.verifyToken(token, process.env.SECRET);
			console.log('verifyToken', verifyToken)


			let tokenId = verifyToken.id
			const user = await findById(tokenId);

			if (!user) {
				return res.status(404).json({
					data: {
						msg: 'User not found',
					},
				});
			} else if (user.roleId != 1) {
				return res.status(403).json({
					data: {
						msg: 'Access denied',
					},
				});
			}

		} else {
			return res.status(403).json({
				data: {
					msg: 'Token Not Found',
>>>>>>> 84c923b6da09d0b38b8cb54cc117b293381f54e9
				},
			});
		}
		next();
	} catch (error) {
		return res.status(401).send('Invalid User');
	}
};

<<<<<<< HEAD
module.exports = { authAdmin };
=======
module.exports = authAdmin;
>>>>>>> 84c923b6da09d0b38b8cb54cc117b293381f54e9
