import Hero from "../Components/Hero";
import { toys } from "../data/toys";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart } = useCart();
  return <><Hero />
    <section style={{ padding: "70px 8%", background: "#FFF8F0" }}>
      <h1 style={{ textAlign: "center", color: "#741b45", marginBottom: "50px", fontSize: "40px" }}>Featured Toys</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "30px" }}>
        {toys.slice(0, 4).map((toy) => <article key={toy.id} style={cardStyle}>
          <img src={toy.image} alt={toy.name} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
          <div style={{ padding: "20px" }}><h3>{toy.name}</h3><p style={{ color: "#8d6578" }}>Asset: {toy.imageName}</p><h2 style={{ color: "#d63372", margin: "15px 0" }}>Rs. {toy.price}</h2><button type="button" onClick={() => addToCart(toy)} style={buttonStyle}>Add to Cart</button></div>
        </article>)}
      </div>
    </section>
    <section style={{ background: "linear-gradient(135deg,#a51d5d,#e6538e)", color: "white", textAlign: "center", padding: "70px" }}><h1 style={{ fontSize: "45px" }}>Summer Toy Sale</h1><h2 style={{ margin: "20px 0", fontSize: "35px" }}>Up To 50% Off</h2><p>Limited time offer on selected toys</p></section>
  </>;
}
const cardStyle = { background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,.08)" };
const buttonStyle = { width: "100%", background: "#d63372", color: "white", border: "none", padding: "12px", borderRadius: "10px", cursor: "pointer" };
export default Home;
