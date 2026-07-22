import { Link } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa";
function Footer() { return <footer className="site-footer"><div className="footer-grid"><div><h2>ToyVerse</h2><p>A considered collection of playful, imaginative toys for every growing mind.</p></div><div><h3>Explore</h3><Link to="/shop">Shop toys</Link><Link to="/about">Our story</Link><Link to="/faq">Help centre</Link></div><div><h3>Contact</h3><p><FaPhoneAlt /> +91 9876543210</p><p><FaEnvelope /> support@toyverse.com</p><p><FaInstagram /> @toyverse</p></div></div><div className="footer-bottom">Copyright 2026 ToyVerse. All rights reserved.</div></footer>; }
export default Footer;

