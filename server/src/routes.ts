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
      .notEmpty()
      .withMessage("Last name is required")
      .bail()
      .isLength({ min: 2, max: 32 })
      .withMessage("Must be at least 2 and maximum 32 chars long"),
    check("email")
      .notEmpty()
      .withMessage("Email is required")
      .bail()
      .isEmail()
      .withMessage("Must be a valid email address"),
    check("eventDate")
      .notEmpty()
      .withMessage("Date is required")
      .isISO8601()
      .withMessage("Must be a valid date"),
    EventController.addEventHandler
  );
}

export default routes;
