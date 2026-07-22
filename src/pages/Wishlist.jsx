import { FaHeart, FaShoppingCart, FaTrash, FaStar } from "react-icons/fa";

function Wishlist() {
  // Sample data (replace with API data later)
  const wishlist = [
    {
      id: 1,
      name: "Toy Collection Set",
      price: 1499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500",
    },
    {
      id: 2,
      name: "Cute Dog Plush",
      price: 799,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500",
    },
    {
      id: 3,
      name: "Deadpool Action Figure",
      price: 999,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500",
    },
  ];

  return (
    <div className="page">
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "10px",
        }}
      >
        ❤️ My Wishlist
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Save your favourite toys for later.
      </p>

      {wishlist.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <FaHeart size={70} color="#ef4444" />

          <h2 style={{ marginTop: "20px" }}>Your Wishlist is Empty</h2>

          <p style={{ color: "#666" }}>
            Start adding your favourite toys.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                transition: "0.3s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{item.name}</h3>

                <p
                  style={{
                    color: "#f59e0b",
                    margin: "10px 0",
                  }}
                >
                  <FaStar /> {item.rating}
                </p>

                <h2
                  style={{
                    color: "#2563eb",
                    marginBottom: "20px",
                  }}
                >
                  ₹ {item.price}
                </h2>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{
                      flex: 1,
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      padding: "12px",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>

                  <button
                    style={{
                      background: "#ef4444",
                      color: "#fff",
                      border: "none",
                      padding: "12px 15px",
                      borderRadius: "8px",
                    }}
                    title="Remove from Wishlist"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {wishlist.length > 0 && (
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <button
            style={{
              background: "#16a34a",
              color: "#fff",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            🛒 Add All to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
