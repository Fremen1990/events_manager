import sequelize from "../db/database";
// @ts-ignore
import request from "supertest";
import app from "../app";

interface Result {
  message: string;
  status: number | string;
}

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

  it("returns status code 200 with all events", async () => {
    const response = await request(app).get("/api/events/all");
    const result = response.status;
    expect(result).toBe(200);
  });

  it.each`
    firstName         | lastName     | email                 | eventDate       | statusCode | message
    ${"Tomasz"}       | ${"Stanisz"} | ${"tomasz@gmail.com"} | ${"2022-10-31"} | ${201}     | ${"Event added"}
    ${"John"}         | ${"Doe"}     | ${"john@gmail.com"}   | ${"2022-08-15"} | ${201}     | ${"Event added"}
    ${""}             | ${"Doe"}     | ${"john@gmail.com"}   | ${"2022-08-15"} | ${400}     | ${"First name is required"}
    ${"a"}            | ${"Doe"}     | ${"john@gmail.com"}   | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
    ${"a".repeat(33)} | ${"Doe"}     | ${"john@gmail.com"}   | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
    ${"a".repeat(33)} | ${"Doe"}     | ${"john@gmail.com"}   | ${"2022-08-15"} | ${400}     | ${"Must be at least 2 and maximum 32 chars long"}
  `(
    "returns status code: $statusCode and message: $message when given $firstName, $lastName, $email, $eventDate",
    async ({ firstName, lastName, email, eventDate, statusCode, message }) => {
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
});
