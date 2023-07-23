import { useState } from "react";
import EventSelected from "./EventSelected";
import EventsList from "./EventsList";

export default function UserView({ events }) {
  const [selectedEvent, setSelecteEvent] = useState(null);

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
