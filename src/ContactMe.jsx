import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Show loading
    setMessage("");    // Reset message

    try {
      const response = await axios.post(
        "https://portfolio-backend-tl33.onrender.com/contact",
        formData
      );
      if (response.status === 200) {
        setMessage("Form submitted successfully! I will reach out to you soon.");
        setFormData({ name: "", email: "", phone: "", purpose: "" });
      } else {
        setMessage("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
    setLoading(false); // Hide loading
  };

  return (
    <div className="contact-page">
      <h1 className="section-heading">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g., John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g., john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g., +1-123-456-7890"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Purpose Field */}
        <div className="form-group">
          <label htmlFor="purpose">Purpose</label>
          <textarea
            id="purpose"
            name="purpose"
            rows="5"
            placeholder="Let me know how I can assist you."
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          Submit
        </button>
      </form>

      {/* Loading Indicator */}
      {loading && (
        <div className="loading-indicator">
          <span className="loader"></span>
          <span>Submitting...</span>
        </div>
      )}

      {/* Message */}
      {!loading && message && <p className="message">{message}</p>}
    </div>
  );
};

export default Contact;
