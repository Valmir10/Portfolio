import "../styles/Contact.css";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;

    try {
      const response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setResponseMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("Error. Try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>I'm open to new opportunities</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
