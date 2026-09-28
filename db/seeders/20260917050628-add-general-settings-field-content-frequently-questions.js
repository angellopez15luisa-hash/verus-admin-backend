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
      content_frequently_questions: JSON.stringify([
        {
          id: 1773878336000,
          question: "¿Qué pasa si el proveedor se niega a la visita?",
          answer:
            "Es una señal de alerta en sí misma; lo documentamos en tu reporte como hallazgo de riesgo.",
          isActive: true,
          service_id:1774163917000
        },
        {
          id: 1773878336001,
          question:
            "¿La auditoría revisa también temas de cumplimiento social y laboral?",
          answer:
            "Sí, incluye una evaluación básica de condiciones laborales; si necesitas una auditoría social más profunda (tipo SMETA), la ofrecemos como servicio adicional.",
          isActive: true,
          service_id:1774163917000
        },
        {
          id: 1773878336002,
          question: "¿En qué países pueden auditar proveedores?",
          answer:
            "Cubrimos Perú y estamos ampliando cobertura en Latinoamérica y Asia; consulta disponibilidad para tu país de origen al reservar.",
          isActive: true,
          service_id:1774163917000
        },
        {
          id: 1773878336003,
          question: "¿Cuánto tiempo toma tener el reporte listo?",
          answer: "Entre 3 y 5 días hábiles desde la visita.",
          isActive: true,
          service_id:1774163917000
        },
        {
          id: 1773878336004,
          question: "¿Puedo pedir una auditoría de seguimiento más adelante?",
          answer:
            "Sí, muchos clientes la repiten cada 6-12 meses con proveedores recurrentes.",
          isActive: true,
          service_id:1774163917000
        },
      ]),
    }, {
      id:1
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkUpdate("general_settings", {
      content_frequently_questions: JSON.stringify([]),
    }, {
      id:1
    });
  },
};
