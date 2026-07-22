import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#fff",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            marginBottom: "10px",
          }}
        >
          🧸
        </h1>

        <h2
          style={{
            fontSize: "60px",
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          404
        </h2>

        <h3
          style={{
            fontSize: "28px",
            marginBottom: "15px",
          }}
        >
          Oops! Page Not Found
        </h3>

        <p
          style={{
            color: "#666",
            marginBottom: "35px",
            lineHeight: "1.7",
          }}
        >
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring amazing toys!
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "12px 25px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "600",
            }}
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/shop"
            style={{
              background: "#f59e0b",
              color: "#fff",
              padding: "12px 25px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "600",
            }}
          >
            <FaShoppingBag />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;