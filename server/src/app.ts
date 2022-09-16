import express from "express";
import routes from "./routes";
import ErrorHandler from "./error/ErrorHandler";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

app.use(ErrorHandler);

// console.log(`env: ${process.env.NODE_ENV}`);

export default app;
