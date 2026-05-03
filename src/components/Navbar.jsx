function Navbar({ setPage }) {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="font-bold">Travel Planner</h1>

      <div className="space-x-4">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("explore")}>Explore</button>
        <button onClick={() => setPage("saved")}>Saved</button>
      </div>
    </div>
  );
}

export default Navbar;