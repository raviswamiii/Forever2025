const express = require("express");
const upload = require("../Middleware/multer.js")
const {addProduct, listProduct, removeProduct, singleProduct} = require("../controllers/productController.js");
const adminAuth = require("../Middleware/adminAuth.js");

const productRouter = express.Router();

productRouter.post("/add", adminAuth, upload.fields([
    {name: "image1", maxCount: 1},
    {name: "image2", maxCount: 1},
    {name: "image3", maxCount: 1},
    {name: "image4", maxCount: 1},
]), addProduct);

productRouter.post("/list", listProduct);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);

module.exports = productRouter;