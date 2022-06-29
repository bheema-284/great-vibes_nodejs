const app = require("../index");

const connect = require("./Configs/db");

app.listen(8080, async () => {
  await connect();  
  console.log("Listining to the  port 8080");
});


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
