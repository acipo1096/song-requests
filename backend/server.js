const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/songs", require("./routes/songRoutes"));

// DEPLOYING TO HEROKU
if (process.env.NODE_ENV === "production") {
  // Set static path/build folder
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // * means app.anything else other than our routes defined above
  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
