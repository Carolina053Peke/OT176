const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Testimonios extends Model {
    static associate() {
      // define association here
    }
  }
  Testimonios.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Testimonios',
      paranoid: true,
      timestamps: true,
    },
  );
  return Testimonios;
};
