import Event from "../model/Event.model";
import { EventResponseTypes, EventTypes } from "../types/EventTypes";
import { v4 as uuidv4 } from "uuid";

async function welcome() {
  return {
    message: "Hello in my AddEvent API!! :)",
    status: "OK",
  };
}

async function addEvent(event: EventTypes) {
  try {
    const newEvent = { id: uuidv4(), ...event };
    await Event.create(newEvent);
    return newEvent;
  } catch (error) {
    return error;
  }
}

async function getAllEvents(): Promise<EventTypes[]> {
  const events = await Event.findAll();
  return events;
}

async function getEventById(id: string): Promise<any> {
  const event = await Event.findOne({ where: { id } });
  if (event) {
    return event;
  } else {
    return { message: "Event not found" };
  }
}

export default { welcome, getAllEvents, addEvent, getEventById };
