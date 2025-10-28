import React, { useState } from "react";

export default function CampusMeshNotificationPage() {
  const bgClass =
    "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen min-h-screen font-sans text-slate-100";

  const sampleNotifications = [
    { id: 1, type: "Event", title: "Robo Sprint 2025 starts tomorrow!", time: "2025-10-29 09:00 AM", read: false },
    { id: 2, type: "Assignment", title: "Submit Graph Analysis Assignment", time: "2025-10-27 05:00 PM", read: true },
    { id: 3, type: "Announcement", title: "New club: AI & Robotics Club inaugurated", time: "2025-10-25 12:00 PM", read: false },
    { id: 4, type: "Event", title: "Drama Fest ticket booking closes today", time: "2025-10-25 06:00 PM", read: false },
    { id: 5, type: "Assignment", title: "Previous Year Question Papers uploaded", time: "2025-10-24 10:00 AM", read: true },
  ];

  const [notifications, setNotifications] = useState(sampleNotifications);
  const [filter, setFilter] = useState("All");

  const filteredNotifications = notifications.filter(n => filter === "All" || n.type === filter);

  const toggleRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: !n.read } : n)
    );
  };

  return (
    <div className={bgClass}>
      <header className="flex items-end">
        <div className="max-w-6xl mx-auto w-full px-6 pb-8">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold">Campus Mesh Notifications</h1>
            <p className="mt-1 text-slate-300">Stay updated with campus events, assignments, and announcements.</p>
            <div className="mt-4 flex gap-3">
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="px-3 py-2 rounded-lg bg-slate-800/60 text-slate-200"
              >
                <option value="All">All</option>
                <option value="Event">Events</option>
                <option value="Assignment">Assignments</option>
                <option value="Announcement">Announcements</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-10 relative z-10 max-w-4xl mx-auto px-6 py-10">
        <div className="bg-slate-950/80 p-4 rounded-2xl shadow-lg">
          {filteredNotifications.length === 0 && (
            <div className="text-center text-slate-400 py-10">No notifications found.</div>
          )}
          <ul className="space-y-3">
            {filteredNotifications.map(n => (
              <li
                key={n.id}
                className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition ${
                  n.read ? "bg-slate-800/40" : "bg-indigo-600/70 text-white"
                }`}
                onClick={() => toggleRead(n.id)}
              >
                <div>
                  <div className="font-medium">{n.title}</div>
                  <div className="text-xs text-slate-300 mt-1">{n.type} · {n.time}</div>
                </div>
                <div className="text-sm">
                  {n.read ? "Mark Unread" : "Mark Read"}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-6 text-slate-400 text-sm text-center">
        Campus Mesh · Notifications
      </footer>
    </div>
  );
}
