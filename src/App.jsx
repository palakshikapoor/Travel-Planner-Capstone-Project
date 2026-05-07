import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SavedTrips from "./pages/SavedTrips";

function App() {

  const [page, setPage] = useState("home");

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }
    >

      <Navbar setPage={setPage} />

      <div className="flex justify-end p-4">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>

      {page === "home" && <Home />}
      {page === "explore" && <Explore />}
      {page === "saved" && <SavedTrips />}

    </div>
  );
}

export default App;