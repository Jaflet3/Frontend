import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

const signedIn = () => Boolean(localStorage.getItem("token"));
const RequireAuth = ({ children }) => signedIn() ? children : <Navigate to="/register" replace />;
const GuestOnly = ({ children }) => signedIn() ? <Navigate to="/" replace /> : children;

function AppContent() {
  const location = useLocation();
  const isAuthScreen = ["/login", "/register"].includes(location.pathname);
  return <>{!isAuthScreen && <Navbar />}
    <Routes>
      <Route path="/login" element={<GuestOnly><Login /></GuestOnly>} />
      <Route path="/register" element={<GuestOnly><Register /></GuestOnly>} />
      <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="/shop" element={<RequireAuth><Shop /></RequireAuth>} />
      <Route path="/product/:id" element={<RequireAuth><ProductDetails /></RequireAuth>} />
      <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
      <Route path="/wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
      <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
      <Route path="/payment" element={<RequireAuth><Payment /></RequireAuth>} />
      <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path="/orders" element={<RequireAuth><Orders /></RequireAuth>} />
      <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
      <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
      <Route path="/faq" element={<RequireAuth><Faq /></RequireAuth>} />
      <Route path="*" element={<RequireAuth><NotFound /></RequireAuth>} />
    </Routes>
    {!isAuthScreen && <Footer />}</>;
}

function App() {
  return <CartProvider><BrowserRouter><AppContent /></BrowserRouter></CartProvider>;
}

export default App;
