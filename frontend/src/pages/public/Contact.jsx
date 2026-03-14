import React from "react";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dignissimos eaque doloremque, nulla mollitia facilis temporibus
            ullam voluptas nostrum consequatur?
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <i className="fas fa-home"></i>
              </div>
              <div>
                <p className="font-semibold text-teal-400">Address</p>
                <p className="text-gray-200 text-sm">
                  4671 Sugar Camp Road, Owatonna, Minnesota, 55060
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p className="font-semibold text-teal-400">Phone</p>
                <p className="text-gray-200 text-sm">561-456-2321</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="font-semibold text-teal-400">Email</p>
                <p className="text-gray-200 text-sm">example@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 bg-white rounded-lg p-6 text-black mt-16 md:mt-4">
          <h3 className="text-xl font-bold text-center">Send Message</h3>
          <p className="italic font-sm mb-4 text-center">
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