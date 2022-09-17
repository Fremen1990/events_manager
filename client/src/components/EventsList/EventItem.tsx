import React from "react";

const EventItem = ({ event, index, handleEditForm, deleteEvent }: any) => {
  const { id, firstName, lastName, email, eventDate } = event;

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    deleteEvent(id, index);
  };

  return (
    <>
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{eventDate}</td>
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
