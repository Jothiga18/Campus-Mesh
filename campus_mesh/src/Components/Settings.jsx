import React, { useState } from "react";

export default function Settings() {
  const bgClass =
    "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen min-h-screen text-white font-sans";

  const [settings, setSettings] = useState({
    name: "Asha R.",
    email: "asha.r@campusmesh.edu",
    password: "",
    notifications: { events: true, messages: true, updates: false },
    privacy: { profileVisible: true, activityStatus: true },
    theme: "dark",
  });

  const handleToggle = (category, key) => {
    setSettings((prev) => ({
      ...prev,
      [category]: { ...prev[category], [key]: !prev[category][key] },
    }));
  };

  const handleThemeToggle = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  return (
    <div className={bgClass}>
      <header className="flex justify-center py-16 px-6">
        <div className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-4xl w-full">
          <h1 className="text-4xl font-extrabold mb-2">Settings</h1>
          <p className="text-slate-300">Manage your Campus Mesh account and preferences.</p>

          {/* Profile Info */}
          <section className="mt-8 bg-slate-800/50 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                className="p-2 rounded-lg bg-slate-700/50 flex-1"
                placeholder="Full Name"
              />
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="p-2 rounded-lg bg-slate-700/50 flex-1"
                placeholder="Email Address"
              />
            </div>
          </section>

          {/* Password */}
          <section className="mt-6 bg-slate-800/50 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <input
              type="password"
              value={settings.password}
              onChange={(e) => setSettings({ ...settings, password: e.target.value })}
              className="p-2 rounded-lg bg-slate-700/50 w-full"
              placeholder="New Password"
            />
            <button className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg">Update Password</button>
          </section>

          {/* Notification Preferences */}
          <section className="mt-6 bg-slate-800/50 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            {Object.keys(settings.notifications).map((key) => (
              <div key={key} className="flex items-center justify-between my-2">
                <span className="capitalize">{key} notifications</span>
                <button
                  onClick={() => handleToggle("notifications", key)}
                  className={`px-3 py-1 rounded-full transition ${
                    settings.notifications[key] ? "bg-teal-500/60" : "bg-slate-600/50"
                  }`}
                >
                  {settings.notifications[key] ? "On" : "Off"}
                </button>
              </div>
            ))}
          </section>

          {/* Privacy Settings */}
          <section className="mt-6 bg-slate-800/50 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
            {Object.keys(settings.privacy).map((key) => (
              <div key={key} className="flex items-center justify-between my-2">
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <button
                  onClick={() => handleToggle("privacy", key)}
                  className={`px-3 py-1 rounded-full transition ${
                    settings.privacy[key] ? "bg-amber-500/60" : "bg-slate-600/50"
                  }`}
                >
                  {settings.privacy[key] ? "Enabled" : "Disabled"}
                </button>
              </div>
            ))}
          </section>

          {/* Theme Toggle */}
          <section className="mt-6 bg-slate-800/50 p-6 rounded-2xl shadow flex items-center justify-between">
            <h2 className="text-xl font-semibold">Theme</h2>
            <button
              onClick={handleThemeToggle}
              className={`px-4 py-2 rounded-lg ${
                settings.theme === "dark" ? "bg-indigo-600" : "bg-slate-600/50"
              } hover:bg-indigo-700 transition`}
            >
              {settings.theme === "dark" ? "Dark Mode" : "Light Mode"}
            </button>
          </section>

          {/* Delete Account */}
          <section className="mt-6 bg-slate-800/50 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4 text-red-400">Danger Zone</h2>
            <button
              onClick={() => alert("Account deletion confirmed (replace with API call)")}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
            >
              Delete Account
            </button>
          </section>
        </div>
      </header>

      <footer className="bg-slate-900/80 py-6 text-center text-slate-400">
        &copy; 2025 Campus Mesh · All rights reserved
      </footer>
    </div>
  );
}
