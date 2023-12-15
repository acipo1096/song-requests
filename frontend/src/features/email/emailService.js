import axios from "axios";

const API_URL = "/api/email";

// Create/send email
const sendEmail = async (songData, firstName) => {
  const response = await axios.post(API_URL, {
    song: songData,
    name: firstName,
  });

  console.log(response.data);
  return response.data;
};

const emailService = {
  sendEmail,
};

export default emailService;
