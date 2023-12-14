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
  }, [dispatch]);

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    // console.log(searchTerm);
    setSearchItem(searchTerm);

    const filteredItems = songs.filter(
      (song) =>
        song.song.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSongs(filteredItems);
    // console.log(filteredSongs);
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
        {searchItem == ""
          ? songs.map((song) => (
              <li key={song._id}>
                {song.artist} - {song.song}
              </li>
            ))
          : filteredSongs.map((song) => (
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
