import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user") || "null"));
  useEffect(() => { const update = () => setUser(JSON.parse(localStorage.getItem("user") || "null")); window.addEventListener("authChanged", update); return () => window.removeEventListener("authChanged", update); }, []);
  const logout = () => { localStorage.removeItem("token"); localStorage.removeItem("user"); setUser(null); navigate("/login"); };
  return <nav className="site-nav"><Link to="/" className="site-brand">ToyVerse</Link><div className="site-links">{user?.role === "admin" ? <Link to="/admin">Admin Dashboard</Link> : <Link to="/">Home</Link>}<Link to="/shop">Shop</Link><Link to="/about">Our Story</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link><Link aria-label="Wishlist" className="nav-icon" to="/wishlist"><FaHeart /></Link><Link aria-label="Cart" className="nav-icon" to="/cart"><FaShoppingCart /></Link>{user ? <><Link aria-label="Profile" className="nav-icon" to="/profile"><FaUserCircle /></Link><button onClick={logout} className="nav-logout">Logout</button></> : <Link to="/login" className="nav-login">Login</Link>}</div></nav>;
}
export default Navbar;
