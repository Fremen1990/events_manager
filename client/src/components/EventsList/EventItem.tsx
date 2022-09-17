import React from "react";
import moment from "moment";

const EventItem = ({ event, index, handleEditForm, deleteEvent }: any) => {
  const { id, firstName, lastName, email, eventDate } = event;

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    deleteEvent(id);
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
        <button onClick={handleEditForm}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </>
  );
};

export default EventItem;
