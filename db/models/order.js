'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    dish: DataTypes.STRING,
    start_price: DataTypes.INTEGER,
    discount_price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    client_id: DataTypes.INTEGER,
    delivery_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};