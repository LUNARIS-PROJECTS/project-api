import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth";

export default function Login() {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await loginUser(email, password);
      if (result.token) {
        localStorage.setItem("token", result.token);
        navigate("/dashboard");
      } else {
        setError(result.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-200 flex items-center justify-center overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15)_0%,_transparent_70%)] animate-pulse" />

      {/* 🛰️ LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md bg-[#0F141B] border border-gray-800 rounded-xl p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-center text-white">
          Re-Enter <span className="text-cyan-400">Mission Control</span>
        </h2>

        <p className="mt-2 text-center text-gray-400 text-sm">
          Access your saved API explorations
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          New explorer?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline">
            Create an account
          </Link>
        </p>


      </div>
    </div>
  );
}
