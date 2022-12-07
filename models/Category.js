const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

// define columns
//     id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // category_name
    // String
    // Doesn't allow null values
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
