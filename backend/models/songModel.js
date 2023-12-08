const mongoose = require("mongoose");

const songSchema = mongoose.Schema(
  {
    song: {
      type: String,
      required: [true, "Please add a song"],
    },
    artist: {
      type: String,
      required: [true, "Please add an artist"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Song", songSchema);
