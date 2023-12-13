import { get } from "mongoose";
import { useState, useEffect } from "react";
import { getSongs, reset } from "../features/songs/songSlice";
import { useSelector, useDispatch } from "react-redux";

function Search() {
  const { songs, isLoading, isSuccess } = useSelector((state) => state.songs);
  const [searchItem, setSearchItem] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
    console.log(filteredSongs);
  }, []);

  // For testing - to be deleted
  // const songs = [
  //   { id: 1, songTitle: "Country Roads", artistTitle: "John Denver" },
  //   { id: 2, songTitle: "Sweet Caroline", artistTitle: "Neil Diamond" },
  //   { id: 3, songTitle: "Piano Man", artistTitle: "Billy Joel" },
  // ];

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setSearchItem(searchTerm);

    const filteredItems = songs.filter(
      (song) =>
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(filteredItems);
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
          <li key={song._id}>
            {song.artist} - {song.song}
          </li>
        ))}
      </ul>
      {/* {songs.map((song) => (
        <div key={song._id} song={songs}>
          {song.artist} - {song.song}
        </div>
      ))} */}
    </div>
  );
}

export default Search;
