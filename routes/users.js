var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')
const userValidation = require('../validations/user.js')

const authAdmin = require('../middlewares/authAdmin')

router.post('/auth/signup', userValidation.signup, userController.signup)
router.post('/auth/login', userValidation.login, userController.login)


module.exports = router;
