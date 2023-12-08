import { useState } from "react";

function Search() {
  // For testing - to be deleted
  const songs = [
    { id: 1, songTitle: "Country Roads", artistTitle: "John Denver" },
    { id: 2, songTitle: "Sweet Caroline", artistTitle: "Neil Diamond" },
    { id: 3, songTitle: "Piano Man", artistTitle: "Billy Joel" },
  ];
  const [searchItem, setSearchItem] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setSearchItem(searchTerm);

    const filteredItems = songs.filter((song) =>
      song.songTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSongs(filteredItems);
  };
  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInput}
        placeholder="Search for a song"
      />
      <ul>
        {filteredSongs.map((song) => (
          <li key={song.id}>{song.songTitle}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
