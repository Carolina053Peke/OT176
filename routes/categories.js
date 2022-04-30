const express = require('express');

const router = express.Router();
const { categoryEdit } = require('../controllers/categoryController');
const categoryValidator = require('../validations/categories');
const authAdmin = require('../middlewares/authAdmin');
const awsImageUploader = require('../utils/awsImageUploader');

router.put('/categories/:id', authAdmin, categoryValidator, awsImageUploader, categoryEdit);

module.exports = router;
