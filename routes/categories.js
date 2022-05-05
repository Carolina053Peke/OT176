const express = require('express');

const router = express.Router();
const { categoryDelete, categoryDetail } = require('../controllers/categoryController');
const authAdmin = require('../middlewares/authAdmin');

// Category delete
router.delete('/categories/:id', authAdmin, categoryDelete);

// Category detail
router.get('/categories/:id', authAdmin, categoryDetail);

module.exports = router;
