import React from "react";
import EventItem from "./EventItem";

const EventsTable = ({ events, deleteEvent }: any) => {
  const handleEditForm = () => {
    console.log("Edit");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Event date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event: any, index: number) => (
          <tr key={event.id}>
            <EventItem
              event={event}
              index={index}
              handleEditForm={handleEditForm}
              deleteEvent={deleteEvent}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventsTable;
