"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkUpdate("general_settings", {
      images_service: JSON.stringify([
        {
          id: 1758448303001,
          name: "Auditoría y control industrial",
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
          isActive: true,
          service_id: 1774163917000,
        },
        {
          id: 1758448303002,
          name: "Supervisión de carga en puerto",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
          isActive: true,
          service_id: 1774163917000,
        },
        {
          id: 1758448303003,
          name: "Inspección de almacenes y stock",
          image:
            "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
          isActive: true,
          service_id: 1774163917000,
        },
      ]),
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
