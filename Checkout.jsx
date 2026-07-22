import { useState } from "react";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
function Checkout() {
  const [payment, setPayment] = useState("COD");
  return (
    <div
      className="page"
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "40px",
        }}
      >
        🛍️ Checkout
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* Shipping Form */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
              marginBottom: "25px",
            }}
          >
            Shipping Information
          </h2>
          <div style={{ marginBottom: "20px" }}>
            <label><FaUser /> Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label><FaEnvelope /> Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label><FaPhone /> Phone Number</label>

            <input
              type="text"
              placeholder="Enter your phone number"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label><FaMapMarkerAlt /> Delivery Address</label>

            <textarea
              rows="4"
              placeholder="Enter complete delivery address"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                resize: "none",
              }}
            />
          </div>

          <h2
            style={{
              color: "#2563eb",
              marginBottom: "20px",
            }}
          >
            Payment Method
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label>
              <input
                type="radio"
                checked={payment === "COD"}
                onChange={() => setPayment("COD")}
              />
              {" "}
              <FaMoneyBillWave color="green" /> Cash on Delivery
            </label>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label>
              <input
                type="radio"
                checked={payment === "CARD"}
                onChange={() => setPayment("CARD")}
              />
              {" "}
              <FaCreditCard color="#2563eb" /> Credit / Debit Card
            </label>
          </div>

          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#16a34a",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </div>

        {/* Order Summary */}
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            height: "fit-content",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
              marginBottom: "20px",
            }}
          >
            Order Summary
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Remote Control Car</span>
            <span>₹1,499</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Teddy Bear</span>
            <span>₹799</span>
          </div>

          <hr style={{ margin: "20px 0" }} />
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Subtotal</span>
            <span>₹2,298</span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span>Shipping</span>
            <span>₹99</span>
          </p>
          <hr style={{ margin: "20px 0" }} />
          <h2
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#2563eb",
            }}
          >
            <span>Total</span>
            <span>₹2,397</span>
          </h2>
          <p
            style={{
              marginTop: "20px",
              color: "#666",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            ✔ Secure Checkout<br />
            ✔ Free Returns within 7 Days<br />
            ✔ Fast Delivery Across India
          </p>
        </div>
      </div>
    </div>
  );
}
export default Checkout;