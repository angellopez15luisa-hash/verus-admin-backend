"use strict";

const { title } = require("node:process");

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
        text_header_sections: JSON.stringify([
          {
            title: "Riesgo",
            description:
              "Inconsistencias en la entrega de servicios, errores en reservas o fallas de coordinación operativa.",
            section: "risk",
          },
          {
            title: "¿Cómo funciona?",
            description:
              "Transparencia y Coherencia: Las empresas confiables alinean lo que prometen en su comunicación con la experiencia real del cliente, evitando expectativas falsas.",
            section: "how-it-works",
          },

          {
            title: "Preguntas Frecuentes",
            description:
              "Resolvemos tus dudas más comunes sobre nuestros productos, métodos de pago y tiempos de respuesta. Consulta nuestra sección de preguntas frecuentes para obtener información rápida y detallada.",
            section: "frequently-questions",
          },
          {
            title: "Confianza",
            description:
              "Transparencia y Coherencia: Las empresas confiables alinean lo que prometen en su comunicación con la experiencia real del cliente, evitando expectativas falsas.",
            section: "trust",
          },
          {
            title: "Contacto",
            description:
              "Comunícate con nosotros para resolver cualquier consulta sobre nuestros servicios de auditoría, inspección y cumplimiento normativo.",
            section: "contact",
          },
          {
            title: "Servicios",
            description:
              "En nuestra plataforma te ofrecemos una experiencia integral adaptada a lo que necesitas. Nos enfocamos en garantizar calidad, agilidad y un soporte constante en cada una de nuestras áreas de atención",
            section: "services",
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

    await queryInterface.bulkUpdate(
      "general_settings",
      {
        text_header_sections: JSON.stringify([]),
      },
      {
        id: 1,
      },
    );
  },
};
