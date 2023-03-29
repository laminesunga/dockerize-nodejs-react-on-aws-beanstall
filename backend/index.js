const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config()

const app = express();



// var corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

app.use( bodyParser.json() );       // to support JSON-encoded bodies

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Lamine  server." });
});

// set port, listen for requests
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.use('/', require('./routes/userRoutes'))