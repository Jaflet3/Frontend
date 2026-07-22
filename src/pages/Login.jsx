import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      setIsSubmitting(true);
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("authChanged"));
      navigate("/profile");
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div style={pageStyle}><div style={cardStyle}>
    <h1 style={{ textAlign: "center", color: "#a51d5d", marginBottom: "10px" }}>Welcome Back</h1>
    <p style={{ textAlign: "center", color: "#666", marginBottom: "25px" }}>Sign in to continue shopping</p>
    {location.state?.message && <p role="status" style={successStyle}>{location.state.message}</p>}
    {error && <p role="alert" style={errorStyle}>{error}</p>}
    <form className="login-form" onSubmit={submit}>
      <div style={fieldStyle}><FaEnvelope style={iconStyle} /><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email Address" style={inputStyle} /></div>
      <div style={fieldStyle}><FaLock style={iconStyle} /><input required type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" style={inputStyle} /><button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword((value) => !value)} style={toggleStyle}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button></div>
      <button type="submit" disabled={isSubmitting} style={buttonStyle}>{isSubmitting ? "Signing in..." : "Login"}</button>
    </form>
    <p style={{ textAlign: "center", marginTop: "25px", color: "#555" }}>Do not have an account? <Link to="/register" style={linkStyle}>Register</Link></p>
  </div></div>;
}

const pageStyle = { minHeight: "90vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f8fafc", padding: "30px" };
const cardStyle = { width: "100%", maxWidth: "420px", background: "#fff", padding: "35px", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" };
const fieldStyle = { position: "relative", marginBottom: "20px" };
const iconStyle = { position: "absolute", top: "15px", left: "15px", color: "#888" };
const inputStyle = { width: "100%", boxSizing: "border-box", padding: "14px 45px", borderRadius: "8px", border: "1px solid #ccc", outline: "none" };
const toggleStyle = { position: "absolute", right: "12px", top: "12px", border: "none", background: "transparent", cursor: "pointer", color: "#666" };
const buttonStyle = { width: "100%", padding: "14px", background: "#d63372", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "600", cursor: "pointer" };
const linkStyle = { color: "#a51d5d", fontWeight: "600" };
const errorStyle = { color: "#b91c1c", marginBottom: "15px" };
const successStyle = { color: "#166534", marginBottom: "15px" };

export default Login;
