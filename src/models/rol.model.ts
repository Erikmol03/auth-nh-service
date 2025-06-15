import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db/data_base_conection";

type RolOptionalAttributes = Optional<IRol, "id_rol">;

export class Rol extends Model<RolOptionalAttributes, IRol> implements IRol {
  id_rol!: number;
  rol!: string;
}

Rol.init(
  {
    id_rol: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: {
      type: DataTypes.ENUM("Admin", "Collaborator"),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "rol",
    timestamps: false,
  }
);
