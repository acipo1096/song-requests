const asyncHandler = require("express-async-handler");

const Song = require("../models/songModel");

// @desc    Search for a song
// @route   GET /api/songs/
// @access  Public
const getSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find().sort({ artist: 1 });

  res.status(200).json(songs);
});

module.exports = {
  getSongs,
};
