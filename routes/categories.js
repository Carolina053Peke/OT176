const express = require('express');

const router = express.Router();
const { categoryCreate, categoryDetail } = require('../controllers/categoryController');
const categoryValidator = require('../validations/categories');
const authAdmin = require('../middlewares/authAdmin');
const awsImageUploader = require('../utils/awsImageUploader');

// Category create
router.post('/categories', authAdmin, categoryValidator, awsImageUploader, categoryCreate);

// Category detail
router.get('/categories/:id', authAdmin, categoryDetail);

module.exports = router;
