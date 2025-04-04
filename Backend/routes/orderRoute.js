const express = require("express");
const placeOrder = require("../controllers/orderController");
const authUser = require("../Middleware/auth.js")

const orderRouter = express.Router();

orderRouter.post("/place", authUser, placeOrder);

module.exports = orderRouter;