import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaBolt,
  FaStar,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import API from "../services/api";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    API.get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="page">
        <h2 style={{ textAlign: "center" }}>Loading Product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page">
        <h2 style={{ textAlign: "center", color: "red" }}>
          Product Not Found
        </h2>
      </div>
    );
  }

  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        alignItems: "flex-start",
      }}
    >
      {/* Product Image */}
      <div style={{ flex: "1", minWidth: "320px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,.15)",
          }}
        />
      </div>

      {/* Product Details */}
      <div style={{ flex: "1", minWidth: "320px" }}>
        <h1
          style={{
            fontSize: "38px",
            marginBottom: "15px",
          }}
        >
          {product.name}
        </h1>

        {/* Rating */}
        <div
          style={{
            color: "#f59e0b",
            fontSize: "20px",
            marginBottom: "15px",
          }}
        >
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span
            style={{
              color: "#555",
              marginLeft: "10px",
              fontSize: "16px",
            }}
          >
            (4.8 Ratings)
          </span>
        </div>

        {/* Price */}
        <h2
          style={{
            color: "#2563eb",
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          ₹ {product.price}
        </h2>

        {/* Stock */}
        <p
          style={{
            color: "green",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          In Stock
        </p>

        {/* Description */}
        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          {product.description}
        </p>

        {/* Quantity */}
        <h3>Quantity</h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            margin: "20px 0",
          }}
        >
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            style={{
              width: "40px",
              height: "40px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
            }}
          >
            <FaMinus />
          </button>

          <h2>{quantity}</h2>

          <button
            onClick={() => setQuantity(quantity + 1)}
            style={{
              width: "40px",
              height: "40px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
            }}
          >
            <FaPlus />
          </button>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <button
            type="button"
            onClick={() => addToCart(product, quantity)}
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaShoppingCart />
            Add To Cart
          </button>

          <button
            type="button"
            onClick={() => navigate("/payment", { state: { items: [{ ...product, quantity }] } })}
            style={{
              background: "#16a34a",
              color: "#fff",
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaBolt />
            Buy Now
          </button>

          <button
            style={{
              background: "#ef4444",
              color: "#fff",
              padding: "15px 25px",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaHeart />
            Wishlist
          </button>
        </div>

        {/* Product Info */}
        <div
          style={{
            marginTop: "40px",
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Product Information</h3>

          <hr style={{ margin: "10px 0" }} />

          <p>
            <strong>Category:</strong> {product.category || "Toys"}
          </p>

          <p>
            <strong>Brand:</strong> Toy Store
          </p>

          <p>
            <strong>Delivery:</strong> Free Delivery in 3-5 Days
          </p>

          <p>
            <strong>Return:</strong> 7 Days Easy Return
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
