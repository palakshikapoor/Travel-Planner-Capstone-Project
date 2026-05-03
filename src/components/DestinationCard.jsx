function DestinationCard({ data, onSave }) {
  return (
    <div className="border rounded-xl p-4 shadow-md w-80 bg-white hover:shadow-lg">
      <img
        src={data.flags.png}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-2">
        {data.name.common}
      </h2>

      <p>Capital: {data.capital}</p>
      <p>Region: {data.region}</p>
      <p>Population: {data.population}</p>

      <button
        onClick={() => onSave(data)}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Trip
      </button>
    </div>
  );
}

export default DestinationCard;