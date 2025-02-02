require("dotenv").config();
const config = {
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER, // Use a string for the username
  password: process.env.MYSQLPASSWORD,
  port: process.env.MYSQLPORT,
  database: process.env.MYSQLDATABASE, // Change this to your actual database name
};
module.exports={config}




