const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate({ User, Delivery_man }) {
            this.belongsTo(User, {
                    foreignKey: "client_id",
                }),
                this.belongsTo(Delivery_man, {
                    foreignKey: "delivery_id",
                });
        }
    }
    Order.init({
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
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Users",
                key: "id",
            },
        },
        delivery_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Delivery_mans",
                key: "id",
            },
        },
    }, {
        sequelize,
        modelName: "Order",
    });
    return Order;
};
