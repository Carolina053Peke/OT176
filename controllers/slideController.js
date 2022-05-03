const { Slides } = require('../models');
const awsUpload = require('../utils/awsUpload');

const getSlides = async (req, res, next) => {
  try {
    const slides = await Slides.findAll({ order: [['order', 'ASC']] });
    res.json({ slides });
  } catch (error) {
    next(error);
  }
};

const createSlide = async (req, res, next) => {
  const { text, organizationId } = req.body;
  let { order } = req.body;
  try {
    if (typeof req.file === 'undefined') throw new Error('Image is required');
    if (!order) {
      order = await Slides.max('order') + 1;
    }
    const imageUrl = await awsUpload(req.file);
    const slide = await Slides.create({
      imageUrl, text, order, organizationId,
    });
    res.status(201).json({ slide });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSlides, createSlide,
};
