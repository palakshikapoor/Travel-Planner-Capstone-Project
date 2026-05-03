import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 justify-center mt-6">
      <input
        type="text"
        placeholder="Enter country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={() => onSearch(input)}
        className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;