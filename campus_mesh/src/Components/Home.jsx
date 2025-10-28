import React from "react";

export default function Home() {
  const bgClass =
    "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen min-h-screen";

  return (
    <div className={`${bgClass} font-sans text-white`}>
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        {/* Background Animation Circles */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute bg-indigo-500/20 rounded-full w-96 h-96 -top-32 -left-32 animate-pulse-slow"></div>
          <div className="absolute bg-sky-400/30 rounded-full w-72 h-72 -bottom-20 -right-20 animate-pulse-slow"></div>
        </div>

        {/* Main Text */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Campus Mesh
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-6">
          Collaborate, Innovate and Grow!
        </p>
        <p className="max-w-xl text-slate-300 mb-8">
          Mesh up with classmates, events, and memories—all in one app.
        </p>

        {/* Hero Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#features"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-shadow shadow-lg font-semibold"
          >
            Explore Features
          </a>
          <a
            href="#get-started"
            className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition font-semibold"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You Can Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <div className="text-indigo-400 text-4xl mb-4">🤝</div>
            <h3 className="font-semibold text-xl mb-2">Connect with Classmates</h3>
            <p className="text-slate-300 text-sm">
              Find peers, join study groups, or collaborate on campus projects.
            </p>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <div className="text-indigo-400 text-4xl mb-4">📅</div>
            <h3 className="font-semibold text-xl mb-2">Events & Clubs</h3>
            <p className="text-slate-300 text-sm">
              Stay updated with the latest events, clubs, and activities around campus.
            </p>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
            <div className="text-indigo-400 text-4xl mb-4">🎓</div>
            <h3 className="font-semibold text-xl mb-2">Resources & Memories</h3>
            <p className="text-slate-300 text-sm">
              Access previous year papers, timetables, and share moments with your batch.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="get-started" className="bg-slate-950/80 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Campus Mesh Community</h2>
          <p className="text-slate-300 mb-8">
            Sign up today to start collaborating, innovating, and growing with your peers.
          </p>
          <a
            href="#"
            className="px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 shadow-lg font-semibold text-lg transition"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 py-6 text-center text-slate-400">
        &copy; 2025 Campus Mesh · All rights reserved
      </footer>

      {/* Custom Tailwind animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
      `}</style>
    </div>
  );
}
