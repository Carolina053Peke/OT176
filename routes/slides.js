const express = require('express');
const { getSlides, createSlide } = require('../controllers/slideController');
const authenticated = require('../middlewares/authenticated');
const authAdmin = require('../middlewares/authAdmin');
const upload = require('../utils/multer');

const router = express.Router();

router.get('/', authenticated, authAdmin, getSlides);
router.post('/', authenticated, authAdmin, upload('imageUrl'), createSlide);

module.exports = router;
