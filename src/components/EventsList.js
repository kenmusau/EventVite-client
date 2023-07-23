import React from "react";
import Event from "./Event";

export default function EventsList({ events, onSelectedEvent }) {
  return (
    <div className="relative flex flex-wrap justify-center w-9/12 mx-auto gap-10 px-4 mt-5 ">
      {events.map((event) => (
        <Event key={event.id} event={event} onSelectedEvent={onSelectedEvent} />
      ))}
    </div>
  );
}
