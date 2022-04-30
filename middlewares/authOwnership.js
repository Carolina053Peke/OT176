const { findById } = require('../controllers/userController');

const authOwnership = async (req, res, next) => {
  try {
    const user = await findById(req.user.id);
    const idParams = Number(req.params.id); // ID sent from params

    if (user.id !== idParams && user.roleId !== 1) {
      throw new Error('Access denied');
    }
    return next();
  } catch (error) {
    return res.status(403).json({
      data: {
        msg: 'Access denied',
      },
    });
  }
};

module.exports = authOwnership;
