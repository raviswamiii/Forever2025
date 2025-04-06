const express = require("express");
const {placeOrder, userOrders, allOrders, updateStatus} = require("../controllers/orderController.js");
const authUser = require("../Middleware/auth.js")
const adminAuth = require("../Middleware/adminAuth.js")

const orderRouter = express.Router();

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/userorders", authUser, userOrders);
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

module.exports = orderRouter;