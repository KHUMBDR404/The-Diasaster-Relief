import React from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactBg from "/src/assets/getintouch.jpg";

export default function Contact() {
  return (
    <div>

  {/* Get in Touch Banner */}
{/* Get in Touch Banner */}
<div
  className="w-full h-64 bg-cover bg-center relative flex items-center justify-center"
  style={{ backgroundImage: `url(${contactBg})` }}
>
  <div className="absolute inset-0 bg-teal-700/40"></div>

  <div className="relative text-center">
    {/* <p className="text-white font-bold text-5xl">Get in Touch</p>
    <p className="text-gray-200 italic">
      Have questions or feedback? We’re here to help!
    </p> */}
  </div>
</div>

{/* Contact Section */}
<div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
  <div className="flex flex-col md:flex-row w-full">

    {/* Contact Info */}
    <div className="flex-1 space-y-6 border border-gray-300 rounded-l-lg p-6 mt-6 mb-6 ml-22 shadow-md bg-white">
      <h2 className="text-3xl font-bold">Contact Us</h2>

      <p className="text-sm italic">
        We’re always excited to hear from our visitors, whether you have a
        question about our services, want to share feedback, or simply want
        to connect. Please don’t hesitate to reach out to us.
      </p>

      {/* Address */}
      <div className="flex items-center gap-4">
        <div className="bg-white text-black p-1 rounded-full">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div>
          <p className="font-semibold text-teal-800">Address</p>
          <p className="text-sm">
            Online based Platform, No Physical Location
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <div className="bg-white text-black p-1 rounded-full">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div>
          <p className="font-semibold text-teal-800">Phone</p>
          <p className="text-sm">+977 9814562321</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <div className="bg-white text-black p-1 rounded-full">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div>
          <p className="font-semibold text-teal-800">Email</p>
          <p className="text-sm">TheDisasterRelief@email.com</p>
        </div>
      </div>
    </div>

    {/* Send Message */}
    <div className="flex-1 border border-gray-300 border-l-0 rounded-r-lg p-6 mt-6 mb-6 mr-22 shadow-md bg-white">
      <h3 className="text-xl font-bold text-center">Send Message</h3>
      <p className="italic text-sm mb-4 text-center">
        Your Voice, Our Connection.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border-b border-gray-400 focus:outline-none py-2"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-400 focus:outline-none py-2"
        />

        <textarea
          placeholder="Type your Message..."
          rows={4}
          className="w-full border-b border-gray-400 focus:outline-none py-2 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-teal-800 text-white py-2 rounded-md font-semibold hover:bg-teal-900 transition"
        >
          Send
        </button>
      </form>
    </div>

  </div>
</div>
</div>
  );
}