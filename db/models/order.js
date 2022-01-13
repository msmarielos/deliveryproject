const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate() {}
  }
  Order.init(
    {
      dish: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      start_price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      discount_price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      photo_link: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
