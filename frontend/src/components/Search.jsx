import { useState } from "react";

function Search() {
  // For testing - to be deleted
  const [searchItem, setSearchItem] = useState("");

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setSearchItem(searchTerm);
  };
  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInput}
        placeholder="Search for a song"
      />
    </div>
  );
}

export default Search;
