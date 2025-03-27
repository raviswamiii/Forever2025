const express = require("express");
const databaseConnection = require("./config/mongodb");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 3000
const userRouter = require("./routes/userRoutes");
const connectCloudinary = require("./config/cloudinary");
const productRouter = require("./routes/productRoutes");
const cors = require("cors");

dotenv.config();
databaseConnection();
connectCloudinary()

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})