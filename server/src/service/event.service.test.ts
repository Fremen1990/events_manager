import { Request, Response } from "express";
import EventService from "./event.service";

describe("event.service", () => {
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

    it("returns an array", async () => {
       const result =  await EventService.getAllEvents();
        expect(result.length).toBeTruthy()
    });
});
