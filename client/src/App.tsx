import EventForm from "./components/EventForm/EventForm";
import Layout from "./components/Layout/Layout";
import EventsList from "./components/EventsList/EventsList";

function App() {
  return (
    <Layout>
      <EventForm />
      <EventsList />
    </Layout>
  );
}

export default App;

/*
TODO - Add a new component to the App Component: List of Events

TODO - Add a new component to the App Component: Summary of Events:
    funny avatar
    Total Events count,
    how long until next event,
    how long time since last event

TODO - Add a new component to the App Component: Event Details: all details + created at/updated at
TODO - Add a new component to the App Component: Welcome! What's your name? What's your plans?
TODO - Add Tests to the App Component

 */
