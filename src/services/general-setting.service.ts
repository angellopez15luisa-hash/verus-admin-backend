import {
  deleteFromCloudinary,
  getPublicIdFromUrl,
  uploadToCloudinary,
} from "../helpers";
import { GeneralSetting } from "../models";
import {
  GeneralSettingResponse,
  MessageResponse,
  GeneralSetting as GeneralSettingType,
  GeneralSettingUpdateBody,
  CustomError,
} from "../types";

export class GeneralSettingService {
  static getData = async (): Promise<GeneralSettingResponse> => {
    const result = await GeneralSetting.findOne({
      order: [["id", "asc"]],
    });
    return result.get({ plain: true }) as GeneralSettingResponse;
  };

  static getById = async (
    id: GeneralSettingType["id"],
  ): Promise<GeneralSetting> => {
    const generalSetting = await GeneralSetting.findByPk(id);
    if (!generalSetting) throw new CustomError("El registro no existe", 404);
    return generalSetting;
  };

static update = async (
    id: GeneralSettingType["id"],
    data: GeneralSettingUpdateBody,
  ): Promise<string> => {
    const generalSetting = await this.getById(id);

    console.log("1. OBJETO OBTENIDO DE LA BD:", generalSetting);

    const extractImageUrls = (items: any[]) => {
      if (!Array.isArray(items)) return [];
      return items
        .map((item: any) => {
          const imageUrl = item?.image;
          if (
            !imageUrl ||
            typeof imageUrl !== "string" ||
            imageUrl.startsWith("data:image")
          ) {
            return null;
          }
          return imageUrl;
        })
        .filter(Boolean);
    };

    for (const [key, value] of Object.entries(data)) {
      // 1. SI ES UN ARRAY (Tus carruseles, listas, etc.)
      if (Array.isArray(value)) {
        let rawOldValue =
          generalSetting?.dataValues?.[key] ?? generalSetting?.[key];

        if (typeof rawOldValue === "string") {
          try {
            rawOldValue = JSON.parse(rawOldValue);
          } catch (e) {
            rawOldValue = [];
          }
        }

        const oldItems = Array.isArray(rawOldValue) ? rawOldValue : [];

        // 🔀 RESPETAR EL NUEVO ORDEN DEL CLIENTE Y FUSIONAR DATOS EXISTENTES
        const processedItems = await Promise.all(
          value.map(async (incomingItem: any) => {
            // Buscamos si el elemento ya existía comparando su ID (compatible con Date.now())
            const existingItem = oldItems.find((item: any) => {
              const inc = incomingItem as any;
              const itm = item as any;

              if (inc?.key && itm?.key) return inc.key === itm.key;
              if (inc?.section && itm?.section) return inc.section === itm.section;

              // Comparamos los IDs convertidos a String para evitar problemas de tipos o Date.now()
              if (inc?.id && itm?.id) {
                return String(itm.id) === String(inc.id);
              }

              return false;
            });

            // Si existe, fusionamos. Si es nuevo, MANTENEMOS el id de Date.now() que traía
            let itemToProcess = existingItem
              ? { ...existingItem, ...incomingItem }
              : { ...incomingItem }; // <--- Mantiene el ID de Date.now() para elementos nuevos

            // --- 🚀 PROCESAR BASE64 A CLOUDINARY ---
            if (itemToProcess && typeof itemToProcess === "object") {
              const imgField = itemToProcess.image ? "image" : null;

              if (
                imgField &&
                typeof itemToProcess[imgField] === "string" &&
                itemToProcess[imgField].startsWith("data:image")
              ) {
                console.log(
                  `[Backend] Detectado Base64 en ${key}, subiendo a Cloudinary...`,
                );
                const cloudinaryUrl = await uploadToCloudinary(
                  itemToProcess[imgField],
                );
                itemToProcess[imgField] = cloudinaryUrl;
              }
            }

            return itemToProcess;
          }),
        );

        data[key] = processedItems;

        console.log(
          `VERIFICACIÓN ARREGLADA [${key}] -> Largo real antiguo:`,
          oldItems.length,
        );
        console.log(
          `VERIFICACIÓN FINAL [${key}] -> Largo total procesado:`,
          processedItems.length,
        );
        console.log(`--- PROCESANDO CAMPO: ${key} ---`);

        // 🖼️ GESTIÓN DE IMÁGENES HUÉRFANAS / ELIMINACIÓN EN CLOUDINARY
        const oldImages = extractImageUrls(oldItems);
        const newImages = extractImageUrls(data[key]);

        console.log("oldImages procesadas:", oldImages);
        console.log("newImages procesadas:", newImages);

        const imagesToDelete = oldImages.filter(
          (img) => !newImages.includes(img),
        );

        console.log("Imágenes a eliminar:", imagesToDelete);

        if (imagesToDelete.length > 0) {
          console.log("¡Entrando al bucle de borrado!");
          for (const imageUrl of imagesToDelete) {
            const publicId = getPublicIdFromUrl(imageUrl);
            console.log("Public ID a borrar:", publicId);
            if (publicId) {
              await deleteFromCloudinary(publicId);
              console.log("¡Borrada de Cloudinary con éxito!");
            }
          }
        }
      } 
      
      // 2. SI ES UN OBJETO PLANO (Para secciones de configuración como Información Adicional / SEO que manejan 'image')
      else if (value && typeof value === "object") {
        const updatedObject = { ...value };

        for (const [subKey, subVal] of Object.entries(updatedObject)) {
          if (subKey === "image" && typeof subVal === "string" && subVal.startsWith("data:image")) {
            console.log(`[Backend] Detectado Base64 en objeto ${key}.${subKey}, subiendo a Cloudinary...`);
            const cloudinaryUrl = await uploadToCloudinary(subVal);
            updatedObject[subKey] = cloudinaryUrl;
          }
        }

        data[key] = updatedObject;
      }

      // 3. SI VIENE COMO UN CAMPO PLANO DIRECTO EN LA RAÍZ
      else if (key === "image" && typeof value === "string" && value.startsWith("data:image")) {
        console.log(`[Backend] Detectado Base64 plano en la raíz [${key}], subiendo a Cloudinary...`);
        const cloudinaryUrl = await uploadToCloudinary(value);
        data[key] = cloudinaryUrl;
      }
    }

    // 3. Guardamos los cambios limpios en Sequelize (sin stringify duplicado)
    await generalSetting.update(data as any);
    return "Los datos se actualizaron satisfactoriamente.";
  };
}
