const { Organization } = require('../models');

module.exports = {
  // Fetch all Organization
  fetchAll: async (req, res) => {
    await Organization.findAll()

      .then((Organizations) => {
        res.status(200).json(Organizations);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  // Fetch a Organization

  fetchOne: async (req, res) => {
    await Organization.findByPk(req.params.id)
      .then((Organization) => {
        res.status(200).json(Organization);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  // Create Organization

  create: async (req, res) => {
    await Organization.create({
      name: req.body.name,
      image: req.body.image,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      welcomeText: req.body.welcomeText,
      aboutUsText: req.body.aboutUsText,
    })
      .then((Organization) => {
        res.status(200).json(Organization);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
  getDadta: async (req, res) => {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        msg: 'Org name should be provided',
      });
    }

    try {
      const data = await Organization.findOne({
        where: {
          name,
        },
      });

      const { image, phone, address } = data;

      if (data) {
        res.status(200).json({
          name,
          image,
          phone,
          address,
        });
      }
    } catch (error) {
      res.status(404).json({
        msg: 'The data you are trying to access is not available',
      });
    }
  },
  // Update Organization

  update: async (req, res) => {
    await Organization.findByPk(req.params.id)

      .then((OrganizationToUpdate) => {
        OrganizationToUpdate.name = req.body.name;
        OrganizationToUpdate.image = req.body.image;
        OrganizationToUpdate.address = req.body.address;
        OrganizationToUpdate.phone = req.body.phone;
        OrganizationToUpdate.email = req.body.email;
        OrganizationToUpdate.welcomeText = req.body.welcomeText;
        OrganizationToUpdate.aboutUsText = req.body.aboutUsText;
        OrganizationToUpdate.save();
      })
      .then((updatedOrganization) => {
        res.status(200).json(updatedOrganization);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  // Delete Organization

  delete: async (req, res) => {
    await Organization.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedOrganization) => {
        res.status(200).json(deletedOrganization);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
};
