import express  from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

// console.log(`env: ${process.env.NODE_ENV}`);

export default app;
