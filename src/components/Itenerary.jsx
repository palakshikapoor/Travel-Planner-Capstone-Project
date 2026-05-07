import { useState } from "react";

function Itinerary() {
  const [day, setDay] = useState("");
  const [activity, setActivity] = useState("");
  const [plans, setPlans] = useState([]);

  function addPlan() {
    if (day === "" || activity === "") {
      alert("Fill all fields");
      return;
    }

    const newPlan = {
      day,
      activity,
    };

    setPlans([...plans, newPlan]);

    setDay("");
    setActivity("");
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🗓️ Travel Itinerary
      </h2>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />

        <input
          type="text"
          placeholder="Enter Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />

        <button
          onClick={addPlan}
          className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-100 p-3 rounded-lg"
          >
            <h3 className="font-bold">
              📅 {plan.day}
            </h3>

            <p>{plan.activity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;