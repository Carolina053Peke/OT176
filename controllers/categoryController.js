const db = require('../models');

const categoryController = {
  // Start Categories CRUD
  categoryCreate: (req, res, next) => {

  },
  categoryList: (req, res, next) => {

  },
  categoryDetail: (req, res) => {
    db.Category.findByPk({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        if (result === null) {
          const response = {
            status: 404,
            message: 'Category not found',
            data: result,
          };
          res.json(response);
        } else {
          const response = {
            status: 200,
            message: 'OK',
            data: result,
          };
          res.json(response);
        }
      })
      .catch((error) => res.json(error));
  },
  categoryEdit: (req, res, next) => {

  },
  categoryDelete: (req, res) => {
    const category = db.findByPk(req.params.id);
    if (category === null) {
      const resolve = {
        status: 404,
        message: 'Category not found',
        data: category,
      };
      res.json(resolve);
    } else {
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
    }
  },
  // End Categories CRUD
};

module.exports = categoryController;
