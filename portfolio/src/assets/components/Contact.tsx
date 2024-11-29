import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic for form submission here (e.g., API call)
  };

  return (
    <section className="py-10 background-to">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center  mb-6">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800 shadow-lg rounded-lg p-8 max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2  bg-zinc-400 text-white"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2  bg-zinc-400 text-white"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-white font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2  bg-zinc-400 text-white"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 h-32 bg-zinc-400 text-white"
              placeholder="Enter your message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
