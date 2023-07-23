import React, { useState } from "react";

export default function EventSelected({ selectedEvent, base_url }) {
  const { id, title, venue, description, date, image_url, time } =
    selectedEvent;
  const [isDeleted, setIsDeleted] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDate, setUpdatedDate] = useState(date);
  const [updatedTime, setUpdatedTime] = useState(time);
  const [updatedVenue, setUpdatedVenue] = useState(venue);

  function handleDelete() {
    fetch(`${base_url}/events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedEvent) => {
        console.log("Deleted Event:", deletedEvent);
        setIsDeleted(true); // Update the state to mark the event as deleted
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  }

  function handleUpdate() {
    const updatedEvent = {
      title: updatedTitle,
      description: updatedDescription,
      date: updatedDate,
      time: updatedTime,
      venue: updatedVenue,
    };

    fetch(`${base_url}/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => res.json())
      .then((updatedEvent) => {
        console.log("Updated Event:", updatedEvent);
      })
      .catch((error) => {
        console.error("Error updating event:", error);
      });
  }

  if (isDeleted) {
    return <div>Event Deleted Successfully!</div>; // or you can redirect to another page
  }

  return (
    <div className="flex justify-center gap-20 max-w-full h-screen mx-auto bg-slate-50">
      <div className="flex flex-col	gap-5 max-w-3xl	pt-5">
        <div>
          <img src={image_url} alt="" className="max-w-sm " />
        </div>
        <div>
          <h1 className="text-orange-500 font-bold">Description</h1>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="max-w-sm text-sm"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-7 max-w-xs pt-10 ">
        <h3 className="text-2xl">
          Title:{" "}
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="text-orange-500 font-extrabold"
          />
        </h3>
        <h4 className="font-bold">
          Date:{" "}
          <input
            type="text"
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
            className="italic"
          />
        </h4>
        <h4 className="font-bold">
          Time:{" "}
          <input
            type="text"
            value={updatedTime}
            onChange={(e) => setUpdatedTime(e.target.value)}
          />
        </h4>
        <h4 className="font-bold">
          Venue:{" "}
          <input
            type="text"
            value={updatedVenue}
            onChange={(e) => setUpdatedVenue(e.target.value)}
          />
        </h4>
        <div className="flex gap-7 font-bold">
          <button
            onClick={handleDelete}
            className="rounded-full bg-red-800 text-white px-6 p-3"
          >
            Delete
          </button>
          <button
            onClick={handleUpdate}
            className="rounded-full bg-green-500 text-white px-6 p-3"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
