import { Link } from "react-router-dom";
import teddy from "../Assets/teddy.jpg";

function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg,#fff1f6,#fbd0e2,#f79abf)",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 8%",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: "320px" }}>
        <h1
          style={{
            fontSize: "60px",
            color: "#741b45",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Bring Joy <br />
          With Every Toy 🧸
        </h1>
      
        <p
          style={{
            fontSize: "20px",
            color: "#444",
            marginBottom: "30px",
            lineHeight: "1.8",
          }}
        >
          Discover educational toys, action figures,
          puzzles, dolls, RC cars and gifts loved by kids.
        </p>

        <Link to="/shop">
          <button
            style={{
              background: "#d63372",
              color: "white",
              padding: "15px 35px",
              border: "none",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>

      <div style={{ flex: 1 }}>
  <img
    src={teddy}
    alt="Toy Teddy"
    style={{
      width: "100%",
      maxWidth: "450px",
      marginLeft: "auto",
      borderRadius: "20px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    }}
  />
</div>
    </section>
  );
}

export default Hero;
