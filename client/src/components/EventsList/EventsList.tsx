import Header from "../common/Header";
import EventsListsStyle from "./EventsListStyle";

const EventsList = () => {
  return (
    <EventsListsStyle>
      <Header style={{ fontSize: 48 }}>Events List</Header>
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
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@doe.com</td>
            <td>2021-01-01</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </EventsListsStyle>
  );
};
export default EventsList;
