function TripCard({ trip, onDelete }) {
  return (
    <div className="border p-4 rounded shadow w-72">
      <img src={trip.flags.png} className="h-32 w-full object-cover" />
      <h3 className="font-bold mt-2">{trip.name.common}</h3>

      <button
        onClick={onDelete}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TripCard;