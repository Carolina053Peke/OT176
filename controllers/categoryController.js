const { validationResult } = require('express-validator');
const db = require('../models');

const categoryController = {
  // Start Categories CRUD
  categoryCreate: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { name, description, image } = req.body;
    db.Category.create({
      name,
      description,
      image,
    })
      .then((result) => {
        const response = {
          status: 200,
          message: 'Category created successfully!',
          data: result,
        };
        res.json(response);
      });
  },
  categoryList: (req, res, next) => {

  },
  categoryEdit: (req, res, next) => {

  },
  categoryDelete: (req, res, next) => {

  },
  // End Categories CRUD
};

module.exports = categoryController;
