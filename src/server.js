const express = require('express');
const mongoose = require('mongoose');
const connect = require('./Configs/db');
const cors = require("cors")
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT | 8080
const MovieController = require('./Controllers/movie.controller');
app.use('/movie', MovieController);

app.listen(port, async(req,res)=>{
    try {
        await connect()
        console.log(`Listining to the  port ${port}`)
    } catch (error) {
        console.log(error.message);
    }
})

// Backend assessment : 
// Perform CRUD Operations(Allow users to add , update or delete movies from the database) in a MOVIE app using Node js  and MongoDB.
// Movie schema should contain
// Movie Name - (String)
// Rating - (Number)
// Cast - (Array)
// Genre - (String)
// Release Date - (Datetime)
// Use Cookie authentication for performing delete and update operations.
// Please host the application in Heroku platform/or a server of your choosing and send us the Base URL.

// Please also send us the code that was used to complete the front end and back end tasks as it is required by the technical staff that will be reviewing your work.
