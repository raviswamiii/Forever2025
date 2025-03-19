const express = require("express");
const upload = require("../Middleware/multer.js")
const {addProduct} = require("../controllers/productController.js")

const productRouter = express.Router();

productRouter.post("/add", upload.fields([
    {name: "image1", maxCount: 1},
    {name: "image2", maxCount: 1},
    {name: "image3", maxCount: 1},
    {name: "image4", maxCount: 1},
]), addProduct);

module.exports = productRouter;