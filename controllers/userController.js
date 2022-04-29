const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../models');
const { createToken } = require('../utils/jwt');

const userController = {

  userList: (req, res, next) => {
    db.User.findAll()
      .then((result) => {
        const response = {
          status: 200,
          message: 'OK',
          data: result,
        };
        res.json(response);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  userEdit: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const {
      firstName, lastName, email, image,
    } = req.body;
    const user = db.User.findByPk(req.params.id);
    if (user !== '') {
      db.User.update(
        {
          firstName,
          lastName,
          email,
          image,
        },
        {
          where: {
            id: req.params.id,
          },
        },
      )
        .then((result) => {
          const response = {
            status: 200,
            message: 'User updated successfully!',
            data: result,
          };
          res.json(response);
        })
        .catch((error) => {
          res.json(error);
        });
    } else {
      const response = {
        status: 404,
        message: 'User not found!',
      };
      res.json(response);
    }
  },
  signup: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((possibleUser) => {
      if (possibleUser) {
        res.json('User already exists');
      } else {
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
        }).then((user) => {
          const response = {
            message: 'Account created successfully',
            data: {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
          };
          res.json(response);
        });
      }
    });
  },
  // End User CRUD
  login: async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    try {
      if (user !== undefined) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          console.log('User Authenticated');

          const token = createToken(user.id);

          res.cookie('token', token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true,
          });
          res.status(200).json({
            user,
            token,
          });
        } else {
          res.status(401).json({
            msg: 'The password is incorrect',
          });
        }
      } else {
        res.json('User not found');
      }
    } catch (error) {
      console.log(error);
    }
  },
  getData: async (req = request, res = response) => {
    const { token } = req.headers;

    try {
      if (token) {
        const user = await db.User.findOne({
          where: {
            token,
          },
        });

        const {
          firstName, lastName, email, image, password, roleId,
        } = user;

        if (user) {
          res.status(200).json({
            msg: {
              firstName,
              lastName,
              email,
              image,
              roleId,
            },
          });
        } else {
          res.status(404).json({
            msg: 'User and credentials does not match',
          });
        }
      }
    } catch (error) {
      return res.status(500).json({
        msg: 'Please contact the administrator',
      });
    }
  },
  delete: async (req = request, res = response) => {
    const userId = Number(req.params.id);

    try {
      const user = await db.User.findOne({
        where: {
          id: userId,
          is_deleted: false,
        },
      });

      if (user) {
        await user.update({ is_deleted: true });

        res.json({
          msg: 'The user has been soft-deleted',
        });
      } else {
        res.status(404).json({
          msg: `No users with id: ${userId}, were found !`,
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: 'Pelase contact the administrator',
      });
    }
  },
};

module.exports = userController;
