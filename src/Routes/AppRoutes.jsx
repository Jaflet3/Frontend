import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProductsPage from "../Pages/ProductsPage";
import CategoriesPage from "../Pages/CategoriesPage";
import CollectionsPage from "../Pages/CollectionsPage";
import OffersPage from "../Pages/OffersPage";
import ContactPage from "../Pages/ContactPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;