const db = require("../models");
const models = require("../models");
const Organization = models.Organization
module.exports = {
    //Fetch all Organization
    fetchAll: async (req, res) => {
        await Organization.findAll()

            .then(function (Organizations) {
                res.status(200).json(Organizations);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    //Fetch a Organization

    fetchOne: async (req, res) => {

        await Organization.findByPk(req.params.id)
            .then(function (Organization) {
                res.status(200).json(Organization);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },


    // Create Organization

    create: (req, res) => {

        await Organization.create({
            name: req.body.name,
            image: req.body.image,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            welcomeText: req.body.welcomeText,
            aboutUsText: req.body.aboutUsText
        })
            .then(function (Organization) {
                res.status(200).json(Organization);
            })
            .catch(function (error) {
                res.status(500).json(error);
            })

    },


    //Update Organization

    organizationUpdate: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            errors: errors.array(),
          });
        } else {
            const { name, image, address, phone, email, welcomeText, aboutUsText} = req.body;
            db.Organization.update({
                name,
                image,
                address,
                phone,
                email,
                welcomeText,
                aboutUsText,
            })
            .then((result) => {
                const resolve = {
                    status: 200,
                    message: 'Public data organization updated successfully!',
                    data: result,
                };
                res.json(resolve);
            })
            .catch(error => res.json(error));
        }
    },

    //Delete Organization

    delete: (req, res) => {
        await Organization.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (deletedOrganization) {
                res.status(200).json(deletedOrganization);
            })
            .catch(function (error) {
                res.status(500).json(error);
            })
    }
};
