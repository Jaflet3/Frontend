import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaKey } from "react-icons/fa";
import API from "../services/api";
import blocksImage from "../Assets/blocks.jpg";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "", role: "user", adminRegistrationKey: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => setUser((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!user.name || !user.email || !user.phone || !user.password || !user.confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }
    if (user.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = { name: user.name, email: user.email, phone: user.phone, password: user.password, role: user.role };
      if (user.role === "admin") payload.adminRegistrationKey = user.adminRegistrationKey;
      await API.post("/auth/register", payload);
      navigate("/login", { state: { message: "Registration successful. Please sign in." } });
    } catch (requestError) {
      setError(requestError.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <aside className="auth-showcase">
          <p className="auth-kicker">ToyVerse account</p>
          <h1>Play starts here.</h1>
          <p>Create an account to explore carefully chosen toys, manage orders, and save your favourites.</p>
          <img src={blocksImage} alt="Colourful building blocks" />
          <div className="auth-points"><span>Secure account</span><span>Easy ordering</span><span>Quality toys</span></div>
        </aside>
        <section className="auth-form-panel">
          <p className="auth-kicker">Welcome to ToyVerse</p>
          <h2>Create your account</h2>
          <p className="auth-subtitle">Choose an account type and enter your details below.</p>
        <form className="registration-form" onSubmit={handleSubmit}>
          {error && <p role="alert" style={{ color: "#c2410c", marginBottom: "15px" }}>{error}</p>}
          <label style={labelStyle} htmlFor="role">Account type</label>
          <select id="role" name="role" value={user.role} onChange={handleChange} style={inputStyle}>
            <option value="user">Customer account</option>
            <option value="admin">Administrator account</option>
          </select>
          <div className="registration-grid">
          <Field icon={<FaUser />} type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} />
          <Field icon={<FaEnvelope />} type="email" name="email" placeholder="Email Address" value={user.email} onChange={handleChange} />
          <Field icon={<FaPhone />} type="tel" name="phone" placeholder="Phone Number" value={user.phone} onChange={handleChange} />
          {user.role === "admin" && <Field icon={<FaKey />} type="password" name="adminRegistrationKey" placeholder="Admin registration key" value={user.adminRegistrationKey} onChange={handleChange} />}
          <Field icon={<FaLock />} type={showPassword ? "text" : "password"} name="password" placeholder="Password (8+ characters)" value={user.password} onChange={handleChange} />
          <Field icon={<FaLock />} type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange} />
          </div>
          <label><input type="checkbox" checked={showPassword} onChange={() => setShowPassword((value) => !value)} /> Show Password</label>
          <button type="submit" disabled={isSubmitting} style={buttonStyle}>{isSubmitting ? "Creating account..." : "Register"}</button>
        </form>
        <p style={{ textAlign: "center", marginTop: "20px" }}>Already have an account? <Link to="/login" style={linkStyle}>Login</Link></p>
        </section>
      </div>
    </div>
  );
}

function Field({ icon, ...props }) {
  return <div className="field-with-icon">{icon}<input {...props} required style={inputStyle} /></div>;
}

const inputStyle = { width: "100%", boxSizing: "border-box", padding: "13px 14px 13px 42px", marginTop: "8px", border: "1px solid #d5dce5", borderRadius: "10px", fontSize: "15px" };
const labelStyle = { display: "block", fontWeight: "bold", marginBottom: "2px" };
const buttonStyle = { width: "100%", marginTop: "20px", padding: "14px", background: "#FF6B6B", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" };
const linkStyle = { color: "#FF6B6B", textDecoration: "none", fontWeight: "bold" };

export default Register;
