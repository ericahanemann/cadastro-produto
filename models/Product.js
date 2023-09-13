const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Product = db.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unit_price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  stock_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_stock_value: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

module.exports = Product;
