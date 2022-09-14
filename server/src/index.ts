import config from "config";
import sequelize from "./db/database";
import app from "./app";
const port = config.get<number>("port");

sequelize.sync({ force: true });

try {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port: http://localhost:${port}`);
  });
} catch (error) {
  console.log(`Error occurred: ${error.message}`);
}
