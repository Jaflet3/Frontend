import { useState } from "react";
import { FaSearch, FaStar, FaShoppingCart } from "react-icons/fa";
import { toys } from "../data/toys";
import { useCart } from "../context/CartContext";

function Shop() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const products = toys.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) && (category === "All" || product.category === category));
  return <main className="page">
    <div style={heroStyle}><h1>Toy Store</h1><p>Find the perfect toys for every child.</p></div>
    <div style={filterStyle}><div style={searchStyle}><FaSearch color="#666" /><input type="text" placeholder="Search toys" value={search} onChange={(event) => setSearch(event.target.value)} style={{ border: "none", outline: "none", marginLeft: "10px", width: "100%" }} /></div><select value={category} onChange={(event) => setCategory(event.target.value)} style={selectStyle}><option>All</option><option>Vehicles</option><option>Soft Toys</option><option>Educational</option><option>Electronic</option><option>Dolls</option></select></div>
    <div style={gridStyle}>{products.map((product) => <article key={product.id} style={cardStyle}><img src={product.image} alt={product.name} style={imageStyle} /><div style={{ padding: "20px" }}><h3>{product.name}</h3><p>{product.category}</p><p>Asset: {product.imageName}</p><p style={{ color: "#d63372" }}><FaStar /> {product.rating}</p><h2 style={{ color: "#a51d5d" }}>Rs. {product.price}</h2><button type="button" onClick={() => addToCart(product)} style={buttonStyle}><FaShoppingCart /> Add to Cart</button></div></article>)}</div>
    {!products.length && <h2 style={{ textAlign: "center", marginTop: "50px" }}>No toys found.</h2>}
  </main>;
}
const heroStyle = { background: "linear-gradient(135deg,#9d174d,#e6538e)", color: "white", padding: "50px", borderRadius: "15px", textAlign: "center", marginBottom: "40px" };
const filterStyle = { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between", marginBottom: "40px" };
const searchStyle = { display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "8px", padding: "10px 15px", flex: 1, minWidth: "250px", background: "#fff" };
const selectStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #ddd" };
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "25px" };
const cardStyle = { background: "#fff", borderRadius: "15px", overflow: "hidden", boxShadow: "0 8px 20px rgba(0,0,0,.08)" };
const imageStyle = { width: "100%", height: "220px", objectFit: "cover" };
const buttonStyle = { width: "100%", background: "#d63372", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", cursor: "pointer" };
export default Shop;
