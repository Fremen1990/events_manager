import React, { useContext } from "react";
import moment from "moment";
import { EventsContext } from "../../context/EventsContext";

const EventItem = ({ event, index }: any) => {
  const { id, firstName, lastName, email, eventDate } = event;

  const { deleteEvent, updateEvent, setEditForm } = useContext(EventsContext);

  const handleUpdate = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setEditForm && setEditForm(true);
    updateEvent && updateEvent(id, { firstName, lastName, email, eventDate });
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    deleteEvent && deleteEvent(id);
  };

  return (
    <>
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{moment(eventDate).format("Do MM YYYY")}</td>
      <td>{moment(eventDate).fromNow()}</td>
      <td>
        <button onClick={handleUpdate}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </>
  );
};

export default EventItem;
