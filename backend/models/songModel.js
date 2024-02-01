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
      // Adding an index to a database field is a way to improve the speed of queries that involve that field.
      // An index is a data structure that provides a quick lookup for the values in a specific column or set of columns
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Song", songSchema);
