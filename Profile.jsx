import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import API from "../services/api";
function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
      return;
    }
    API.get("/auth/me")
      .then(({ data }) => { setUser(data.user); localStorage.setItem("user", JSON.stringify(data.user)); })
      .catch((requestError) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setError(requestError.response?.data?.message || "Unable to load your account.");
      });
  }, [navigate]);
  if (error) return <div style={messageStyle}><p role="alert">{error}</p><Link to="/login">Go to login</Link></div>;
  if (!user) return <div style={messageStyle}>Loading account...</div>;
  return <main style={pageStyle}><section style={cardStyle}>
    <div style={headerStyle}><div style={avatarStyle}>{user.name.charAt(0).toUpperCase()}</div><h1>{user.name}</h1><p>{user.role === "admin" ? "Administrator account" : "Customer account"}</p></div>
    <div style={{ padding: "32px" }}><h2 style={{ color: "#a51d5d" }}>Account Details</h2>
      <p style={detailStyle}><FaUser /> <strong>Name:</strong> {user.name}</p>
      <p style={detailStyle}><FaEnvelope /> <strong>Email:</strong> {user.email}</p>
      <p style={detailStyle}><FaPhone /> <strong>Phone:</strong> {user.phone}</p>
      <p style={detailStyle}><strong>Role:</strong> {user.role}</p>
    </div>
  </section></main>;
}
const pageStyle = { minHeight: "80vh", padding: "40px 20px", background: "#f8fafc" };
const cardStyle = { maxWidth: "760px", margin: "0 auto", background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,.1)" };
const headerStyle = { background: "linear-gradient(135deg,#9d174d,#e6538e)", color: "#fff", textAlign: "center", padding: "35px" };
const avatarStyle = { width: "82px", height: "82px", borderRadius: "50%", display: "grid", placeItems: "center", margin: "0 auto 14px", background: "#fff", color: "#a51d5d", fontSize: "32px", fontWeight: "bold" };
const detailStyle = { display: "flex", gap: "10px", alignItems: "center", lineHeight: "2" };
const messageStyle = { minHeight: "50vh", display: "grid", placeContent: "center", gap: "14px", textAlign: "center" };
export default Profile;
