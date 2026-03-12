import React, { useState, useEffect } from "react"; // <- include useState, useEffect
import { NavLink } from "react-router-dom";
import { BellDot, Settings } from "lucide-react";

export default function Bar() {
   const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return; // stop if no token

    fetch("http://localhost:5000/api/auth/me", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => setUser({ name: data.name, email: data.email }))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  return (
    <div className="w-full flex flex-row items-center justify-between px-7 py-3 border-b border-gray-300 bg-white shadow-sm sticky top-0 z-50 ">
      {/* Logo */}
      <h1 className="font-bold text-2xl text-teal-800 tracking-wide">
        THEDisaster <span className="block -mt-1">RELIEF</span>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 pl-72">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ?
              "font-bold text-gray-600 border-b-3 border-teal-700"
            : "text-gray-600 font-semibold transition hover:text-gray-800 border-teal-700"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/donationform"
          className={({ isActive }) =>
            isActive ?
              "font-bold text-gray-600 border-b-3 border-teal-700"
            : "text-gray-600 font-semibold transition hover:text-gray-800 border-teal-700"
          }
        >
          DonationForm
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ?
              "font-bold text-gray-600 border-b-3 border-teal-700"
            : "text-gray-600 font-semibold transition hover:text-gray-800 border-teal-700"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ?
              "font-bold text-gray-600 border-b-3 border-teal-700"
            : "text-gray-600 font-semibold transition hover:text-gray-800 border-teal-700"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive ?
              "font-bold text-gray-600 border-b-3 border-teal-700"
            : "text-gray-600 font-semibold transition hover:text-gray-800 border-teal-700"
          }
        >
          About Us
        </NavLink>
      </div>

      {/* Icons Section */}
      <div className="pl-38 flex items-center gap-4">
        <BellDot className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>

      {/* User Email / Name */}
      {user.name && user.email && (
        <span className="py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </span>
      )}
    </div>
  );
}
