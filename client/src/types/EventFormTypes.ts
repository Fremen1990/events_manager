export interface EventFormBody {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
}

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  eventDate?: string;
}
