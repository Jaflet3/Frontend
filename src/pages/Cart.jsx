import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingBag,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Cart() {
  const navigate = useNavigate();
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;
  return (
    <div className="page">
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "40px",
        }}
      >
        🛒 Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            background: "#fff",
            padding: "60px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <FaShoppingBag size={70} color="#2563eb" />
          <h2 style={{ marginTop: "20px" }}>Your Cart is Empty</h2>
          <p style={{ color: "#666" }}>
            Add your favourite toys to start shopping.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "30px",
          }}
        >
          {/* Cart Items */}
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  background: "#fff",
                  padding: "20px",
                  marginBottom: "20px",
                  borderRadius: "15px",
                  boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <h2
                    style={{
                      color: "#2563eb",
                      margin: "10px 0",
                    }}
                  >
                    ₹ {item.price}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <button
                      onClick={() => decreaseQty(item.id)}
                      style={{
                        width: "35px",
                        height: "35px",
                        background: "#2563eb",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                      }}
                    >
                      <FaMinus />
                    </button>
                    <strong>{item.quantity}</strong>
                    <button
                      onClick={() => increaseQty(item.id)}
                      style={{
                        width: "35px",
                        height: "35px",
                        background: "#2563eb",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                      }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    padding: "12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          {/* Order Summary */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "15px",
              height: "fit-content",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
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
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Shipping</span>
              <span>₹ {shipping}</span>
            </p>

            <hr style={{ margin: "20px 0" }} />
            <h3
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <span>Total</span>
              <span>₹ {total}</span>
            </h3>
            <button
              type="button"
              onClick={() => navigate("/payment")}
              style={{
                width: "100%",
                background: "#16a34a",
                color: "#fff",
                border: "none",
                padding: "15px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
