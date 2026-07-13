
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>🧸 Don Toys</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;