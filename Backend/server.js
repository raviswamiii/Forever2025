const express = require("express");
const databaseConnection = require("./config/mongodb");
const app = express();
require("dotenv").config();


databaseConnection();

app.listen(3000, () => {
    console.log("Server is running...")
})