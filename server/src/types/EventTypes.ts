export interface EventTypes {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
}

export interface EventResponseTypes {
  message: string;
  event: {
    message: string;
    firstName: string;
    lastName: string;
    email: string;
    eventDate: Date;
  };
}
