import { get } from "mongoose";
import { useState, useEffect } from "react";
import { getSongs, reset } from "../features/songs/songSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
    console.log(getSongs);
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
