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
        information_aditional: JSON.stringify({
          text_verify: "¿Vas a pagar por un contenedor\n que nunca has visto?",
          text_button_verify: "Reserva una verificación",
          iframe_map_contact:'sassasaa'
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
        information_aditional: JSON.stringify({}),
      },
      {
        id: 1,
      },
    );
  },
};
