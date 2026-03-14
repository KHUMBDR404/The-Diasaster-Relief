import React from "react";
import teamImage from "/src/assets/DisasterRelief.webp";
import member1 from "/src/assets/WhatsApp Image 2026-02-11 at 13.23.06.jpeg";
import member2 from "/src/assets/WhatsApp Image 2026-02-11 at 13.27.26.jpeg";
import member3 from "/src/assets/WhatsApp Image 2026-02-11 at 13.26.02.jpeg";
import member4 from "/src/assets/WhatsApp Image 2026-02-11 at 13.28.44.jpeg";

const Aboutus = () => {
  return (
    <div className="flex flex-col">
      {/* About Us Section */}
      <section className="w-full bg-white py-6 px-4 relative flex flex-col md:flex-row items-center overflow-hidden">
        {/* Left text */}
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-4">
            ABOUT US
          </h2>
          <p className="text-gray-600 mb-3">
            THEDisasterRelief is a dedicated disaster relief platform committed
            to providing timely support and assistance to communities affected
            by natural and man-made disasters. Our mission is to connect donors,
            volunteers, and victims through a transparent and reliable system
            that ensures help reaches those who need it most. By combining
            technology, compassion, and coordinated action, we aim to make
            relief efforts faster, more organized, and more impactful. Together,
            we stand in solidarity with affected communities and work towards
            rebuilding lives with dignity and hope.
          </p>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <img
            src={teamImage}
            alt="Team Illustration"
            className="w-full md:w-[120%] -translate-x-10 md:-translate-x-0 object-cover rounded-lg"
          />
        </div>

        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-300 rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-300 rounded-full -z-10"></div>
      </section>

      <section className="pt-0 pb-16 px-4 md:px-20 bg-gray-50">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="mt-10 font-bold text-4xl text-gray-800">
            Our <span className="text-teal-700">Mission, Vision & Goals</span>
          </h1>
          <p className="text-gray-600 italic mt-2">
            Guiding principles that shape our work
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300">
           <h2 className="text-xl font-semibold text-black text-center mb-3">
              Our Mission
              <span className="block w-16 border-b-4 border-green-700 mx-auto mt-2"></span>
            </h2>
            <p className="text-gray-700">
              To provide fast, transparent, and reliable support to communities
              affected by disasters through one trusted platform.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-black text-center mb-3">
              Our Vision
              <span className="block w-16 border-b-4 border-red-700 mx-auto mt-2"></span>
            </h2>
            <p className="text-gray-700">
              To build a safer and more resilient society where help reaches
              every affected person quickly and efficiently during times of
              crisis.
            </p>
          </div>

          {/* Goals Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300">
           <h2 className="text-xl font-semibold text-black text-center mb-3">
              Our Goals
              <span className="block w-16 border-b-4 border-cyan-700 mx-auto mt-2"></span>
            </h2>
            <p className="text-gray-700">
              Maintain transparency in donations and relief distribution, and
              ensure timely and organized disaster response.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pt-0 pb-6 px-4 md:px-20">
        <div className="text-center mb-10">
          <h1 className="mt-10 font-bold text-4xl text-gray-800">
            Meet Our <span className="text-teal-700">Team</span>
          </h1>
          <p className="text-gray-600 italic">The people powering our vision</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {/* Team Members */}
          {[
            { img: member1, name: "Kabita Giri", role: "Frontend Manager" },
            { img: member2, name: "Anil Kumar Shah", role: "Backend Manager" },
            { img: member3, name: "Bibek Seluwal", role: "Database Manager" },
            {
              img: member4,
              name: "Khum Bahadur Shrestha",
              role: "UI/UX Designer",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl border border-gray-200 rounded-xl p-4 hover:scale-105 transition-transform text-center"
            >
              <img
                src={member.img}
                className="w-full h-40 object-cover rounded-t-xl mb-3"
                alt={member.name}
              />
              <h1 className="font-bold text-lg">{member.name}</h1>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
