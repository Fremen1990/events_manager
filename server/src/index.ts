import config from "config";
import sequelize, { dbConnectionStatus } from "./db/database";
import app from "./app";
const port = config.get<number>("port");

sequelize.sync({ force: true });

try {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port: http://localhost:${port}`);
  });
  dbConnectionStatus().then((resolve) => console.log(resolve));
} catch (error) {
  console.log(`Error occurred: ${error.message}`);
}
