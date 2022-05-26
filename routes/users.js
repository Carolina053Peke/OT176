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
  userDelete,
  googleSingIn,
  googleRedirection,
  userInfo,
} = require('../controllers/userController');
const userValidation = require('../validations/user');
const upload = require('../utils/multer');
const awsImageUploader = require('../utils/awsImageUploader');
const userAuth = require('../middlewares/authenticated');
const authenticated = require('../middlewares/authenticated');
const authOwnership = require('../middlewares/authOwnership');
const { isLoggedIn } = require('../middlewares/googleSingIn');
const { sessionConfig } = require('../utils/cookieSetting');
require('../utils/googleConfig');

// User list
router.get('/users', authAdmin, userList);

// User edit
router.patch('/users/:id', userAuth, upload(), awsImageUploader, userEdit);

// User get data
router.get('/auth/me', authenticated, getData);

// User register
router.post('/auth/signup', userValidation.signup, signup);

// User login
router.post('/auth/login', userValidation.login, login);

// User delete
router.delete('/:id', authenticated, authOwnership('User'), userDelete);

// Google SingIn

router.use(sessionConfig);

router.use(passport.initialize());
router.use(passport.session());

router.get('/', (req, res) => {
  res.send('<a href=/users/google> Google Authentication </a>');
});

router.get('/google', googleSingIn());
router.get('/loggedIn', googleRedirection());
router.get('/session', isLoggedIn, userInfo);
router.get('/expired', (req, res) => res.send('Your session trough cookie has already expired, set the token authorization to continue'));
router.get('/unauthorized', (req, res) => res.sendStatus(401).send('Could not log in with Google'));

module.exports = router;
