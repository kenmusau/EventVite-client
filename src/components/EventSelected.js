export default function EventSelected({ selectedEvent }) {
  const { id, title, venue, description, date, image_url, time } =
    selectedEvent;
  console.log(venue);
  return (
    <div className="flex justify-center gap-20 max-w-full h-screen mx-auto 	bg-slate-50">
      <div className="flex flex-col	gap-5 max-w-3xl	pt-5">
        <div>
          <img src={image_url} alt="" className="max-w-sm " />
        </div>
        <div>
          <h1 className="text-orange-500 font-bold">Description</h1>
          <p className="max-w-sm text-sm">{description}</p>
        </div>
      </div>
      <div className=" flex flex-col gap-7 max-w-xs pt-10 ">
        <h3 className="text-2xl">
          Title: <span className="text-orange-500 font-extrabold">{title}</span>{" "}
        </h3>
        <h4 className="font-bold">
          Date: <span className="italic">{date}</span>
        </h4>
        <h4 className="font-bold">Time: {time}</h4>
        <h4 className="font-bold">Venue: {venue}</h4>
        <div className="flex gap-7 font-bold">
          <button className="rounded-full bg-orange-500 text-white px-6 p-3">
            Favorite
          </button>
          <button className="rounded-full bg-green-500 text-white px-4 p-3 ">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
