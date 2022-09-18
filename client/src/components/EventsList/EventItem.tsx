import React, { useContext } from "react";
import moment from "moment";
import { EventsContext } from "../../context/EventsContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";

const Td = styled.td`
  padding: 15px;
`;

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
      <Td>{index + 1}</Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>
      <Td>{email}</Td>
      <Td>{moment(eventDate).format("Do MM YYYY")}</Td>
      <Td>{moment(eventDate).fromNow()}</Td>
      <Td>
        <Button
          onClick={handleUpdate}
          variant="outlined"
          color="secondary"
          startIcon={<EditIcon color="secondary" />}
          data-testid="edit-button"
        />
      </Td>
      <Td>
        <Button
          onClick={handleDelete}
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon color="error" />}
          data-testid="delete-button"
        />
      </Td>
    </>
  );
};

export default EventItem;
