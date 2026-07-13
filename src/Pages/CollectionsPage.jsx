import React from "react";

import teddy from "../Assets/teddy.jpg";
import car from "../Assets/car.jpg";
import blocks from "../Assets/blocks.jpg";
import robot from "../Assets/robot.jpg";
import doll from "../Assets/doll.jpg";
import peng from "../Assets/peng.jpg";

function CollectionsPage() {
  return (
    <>
      <section className="banner">
        <h2>Our Collections</h2>
        <p>Discover exciting toys</p>
      </section>

      <div className="container">
        <div className="cards">

          <div className="card">
            <img src={teddy} alt="Teddy" />
            <h3>Teddy Bear</h3>
            <button>View Collection</button>
          </div>

          <div className="card">
            <img src={car} alt="Car" />
            <h3>Remote Car</h3>
            <button>View Collection</button>
          </div>

          <div className="card">
            <img src={blocks} alt="Blocks" />
            <h3>Building Blocks</h3>
            <button>View Collection</button>
          </div>

          <div className="card">
            <img src={robot} alt="Robot" />
            <h3>Robot Toys</h3>
            <button>View Collection</button>
          </div>

          <div className="card">
            <img src={doll} alt="Doll" />
            <h3>Dolls</h3>
            <button>View Collection</button>
          </div>

          <div className="card">
            <img src={peng} alt="Penguin" />
            <h3>Animal Toys</h3>
            <button>View Collection</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default CollectionsPage;