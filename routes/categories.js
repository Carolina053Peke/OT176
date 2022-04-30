const express = require('express');

const router = express.Router();
const { categoryCreate } = require('../controllers/categoryController');
const categoryValidator = require('../validations/categories');
const authAdmin = require('../middlewares/authAdmin');
const awsImageUploader = require('../utils/awsImageUploader');

router.post('/categories', authAdmin, categoryValidator, awsImageUploader, categoryCreate);

module.exports = router;
