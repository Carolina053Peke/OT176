const express = require('express');

const router = express.Router();
const { categoryEdit, categoryDetail } = require('../controllers/categoryController');
const categoryValidator = require('../validations/categories');
const authAdmin = require('../middlewares/authAdmin');
const awsImageUploader = require('../utils/awsImageUploader');

// Category edit
router.put('/categories/:id', authAdmin, categoryValidator, awsImageUploader, categoryEdit);

// Category detail
router.get('/categories/:id', authAdmin, categoryDetail);

module.exports = router;
