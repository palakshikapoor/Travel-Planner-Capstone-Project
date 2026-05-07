import { useState } from "react";

function Home() {

  const [country, setCountry] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const destinations = [
    "Paris",
    "Tokyo",
    "Dubai",
    "Bali"
  ];

  // Search country
  const searchCountry = async (name) => {

    try {

      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );

      const data = await res.json();

      setCountry(data[0]);

    } catch (err) {

      alert("Country not found");

    }
  };

  // Save Trip
  const saveTrip = () => {

    const tripData = {
      ...country,
      startDate,
      endDate
    };

    let trips =
      JSON.parse(localStorage.getItem("trips")) || [];

    trips.push(tripData);

    localStorage.setItem(
      "trips",
      JSON.stringify(trips)
    );

    alert("Trip Saved!");

  };

  return (

    <div className="text-center px-6">

      {/* Hero Section */}
      <div className="mt-10">

        <h1 className="text-5xl font-bold text-blue-600">
          🌍 Travel Planner
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Discover destinations and plan your dream trips easily
        </p>

      </div>

      {/* Search + Dates */}
      <div className="mt-10 flex flex-col items-center gap-4">

        {/* Search */}
        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search country..."
            id="countryInput"
            className="border p-3 rounded-lg w-72"
          />

          <button
            onClick={() => {

              const value =
                document.getElementById("countryInput").value;

              searchCountry(value);

            }}
            className="bg-blue-500 text-white px-5 rounded-lg"
          >
            Search
          </button>

        </div>

        {/* Date Selection */}
        <div className="flex gap-4 flex-wrap justify-center">

          <div>

            <label className="font-bold">
              Start Date
            </label>

            <br />

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border p-2 rounded-lg mt-1"
            />

          </div>

          <div>

            <label className="font-bold">
              End Date
            </label>

            <br />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 rounded-lg mt-1"
            />

          </div>

        </div>

      </div>

      {/* Country Preview */}
      {country && (

        <div className="bg-white p-6 rounded-xl shadow-md mt-10 max-w-md mx-auto">

          <img
            src={country.flags.png}
            alt="flag"
            className="w-40 mx-auto"
          />

          <h2 className="text-3xl font-bold mt-4">
            {country.name.common}
          </h2>

          <p className="mt-2">
            🌆 Capital: {country.capital}
          </p>

          <p>
            👥 Population: {country.population}
          </p>

          <p>
            🌍 Region: {country.region}
          </p>

          <p>
            🗣️ Language:
            {" "}
            {Object.values(country.languages || {}).join(", ")}
          </p>

          {/* Attractions */}
          <div className="mt-6 text-left">

            <h3 className="text-xl font-bold mb-2">
              ⭐ Popular Things To Do
            </h3>

            <ul className="list-disc ml-6">

              <li>City Tour</li>
              <li>Food Exploration</li>
              <li>Local Sightseeing</li>

            </ul>

          </div>

          {/* Itinerary */}
          <div className="mt-6 text-left">

            <h3 className="text-xl font-bold mb-2">
              🗓️ Suggested Itinerary
            </h3>

            <ul className="space-y-2">

              <li className="bg-gray-100 p-2 rounded-lg">
                Day 1 - Explore {country.name.common}
              </li>

              <li className="bg-gray-100 p-2 rounded-lg">
                Day 2 - Local Food & Culture
              </li>

              <li className="bg-gray-100 p-2 rounded-lg">
                Day 3 - Shopping & Sightseeing
              </li>

            </ul>

          </div>

          {/* Save Trip Button */}
          <button
            onClick={saveTrip}
            className="bg-green-500 text-white px-5 py-2 rounded-lg mt-6"
          >
            Save Trip
          </button>

        </div>

      )}

      {/* Popular Destinations */}
      <div className="mt-14">

        <h2 className="text-3xl font-bold mb-8">
          ✈️ Popular Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {destinations.map((place, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition"
            >

              <h3 className="text-2xl font-bold">
                {place}
              </h3>

              <p className="text-gray-500 mt-2">
                Explore amazing places in {place}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Home;