const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Delivery_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Delivery_man, Cart }) {
      Cart.belongsToMany(Delivery_man, { through: "Delivery_carts" });
      Delivery_man.belongsToMany(Cart, { through: "Delivery_carts" });
    }
  }
  Delivery_cart.init(
    {
      delivery_man_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Delivery_mans",
          key: "id",
        },
      },
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Carts",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Delivery_cart",
    }
  );
  return Delivery_cart;
};
