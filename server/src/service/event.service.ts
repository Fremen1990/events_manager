import Event from "../model/Event.model";
import { EventResponseTypes, EventTypes } from "../types/EventTypes";

async function welcome() {
  return {
    message: "Hello in my AddEvent API!! :)",
    status: "OK",
  };
}

async function addEvent(event: EventTypes) {
  try {
    await Event.create(event);
    return event;
  } catch (error) {
    return error;
  }
}

async function getAllEvents(): Promise<EventTypes[]> {
  const events = await Event.findAll();
  return events;
}

export default { welcome, getAllEvents, addEvent };
