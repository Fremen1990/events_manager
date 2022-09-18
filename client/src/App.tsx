import EventForm from "./components/EventForm/EventForm";
import Layout from "./components/Layout/Layout";
import EventsList from "./components/EventsList/EventsList";
import EventsProvider from "./context/EventsContext";

function App() {
  return (
    <EventsProvider>
      <Layout>
        <EventForm />
        <EventsList />
      </Layout>
    </EventsProvider>
  );
}

export default App;

//TODO  ADD TESTING TO CONTEXT-API - BLABK BOX TESTING
// EXCLUDE LAYOUT FROM TESTING
// ADD EDIT FORM AND EDIT FUNCTIONALITY
// 100% TEST COVERAGE
// CYPRESS BASIC E2E TEST
