const express = require('express');

const router = express.Router();
const { categoryDelete } = require('../controllers/categoryController');
const authAdmin = require('../middlewares/authAdmin');

router.delete('/categories/:id', authAdmin, categoryDelete);

module.exports = router;
