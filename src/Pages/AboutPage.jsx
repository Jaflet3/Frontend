import React from "react";

function AboutPage() {
  return (
    <>
      <section className="banner">
        <h2>About Don Toys</h2>
        <p>Creating Smiles, One Toy at a Time!</p>
      </section>

      <div className="container">
        <h2>Who We Are</h2>

        <p>
          <b>Don Toys</b> is a trusted toy store dedicated to bringing joy,
          creativity and learning to children of all ages. We offer dolls,
          remote cars, building blocks, educational toys, teddy bears and
          many more exciting toys.
        </p>

        <br />

        <h2>Our Mission</h2>

        <p>
          Our mission is to inspire creativity through high-quality and
          educational toys while creating happy childhood memories.
        </p>

        <br />

        <h2>Our Vision</h2>

        <p>
          To become one of the most loved toy stores by providing innovative,
          affordable and safe toys.
        </p>
      </div>

      <div className="container">
        <h2>Why Choose Us?</h2>

        <div className="cards">
          <div className="card">
            <h3>Safe Toys</h3>
            <p>Child-friendly and non-toxic materials.</p>
          </div>

          <div className="card">
            <h3>Huge Collection</h3>
            <p>Hundreds of fun toys for every age.</p>
          </div>

          <div className="card">
            <h3>Happy Customers</h3>
            <p>Excellent quality with affordable prices.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;