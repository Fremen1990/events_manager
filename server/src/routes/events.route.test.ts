import { Request, Response } from "express";
import getAllEvents from "./events.route";

describe("Get all events request", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject = {};

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => (responseObject = result)),
    };
  });

  it("returns status code 200 with all events", () => {
    const expectedStatusCode = 200;
    const expectedResponse = {
      events: [
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
      ],
    };

    getAllEvents(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedResponse);
  });
});
