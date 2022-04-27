var express = require("express");
var router = express.Router();
const { userList, signup, login } = require('../controllers/userController');
const userValidation = require('../validations/user.js')
const authAdmin = require('../middlewares/authAdmin')

router.get('/users', authAdmin, userList);
router.post("/users/:id", userEdit);
router.post('/auth/signup', userValidation.signup, signup)
router.post('/auth/login', userValidation.login, login)
router.post('/auth/upload', adminAuth, upload, awsImageUploader)

module.exports = router;
