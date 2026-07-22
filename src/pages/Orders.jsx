import { FaBoxOpen, FaTruck, FaCheckCircle } from "react-icons/fa";

function Orders() {
  const orders = [
    {
      id: "ORD1001",
      product: "Remote Control Racing Car",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      price: "₹1,499",
      status: "Delivered",
      date: "12 June 2025",
    },
    {
      id: "ORD1002",
      product: "Cute Teddy Bear",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400",
      price: "₹799",
      status: "Shipped",
      date: "18 June 2025",
    },
  ];

  return (
    <div className="page">
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "40px",
        }}
      >
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            background: "#fff",
            padding: "50px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <FaBoxOpen size={70} color="#2563eb" />
          <h2 style={{ marginTop: "20px" }}>No Orders Yet</h2>
          <p style={{ color: "#666" }}>
            Looks like you haven't placed any orders.
          </p>
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              display: "flex",
              gap: "20px",
              background: "#fff",
              marginBottom: "25px",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              src={order.image}
              alt={order.product}
              style={{
                width: "140px",
                height: "140px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h2>{order.product}</h2>

              <p style={{ margin: "10px 0", color: "#555" }}>
                <strong>Order ID:</strong> {order.id}
              </p>

              <p style={{ color: "#555" }}>
                <strong>Ordered On:</strong> {order.date}
              </p>

              <h3
                style={{
                  color: "#2563eb",
                  marginTop: "10px",
                }}
              >
                {order.price}
              </h3>
            </div>

            <div style={{ textAlign: "center" }}>
              {order.status === "Delivered" ? (
                <span
                  style={{
                    background: "#16a34a",
                    color: "#fff",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <FaCheckCircle />
                  Delivered
                </span>
              ) : (
                <span
                  style={{
                    background: "#f59e0b",
                    color: "#fff",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <FaTruck />
                  Shipped
                </span>
              )}

              <div style={{ marginTop: "20px" }}>
                <button
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    width: "150px",
                  }}
                >
                  View Details
                </button>

                <br />

                <button
                  style={{
                    background: "#10b981",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    width: "150px",
                  }}
                >
                  Buy Again
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;