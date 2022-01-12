"use strict";
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("Orders", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            dish: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            start_price: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            discount_price: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            location: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            client_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
            delivery_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Delivery_mans",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable("Orders");
    },
};