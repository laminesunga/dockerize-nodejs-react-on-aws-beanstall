require("dotenv").config();
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: process.env.host,// ip address of server running mysql
  user: process.env.user, // user name to your mysql database
  password: process.env.password, // corresponding password
  port: process.env.port,
  database: process.env.database // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful ');
});


module.exports = con