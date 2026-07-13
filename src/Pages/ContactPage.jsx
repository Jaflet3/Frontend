import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
        />

        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;