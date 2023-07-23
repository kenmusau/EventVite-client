import { useState, useEffect } from "react";
import EventSelected from "./EventSelected";
import EventsList from "./EventsList";

export default function UserView({ user }) {
  console.log(user.id);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelecteEvent] = useState(null);

  const base_url = `http://localhost:9292/events/${user.id}`;

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
    setSelecteEvent(events.find((event) => event?.id === id));
  }
  return (
    <div>
      {selectedEvent ? (
        <EventSelected selectedEvent={selectedEvent} />
      ) : (
        <EventsList events={events} onSelectedEvent={handleSelectedEvent} />
      )}
    </div>
  );
}
