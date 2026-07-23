import { Link } from "react-router-dom";
import { FaBoxOpen, FaClipboardList, FaUsers, FaUserShield } from "react-icons/fa";

const cards = [
  { label: "Customer accounts", value: "Manage access", icon: <FaUsers />, detail: "Review customer accounts and support requests." },
  { label: "Product catalogue", value: "Manage toys", icon: <FaBoxOpen />, detail: "Add, update, or review product listings." },
  { label: "Order activity", value: "Review orders", icon: <FaClipboardList />, detail: "Monitor customer purchases and fulfilment." },
];

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return <main style={pageStyle}>
    <section style={heroStyle}>
      <div><p style={eyebrowStyle}><FaUserShield /> ADMINISTRATOR</p><h1 style={{ margin: "0 0 10px" }}>Welcome back, {user.name || "Admin"}</h1><p style={{ margin: 0, opacity: 0.9 }}>Manage the ToyVerse store from one dedicated workspace.</p></div>
      <Link to="/profile" style={profileLinkStyle}>View administrator profile</Link>
    </section>

    <section style={gridStyle}>{cards.map((card) => <article key={card.label} style={cardStyle}>
      <span style={iconStyle}>{card.icon}</span><p style={labelStyle}>{card.label}</p><h2 style={{ margin: "0 0 10px", color: "#741b45" }}>{card.value}</h2><p style={{ margin: 0, color: "#6b7280", lineHeight: 1.5 }}>{card.detail}</p>
    </article>)}</section>

    <section style={actionsStyle}><div><h2 style={{ marginTop: 0, color: "#741b45" }}>Administrator tools</h2><p style={{ color: "#6b7280" }}>Use these shortcuts to review the customer-facing store and your account.</p></div><div style={actionLinksStyle}><Link to="/shop" style={primaryLinkStyle}>View store</Link><Link to="/orders" style={secondaryLinkStyle}>Order history</Link></div></section>
  </main>;
}

const pageStyle = { minHeight: "78vh", background: "#fff8f0", padding: "44px 8%" };
const heroStyle = { display: "flex", justifyContent: "space-between", gap: "24px", alignItems: "center", background: "linear-gradient(135deg,#741b45,#d63372)", color: "#fff", borderRadius: "22px", padding: "40px", marginBottom: "30px" };
const eyebrowStyle = { display: "flex", alignItems: "center", gap: "8px", letterSpacing: "1px", fontSize: "13px", fontWeight: 700, margin: "0 0 12px" };
const profileLinkStyle = { display: "inline-block", background: "#fff", color: "#741b45", padding: "12px 18px", borderRadius: "9px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" };
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px", marginBottom: "30px" };
const cardStyle = { background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 8px 24px rgba(116,27,69,.08)", border: "1px solid #f3d7e3" };
const iconStyle = { display: "inline-grid", placeItems: "center", width: "42px", height: "42px", borderRadius: "12px", background: "#fde7f0", color: "#a51d5d", fontSize: "20px", marginBottom: "18px" };
const labelStyle = { margin: "0 0 7px", color: "#8d6578", fontWeight: 600 };
const actionsStyle = { background: "#fff", borderRadius: "16px", padding: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", boxShadow: "0 8px 24px rgba(116,27,69,.06)" };
const actionLinksStyle = { display: "flex", flexWrap: "wrap", gap: "12px" };
const primaryLinkStyle = { background: "#a51d5d", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: "9px", fontWeight: 700 };
const secondaryLinkStyle = { background: "#fff", color: "#a51d5d", border: "1px solid #a51d5d", textDecoration: "none", padding: "12px 18px", borderRadius: "9px", fontWeight: 700 };

export default AdminDashboard;
