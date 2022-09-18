import { Dispatch, SetStateAction } from "react";

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

export interface Event {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}

export interface EventsContextType {
  loading?: boolean;
  success?: boolean;
  setSuccess?: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  errors?: ValidationErrors;
  events?: Event[];
  setEditForm?: (editForm: boolean) => void;
  setEvents?: (events: Event[]) => void;
  addEvent?: (event: EventFormBody) => void;
  updateEvent?: (id: string, formData: EventFormBody) => void;
  deleteEvent?: (id: string) => Promise<void>;
  getEvent?: (id: string) => void;
  getEvents?: () => void;
  setErrors?: (errors: ValidationErrors) => void;
}
