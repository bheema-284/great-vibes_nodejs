const { mongoose } = require('mongoose');

module.exports = () => {
  return mongoose.connect(
    'mongodb+srv://bheema:bheema_123@cluster0.ajvpj.mongodb.net/nodejs',
  );
};




// mongodb+srv://bheema:bheema_123@cluster0.5for5.mongodb.net/test