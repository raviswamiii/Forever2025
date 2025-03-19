const express = require("express");
const databaseConnection = require("./config/mongodb");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 3000
const userRouter = require("./routes/userRoutes")

dotenv.config();
databaseConnection();

app.use(express.json())

app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})