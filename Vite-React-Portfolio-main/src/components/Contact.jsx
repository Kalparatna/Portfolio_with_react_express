import React, { useState, Suspense, lazy } from "react";
const Lottie = lazy(() => import("lottie-react"));
import emailSVG from "./emailsvg.json"; // Update the path based on your file structure
import '../styles/Contacts.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage('An error occurred while sending your message. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      {/* Wrap Lottie in Suspense to handle lazy loading */}
      <Suspense fallback={<div>Loading animation...</div>}>
        <Lottie className="lottie-email" animationData={emailSVG} />
      </Suspense>
      <h3 className="connect-heading">Let's Connect</h3>

      <section className="contact-section" id="contact">
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
              ></textarea>
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
