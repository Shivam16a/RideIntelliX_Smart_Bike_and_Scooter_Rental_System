import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const amount = queryParams.get("amount");
  const bookingId = queryParams.get("bookingId");

  useEffect(() => {
    const loadRazorpay = async () => {
      if (!amount || Number(amount) <= 0) {
        alert("Invalid amount. Please try again.");
        navigate("/");
        return;
      }

      const token = localStorage.getItem("token");

      const orderRes = await axios.post(
        "http://localhost:5700/api/payment/create-order",
        { amount: Number(amount) * 100, bookingId }, // Convert rupee to paise
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { order } = orderRes.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "RideIntelliX",
        description: "Booking Payment",
        order_id: order.id,
        handler: async function (response) {
          await axios.post(
            "http://localhost:5700/api/payment/verify",
            {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              bookingId,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          alert("Payment successful!");
          navigate("/mybookings");
        },
        prefill: {
          name: "Customer",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    loadRazorpay();
  }, [amount, bookingId, navigate]);

  return (
    <div className="container text-center mt-5">
      <h2 style={{ marginTop: "90px" }}>Redirecting to Payment Gateway...</h2>
    </div>
  );
};

export default Payment;
