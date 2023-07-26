import { useState, useEffect } from "react";
import EventSelected from "./EventSelected";
import EventsList from "./EventsList";

export default function UserView({ base_url, user }) {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, [events]);

  async function fetchEvents() {
    try {
      const response = await fetch(`${base_url}/events/${user.id}`);
      const events = await response.json();
      setEvents(events);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  function handleSelectedEvent(id) {
    setSelectedEvent(events.find((event) => event?.id === id));
  }

  function handleBackToEventsList() {
    setSelectedEvent(null);
  }
  return (
    <div>
      {selectedEvent ? (
        <EventSelected
          selectedEvent={selectedEvent}
          base_url={base_url}
          onBackToEventsList={handleBackToEventsList}
        />
      ) : (
        <EventsList events={events} onSelectedEvent={handleSelectedEvent} />
      )}
    </div>
  );
}
