import React from "react";

function OffersPage() {
  return (
    <>
      <section className="banner">
        <h2>Special Offers</h2>
        <p>Save More on Every Purchase</p>
      </section>

      <div className="container">

        <div className="cards">

          <div className="card">
            <h3>20% OFF</h3>
            <p>Soft Toys Collection</p>
            <button>Shop Now</button>
          </div>

          <div className="card">
            <h3>Buy 2 Get 1</h3>
            <p>Building Blocks</p>
            <button>Grab Deal</button>
          </div>

          <div className="card">
            <h3>15% OFF</h3>
            <p>Birthday Gifts</p>
            <button>Claim Offer</button>
          </div>

        </div>

      </div>

      <div className="container">

        <table>

          <thead>
            <tr>
              <th>Festival</th>
              <th>Offer</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Christmas</td>
              <td>40% OFF</td>
            </tr>

            <tr>
              <td>Diwali</td>
              <td>30% OFF</td>
            </tr>

            <tr>
              <td>Children's Day</td>
              <td>25% OFF</td>
            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
}

export default OffersPage;