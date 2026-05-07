import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";

function SavedTrips() {

  const [trips, setTrips] = useState([]);

  // Load trips from localStorage
  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("trips")) || [];

    setTrips(data);

  }, []);

  // Delete trip
  const deleteTrip = (index) => {

    let updated = [...trips];

    updated.splice(index, 1);

    setTrips(updated);

    localStorage.setItem(
      "trips",
      JSON.stringify(updated)
    );

  };

  return (

    <div>

      <h1 className="text-3xl text-center mt-6 font-bold text-blue-600">
        💾 Saved Trips
      </h1>

      {trips.length === 0 ? (

        <p className="text-center mt-10 text-gray-500">
          No trips saved yet
        </p>

      ) : (

        <div className="flex flex-wrap gap-6 justify-center mt-8">

          {trips.map((trip, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md w-80"
            >

              {/* Flag */}
              <img
                src={trip.flags.png}
                alt="flag"
                className="w-40 mx-auto"
              />

              {/* Country */}
              <h2 className="text-2xl font-bold text-center mt-4">
                {trip.name.common}
              </h2>

              {/* Info */}
              <p className="mt-3">
                🌆 Capital: {trip.capital}
              </p>

              <p>
                🌍 Region: {trip.region}
              </p>

              <p>
                👥 Population: {trip.population}
              </p>

              {/* Dates */}
              <p className="mt-3 font-bold">
                📅 {trip.startDate} → {trip.endDate}
              </p>

              {/* Delete Button */}
              <button
                onClick={() => deleteTrip(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-5 w-full"
              >
                Delete Trip
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default SavedTrips;