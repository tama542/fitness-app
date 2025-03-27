import React, { useState } from "react";






const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': '397bc239-943a-4b7f-867e-5ac2769e0b06',
        },
        body: JSON.stringify({key: 'value'}),
      });
     
   

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-30">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full mt-1 p-2 border rounded-md"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-orange-500">Send Message</button>
        {/* <input type="hidden" name="apikey" value="397bc239-943a-4b7f-867e-5ac2769e0b06"></input> */}
      </form>
    </div>
  );
};

export default ContactForm;
