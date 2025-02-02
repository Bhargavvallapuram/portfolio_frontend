import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Create dynamic and responsive websites tailored to your needs.",
      logo: "🌐",
    },
    {
      title: "Debugging",
      description:
        "Identify and fix bugs in your applications for smooth functionality.",
      logo: "🐞",
    },
    {
      title: "Tutoring",
      description: "Learn new skills and technologies with personalized guidance.",
      logo: "📚",
    },
  ];

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    serviceType: "",
    contactName: "",
    email: "",
    phone: "",
    projectOrSubject: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://portfolio-backend-tl33.onrender.com/Service", formData);
      console.log("response",response);
      if (response.status === 200) {
        setMessage("Service request submitted successfully! I will reach out to you soon.");

      } else {
        setMessage("Failed to send the service request. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  const getPlaceholder = () => {
    switch (formData.serviceType) {
      case "Web Development":
      case "Debugging":
        return "Provide detailed information about your project...";
      case "Tutoring":
        return "Provide detailed information about the subject...";
      default:
        return "Select a service to update this field...";
    }
  };

  const getTitle = () => {
    switch (formData.serviceType) {
      case "Web Development":
      case "Debugging":
        return "Project Title";
      case "Tutoring":
        return "Subject Name";
      default:
        return "Project or Subject";
    }
  };

  return (
    <div className="service-plans-page">
      <h1 className="section-heading">Our Services</h1>
      <p className="intro-text">
        Explore the services we offer and let us help you achieve your goals.
      </p>
      <div className="services-wrapper">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-logo">{service.logo}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="form-wrapper">
        <h2 className="form-heading">Get Started with a Service</h2>
        <form className="service-form" onSubmit={handleSubmit}>
          <label htmlFor="serviceType">Select Service:</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            required
            className="serviceType"
          >
            <option value="">-- Select a Service --</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          <label htmlFor="contactName">Name:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            placeholder="Your Name"
            value={formData.contactName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+911234567890"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="projectOrSubject">{getTitle()}:</label>
          <input
            type="text"
            id="projectOrSubject"
            name="projectOrSubject"
            placeholder={getTitle()}
            value={formData.projectOrSubject}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            name="details"
            placeholder={getPlaceholder()}
            value={formData.details}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Services;
