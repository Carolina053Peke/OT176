const {
  body,
  validationResult,
} = require('express-validator');

const {
  request,
  response
} = require('express');

const userValidator = {
  signup: [
    body('firstName').notEmpty().withMessage('You must complete the first name field').bail()
    .isAlpha()
    .withMessage('The first name must contain only letters, not numbers')
    .bail()
    .isLength({
      min: 2,
    })
    .withMessage('The first name must have more than 2 characters'),

    body('lastName').notEmpty().withMessage('You must complete the last name field').bail()
    .isAlpha()
    .withMessage('The last name must contain only letters, not numbers')
    .bail()
    .isLength({
      min: 2,
    })
    .withMessage('The last name must have more than 2 characters'),

    body('email').notEmpty().withMessage('You must complete the email field').bail()
    .isEmail()
    .withMessage('The email must be valid'),

    body('password').notEmpty().withMessage('You must complete the password field').bail()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,}$/)
    .withMessage('The password must have more than 8 characters, a number, an uppercase letter and a lowercase letter, and/or it can have some special character'),
  ],
  login: [
    body('email').notEmpty().withMessage('You must complete the email field').bail()
    .isEmail()
    .withMessage('The email must be valid'),

    body('password').notEmpty().withMessage('You must complete the password field').bail(),
  ],
  edit: [
    body('firstName')
    .custom(req => {
      if (req) {
        if (!req.match(/^[a-zA-Z]+$/g)) {
          throw new Error('The first name must contain only letters, not numbers');
        }
        if (req <= 2) {
          throw new Error('The first name must have more than 2 characters');
        }
      } else {
        return true
      }
    }),

    body('lastName')
    .custom(req => {
      if (req) {
        if (!req.match(/^[a-zA-Z]+$/g)) {
          throw new Error('The last name must contain only letters, not numbers');
        }
        if (req <= 2) {
          throw new Error('The last name must have more than 2 characters');
        }
      } else {
        return true
      }
    }),

    body('email')
    .custom(req => {
      if (req) {
        if (!req.match(/^\S+@\S+\.\S+$/)) {
          throw new Error('The email must be valid');
        } else {
          return true
        }
      }
    }),

    body('photo')
    .custom((value, {
      req,
    }) => {
      const {
        file
      } = req;

      const fileExtension = (file.originalname);
      if (!fileExtension.match(/.(jpg|jpeg|png|gif)$/i)) {
        throw new Error('The file must be JPG, JEPG, PNG or GIF');
      }
      return true;
    }),

  ],

  authorizations: {
    token: (req = request, res = response, next) => {
      const token = req.headers || req.cookies;

      if (!token) {
        return res.status(403).json({
          error: 'No credentials sent!'
        });
      }
      next();
    },
  },
};

module.exports = userValidator;