var express = require("express");
var router = express.Router();
const userController= require('../controllers/userController');
const userValidation = require('../validations/user.js')
const authAdmin = require('../middlewares/authAdmin')
const imageValidation = require('../validations/image')
const upload = require('../utils/multer')
const awsImageUploader = require('../utils/awsImageUploader')


router.get('/users', authAdmin, userController.userList);
router.get('/auth/me', userValidation.authorizations.token, userController.getData);
router.post("/users/:id", userController.userEdit);
router.post('/signup', userValidation.signup, userController.signup)
router.post('/login', userValidation.login, userController.login)
router.post('/auth/upload',authAdmin, imageValidation, upload, awsImageUploader)
router.delete('/:id', [], userController.delete);

module.exports = router;
