"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("general_settings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      social_links: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      title1_start: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title2_start: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_start: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      text_button_left_start: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text_button_right_start: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      banners: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("current_timestamp"),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "current_timestamp on update current_timestamp",
        ),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("general_settings");
  },
};
