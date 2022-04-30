const db = require('../models');

const categoryController = {
  // Start Categories CRUD
  categoryCreate: (req, res, next) => {

  },
  categoryList: (req, res, next) => {

  },
  categoryEdit: (req, res, next) => {

  },
  categoryDelete: (req, res) => {
    db.Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        const resolve = {
          status: 204,
          message: 'Category deleted successfully!',
          data: result,
        };
        res.json(resolve);
      })
      .catch((error) => res.json(error));
  },
  // End Categories CRUD
};

module.exports = categoryController;
