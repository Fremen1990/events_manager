import sequelize from "../db/database";
// @ts-ignore
import request from "supertest";
import app from "../app";

describe("API status check", () => {
  it("should return 200 OK and welcome message", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello in my AddEvent API!! :)");
  });
});

describe("Event route integration tests", () => {
  beforeAll(() => {
    sequelize.sync();
  });

  it("returns status code 200 with all events", async () => {
    const response = await request(app).get("/api/events/all/");
    const result = response.status;
    expect(result).toBe(200);
  });
});
