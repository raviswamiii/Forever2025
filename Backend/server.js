const express = require("express");
const databaseConnection = require("./config/mongodb");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 3000

dotenv.config();
databaseConnection();

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})