const { validationResult } = require('express-validator');
const db = require('../models');

const categoryController = {
  // Start Categories CRUD
	@@ -26,21 +27,26 @@ const categoryController = {
      })
      .catch((error) => res.json(error));
  },
  categoryList: (req, res) => {
    db.Category.findAll({
      attributes: ['name'],
    })
      .then((result) => {
        const response = {
          status: 200,
          message: 'OK',
          data: result,
        };
        res.json(response);
      })
      .catch((error) => {
        res.json(error);
      });
