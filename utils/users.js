
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
>>>>>>> a2da9531fa943216bf87ae060b26836b16d00c7e
  };

  module.exports = {findById}