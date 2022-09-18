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
  currentEventId?: string | null | undefined;
  loading?: boolean;
  success?: boolean;
  setSuccess?: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  errors?: ValidationErrors;
  events?: Event[];
  editForm?: boolean;
  setEditForm?: (editForm: boolean) => void;
  setEvents?: (events: Event[]) => void;
  addEvent?: (event: EventFormBody) => void;
  updateEvent?: (id: string, formData: EventFormBody) => void;
  deleteEvent?: (id: string) => Promise<void>;
  getEvent?: (id: string) => void;
  getEvents?: () => void;
  setErrors?: (errors: ValidationErrors) => void;
  eventToEdit?: EventFormBody | null;
  setEventToEdit?: (event: EventFormBody) => void;
  submitUpdateForm?: (
    id: string | null | undefined,
    formData: EventFormBody
  ) => void;
}
