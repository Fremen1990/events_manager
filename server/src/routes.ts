import { Express } from "express";
import EventController from "./controller/event.controller";
import { check } from "express-validator";

function routes(app: Express) {
  app.get("/api", EventController.welcomeHandler);
  app.get("/api/events/all", EventController.getAllEventsHanlder);
  app.post(
    "/api/events",
    check("firstName")
      .notEmpty()
      .withMessage("First name is required")
      .bail()
      .isLength({ min: 2, max: 32 })
      .withMessage("Must be at least 2 and maximum 32 chars long"),
    check("lastName")
      .isLength({ min: 2, max: 32 })
      .withMessage("Must be at least 2 and maximum 32 chars long"),
    EventController.addEventHandler
  );
}

export default routes;
