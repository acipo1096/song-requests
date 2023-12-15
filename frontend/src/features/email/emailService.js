import axios from "axios";

const API_URL = "/api/email/";

// Create/send email
const sendEmail = async (modalData, modalName) => {
  const response = await axios.post(API_URL, {
    song: modalData,
    name: modalName,
  });

  console.log(response.data);
  return response.data;
};

const emailService = {
  sendEmail,
};

export default emailService;
