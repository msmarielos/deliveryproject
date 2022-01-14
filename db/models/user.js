"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ Cart }) {
            this.hasMany(Cart, { foreignKey: "client_id" });  
        }
    }
    User.init({
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
