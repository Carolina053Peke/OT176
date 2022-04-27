"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
<<<<<<< HEAD:models/Activitie.js
  }
  activitie.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Activity",
      paranoid: true,
    }
  );
  return Activity;
};
=======
  };
  Members.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    deleteAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};
>>>>>>> a2da9531fa943216bf87ae060b26836b16d00c7e:models/members.js
