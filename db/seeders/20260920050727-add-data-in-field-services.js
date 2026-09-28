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
        services: JSON.stringify([
          {
            id: 1774163917000,
            title: "Auditoría de proveedores",
            text_short:
              "Verificación presencial y legal de fábricas y proveedores antes de realizar pagos.",
            description_short:
              "Verificamos que tu proveedor exista, tenga capacidad real de producción y cumpla estándares antes de que firmes un contrato o pagues un adelanto.",
            description_long:
              "Antes de comprometer tu dinero con un proveedor nuevo, confirmamos que la fábrica es real, tiene la capacidad y el equipo necesario para cumplir tu pedido, y opera bajo condiciones legales y éticas adecuadas. Visitamos las instalaciones, entrevistamos al personal clave, revisamos documentación legal y de calidad, y evaluamos la línea de producción. El resultado es un reporte objetivo que te permite decidir si ese proveedor es confiable antes de enviar un solo dólar.",
            image:
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            slug: "auditoria-de-proveedores",
            icon_risk: "fa-solid fa-truck",
            title_risk: "Auditoría de proveedores",
            description_risk:
              "Le pagué a un proveedor que resultó ser una fábrica fantasma o sin capacidad real de producción.",
            isActive: true,
            which_includes: 'sasa',
            specific_process:'sasa'
            // gallery_images: [
            //   {
            //     id: 1758448303001,
            //     name: "Auditoría y control industrial",
            //     image:
            //       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303002,
            //     name: "Supervisión de carga en puerto",
            //     image:
            //       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303003,
            //     name: "Inspección de almacenes y stock",
            //     image:
            //       "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            // ],
          },
          {
            id: 1774164150000,
            title: "Inspección pre embarque",
            text_short:
              "Control de calidad y verificación física de la mercancía antes de que salga de fábrica.",
            description_short:
              "Comprobamos la cantidad, calidad, empaque y especificaciones de tu producto antes de que sea despachado, asegurando que recibas exactamente lo que compraste.",
            description_long:
              "Realizamos una inspección exhaustiva de la mercancía terminada siguiendo las normas internacionales de muestreo (AQL). Verificamos el conteo de unidades, el estado físico, las dimensiones, el funcionamiento, el marcaje de las cajas y la calidad del empaque para evitar sorpresas desagradables al momento de recibir tu carga en destino. El resultado es un informe gráfico y detallado que te otorga la luz verde para autorizar el pago final del embarque.",
            image:
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            slug: "inspeccion-pre-embarque",
            icon_risk: "fa-solid fa-industry",
            title_risk: "Inspección pre embarque",
            description_risk:
              "El producto que recibí no era el mismo que aprobé en las fotos o muestras.",
            isActive: true,
            which_includes: 'sasasa',
            specific_process:'sasasas'
            //  gallery_images: [
            //   {
            //     id: 1758448303004,
            //     name: "Auditoría y control industrial",
            //     image:
            //       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303005,
            //     name: "Supervisión de carga en puerto",
            //     image:
            //       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303006,
            //     name: "Inspección de almacenes y stock",
            //     image:
            //       "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            // ],
          },
          {
            id: 1774164320000,
            title: "Supervisión de carga",
            text_short:
              "Control y monitoreo en tiempo real del proceso de estiba y contenedorización.",
            description_short:
              "Aseguramos que tu mercancía sea cargada y asegurada correctamente en el contenedor para evitar daños durante el transporte internacional.",
            description_long:
              "Presenciamos y documentamos todo el proceso de carga en el contenedor o camión para garantizar que la mercancía sea manipulada adecuadamente. Verificamos la condición del contenedor, el acomodo y distribución del peso, el correcto sellado y la cantidad exacta de bultos estibados. Este control previene mermas, robos o daños estructurales por mala manipulación, entregándote un registro fotográfico y un reporte completo antes de que la unidad inicie su ruta.",
            image:
              "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200",
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            slug: "supervision-de-carga",
            icon_risk: "fa-solid fa-flask",
            title_risk: "Supervisión de carga",
            description_risk:
              "El contenedor llegó con menos cajas de las pactadas, o la carga se dañó en el camino.",
            isActive: true,
            which_includes: 'sasasas',
            specific_process:'sasasas'
            //  gallery_images: [
            //   {
            //     id: 1758448303007,
            //     name: "Auditoría y control industrial",
            //     image:
            //       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303008,
            //     name: "Supervisión de carga en puerto",
            //     image:
            //       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303009,
            //     name: "Inspección de almacenes y stock",
            //     image:
            //       "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            // ],
          },
          {
            id: 1774164500000,
            title: "Asesoría para importadores",
            text_short:
              "Acompañamiento estratégico y legal para optimizar tus procesos de importación.",
            description_short:
              "Te guiamos paso a paso en toda la cadena logística, trámites aduaneros y normativas vigentes para que importes de forma segura y rentable.",
            description_long:
              "Te brindamos consultoría especializada para resolver cualquier desafío en tus operaciones de comercio exterior. Analizamos la viabilidad de tus proyectos, calculamos costos totales en destino (landing costs), revisamos partidas arancelarias, restricciones non-arancelarias y te ayudamos a estructurar contratos comerciales seguros con proveedores internacionales. Nuestro objetivo es optimizar tus tiempos, reducir riesgos fiscales y maximizar la rentabilidad de tu negocio desde la primera compra.",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
            video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            slug: "asesoria-para-importadores",
            icon_risk: "fa-solid fa-truck-ramp-box",
            title_risk: "Asesoría para importadores",
            description_risk:
              "Es mi primera importación y no sé qué documentos, aranceles o permisos necesito.",
            isActive: true,
            which_includes: 'sasasasa',
            specific_process:'sasasas'
            //  gallery_images: [
            //   {
            //     id: 1758448303011,
            //     name: "Auditoría y control industrial",
            //     image:
            //       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303012,
            //     name: "Supervisión de carga en puerto",
            //     image:
            //       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            //   {
            //     id: 1758448303013,
            //     name: "Inspección de almacenes y stock",
            //     image:
            //       "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
            //     isActive: true,
            //   },
            // ],
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
        services: JSON.stringify([]),
      },
      {
        id: 1,
      },
    );
  },
};
