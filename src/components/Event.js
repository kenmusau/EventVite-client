export default function Event({ event, onSelectedEvent }) {
  const { id, name, venue, date, image_url } = event;

  return (
    <div
      className="flex items-center max-w-md gap-10 bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg"
      onClick={() => onSelectedEvent(id)}
    >
      <div className="w-40 h-40">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold ">{name}</h3>
        <p className="text-gray-600">{venue}</p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
    </div>
  );
}
