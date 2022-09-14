import { Request, Response } from "express";
import EventService from "../service/event.service";

async function welcomeHandler(req: Request, res: Response) {
  const message = await EventService.welcome();
  res.send(message);
}

async function addEventHandler(req: Request, res: Response) {
  try {
    const event = await EventService.addEvent(req.body);
    res.status(201).json({ message: "Event added", event: { ...event } });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getAllEventsHanlder(req: Request, res: Response) {
  const events = await EventService.getAllEvents();
  res.json(events);
}

async function getEventByIdHandler(req: Request, res: Response) {
  const id = req.params.id;
  const event = await EventService.getEventById(id);
  if (event.message) {
    return res.status(404).json(event.message);
  }
  res.json(event);
}

async function updateEventHandler(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const event = await EventService.updateEvent(id, req.body);
    if (event.message) {
      return res.status(404).json(event.message);
    }
    res.json({ message: "Event updated", event: { ...event } });
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteEventHandler(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const event = await EventService.deleteEvent(id);
    if (event.message.includes("not found")) {
      return res.status(404).json(event.message);
    }
    res.json({ message: "Event deleted", event: { ...event } });
  } catch (error) {
    res.status(500).json(error);
  }
}

export default {
  welcomeHandler,
  getAllEventsHanlder,
  addEventHandler,
  getEventByIdHandler,
  updateEventHandler,
  deleteEventHandler,
};
