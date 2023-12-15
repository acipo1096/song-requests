const express = require("express");
const { Resend } = require("resend");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { Emails } = require("resend/build/src/emails/emails");
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

const app = express();
const resend = new Resend(process.env.RESEND_API);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/email", async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: "Song Request <onboarding@resend.dev>",
      to: ["alexfloydmusic2@gmail.com"],
      subject: "New Song Request",
      html: "<strong>it works!</strong>",
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.use("/api/songs", require("./routes/songRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
