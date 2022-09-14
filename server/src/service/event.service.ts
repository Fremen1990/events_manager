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

interface Event {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

async function addEvent(event: Event) {
  const response = { message: "Event added", event: { ...event } };
  return response;
}

export default { welcome, getAllEvents, addEvent };
