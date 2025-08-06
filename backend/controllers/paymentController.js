const razorpay = require("../config/razorpay");
const Payment = require("../models/Payment");

exports.createOrder = async (req, res) => {
  const { amount, bookingId } = req.body;
  const userId = req.user._id;

  try {
    const options = {
      amount: amount, // No need to multiply again if frontend sending paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    const payment = new Payment({
      bookingId,
      userId,
      amount: amount / 100,
      razorpayOrderId: order.id
    });

    await payment.save();

    res.status(201).json({ success: true, order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: "Failed to create Razorpay order" });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, bookingId } = req.body;

    const payment = await Payment.findOneAndUpdate(
      { razorpayOrderId },
      {
        razorpayPaymentId,
        status: "paid",
        bookingId,
      },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ success: false, message: "Payment not found" });
    }

    res.status(200).json({ success: true, message: "Payment marked as successful", payment });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getMyPayments = async (req, res) => {
  const payments = await Payment.find({ userId: req.user._id }).populate('bookingId');
  res.status(200).json(payments);
};
