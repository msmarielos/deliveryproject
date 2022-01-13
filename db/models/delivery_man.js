const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Delivery_man extends Model {
        static associate({ Order }) {
            this.hasMany(Order, {
                foreignKey: "delivery_id",
            });
        }
    }
    Delivery_man.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: "Delivery_man",
    });
    return Delivery_man;
};
