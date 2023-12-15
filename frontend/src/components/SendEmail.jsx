import React from "react";
import { Resend } from "resend";
import { Email } from "./Email";

function SendEmail() {
  const resend = new Resend(process.env.API_URL);

  resend.sendEmail({
    from: "Song Request <onboarding@resend.dev>",
    to: "alexfloydmusic2@gmail.com",
    subject: "New Song Request",
    react: <Email firstName="Alex" />,
  });
}

export default SendEmail;
