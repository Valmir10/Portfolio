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

  // handle input changes
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
        setResponseMessage("✅ Message sent!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setResponseMessage(`❌ Fel: ${data.error}`);
      }
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setResponseMessage("❌ Error. Try again.");
    }
  };

  return (
    <section id="contact" className="contact-section-container">
      <div className="contact-text-left-container">
        <div className="contact-text-left-wrapper">
          <div className="contact-texts-information-container">
            <div className="text-1-container" id="contact-text-1">
              <h1>Let's get in touch</h1>
            </div>

            <div className="text-2-container" id="contact-text-2">
              <h3>
                I'm open to new opportunities! Reach out, and let's discuss how
                I can bring value to your team.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-right-container">
        <div className="contact-form-right-wrapper">
          <form className="contact-form-container" onSubmit={handleSubmit}>
            <div className="first-last-name-container">
              <label
                className="first-name-label-container"
                htmlFor="first-name-input"
              >
                <input
                  id="first-name-input"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
              <label
                className="last-name-label-container"
                htmlFor="last-name-input"
              >
                <input
                  id="last-name-input"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="email-container">
              <label className="email-label-container" htmlFor="email-input">
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="message-container">
              <label
                className="message-label-container"
                htmlFor="message-textarea"
              >
                <textarea
                  id="message-textarea"
                  name="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>
            </div>

            <div className="send-button-container">
              <button type="submit">Send</button>
            </div>
            {responseMessage && (
              <p className="response-message">{responseMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
