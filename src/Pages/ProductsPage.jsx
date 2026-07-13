import React from "react";
function ProductsPage() {
  return (
    <div className="container">
      <h2>Our Products</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Barbie Doll</td>
            <td>₹1200</td>
          </tr>

          <tr>
            <td>Remote Car</td>
            <td>₹1400</td>
          </tr>

          <tr>
            <td>Lego Blocks</td>
            <td>₹1800</td>
          </tr>

          <tr>
            <td>Teddy Bear</td>
            <td>₹800</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductsPage;