import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db/data_base_conection";

type UserOptionalAttributes = Optional<IUser, "id_user">;

export class User
  extends Model<UserOptionalAttributes, IUser>
  implements IUser
{
  id_user!: number;
  id_rol!: number;
  email!: string;
  password!: string;
  created_at!: Date;
}

User.init(
  {
    id_user: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_rol: {
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: "rol",
        key: "id_rol",
      },
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user",
    timestamps: false,
  }
);
