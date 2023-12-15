const express = require("express");
const { Resend } = require("resend");
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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
