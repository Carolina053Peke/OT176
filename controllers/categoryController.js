const { validationResult } = require('express-validator');
const db = require('../models');
const { pagination } = require('../utils/paginate');

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
      })
      .catch((error) => res.json(error));
  },
  categoryList: (req, res) => {
    const { limit, page } = req.query;
    db.Category.findAll({
      attributes: ['name'],
    })
      .then(async (result) => {
        const response = await pagination(db.Category, {}, page, limit);
        res.json(response);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  categoryEdit: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
      });
    }
    const category = db.Category.findByPk(req.params.id);
    if (category === null) {
      const response = {
        status: 404,
        message: 'Category not found',
        data: category,
      };
      res.json(response);
    } else {
      const { name, description, image } = req.body;
      db.Category.update(
        {
          name,
          description,
          image,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then((result) => {
          const response = {
            status: 200,
            message: 'Category updated successfully!',
            data: result,
          };
          res.json(response);
        })
        .catch((error) => res.json(error));
    }
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
