import { Express } from "express";
import EventController from "./controller/event.controller";
import validationEvent from "./middleware/validationEvent";

function routes(app: Express) {
  app.get("/api", EventController.welcomeHandler);

  app.post("/api/events", validationEvent, EventController.addEventHandler);

  app.get("/api/events/all", EventController.getAllEventsHanlder);

  app.get("/api/events/:id", EventController.getEventByIdHandler);

  app.put(
    "/api/events/:id",
    validationEvent,
    EventController.updateEventHandler
  );

  app.delete("/api/events/:id", EventController.deleteEventHandler);
}

export default routes;
