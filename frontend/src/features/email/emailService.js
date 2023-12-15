import axios from "axios";

const API_URL = "/api/email/";

// Create/send email
const sendEmail = async () => {
  const response = await axios.post(API_URL);

  // console.log(response.data);
  return response.data;
};

const emailService = {
  sendEmail,
};

export default sendEmail;
