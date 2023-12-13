import { get } from "mongoose";
import { useState, useEffect } from "react";
import { getSongs, reset } from "../features/songs/songSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const { songs, isLoading, isSuccess } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
    console.log(getSongs);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {songs.map((song) => (
        <div key={song._id} song={songs}>
          {song.artist} - {song.song}
        </div>
      ))}
    </div>
  );
}

export default Home;
