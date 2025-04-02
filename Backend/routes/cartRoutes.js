const express = require("express");
const authUser = require("../Middleware/auth");
const {addToCart, updateCart, getUserCart} = require("../controllers/cartController");

const cartRouter = express.Router();

cartRouter.post("/add", authUser, addToCart)
cartRouter.post("/get", authUser, getUserCart)
cartRouter.post("/update", authUser, updateCart, getUserCart)

module.exports = cartRouter