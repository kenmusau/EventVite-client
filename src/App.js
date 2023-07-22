import { useEffect, useState } from "react";
import EventsList from "./components/EventsList";
import Header from "./components/Header";
import EventSelected from "./components/EventSelected";

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelecteEvent] = useState(null);

  const base_url = "http://localhost:3000/events";

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await fetch(base_url);
      const events = await response.json();
      setEvents(events);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  function handleSelectedEvent(id) {
    const event = events.filter((event) => event?.id === id);
    setSelecteEvent((cur) => event);
  }

  console.log(selectedEvent);

  return (
    <div className="App bg-slate-50">
      <Header />
      {selectedEvent ? (
        <EventSelected selectedEvent={selectedEvent} />
      ) : (
        <EventsList events={events} onSelectedEvent={handleSelectedEvent} />
      )}
    </div>
  );
}

export default App;
