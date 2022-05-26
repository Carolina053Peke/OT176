const { validationResult } = require('express-validator');
const db = require('../models');
const { pagination } = require('../utils/paginate');

const categoryController = {
  // Start Categories CRUD
  categoryCreate: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      const { name, description, image } = req.body;
      const data = await db.Category.create({
        name,
        description,
        image,
      });
      res.status(200).json({
        message: 'Category created successfully!',
        data,
      });
    } catch (error) {
      res.json(error);
    }
  },
  categoryList: async (req, res) => {
    try {
      const { limit, page } = req.query;
      const response = await pagination(db.Category, {}, page, limit);
      res.json(response);
    } catch (error) {
      res.json(error);
    }
  },
  categoryEdit: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
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
        await db.Category.update(
          {
            name,
            description,
            image,
          },
          {
            where: {
              id: req.params.id,
            },
          },
        );
        res.status(200).json({
          message: 'Category updated successfully!',
        });
      }
    } catch (error) {
      res.json(error);
    }
  },
  categoryDetail: async (req, res) => {
    try {
      const categoryFiltered = await db.Category.findByPk(req.params.id);
      if (categoryFiltered === null) {
        res.status(404).json({
          message: 'Category not found',
          data: categoryFiltered,
        });
      }
      res.status(200).json({
        message: 'OK',
        data: categoryFiltered,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  categoryDelete: async (req, res) => {
    try {
      const category = await db.Category.findByPk(req.params.id);
      if (category === null) {
        res.status(404).json({
          message: 'Category not found',
        });
      } else {
        await db.Category.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json({
          message: 'Category deleted successfully!',
        });
      }
    } catch (error) {
      res.json(error);
    }
  },
  // End Categories CRUD
};

module.exports = categoryController;
