var express = require("express");
var router = express.Router();
const { userList, signup, login, userEdit } = require('../controllers/userController');
const userValidation = require('../validations/user.js')
const authAdmin = require('../middlewares/authAdmin')
const imageValidation = require('../validations/image')
const upload = require('../utils/multer')
const awsImageUploader = require('../utils/awsImageUploader')


router.get('/users', authAdmin, userList);
router.post("/users/:id", userEdit);
router.post('/signup', userValidation.signup, signup)
router.post('/login', userValidation.login, login)
router.post('/auth/upload',authAdmin, imageValidation, upload, awsImageUploader)

module.exports = router;
