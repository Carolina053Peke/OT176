const express = require('express');

const router = express.Router();
const passport = require('passport');
const authAdmin = require('../middlewares/authAdmin');
const {
  userList,
  signup,
  login,
  userEdit,
  getData,
} = require('../controllers/userController');
const userValidation = require('../validations/user');
const upload = require('../utils/multer');
const awsImageUploader = require('../utils/awsImageUploader');
const userController = require('../controllers/userController');
const userAuth = require('../middlewares/authenticated');
const imageValidator = require('../validations/image');
const authenticated = require('../middlewares/authenticated');
const authOwnership = require('../middlewares/authOwnership');
const { isLoggedIn } = require('../middlewares/googleSingIn');
const { sessionConfig } = require('../utils/cookieSetting');
require('../utils/googleConfig');

// User list
router.get('/users', authAdmin, userList);
// User edit
router.patch('/users/:id', userAuth, userValidation.signup, imageValidator, awsImageUploader, userEdit);

router.get('/auth/me', userValidation.authorizations.token, getData);
router.get('/auth/me', userValidation.authorizations.token, userController.getData);
router.post('/auth/signup', userValidation.signup, signup);
router.post('/auth/login', userValidation.login, login);
router.post('/auth/awsImgUpload', authAdmin, upload, imageValidator, awsImageUploader);
router.delete('/:id', authenticated, authOwnership('User'), userController.delete);

// Google SingIn

router.use(sessionConfig);

router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
  res.send('<a href=/users/google> Google Authentication </a>');
});
router.get('/google', userController.googleSingIn());
router.get('/loggedIn', userController.googleRedirection());
router.get('/session', isLoggedIn, userController.userInfo);
router.get('/expired', (req, res) => res.send('Your session trough cookie has already expired, set the token authorization to continue'));
router.get('/unauthorized', (req, res) => res.sendStatus(401).send('Could not log in with Google'));

module.exports = router;
