const { mongoose } = require('mongoose');

module.exports = () => {
  return mongoose.connect(
    'mongodb+srv://bheema:bheema_123@cluster0.5for5.mongodb.net/great-vibes',
  );
};




// mongodb+srv://bheema:bheema_123@cluster0.5for5.mongodb.net/test