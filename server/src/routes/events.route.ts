import { Request, Response } from "express";

export default function getAllEvents(req: Request, res: Response) {
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

  res.statusCode = 200;
  res.send({ events });
}
