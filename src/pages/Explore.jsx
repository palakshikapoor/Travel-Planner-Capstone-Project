import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";

function Explore() {

  const [country, setCountry] = useState(null);

  // Popular attractions
  const attractions = {

    india: [
      "Taj Mahal",
      "Goa Beaches",
      "Jaipur Fort"
    ],

    france: [
      "Eiffel Tower",
      "Louvre Museum",
      "Paris River Cruise"
    ],

    japan: [
      "Mount Fuji",
      "Tokyo Tower",
      "Kyoto Temples"
    ],

    italy: [
      "Colosseum",
      "Venice Canals",
      "Leaning Tower of Pisa"
    ]

  };

  // Suggested itineraries
  const itineraries = {

    india: [
      "Day 1 - Visit Taj Mahal",
      "Day 2 - Explore Jaipur",
      "Day 3 - Relax in Goa"
    ],

    france: [
      "Day 1 - Eiffel Tower",
      "Day 2 - Louvre Museum",
      "Day 3 - Seine River Cruise"
    ],

    japan: [
      "Day 1 - Tokyo Tour",
      "Day 2 - Visit Mount Fuji",
      "Day 3 - Kyoto Temples"
    ]

  };

  // Search country
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

  // Save trip
  const saveTrip = (data) => {

    let trips =
      JSON.parse(localStorage.getItem("trips")) || [];

    trips.push(data);

    localStorage.setItem(
      "trips",
      JSON.stringify(trips)
    );

    alert("Trip Saved!");
  };

  return (

    <div>

      <h1 className="text-3xl font-bold text-center mt-6 text-blue-600">
        🌍 Explore Destinations
      </h1>

      <SearchBar onSearch={searchCountry} />

      {country && (

        <div className="flex flex-col items-center mt-6">

          {/* Country Card */}
          <DestinationCard
            data={country}
            onSave={saveTrip}
          />

          {/* Attractions */}
          <div className="bg-white p-5 rounded-xl shadow-md mt-6 w-80">

            <h2 className="text-xl font-bold mb-3">
              ⭐ Popular Things To Do
            </h2>

            <ul className="list-disc ml-5 space-y-2">

              {(attractions[
                country.name.common.toLowerCase()
              ] || [
                "City Tour",
                "Food Exploration",
                "Local Sightseeing"
              ]).map((place, index) => (

                <li key={index}>
                  {place}
                </li>

              ))}

            </ul>

          </div>

          {/* Itinerary */}
          <div className="bg-white p-5 rounded-xl shadow-md mt-6 w-80">

            <h2 className="text-xl font-bold mb-3">
              🗓️ Suggested Itinerary
            </h2>

            <ul className="space-y-2">

              {(itineraries[
                country.name.common.toLowerCase()
              ] || [

                `Day 1 - Explore ${country.name.common} City`,
                `Day 2 - Local Food & Culture`,
                `Day 3 - Sightseeing & Shopping`

              ]).map((plan, index) => (

                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded-lg"
                >
                  {plan}
                </li>

              ))}

            </ul>

          </div>

        </div>

      )}

    </div>
  );
}

export default Explore;