require('dotenv').config();
const Keys = {
   emailjs_id: process.env.REACT_APP_EMAILJS_ID,
   emailjs_accestoken: process.env.REACT_APP_EMAILJS_ACCESSTOKEN,
   emailjs_templateId: process.env.REACT_APP_EMAILJS_TEMPLATEID,
   emailjs_serviceId: process.env.REACT_APP_EMAILJS_SERVICEID,
   pinata_key: process.env.REACT_APP_PINATA_API_KEY,
   pinata_secret: process.env.REACT_APP_PINATA_API_SECRET
  };
  
  export default Keys;