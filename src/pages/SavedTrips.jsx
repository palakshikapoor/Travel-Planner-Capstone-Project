import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";

function SavedTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(data);
  }, []);

  const deleteTrip = (index) => {
    let updated = [...trips];
    updated.splice(index, 1);
    setTrips(updated);
    localStorage.setItem("trips", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="text-2xl text-center mt-6 font-bold">
        Saved Trips
      </h1>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {trips.map((trip, index) => (
          <TripCard
            key={index}
            trip={trip}
            onDelete={() => deleteTrip(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SavedTrips;