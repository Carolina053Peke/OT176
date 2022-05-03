const express = require('express');
const { getSlides, deleteSlide } = require('../controllers/slideController');
const authenticated = require('../middlewares/authenticated');
const authAdmin = require('../middlewares/authAdmin');

const router = express.Router();

router.get('/', authenticated, authAdmin, getSlides);
router.delete('/:id', authenticated, authAdmin, deleteSlide);

module.exports = router;
