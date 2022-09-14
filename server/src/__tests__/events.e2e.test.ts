import sequelize from "../db/database";
// @ts-ignore
import request from "supertest";
import app from "../app";
import Event from "../model/Event.model";
import { EventTypes } from "../types/EventTypes";

describe.skip("API status check", () => {
  it("should return 200 OK and welcome message", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello in my AddEvent API!! :)");
  });
});

describe("Events integration tests", () => {
  beforeAll(() => {
    sequelize.sync();
  });

  beforeEach(() => {
    return Event.destroy({ truncate: true });
  });

  const validEvent = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@domain.com",
    eventDate: new Date(),
  };

  const postEvent = async (event: EventTypes) => {
    return request(app).post("/api/events").send(event);
  };

  const getNewEvent = async () => {
    const response = await postEvent(validEvent);
    return response.body.event;
  };

  describe("POST /api/events", () => {
    it.each`
      firstName         | lastName          | email               | eventDate       | statusCode | message
      ${"John"}         | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${201}     | ${"Event added"}
      ${""}             | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"First name is required"}
      ${"a"}            | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"a".repeat(33)} | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"John"}         | ${""}             | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Last name is required"}
      ${"John"}         | ${"a"}            | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"John"}         | ${"a".repeat(33)} | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"John"}         | ${"Doe"}          | ${""}               | ${"2022-08-15"} | ${400}     | ${"Email is required"}
      ${"John"}         | ${"Doe"}          | ${"abc.com"}        | ${"2022-08-15"} | ${400}     | ${"Must be a valid email address"}
      ${"John"}         | ${"Doe"}          | ${"abc@com"}        | ${"2022-08-15"} | ${400}     | ${"Must be a valid email address"}
      ${"John"}         | ${"Doe"}          | ${"john@gmail.com"} | ${""}           | ${400}     | ${"Date is required"}
      ${"John"}         | ${"Doe"}          | ${"john@gmail.com"} | ${"not-a-date"} | ${400}     | ${"Must be a valid date"}
    `(
      "(VALIDATION) returns status code: $statusCode and message: $message when given $firstName, $lastName, $email, $eventDate",
      async ({
        firstName,
        lastName,
        email,
        eventDate,
        statusCode,
        message,
      }) => {
        const response = await postEvent({
          firstName: firstName,
          lastName: lastName,
          email: email,
          eventDate: eventDate,
        });
        expect(response.statusCode).toBe(statusCode);
        expect(response.body.message).toBe(message);
      }
    );

    it("creates new Event in Database when given valid data", async () => {
      await postEvent(validEvent);
      const events = await Event.findAll();
      expect(events.length).toBe(1);
    });

    it("creates new Event in Database with given event data", async () => {
      await postEvent(validEvent);
      const events = await Event.findAll();
      expect(events[0].firstName).toBe(validEvent.firstName);
      expect(events[0].lastName).toBe(validEvent.lastName);
      expect(events[0].email).toBe(validEvent.email);
      expect(events[0].eventDate).toBeDefined();
    });

    it("creates new Event with unique ID", async () => {
      await postEvent(validEvent);
      const events = await Event.findAll();
      expect(events[0].id).toBeTruthy();
      expect(events[0].id).not.toBe(null);
      expect(events[0].id.length).toEqual(36);
    });

    it("returns status code 404 when given invalid url", async () => {
      const response = await request(app)
        .post("/api/eventsasdtht")
        .send(validEvent);
      expect(response.statusCode).toBe(404);
    });
  });

  describe("GET /api/events/all", () => {
    const getAllEvents = async () => {
      return request(app).get("/api/events/all");
    };

    it("returns status code 200 and empty array when no events in database", async () => {
      const response = await getAllEvents();
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });

    it("returns array with one event", async () => {
      await postEvent(validEvent);
      const response = await getAllEvents();
      expect(response.body.length).toBe(1);
    });
  });

  describe("GET ONE /api/events/:id", () => {
    it("returns status code 404 when event with given id do not exist", async () => {
      const eventById = await request(app).get(`/api/events/5353636`);
      expect(eventById.statusCode).toBe(404);
    });

    it("returns status code 200 when event with given id exists", async () => {
      const { id } = await getNewEvent();
      const EventByIdResponse = await request(app).get(`/api/events/${id}`);
      expect(EventByIdResponse.statusCode).toBe(200);
    });

    it("returns event author first and last name from given event id", async () => {
      const { id, firstName, lastName } = await getNewEvent();
      const EventByIdResponse = await request(app).get(`/api/events/${id}`);
      expect(EventByIdResponse.body.firstName).toEqual(firstName);
      expect(EventByIdResponse.body.lastName).toEqual(lastName);
    });

    it("returns event author email from given event id", async () => {
      const { id, email } = await getNewEvent();
      const EventByIdResponse = await request(app).get(`/api/events/${id}`);
      expect(EventByIdResponse.body.email).toEqual(email);
    });

    it("returns event date name from given event id", async () => {
      const { id, eventDate } = await getNewEvent();
      const EventByIdResponse = await request(app).get(`/api/events/${id}`);
      expect(EventByIdResponse.body.eventDate).toEqual(eventDate);
    });
  });

  describe("PUT /api/events/:id", () => {
    const validEventUpdate: any = {
      firstName: "Kazik",
      lastName: "Kurczak",
      email: "test@email.com",
      eventDate: "2022-08-15",
    };

    const putEvent = async ({
      id = "not-a-valid-id",
      data = { validEventUpdate },
      url = "/api/events",
    } = {}) => {
      return request(app).put(`${url}/${id}`).send(data.validEventUpdate);
    };

    it("returns status code 404 when event with given id do not exist", async () => {
      const eventById = await putEvent();
      expect(eventById.statusCode).toBe(404);
    });

    it.each`
      firstName         | lastName          | email               | eventDate       | statusCode | message
      ${"John"}         | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${200}     | ${"Event updated"}
      ${""}             | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"First name is required"}
      ${"a"}            | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"a".repeat(33)} | ${"Doe"}          | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"John"}         | ${""}             | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Last name is required"}
      ${"John"}         | ${"a"}            | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"John"}         | ${"a".repeat(33)} | ${"john@gmail.com"} | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
      ${"John"}         | ${"Doe"}          | ${""}               | ${"2022-08-15"} | ${400}     | ${"Email is required"}
      ${"John"}         | ${"Doe"}          | ${"abc.com"}        | ${"2022-08-15"} | ${400}     | ${"Must be a valid email address"}
      ${"John"}         | ${"Doe"}          | ${"abc@com"}        | ${"2022-08-15"} | ${400}     | ${"Must be a valid email address"}
      ${"John"}         | ${"Doe"}          | ${"john@gmail.com"} | ${""}           | ${400}     | ${"Date is required"}
      ${"John"}         | ${"Doe"}          | ${"john@gmail.com"} | ${"not-a-date"} | ${400}     | ${"Must be a valid date"}
    `(
      "(VALIDATION) returns status code: $statusCode and message: $message when given $firstName, $lastName, $email, $eventDate",
      async ({
        firstName,
        lastName,
        email,
        eventDate,
        statusCode,
        message,
      }) => {
        const { id } = await getNewEvent();
        const eventByIdUpdateResponse = await request(app)
          .put(`/api/events/${id}`)
          .send({
            firstName: firstName,
            lastName: lastName,
            email: email,
            eventDate: eventDate,
          });

        expect(eventByIdUpdateResponse.statusCode).toBe(statusCode);
        expect(eventByIdUpdateResponse.body.message).toBe(message);
      }
    );

    it("returns updated event author first and last name from given event id", async () => {
      const { id } = await getNewEvent();
      const eventByIdUpdateResponse = await putEvent({ id });
      expect(eventByIdUpdateResponse.body.event.dataValues.firstName).toEqual(
        "Kazik"
      );
      expect(eventByIdUpdateResponse.body.event.dataValues.lastName).toEqual(
        "Kurczak"
      );
    });

    it("returns updated event author email from given event id", async () => {
      const { id } = await getNewEvent();
      const eventByIdUpdateResponse = await putEvent({ id });
      expect(eventByIdUpdateResponse.body.event.dataValues.email).toEqual(
        "test@email.com"
      );
    });

    it("returns updated event date name from given event id", async () => {
      const { id } = await getNewEvent();
      const eventByIdUpdateResponse = await putEvent({ id });
      expect(eventByIdUpdateResponse.body.event.dataValues.eventDate).toEqual(
        "2022-08-15T00:00:00.000Z"
      );
    });
  });

  describe("DELETE /api/events/:id", () => {
    const deleteEvent = async ({
      id = "not-a-valid-id",
      url = "/api/events",
    } = {}) => {
      return request(app).delete(`${url}/${id}`);
    };

    it("returns status code 404 when event with given id do not exist", async () => {
      const eventById = await deleteEvent();
      expect(eventById.statusCode).toBe(404);
    });

    it("returns status code 200 and message when event with given id is deleted", async () => {
      const { id } = await getNewEvent();
      const eventByIdDeleteResponse = await deleteEvent({ id });
      expect(eventByIdDeleteResponse.statusCode).toBe(200);
    });

    it("returns message Event deleted when event with given id is deleted", async () => {
      const { id } = await getNewEvent();
      const eventByIdDeleteResponse = await deleteEvent({ id });
      expect(eventByIdDeleteResponse.body.message).toBe("Event deleted");
    });
  });
});
