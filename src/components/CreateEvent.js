import React, { useState } from "react";

export default function CreateEvent({ onClose, base_url }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    date: "",
    time: "",
    venue: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${base_url}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        image_url: formData.image_url,
        date: formData.date,
        time: formData.time,
        venue: formData.venue,
      }),
    })
      .then((resp) => resp.json())
      .then((host) => console.log(host));

    setFormData({
      title: "",
      description: "",
      image_url: "",
      date: "",
      time: "",
      venue: "",
    });
    console.log(formData);
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold mb-8">Create New Event</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-96 bg-white p-6 rounded shadow-md"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          id="title"
          onChange={handleChange}
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          id="description"
          onChange={handleChange}
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="image_url">Image url</label>
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          id="image_url"
          onChange={handleChange}
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="date">date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          id="date"
          onChange={handleChange}
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="time">time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          id="time"
          onChange={handleChange}
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <label htmlFor="venue">venue</label>
        <input
          type="text"
          name="venue"
          value={formData.venue}
          id="venue"
          onChange={handleChange}
          className="w-full px-3 py-2 my-1 border rounded"
        />

        <button className="w-full py-2 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none">
          Add Event
        </button>
        <button
          className="w-full py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
          onClick={onClose} // Close the CreateEvent modal when this button is clicked
        >
          Close
        </button>
      </form>
    </div>
  );
}
