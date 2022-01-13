const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Order }) {
      User.belongsToMany(Order, { through: "Carts" });
      Order.belongsToMany(User, { through: "Carts" });
    }
  }
  Cart.init(
    {
      client_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      dish_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      counter: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
