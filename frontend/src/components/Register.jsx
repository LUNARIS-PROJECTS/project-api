import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

export default function Register() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const result = await registerUser(name, email, password);
      if (result.message === "user registered successfully") {
        navigate("/login");
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-200 flex items-center justify-center overflow-hidden">

      {/* 🌌 COSMIC BACKDROP */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12)_0%,_transparent_75%)] animate-pulse" />

      {/* 🚀 REGISTER CARD */}
      <div className="relative z-10 w-full max-w-md bg-[#0F141B] border border-gray-800 rounded-xl p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-center text-white">
          Launch Your <span className="text-cyan-400">Mission</span>
        </h2>

        <p className="mt-2 text-center text-gray-400 text-sm">
          Start comparing APIs across the universe
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400 transition"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-cyan-400 transition"
          />

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already in orbit?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login here
          </a>
        </p>

      </div>
    </div>
  );
}


