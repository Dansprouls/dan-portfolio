import React, { useState } from "react";

import "./form.scss";

export const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    alert(
      "Currently working on the backend! Please reference the My Information section to find my details to get in touch!"
    );
  }

  return (
    <>
      <h2 className="contact-header">Contact Form</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            id="firstName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            id="lastName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email@email.com"
            onChange={handleChange}
            name="email"
            value={formData.email}
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            value={formData.message}
            placeholder="Send a message"
            onChange={handleChange}
            name="message"
            id="message"
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
