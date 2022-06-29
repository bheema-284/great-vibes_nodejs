const express = require('express');
const mongoose = require('mongoose');
const connect = require('./src/Configs/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const BookController = require('./src/Controllers/movie.controller');

app.use('/movie', BookController);

module.exports = app;
