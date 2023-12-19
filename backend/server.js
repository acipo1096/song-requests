const path = require("path");
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

const app = express();

app.use(cors());

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

  // In package.json
  // "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend",
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
