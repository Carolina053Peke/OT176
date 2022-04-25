var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const userValidation = require('../validations/user.js');

router.post('/auth/signup', userValidation.signup, userController.signup);
router.post('/auth/login', userValidation.login, userController.login);
router.get('/auth/me', userValidation.authorizations.token, userController.getData);
router.delete('/auth/me', userValidation.authorizations.token, userController.getData);


module.exports = router;
