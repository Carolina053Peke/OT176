const { sequelize } = require("../models");
const { Op } = require("sequelize");
const db = require("../models");

const memberController = {

    readAll: async (req = request, res = response) => {
        try {
            const data = await db.Member.findAll();

            res.status(200).json({
                data
            });

        } catch (error) {
            res.status(400).json({
                msg: 'Please contact the administrator'
            })
        }
    },

    readOne: async (req, res) => {
        const { instagramUrl, facebookUrl, linkedinUrl } = req.query

        try {

            const data = await db.Member.findAll({where:{
                [Op.or]:[
                    {instagramUrl},
                    {facebookUrl},
                    {linkedinUrl}
                ]
            }});
           
            if (data.length > 0) {
                res.status(200).json(
                   await data
                )
            }else{
                res.status(404).json({
                    msg: 'Member not found in DB'
                });
            }

        } catch (error) {
            res.status(500).json({
                msg: "Please contact the administrator" 
            })
        }
    },

    create: async (req, res) => {
        const { name, facebookUrl, instagramUrl, linkedinUrl, image, description } = req.body

        try {
            await db.Member.create({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });

            res.status(200).json({
                msg: 'A new member has been created !!'
            })
        } catch (error) {
            return res.status(400).json(
                error.errors.map(err => {
                    return `msg: ${err.message}`
                })[0]
            )

        }
    },

    Update: async (req = request, res = response) => {

    },


    softDelete: async (req = request, res = response) => {

    },

    hardDelete: async (req = request, res = response) => {

    }

}

module.exports = memberController