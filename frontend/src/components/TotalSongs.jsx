import { useEffect } from "react";
import { getSongs, reset } from "../features/songs/songSlice";
import { useSelector, useDispatch } from "react-redux";
import Suggest from "./Suggest";

function TotalSongs() {
  const { songs } = useSelector((state) => state.songs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  return <h2>Total Songs Available: {songs.length}</h2>;
}

export default TotalSongs;
