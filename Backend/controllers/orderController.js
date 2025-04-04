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

module.exports = placeOrder