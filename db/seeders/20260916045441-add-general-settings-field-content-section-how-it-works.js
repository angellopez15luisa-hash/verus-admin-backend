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
        content_how_it_works: JSON.stringify([
          {
            id:1,
            title: "Reservas tu servicio",
            description:
              "Completas el formulario en línea y confirmas con un depósito vía PayPal.",
          },
          {
            id:2,
            title: "Coordinamos con tu proveedor",
            description:
              "Contactamos a la fábrica o al puerto/almacén según el servicio contratado.",
          },
          {
            id:3,
            title: "Verificamos en sitio",
            description:
              "Nuestro equipo audita, inspecciona o supervisa presencialmente, con evidencia en video.",
          },
          {
            id:4,
            title: "Recibes tu reporte",
            description:
              "Informe claro en 24-48 horas para decidir con total seguridad antes de pagar o embarcar.",
          },
        ]),
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

    await queryInterface.bulkUpdate("general_settings", {
      content_how_it_works: JSON.stringify([]),
    }, {
      id:1
    });
  },
};
