"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Delivery_carts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      delivery_man_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Delivery_mans",
          key: "id",
        },
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Carts",
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Delivery_carts");
  },
};
