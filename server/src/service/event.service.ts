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

export default { welcome, getAllEvents };