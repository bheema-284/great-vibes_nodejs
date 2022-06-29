// Movie schema should contain
// Movie Name - (String)
// Rating - (Number)
// Cast - (Array)
// Genre - (String)
// Release Date - (Datetime)
const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Rating: { type: Number, required: true },
    Genre: { type: String, required: true },
    ReleaseDate: { type: Date, required: true },
    Cast:{type: Array, required: true } 
  },
  { timestamps: true, versionKey: false },
);

const book = new mongoose.model('movie', booksSchema);

module.exports = book;
