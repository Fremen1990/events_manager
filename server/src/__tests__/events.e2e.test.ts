import sequelize from "../db/database";
// @ts-ignore
import request from "supertest";
import app from "../app";
import Event from "../model/Event.model";

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
        const response = await request(app).post("/api/events").send({
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
      await request(app).post("/api/events").send(validEvent);
      const events = await Event.findAll();
      expect(events.length).toBe(1);
    });

    it("creates new Event in Database with given event data", async () => {
      await request(app).post("/api/events").send(validEvent);
      const events = await Event.findAll();
      expect(events[0].firstName).toBe(validEvent.firstName);
      expect(events[0].lastName).toBe(validEvent.lastName);
      expect(events[0].email).toBe(validEvent.email);
      expect(events[0].eventDate).toBeDefined();
    });

    it("returns status code 404 when given invalid url", async () => {
      const response = await request(app)
        .post("/api/eventsasdtht")
        .send(validEvent);
      console.log("response", response);
      expect(response.statusCode).toBe(404);
    });
  });
  describe("GET /api/events/all", () => {
    it("should return 200 OK and all events", async () => {
      const response = await request(app).get("/api/events/all");
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});
