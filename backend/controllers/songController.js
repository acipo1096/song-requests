const asyncHandler = require("express-async-handler");

const Song = require("../models/songModel");

// @desc    Search for a song
// @route   GET /api/songs
// @access  Public
const getSong = asyncHandler(async (req, res) => {
  const song = await Song.findById(req.song.id);
});
