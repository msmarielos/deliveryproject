"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ Order }) {
            this.hasMany(Order, {
                foreignKey: "client_id",
            });
        }
    }
    User.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        modelName: "User",
    });
    return User;
};