const bcrypt = require("bcryptjs");
const {
    validationResult
} = require("express-validator");
const { request, response } = require("express");

const db = require("../models");
const { resetWatchers } = require("nodemon/lib/monitor/watch");

const userController = {
    signup: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        } else {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(possibleUser => {
                if (possibleUser) {
                    res.json('User already exists');
                } else {
                    db.User.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                    }).then((user) => {
                        let response = {
                            message: 'Account created successfully',
                            data: {
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                            }
                        };
                        res.json(response);
                    });
                }
            })
        }
    },
    login: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        } else {
            db.User.findOne({
                where: {
                    email: req.body.email,
                }
            }).then((user) => {

                if (user != undefined) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        console.log('User Authenticated')

                        let response = {
                            user
                        }
                        res.json(response)
                    } else {
                        res.json('The password is incorrect')
                    }

                } else {
                    res.json('User not found')
                }
            }).catch(() => {
                let error = {
                    ok: false
                }
                res.json(error)
            })
        }
    },
    getData: async (req = request, res = response) => {
        const token = req.headers.token;

        try {
            if (token) {
                const user = await db.User.findOne({
                    where: {
                        token
                    }
                })

                const { firstName, lastName, email, image, password, roleId } = user;

                if (user) {
                    res.status(200).json({
                        msg: {
                            firstName,
                            lastName,
                            email,
                            image,
                            roleId
                        }
                    })
                } else {
                    res.status(404).json({
                        msg: "User and credentials does not match"
                    })
                }
            }
        } catch (error) {
            return res.status(500).json({
                msg: 'Please contact the administrator'
            })
        }
    },
    delete: async (req = request, res = response) => {
        const user_id = Number(req.params.id);

        try {
            const user = await db.User.findOne({
                where: {
                    id: user_id,
                    is_deleted: false
                }
            });
    
            if (user) {
                await user.update({ is_deleted: true })
                
                res.json({
                    msg:"The user has been soft-deleted"
                });

            }else{
                res.status(404).json({
                    msg:`No users with id: ${user_id}, were found !`
                })
            }
        } catch (error) {
            return res.status(500).json({
                msg:"Pelase contact the administrator"
            })
        }

    }
};

module.exports = userController;