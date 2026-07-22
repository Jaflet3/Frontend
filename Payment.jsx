import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaMobileAlt, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [method, setMethod] = useState("upi");
  const [paid, setPaid] = useState(false);

  const items = location.state?.items || cartItems;
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal ? 99 : 0;
  const total = subtotal + shipping;

  if (!items.length) {
    return <main className="page" style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1>Your payment list is empty</h1>
      <button type="button" onClick={() => navigate("/shop")} style={primaryButton}>Continue Shopping</button>
    </main>;
  }

  if (paid) {
    return <main className="page" style={{ textAlign: "center", padding: "80px 20px" }}>
      <FaCheckCircle size={68} color="#16a34a" />
      <h1 style={{ color: "#166534", marginTop: "20px" }}>Order placed successfully!</h1>
      <p style={{ color: "#555", marginBottom: "25px" }}>Your payment preference has been recorded.</p>
      <button type="button" onClick={() => navigate("/")} style={primaryButton}>Continue Shopping</button>
    </main>;
  }

  return <main className="page" style={{ maxWidth: "1050px", margin: "0 auto", padding: "40px 20px" }}>
    <h1 style={{ textAlign: "center", color: "#2563eb", marginBottom: "32px" }}>Payment</h1>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)", gap: "28px" }}>
      <section style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Choose a payment option</h2>
        <PaymentOption icon={<FaMobileAlt color="#2563eb" />} label="UPI" checked={method === "upi"} onChange={() => setMethod("upi")} />
        {method === "upi" && <input aria-label="UPI ID" placeholder="Enter your UPI ID" style={inputStyle} />}

        <PaymentOption icon={<FaCreditCard color="#2563eb" />} label="Credit / Debit Card" checked={method === "card"} onChange={() => setMethod("card")} />
        {method === "card" && <div style={{ display: "grid", gap: "12px", marginBottom: "20px" }}>
          <input aria-label="Card number" placeholder="Card number" style={inputStyle} />
          <div style={{ display: "flex", gap: "12px" }}><input aria-label="Expiry date" placeholder="MM / YY" style={inputStyle} /><input aria-label="CVV" placeholder="CVV" style={inputStyle} /></div>
        </div>}

        <PaymentOption icon={<FaMoneyBillWave color="#16a34a" />} label="Cash on Delivery" checked={method === "cod"} onChange={() => setMethod("cod")} />
        <button type="button" onClick={() => setPaid(true)} style={{ ...primaryButton, width: "100%", marginTop: "15px" }}>
          {method === "cod" ? "Place Order" : `Pay ₹${total.toLocaleString("en-IN")}`}
        </button>
      </section>

      <aside style={cardStyle}>
        <h2 style={{ marginTop: 0 }}>Order Summary</h2>
        {items.map((item) => <div key={item.id} style={{ display: "flex", justifyContent: "space-between", gap: "15px", margin: "12px 0" }}>
          <span>{item.name} × {item.quantity}</span><strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
        </div>)}
        <hr style={{ margin: "20px 0" }} />
        <p style={summaryRow}><span>Subtotal</span><span>₹{subtotal.toLocaleString("en-IN")}</span></p>
        <p style={summaryRow}><span>Shipping</span><span>₹{shipping.toLocaleString("en-IN")}</span></p>
        <hr style={{ margin: "20px 0" }} />
        <h3 style={summaryRow}><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></h3>
      </aside>
    </div>
  </main>;
}

function PaymentOption({ icon, label, checked, onChange }) {
  return <label style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #dbeafe", borderRadius: "10px", padding: "15px", margin: "14px 0", cursor: "pointer" }}>
    <input type="radio" name="payment-method" checked={checked} onChange={onChange} /> {icon} <strong>{label}</strong>
  </label>;
}

const cardStyle = { background: "#fff", borderRadius: "15px", padding: "26px", boxShadow: "0 8px 20px rgba(0,0,0,.08)" };
const inputStyle = { boxSizing: "border-box", width: "100%", padding: "12px", border: "1px solid #cbd5e1", borderRadius: "8px" };
const primaryButton = { background: "#16a34a", color: "#fff", border: "none", padding: "14px 24px", borderRadius: "10px", fontSize: "16px", fontWeight: "600", cursor: "pointer" };
const summaryRow = { display: "flex", justifyContent: "space-between", gap: "15px" };

export default Payment;
