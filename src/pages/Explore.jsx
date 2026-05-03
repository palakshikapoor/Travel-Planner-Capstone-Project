import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";

function Explore() {
  const [country, setCountry] = useState(null);

  const searchCountry = async (name) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await res.json();
      setCountry(data[0]);
    } catch (err) {
      alert("Error fetching country");
    }
  };

  const saveTrip = (data) => {
    let trips = JSON.parse(localStorage.getItem("trips")) || [];
    trips.push(data);
    localStorage.setItem("trips", JSON.stringify(trips));
    alert("Trip Saved!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-6">
        Explore Destinations
      </h1>

      <SearchBar onSearch={searchCountry} />

      {country && (
        <div className="flex justify-center mt-6">
          <DestinationCard data={country} onSave={saveTrip} />
        </div>
      )}
    </div>
  );
}

export default Explore;