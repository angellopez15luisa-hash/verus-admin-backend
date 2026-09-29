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
          iframe_map_contact:
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8062145937647!2d-77.06347361312363!3d-11.987906908262051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce518d66053f%3A0x7626f999653d75ed!2sMetro!5e0!3m2!1ses!2spe!4v1790612414361!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
          title_seo: "China Verus | Calidad y Proveedores",
          description_seo: "Servicios de inspección de carga en Asia.",
          keywords_seo: "inspección, contenedores, china, perú",
          ogTitle_title_seo: "China Verus",
          ogDescription_seo: "Servicios de inspección de carga.",
          image: "https://res.cloudinary.com/mivh0wir/image/upload/v1790555526/banners/hcrm805ziztxfgre33yz.jpg",
          twitterCard_seo: "summary_large_image",
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
