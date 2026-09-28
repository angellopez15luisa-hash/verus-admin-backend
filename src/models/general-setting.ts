import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { DBModels } from "../config";

export class GeneralSetting extends Model<
  InferAttributes<GeneralSetting>,
  InferCreationAttributes<GeneralSetting>
> {
  declare public id: CreationOptional<number>;
  declare public socialLinks: object | null;
  declare public title1Start: string;
  declare public title2Start: string;
  declare public descriptionStart: string;
  declare public textButtonLeftStart: string;
  declare public textButtonRightStart: string;
  declare public banners: object | null;
  declare public textHeaderSections: object | null;
  declare public services: object | null;
  declare public imagesService: object | null;
  declare public contentHowItWorks: object | null;
  declare public contentFrequentlyQuestions: object | null;
  declare public contentItemsTrusts: object | null;
  declare public informationContact: object | null;
  declare public informationAditional: object | null;

  public static associate(models: DBModels) {}
}

export const initGeneralSettingModel = (sequelize: Sequelize) => {
  GeneralSetting.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      socialLinks: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("socialLinks");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      title1Start: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title2Start: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descriptionStart: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      textButtonLeftStart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      textButtonRightStart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      banners: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("banners");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      textHeaderSections: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("textHeaderSections");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      contentHowItWorks: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("contentHowItWorks");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      contentFrequentlyQuestions: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("contentFrequentlyQuestions");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      contentItemsTrusts: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("contentItemsTrusts");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      informationContact: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("informationContact");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      services: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("services");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      imagesService: {
        type: DataTypes.JSON,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue("imagesService");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      },
      informationAditional: {
        type: DataTypes.JSON,
        allowNull: false,
         get() {
          const rawValue = this.getDataValue("informationAditional");
          if (typeof rawValue === "string") {
            try {
              return JSON.parse(rawValue);
            } catch (error) {
              return rawValue;
            }
          }
          return rawValue;
        },
      }
    },
    {
      sequelize,
      tableName: "general_settings",
      timestamps: true,
      defaultScope: {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
    },
  );
};
