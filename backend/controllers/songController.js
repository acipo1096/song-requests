const asyncHandler = require("express-async-handler");

const Song = require("../models/songModel");

// @desc    Search for a song
// @route   GET /api/songs
// @access  Public
const getSong = asyncHandler(async (req, res) => {
  const song = await Song// Add error handling

  .res
    .status(200)
    .json(song);
});

module.exports = {
  getSong,
};
