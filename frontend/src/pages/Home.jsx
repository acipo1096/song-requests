import { get } from "mongoose";
import { getSongs } from "../features/songs/songSlice";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  dispatch(getSongs);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
