import express, { Request, Response } from "express";
import getAllEvents from "./routes/events.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/events/all", getAllEvents);

app.get("/api", (req: Request, res: Response) =>
  res.send({ message: "Hello in my AddEvent API!! :)" })
);

// console.log(`env: ${process.env.NODE_ENV}`);

export default app;
