import { Model, DataTypes, DecimalDataType } from "sequelize";

import { sequelize } from "../database/database";
import { Concession } from "./Concession";
import { Mines } from "./Mines";

export class Contacts extends Model {
  public id!: number;
  declare lastname: string;
  declare firstname: string;
  declare mail: string;
  declare phone: string;
  declare id_concessions: number;
}

Contacts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_concessions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "contacts",
    timestamps: false,
  }
);

Contacts.belongsTo(Concession,{foreignKey: "id_concessions"});
Concession.hasOne(Contacts, {foreignKey: "id_concessions"});

