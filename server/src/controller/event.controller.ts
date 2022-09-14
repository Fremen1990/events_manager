import {Request, Response} from "express";
import EventService from "../service/event.service";

 async function welcomeHandler(req: Request, res: Response) {
    const message = await EventService.welcome();
    res.send(message);
  }

async function getAllEventsHanlder(req: Request, res: Response) {
 const events = await EventService.getAllEvents()  ;
 res.send(events);
 }

export default {welcomeHandler, getAllEventsHanlder} ;