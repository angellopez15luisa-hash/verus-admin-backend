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

    await queryInterface.bulkInsert("general_settings", [
      {
        social_links: JSON.stringify([
          { key: "instagram", url: "https://instagram.com/aroneventosperu" },
          { key: "facebook", url: "https://facebook.com/aroneventosperu" },
          { key: "tiktok", url: "https://tiktok.com/@el.indomable35" },
          { key: "twitter", url: "https://twitter.com/..." },
          { key: "whatsapp", url: "https://wa.me/..." },
        ]),
        title1_start: "¿Vas a pagar por un contenedor",
        title2_start: "title2_start",
        description_start:
          "Cada año, importadores en Perú y Latinoamérica pierden miles de dólares por proveedores que no existen, mercadería que no cumple lo pactado o contenedores mal cargados que llegan dañados. Nosotros verificamos tu proveedor, tu producto y tu carga antes de que el dinero salga de tu cuenta — no después de que ya sea tarde para reclamar.",
        text_button_left_start: "Reserva una verificación",
        text_button_right_start: "Ver los 4 servicios",
        banners: JSON.stringify([
          {
            id: 1,
            image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200",
            active:true
          }
        ])
      },
    ]);
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
