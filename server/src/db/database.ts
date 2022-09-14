import { Dialect, Sequelize } from "sequelize";
import config from "config";

interface Database {
  database: string;
  username: string;
  password: string;
  dialect: Dialect;
  storage: string;
  logging: boolean;
}
const dbConfig = config.get<Database>("database");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,
    storage: dbConfig.storage,
    logging: dbConfig.logging,
  }
);

export default sequelize;

export const dbConnectionStatus = async () => {
  try {
    await sequelize.authenticate();
    return "Connection to the Database has been established successfully.";
  } catch (error) {
    return `Unable to connect to the database:\n ${error}`;
  }
};
