import React, { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  // Create a ref to store the form element
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "07c639ff-90ac-4653-9f48-011181ccaa58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent!",
        icon: "success",
      });

      // Reset the form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <div className="p-10 bg-slate-100" id="contact">
      {/* Contact Title */}
      <div className="subtitleContainer">
        <h2 className="subtitle">Contact</h2>
      </div>

      <div className="contactCard w-full p-10 bg-slate-100 flex flex-col items-center justify-center">
        {/* Intro Text and Form */}
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:gap-8">
          {/* Intro Text */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h3 className="text-lg font-medium">
              I'm excited to connect with professionals and explore new
              opportunities!
            </h3>
            <h4 className="text-base text-gray-600 mt-2">
              Whether you have a question, a collaboration idea, or a full-time
              developer role in mind, I would love to hear from you. Feel free
              to send me a message below or reach out directly via
              <span className="text-primary font-semibold cursor-pointer">
                <a href="mailto:jonathonleyshon@gmail.com"> Email</a>
              </span>{" "}
              or
              <span className="text-primary font-semibold cursor-pointer">
                {" "}
                <a
                  href="https://www.linkedin.com/in/jon-leyshon-338534a9/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
              .
            </h4>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-100 w-80 p-6 rounded-lg shadow-md border border-gray-200 lg:w-1/2">
            <form
              className="flex flex-col gap-4"
              onSubmit={onSubmit}
              ref={formRef}
            >
              <div className="flex flex-col">
                <label className="text-left font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-left font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  name="email"
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-left font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  required
                  name="message"
                  rows="4"
                  className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-white p-3 rounded-md hover:bg-primaryDark transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
