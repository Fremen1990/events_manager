import { Request, Response } from "express";
import EventService from "../service/event.service";
import { validationResult } from "express-validator";

async function welcomeHandler(req: Request, res: Response) {
  const message = await EventService.welcome();
  res.send(message);
}

async function addEventHandler(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errors.array()[0];
    return res
      .status(400)
      .json({ error: { value: error.value }, message: error.msg });
  }
  try {
    const event = await EventService.addEvent(req.body);
    res.status(201).json({ message: "Event added", event: { ...event } });
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getAllEventsHanlder(req: Request, res: Response) {
  const events = await EventService.getAllEvents();
  res.send(events);
}

export default { welcomeHandler, getAllEventsHanlder, addEventHandler };
