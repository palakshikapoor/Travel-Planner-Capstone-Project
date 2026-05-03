import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SavedTrips from "./pages/SavedTrips";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "explore" && <Explore />}
      {page === "saved" && <SavedTrips />}
    </div>
  );
}

export default App;