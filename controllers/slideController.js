const { Slides } = require('../models');

const getSlides = async (req, res, next) => {
  try {
    const slides = await Slides.findAll({ order: [['order', 'ASC']] });
    res.json({ slides });
  } catch (error) {
    next(error);
  }
};

const deleteSlide = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error('Invalid Id');
    const slide = await Slides.findByPk(id);
    if (!slide) throw new Error('Item not found');
    await slide.destroy();
    res.json({ message: 'Delete Success', slide });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSlides, deleteSlide,
};
