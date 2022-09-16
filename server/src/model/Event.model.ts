import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import sequelize from "../db/database";

export default class Event extends Model<
  InferAttributes<Event>,
  InferCreationAttributes<Event>
> {
  declare id: CreationOptional<string>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare eventDate: Date;
}
Event.init(
  {
    id: { primaryKey: true, type: DataTypes.STRING, unique: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    eventDate: { type: DataTypes.DATE },
  },
  {
    tableName: "events",
    modelName: "Event",
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
    sequelize,
  }
);
