import Event from "../model/Event.model";
import { EventResponseTypes, EventTypes } from "../types/EventTypes";

async function welcome() {
  return {
    message: "Hello in my AddEvent API!! :)",
    status: "OK",
  };
}

async function getAllEvents() {
  const events = [
    {
      firstName: "Tomasz",
      lastName: "Stanisz",
      email: "tomasz@stanisz.com",
      eventDate: "31-10-2022",
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "johnz@dooe.com",
      eventDate: "31-06-2022",
    },
  ];

  return events;
}

async function addEvent(event: EventTypes) {
  try {
    await Event.create(event);
    return event;
  } catch (error) {
    return error;
  }
}

export default { welcome, getAllEvents, addEvent };
