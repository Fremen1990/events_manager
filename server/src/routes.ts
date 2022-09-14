import {Express } from "express";
import EventController from "./controller/event.controller";


function routes(app:Express){
  app.get('/api',EventController.welcomeHandler);
  app.get("/api/events/all", EventController.getAllEventsHanlder);
}

export default routes