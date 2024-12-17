const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the CoffeeShop model
const CoffeeShop = sequelize.define('CoffeeShop', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = CoffeeShop;

