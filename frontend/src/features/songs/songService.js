import axios from "axios";

const API_URL = "/api/songs/";

// Get songs
const getSongs = async () => {
  const response = await axios.get(API_URL);

  // console.log(response.data);
  return response.data;
};

const songService = {
  getSongs,
};

export default songService;
