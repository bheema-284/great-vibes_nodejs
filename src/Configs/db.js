const { mongoose } = require('mongoose');

require("dotenv").config()

module.exports = () => {
  return mongoose.connect(
   process.env.MONGODB_URL
  );
};




// mongodb+srv://bheema:bheema_123@cluster0.5for5.mongodb.net/test