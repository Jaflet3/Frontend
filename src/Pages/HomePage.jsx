import teddy from "../Assets/teddy.jpg";
import car from "../Assets/car.jpg";
import blocks from "../Assets/blocks.jpg";

function HomePage() {
  return (
    <>
      <section className="banner">
        <h2>Welcome to Don Toys</h2>
        <p>Your Happy Toy Store</p>
      </section>

      <div className="container">
        <h2>Popular Toys</h2>

        <div className="cards">
          <div className="card">
            <img src={teddy} alt="Teddy" />
            <h3>Teddy Bear</h3>
            <p>₹799</p>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={car} alt="Car" />
            <h3>Remote Car</h3>
            <p>₹1299</p>
            <button>Buy Now</button>
          </div>

          <div className="card">
            <img src={blocks} alt="Blocks" />
            <h3>Building Blocks</h3>
            <p>₹999</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;