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

    await queryInterface.bulkUpdate(
      "general_settings",
      {
        information_contact: JSON.stringify({
          address: "Av. Larco 123, Oficina 402, Miraflores, Lima - Perú",
          phone: "+51 987 654 321",
          email: "contacto@verusperu.com",
          businessHours: "Lunes a Viernes de 9:00 a.m. a 6:00 p.m.",
        }),
      },
      {
        id: 1,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkUpdate(
      "general_settings",
      {
        information_contact: JSON.stringify({}),
      },
      {
        id: 1,
      },
    );
  },
};
