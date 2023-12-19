import axios from "axios";

const API_URL = "https://song-requests-backend.onrender.com/api/songs/";

// Get songs
const getSongs = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const songService = {
  getSongs,
};

export default songService;
