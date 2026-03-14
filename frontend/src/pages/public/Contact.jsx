import React from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactBg from "/src/assets/rescue-team-navigating-flooded-residential-600nw-2511305493.webp";

export default function Contact() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row gap-10 p-8 md:p-16 text-white w-full max-w-6xl">
        
        {/* Left Section - Contact Info */}
        <div className="flex-1 space-y-6 pt-0">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-sm text-gray-200">
            We’re always excited to hear from our visitors, 
            whether you have a question about our services, want to
             share feedback, or simply want to connect. please don’t
             hesitate to reach out to us using any of the methods below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-1 rounded-full">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div>
                <p className="font-semibold text-teal-400">Address</p>
                <p className="text-gray-200 text-sm">
                  Online based Platform, No Physical Location
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-1 rounded-full">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="font-semibold text-teal-400">Phone</p>
                <p className="text-gray-200 text-sm">+977 9814562321</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-1 rounded-full">
                 <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p className="font-semibold text-teal-400">Email</p>
                <p className="text-gray-200 text-sm">TheDisasterRelief@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 bg-white rounded-lg p-6 text-black mt-16 md:mt-4">
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
              className="w-full border-b border-gray-400 focus:outline-none py-2 resize-none"
              rows={4}
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
  );
}