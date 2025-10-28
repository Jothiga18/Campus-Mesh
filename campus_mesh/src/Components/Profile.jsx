import React, { useState } from "react";

export default function Profile() {
  const bgClass =
    "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen min-h-screen text-white font-sans";

  // Sample profile data
  const [profile, setProfile] = useState({
    name: "Asha R.",
    role: "Student - CS Department",
    email: "asha.r@campusmesh.edu",
    linkedin: "https://linkedin.com/in/ashar",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "Enthusiastic about AI, robotics, and community events.",
    stats: { events: 12, clubs: 3, achievements: 5 },
    badges: ["Top Collaborator", "Event Organizer", "AI Innovator"],
    recentActivity: [
      "Joined CS Club",
      "Attended Inter-Club Coding Challenge",
      "Uploaded AI project proposal",
    ],
  });

  const [editing, setEditing] = useState(false);

  return (
    <div className={bgClass}>
      {/* Hero */}
      <header className="flex justify-center items-center py-16 px-6">
        <div className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-4xl w-full">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <img
              src={profile.avatar}
              alt="Profile avatar"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-500 shadow-lg"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <button
                  onClick={() => setEditing(!editing)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-semibold"
                >
                  {editing ? "Save" : "Edit"}
                </button>
              </div>
              <p className="text-slate-300">{profile.role}</p>
              <p className="text-slate-400 text-sm mt-1">{profile.email}</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 text-sm underline mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
              {editing && (
                <textarea
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  className="w-full mt-4 p-2 rounded-lg bg-slate-800 text-slate-200 resize-none"
                  rows={3}
                />
              )}
              {!editing && <p className="mt-4 text-slate-300">{profile.bio}</p>}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-teal-600/30 p-4 rounded-2xl shadow hover:scale-105 transition">
              <h3 className="text-2xl font-bold">{profile.stats.events}</h3>
              <p className="text-sm text-slate-200 mt-1">Events Attended</p>
            </div>
            <div className="bg-amber-500/30 p-4 rounded-2xl shadow hover:scale-105 transition">
              <h3 className="text-2xl font-bold">{profile.stats.clubs}</h3>
              <p className="text-sm text-slate-200 mt-1">Clubs Joined</p>
            </div>
            <div className="bg-purple-500/30 p-4 rounded-2xl shadow hover:scale-105 transition">
              <h3 className="text-2xl font-bold">{profile.stats.achievements}</h3>
              <p className="text-sm text-slate-200 mt-1">Achievements</p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Badges & Recognition</h2>
            <div className="flex flex-wrap gap-3">
              {profile.badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-indigo-500/50 text-sm font-medium hover:bg-indigo-600 transition cursor-pointer"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-2">
              {profile.recentActivity.map((act, i) => (
                <li
                  key={i}
                  className="bg-slate-800/50 p-3 rounded-lg shadow hover:bg-slate-800/70 transition"
                >
                  {act}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-slate-900/80 py-6 text-center text-slate-400">
        &copy; 2025 Campus Mesh · All rights reserved
      </footer>
    </div>
  );
}
