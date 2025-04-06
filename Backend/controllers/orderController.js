const orderModel = require("../models/orderModel.js");
const userModel = require("../models/userModel.js");

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrderData = new orderModel(orderData);
    await newOrderData.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const allOrders = async (req,res) => {
  try {
    const orders = await orderModel.find({})
    res.json({success: true, orders})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const {orderId, status} = req.body;
    await orderModel.findByIdAndUpdate(orderId, {status})
    res.json({success: true, message: "Status Updated"})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

module.exports = {placeOrder, userOrders, allOrders, updateStatus};
