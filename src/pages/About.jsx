import { Link } from "react-router-dom";
import { FaGift, FaShieldAlt, FaShippingFast } from "react-icons/fa";
import dollImage from "../Assets/doll.jpg";
import pengImage from "../Assets/peng.jpg";

const features = [{ icon: <FaShieldAlt />, title: "Thoughtfully selected", text: "Every item is chosen for quality, safety, and long-lasting play." }, { icon: <FaShippingFast />, title: "Simple delivery", text: "Clear order updates and dependable delivery for every purchase." }, { icon: <FaGift />, title: "Gift-ready choices", text: "Find memorable presents for birthdays, milestones, and everyday joy." }];

function About() {
  return <main className="about-page">
    <section className="about-hero"><p>Our story</p><h1>Play is serious work.</h1><span>ToyVerse brings families a carefully selected collection of toys that inspire imagination, confidence, and connection.</span></section>
    <section className="about-story"><div className="about-images"><img src={dollImage} alt="Doll from the ToyVerse collection" /><img src={pengImage} alt="Penguin plush from the ToyVerse collection" /></div><div><p className="section-eyebrow">Made for curious minds</p><h2>A toy store built around meaningful moments.</h2><p>We believe the best toys do more than fill a shelf. They create stories, build skills, and give children room to discover what they enjoy.</p><p>From soft companions to building sets and remote-control adventures, ToyVerse makes it easier to choose toys that feel special.</p><Link to="/shop" className="about-cta">Explore the collection</Link></div></section>
    <section><div className="section-heading"><p className="section-eyebrow">Why ToyVerse</p><h2>Care in every detail</h2></div><div className="about-features">{features.map((feature) => <article key={feature.title}><div>{feature.icon}</div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
    <section className="about-numbers"><div><strong>500+</strong><span>Toys to explore</span></div><div><strong>10K+</strong><span>Happy families</span></div><div><strong>24/7</strong><span>Support available</span></div></section>
  </main>;
}
export default About;
