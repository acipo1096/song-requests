import axios from "axios";

const API_URL = "https://song-requests-backend.onrender.com/api/songs/";

// From ChatGPT - introduce caching to avoid unnecessary calls
let cachedSongs = null;

// Get songs
const getSongs = async () => {
  try {
    if (cachedSongs) return cachedSongs;

    const response = await axios.get(API_URL);

    cachedSongs = response.data;
    return cachedSongs;
  } catch (error) {
    console.error("Error fetching songs!", error);
    throw error;
  }
};

const songService = {
  getSongs,
};

export default songService;
