import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Landing() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let points = [];
    const numPoints = 120;
    const connectionDist = 150;
    let mouse = { x: -1000, y: -1000 };

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow float
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.8 ? "#22d3ee" : "#ffffff"; // 20% Cyan stars
      }

      update() {
        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse attraction (Gravitational Pull)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          this.x += dx * 0.005;
          this.y += dy * 0.005;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Init
    for (let i = 0; i < numPoints; i++) {
      points.push(new Star());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections first (behind stars)
      points.forEach(point => {
        point.update();
        point.draw();

        // Connect to mouse
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDist) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(34, 211, 238, ${1 - dist / connectionDist})`; // Cyan fade
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-gray-200 overflow-hidden">

      {/* 🌌 INTERACTIVE COSMIC BACKGROUND */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" />

      {/* 🚀 HERO */}
      <section className="relative z-10 px-10 py-40 text-center pointer-events-none">
        <h2 className="text-6xl md:text-7xl font-bold tracking-wide animate-[fadeInUp_1s_ease-out] pointer-events-auto">
          <span className="text-white">Explore the API</span>
          <span className="text-cyan-400"> Universe</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg animate-[floatSlow_6s_ease-in-out_infinite] pointer-events-auto">
          Compare APIs from multiple providers. Pricing, features, and plans—all in one centralized platform.
          <br />
          Find the Right API — Faster, Smarter.
        </p>

        <div className="mt-10 flex justify-center gap-4 pointer-events-auto">
          <button className="px-8 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition ease-in-out duration-300"
            onClick={() => navigate("/register")}
          >
            Explore APIs
          </button>
        </div>
      </section>

      {/* 🌍 PROBLEM */}
      <section className="relative z-10 px-10 py-20 border-t border-gray-800 pointer-events-none">
        <h3 className="text-3xl font-semibold text-center text-white pointer-events-auto">
          Lost in Documentation Galaxies?
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pointer-events-auto">
          {[
            { title: "Scattered Across the Cosmos", desc: "APIs hidden across countless provider websites." },
            { title: "Pricing Black Holes", desc: "No transparent way to compare costs or limits." },
            { title: "Feature Nebulas", desc: "Critical details buried deep in documentation." }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0F141B] p-6 rounded-xl border border-gray-800 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 group"
            >
              <h4 className="text-cyan-400 font-medium mb-2 group-hover:text-cyan-300">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛰️ SOLUTION */}
      <section className="relative z-10 px-10 py-20 pointer-events-none">
        <h3 className="text-3xl font-semibold text-center text-white pointer-events-auto">
          Mission Control for API Discovery
        </h3>

        <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto pointer-events-auto">
          {[
            "Planetary API Directory",
            "Gravitational Comparison",
            "Clear Orbital Pricing",
            "Direct Provider Re-entry"
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#0F141B] p-6 rounded-xl border border-gray-800 hover:border-cyan-400 hover:scale-105 hover:bg-[#161b22] transition-all duration-300"
            >
              <p className="font-medium text-center text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔐 SECURITY */}
      <section className="relative z-10 px-10 py-20 border-t border-gray-800 text-center pointer-events-none">
        <h3 className="text-3xl font-semibold text-white pointer-events-auto">Transparency at Light Speed</h3>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto pointer-events-auto">
          We observe, we don't interfere. Key-Verse is a neutral discovery platform.
          <br />
          We never generate, store, or proxy your API keys. You deal directly with the source.
        </p>

        <div className="mt-10 flex justify-center gap-6 text-sm flex-wrap pointer-events-auto">
          {["🛡️ No Key Storage", "🔗 Official Redirects", "⚖️ Unbiased Comparison"].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-[#11161D] text-cyan-400 rounded-md border border-gray-800 animate-[floatSlow_5s_ease-in-out_infinite]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 🏁 FOOTER */}
      <footer className="relative z-10 px-10 py-8 border-t border-gray-800 text-sm text-gray-500 flex justify-between pointer-events-auto">
        <span>© 2026 Key-Verse</span>
        <div className="space-x-4">
          <Link to="/privacy" className="hover:text-gray-300">Privacy</Link>
          <Link to="/terms" className="hover:text-gray-300">Terms</Link>
        </div>
      </footer>

      {/* 🌠 TAILWIND ANIMATIONS */}
      {/* 🌠 TAILWIND ANIMATIONS (Moved to index.css) */}

    </div>
  );
}
