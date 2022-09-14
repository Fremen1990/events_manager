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
// const dbConfig = config.get<Database>("database");
//
// const sequelize = new Sequelize(
//   dbConfig.database,
//   dbConfig.username,
//   dbConfig.password,
//   {
//     dialect: dbConfig.dialect,
//     storage: dbConfig.storage,
//     logging: dbConfig.logging,
//   }
// );

const sequelize = new Sequelize("addEvent", "admin", "password123", {
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});
export default sequelize;

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(
//       "Connection to Sqlite through Sequelize has been established successfully."
//     );
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();
