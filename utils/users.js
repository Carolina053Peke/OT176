<<<<<<< HEAD

const Models = require('../models/index');

const findById = async (id) => {
    const user = await Models.Users.findByPk(id);
    return user;
=======
const db = require('../models');

const findById = async (id) => {
      const user = await db.User.findByPk(id);
      console.log('userAuth1', user)
      return user;
>>>>>>> 84c923b6da09d0b38b8cb54cc117b293381f54e9
  };

  module.exports = {findById}