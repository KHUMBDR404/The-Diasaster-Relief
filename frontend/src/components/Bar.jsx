import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BellDot } from "lucide-react";

export default function Bar() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
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
    <div className="w-full flex items-center justify-between px-6 lg:px-12 py-3 border-b border-gray-300 bg-white shadow-sm sticky top-0 z-50">

      {/* Logo */}
      <h1 className="font-bold text-xl lg:text-2xl text-teal-800 leading-tight">
        THEDisaster
        <span className="block text-sm lg:text-base -mt-1">RELIEF</span>
      </h1>

      {/* Navigation */}
      <div className="flex items-center gap-6 flex-wrap justify-center flex-1 mx-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-gray-700 border-b-3 border-teal-700 pb-1"
              : "text-gray-600 font-semibold hover:text-gray-800 transition"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/donationform"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-gray-700 border-b-3 border-teal-700 pb-1"
              : "text-gray-600 font-semibold hover:text-gray-800 transition"
          }
        >
          DonationForm
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-gray-700 border-b-3 border-teal-700 pb-1"
              : "text-gray-600 font-semibold hover:text-gray-800 transition"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-gray-700 border-b-3 border-teal-700 pb-1"
              : "text-gray-600 font-semibold hover:text-gray-800 transition"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-gray-700 border-b-3 border-teal-700 pb-1"
              : "text-gray-600 font-semibold hover:text-gray-800 transition"
          }
        >
          About Us
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <BellDot className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />

        {/* User Info */}
        {user.name && user.email && (
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-md text-teal-700 whitespace-nowrap">
            <p className="font-semibold">{user.name}</p>
            <p className="text-xs">{user.email}</p>
          </div>
        )}

        {/* Login Button */}
      {!user.name && !user.email && (
  <NavLink to="/login">
    <button className="px-4 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-semibold transition">
      Login
    </button>
  </NavLink>
)}

      </div>
    </div>
  );
}