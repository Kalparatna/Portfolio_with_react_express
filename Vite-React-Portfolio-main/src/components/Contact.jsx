import React, { useState } from "react";
import "../styles/Contacts.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfoliobackend-gray.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrorMessage("");
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <h3 className="connect-heading">Let's Connect</h3>

      <section className="contact-section" id="contact">
        <div className="contact-details">
          <h4>Contact Information</h4>
          <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
          <p><strong>Email:</strong> example@email.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">Submit</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </section>
    </div>
  );
};

export default Contact;
