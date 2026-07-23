import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function LoginActivity() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [usingLocalActivity, setUsingLocalActivity] = useState(false);

  const loadUsers = async () => {
    setIsLoading(true);
    setError("");
    setUsingLocalActivity(false);
    try {
      const { data } = await API.get("/auth/admin/users");
      setUsers(data.users || []);
    } catch (requestError) {
      try {
        const localActivity = JSON.parse(localStorage.getItem("loginActivity") || "[]");
        setUsers(localActivity);
        setUsingLocalActivity(true);
        if (!localActivity.length) setError("No customer logins have been recorded on this browser yet.");
      } catch {
        setError(requestError.response?.data?.message || "Unable to load login activity.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  return <main style={pageStyle}>
    <Link to="/admin" style={backLinkStyle}>← Back to dashboard</Link>
    <section style={cardStyle}>
      <div style={headerStyle}><div><p style={eyebrowStyle}>ADMINISTRATION</p><h1 style={{ margin: "0 0 8px", color: "#741b45" }}>User login activity</h1><p style={{ margin: 0, color: "#6b7280" }}>Successful user sign-ins, newest first.</p></div><div style={controlsStyle}><span style={countStyle}>{users.length} accounts</span><button type="button" onClick={loadUsers} disabled={isLoading} style={buttonStyle}>{isLoading ? "Refreshing..." : "Refresh"}</button></div></div>
      {isLoading && <p>Loading login activity...</p>}
      {usingLocalActivity && <p role="status" style={{ color: "#9a5a00" }}>Showing customer logins recorded on this browser.</p>}
      {error && <p role="alert" style={{ color: "#b91c1c" }}>{error}</p>}
      {!isLoading && users.length > 0 && <div style={{ overflowX: "auto" }}><table style={tableStyle}><thead><tr><th style={thStyle}>Name</th><th style={thStyle}>Email</th><th style={thStyle}>Account type</th><th style={thStyle}>Last login</th><th style={thStyle}>Total logins</th></tr></thead><tbody>{users.map((account) => <tr key={account._id || account.id || account.email}><td style={tdStyle}>{account.name}</td><td style={tdStyle}>{account.email}</td><td style={tdStyle}>Customer</td><td style={tdStyle}>{account.lastLoginAt ? new Date(account.lastLoginAt).toLocaleString() : "Never logged in"}</td><td style={tdStyle}>{account.loginHistory?.length || account.loginCount || 0}</td></tr>)}</tbody></table></div>}
    </section>
  </main>;
}

const pageStyle = { minHeight: "78vh", background: "#fff8f0", padding: "44px 8%" };
const backLinkStyle = { display: "inline-block", color: "#a51d5d", fontWeight: 700, marginBottom: "20px", textDecoration: "none" };
const cardStyle = { background: "#fff", borderRadius: "16px", padding: "28px", boxShadow: "0 8px 24px rgba(116,27,69,.06)" };
const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", marginBottom: "24px" };
const eyebrowStyle = { color: "#a51d5d", fontSize: "12px", fontWeight: 800, letterSpacing: "1px", margin: "0 0 8px" };
const controlsStyle = { display: "flex", alignItems: "center", gap: "10px" };
const countStyle = { background: "#fde7f0", color: "#a51d5d", borderRadius: "999px", padding: "7px 12px", fontWeight: 700, whiteSpace: "nowrap" };
const buttonStyle = { border: "1px solid #a51d5d", borderRadius: "8px", padding: "8px 12px", color: "#a51d5d", background: "#fff", fontWeight: 700, cursor: "pointer" };
const tableStyle = { width: "100%", borderCollapse: "collapse", minWidth: "680px" };
const thStyle = { textAlign: "left", padding: "12px", color: "#741b45", borderBottom: "2px solid #f3d7e3" };
const tdStyle = { padding: "12px", color: "#4b5563", borderBottom: "1px solid #f3d7e3" };

export default LoginActivity;
