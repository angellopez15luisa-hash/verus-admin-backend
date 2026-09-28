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
      content_items_trusts: JSON.stringify([
        {
    "id": 1718500001001,
    "title": "ISO 9001",
    "subtitle": "desde 2008",
    "description": "Certificación ISO9001:2015 del sistema de gestión de la calidad.",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001002,
    "title": "ISO/IEC 17020 & 17025",
    "subtitle": "desde 2008",
    "description": "Para cualificación y capacidad de garantía técnica y de calidad.",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001003,
    "title": "SEDEX",
    "subtitle": "desde 2019",
    "description": "Compañía de Auditoría Afiliada a Sedex (AAC).",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001004,
    "title": "ISO 14001",
    "subtitle": "desde 2012",
    "description": "Certificación internacional en sistemas de gestión ambiental.",
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001005,
    "title": "ISO 45001",
    "subtitle": "desde 2015",
    "description": "Estándar global para la seguridad y salud en el trabajo.",
    "image": "https://images.unsplash.com/photo-1581094713122-995d35f55a48?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001006,
    "title": "BASC",
    "subtitle": "desde 2017",
    "description": "Control y seguridad para la cadena de suministro internacional.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001007,
    "title": "IECEX",
    "subtitle": "desde 2020",
    "description": "Certificación para equipos en áreas con atmósfera explosiva.",
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001008,
    "title": "HACCP",
    "subtitle": "desde 2014",
    "description": "Análisis de peligros y puntos críticos de control en procesos.",
    "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001009,
    "title": "ISO 27001",
    "subtitle": "desde 2021",
    "description": "Certificación en gestión de la seguridad de la información.",
    "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400",
    "isActive": true
  },
  {
    "id": 1718500001010,
    "title": "GMP+",
    "subtitle": "desde 2018",
    "description": "Estándar global enfocado en la seguridad alimentaria.",
    "image": "https://images.unsplash.com/photo-1584727638683-13834e5658e2?q=80&w=400",
    "isActive": true
  }
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
      content_items_trusts:JSON.stringify([])
    }, {
      id:1
    });
  },
};
