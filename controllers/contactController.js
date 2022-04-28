const db = require("../models");

const contactController = {
    //Find all contacts
	list: async (req, res, next) => {
		try {
			const contact = await db.Contact.findAll({
				
			});

			return res.status(200).json({
				success: true,
				count: contact.length,
				data: contact,
			});
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
			});
		}
	},
}
module.exports = contactController;