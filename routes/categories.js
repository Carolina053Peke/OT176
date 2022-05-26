const express = require('express');

const router = express.Router();
const {
  categoryList, categoryCreate, categoryEdit, categoryDetail, categoryDelete,
} = require('../controllers/categoryController');
const categoryValidator = require('../validations/categories');
const authAdmin = require('../middlewares/authAdmin');

// Categories list
router.get('/', authAdmin, categoryList);

// Category create
router.post('/', authAdmin, categoryValidator, categoryCreate);

// Category edit
router.put('/:id', authAdmin, categoryValidator, categoryEdit);

// Category detail
router.get('/:id', authAdmin, categoryDetail);

// Category delete
router.delete('/:id', authAdmin, categoryDelete);

module.exports = router;
