import { get } from "mongoose";
import { useState, useEffect } from "react";
import { getSongs, reset } from "../features/songs/songSlice";
import { useSelector, useDispatch } from "react-redux";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default Home;
