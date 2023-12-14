import { Resend } from "resend";
import { Email } from "./Email";

const resend = new Resend("re_123456789");

resend.sendEmail({
  from: "alex.cipollone10@gmail.com",
  to: "alexfloydmusic2@gmail.com",
  subject: "New Song Request",
  react: <Email firstName="Alex" />,
});
