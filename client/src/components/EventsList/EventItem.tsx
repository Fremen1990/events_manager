import React from "react";

const EventItem = ({ event, index, handleEditForm, handleDelete }: any) => {
  const { firstName, lastName, email, eventDate } = event;

  return (
    <tr>
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
    </tr>
  );
};

export default EventItem;
