import React from "react";

import teddy from "../Assets/teddy.jpg";
import car from "../Assets/car.jpg";
import blocks from "../Assets/blocks.jpg";
import doll from "../Assets/doll.jpg";
import robot from "../Assets/robot.jpg";
import peng from "../Assets/peng.jpg";

function CategoriesPage() {
  return (
    <>
      <section className="banner">
        <h2>Toy Categories</h2>
        <p>Browse your favourite toys</p>
      </section>

      <div className="container">
        <h2>Categories</h2>

        <div className="category-grid">

          <div className="category-box">
            <img src={teddy} alt="Teddy" />
            <h3>Soft Toys</h3>
            <p>Soft teddy bears and plush toys.</p>
          </div>

          <div className="category-box">
            <img src={car} alt="Car" />
            <h3>Vehicle Toys</h3>
            <p>Cars and racing toys.</p>
          </div>

          <div className="category-box">
            <img src={blocks} alt="Blocks" />
            <h3>Educational Toys</h3>
            <p>Creative building blocks.</p>
          </div>

          <div className="category-box">
            <img src={doll} alt="Doll" />
            <h3>Dolls</h3>
            <p>Beautiful dolls for kids.</p>
          </div>

          <div className="category-box">
            <img src={robot} alt="Robot" />
            <h3>Robot Toys</h3>
            <p>Interactive electronic toys.</p>
          </div>

          <div className="category-box">
            <img src={peng} alt="Penguin" />
            <h3>Animal Toys</h3>
            <p>Cute animal figures.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default CategoriesPage;