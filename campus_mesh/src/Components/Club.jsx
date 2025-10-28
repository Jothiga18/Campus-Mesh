import React, { useState, useMemo } from "react";

// CampusMesh Clubs & Events Page
// - Single-file React component (preview-ready)
// - Tailwind CSS utility classes used throughout
// - Interactive: search, filter, event modal with members, RSVP, and prize/celebration banner

export default function CampusMeshClubsEventsPage() {
  const bgClass =
    "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen bg-cover min-h-screen";

  // Sample data (replace with API data as needed)
  const sampleClubs = [
    { id: "c1", name: "CS Club", tags: ["tech", "ai"], lead: "Asha R.", members: 48 },
    { id: "c2", name: "Drama Society", tags: ["arts", "stage"], lead: "Vikram S.", members: 22 },
    { id: "c3", name: "Robotics", tags: ["tech", "hardware"], lead: "Priya K.", members: 33 },
    { id: "c4", name: "Music Club", tags: ["music", "events"], lead: "Rohan M.", members: 40 },
  ];

  const sampleEvents = [
    {
      id: "e1",
      title: "Inter-Club Coding Challenge",
      clubId: "c1",
      date: "2025-11-05",
      time: "10:00 AM",
      venue: "Lab 3, CS Building",
      desc: "A 3-hour team coding contest — algorithmic puzzles and lightning rounds.",
      members: ["Asha R.", "Kumar N.", "Meena P."]
    },
    {
      id: "e2",
      title: "Annual Drama Fest",
      clubId: "c2",
      date: "2025-11-12",
      time: "06:00 PM",
      venue: "Auditorium",
      desc: "Short plays and skits from campus drama groups.",
      members: ["Vikram S.", "Latha G."]
    },
    {
      id: "e3",
      title: "Robo Sprint",
      clubId: "c3",
      date: "2025-10-30",
      time: "09:00 AM",
      venue: "Workshop Hall",
      desc: "Obstacle race for small autonomous robots.",
      members: ["Priya K.", "Hari T.", "Sana Q."]
    }
  ];

  const [clubs] = useState(sampleClubs);
  const [events] = useState(sampleEvents);
  const [query, setQuery] = useState("");
  const [filterTag, setFilterTag] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCongrats, setShowCongrats] = useState(true);

  const tags = useMemo(() => {
    const all = new Set();
    clubs.forEach(c => c.tags.forEach(t => all.add(t)));
    return ["all", ...Array.from(all)];
  }, [clubs]);

  const filteredClubs = useMemo(() => {
    return clubs.filter(c => {
      const matchQuery = (c.name + c.lead).toLowerCase().includes(query.toLowerCase());
      const matchTag = filterTag === "all" ? true : c.tags.includes(filterTag);
      return matchQuery && matchTag;
    });
  }, [clubs, query, filterTag]);

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      const club = clubs.find(c => c.id === e.clubId)?.name || "";
      const matchQuery = (e.title + club + e.venue).toLowerCase().includes(query.toLowerCase());
      const matchTag = filterTag === "all" ? true : (clubs.find(c => c.id === e.clubId)?.tags || []).includes(filterTag);
      return matchQuery && matchTag;
    }).sort((a,b)=> a.date.localeCompare(b.date));
  }, [events, clubs, query, filterTag]);

  function openEvent(e) { setSelectedEvent(e); }
  function closeEvent() { setSelectedEvent(null); }

  function handleRSVP(eventId) {
    alert(`RSVP recorded for event ${eventId}. (replace with API call)`);
  }

  return (
    <div className={`${bgClass} font-sans text-slate-100`}> 
      {/* Top hero */}
      <header className="flex items-end">
        <div className="max-w-6xl mx-auto w-full px-6 pb-8">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold">Campus Mesh — Clubs & Events</h1>
            <p className="mt-1 text-slate-300">Find what's happening around campus — events, club news, winners and celebrations.</p>
            <div className="mt-4 flex gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clubs, events, venues..."
                className="px-4 py-2 rounded-lg bg-slate-800/60 placeholder:text-slate-400 w-full max-w-md"
              />
              <select value={filterTag} onChange={(e)=>setFilterTag(e.target.value)} className="px-3 py-2 rounded-lg bg-slate-800/60">
                {tags.map(t => <option key={t} value={t}>{t === 'all' ? 'All tags' : t}</option>)}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-10 relative z-10 max-w-6xl mx-auto px-6 pb-12">
        {/* Congratulations banner */}
        {showCongrats && (
          <div className="bg-emerald-700/80 p-4 rounded-lg shadow flex items-center justify-between mt-6">
            <div>
              <div className="font-semibold">🎉 Congratulations to the winners of Robo Sprint 2025!</div>
              <div className="text-sm">1st: Team Vector — Robotics Club · 2nd: ByteRunners — CS Club · 3rd: StageBots — Robotics</div>
            </div>
            <button onClick={()=>setShowCongrats(false)} className="px-3 py-1 rounded bg-emerald-900/30">Dismiss</button>
          </div>
        )}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-1 bg-slate-950/80 p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold">Clubs</h2>
            <p className="text-sm text-slate-300 mt-1">Browse clubs, leads and member counts</p>
            <ul className="mt-4 space-y-3">
              {filteredClubs.map(c => (
                <li key={c.id} className="flex items-center justify-between bg-slate-950/60 p-3 rounded">
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-slate-400">Lead: {c.lead} · Members: {c.members}</div>
                    <div className="text-xs mt-1 text-slate-400">Tags: {c.tags.join(', ')}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={()=> alert(`Open club page for ${c.name}`)} className="text-xs px-2 py-1 rounded bg-indigo-600">Open</button>
                    <button onClick={()=> alert(`Followed ${c.name}`)} className="text-xs px-2 py-1 rounded border">Follow</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 bg-slate-950/80 p-4 rounded-2xl shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Upcoming & Recent Events</h2>
              <div className="text-sm text-slate-400">Showing {filteredEvents.length} results</div>
            </div>

            <div className="mt-4 space-y-4">
              {filteredEvents.map(ev => {
                const club = clubs.find(c=>c.id===ev.clubId);
                return (
                  <article key={ev.id} className="bg-slate-950/60 p-4 rounded-lg flex flex-col md:flex-row gap-4 md:items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{ev.title}</h3>
                        <div className="text-xs text-slate-400">{ev.date} · {ev.time}</div>
                      </div>
                      <div className="text-sm text-slate-300 mt-2">{ev.desc}</div>
                      <div className="text-xs text-slate-400 mt-2">Club: {club?.name || '—'} · Venue: {ev.venue}</div>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-end">
                      <button onClick={()=>openEvent(ev)} className="px-3 py-2 rounded bg-indigo-600">View</button>
                      <button onClick={()=>handleRSVP(ev.id)} className="px-3 py-2 rounded border">RSVP</button>
                    </div>
                  </article>
                );
              })}
              {filteredEvents.length === 0 && (<div className="text-center text-slate-400 py-8">No events match your search/filter.</div>)}
            </div>
          </div>
        </section>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-950 rounded-2xl shadow-lg max-w-2xl w-full p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{selectedEvent.title}</h3>
                  <div className="text-sm text-slate-400">{selectedEvent.date} · {selectedEvent.time} · {selectedEvent.venue}</div>
                </div>
                <div className="text-sm text-slate-400">Club: {clubs.find(c=>c.id===selectedEvent.clubId)?.name}</div>
              </div>

              <p className="mt-4 text-slate-300">{selectedEvent.desc}</p>
              <div className="mt-4">
                <h4 className="font-medium">Members / Organizers</h4>
                <ul className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-slate-300">
                  {selectedEvent.members.map((m, i) => (<li key={i} className="p-2 bg-slate-950/60 rounded">{m}</li>))}
                </ul>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button onClick={()=>handleRSVP(selectedEvent.id)} className="px-4 py-2 rounded bg-indigo-600">RSVP</button>
                <button onClick={closeEvent} className="px-4 py-2 rounded border">Close</button>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-10 text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>Campus Mesh · Clubs & Events</div>
            <div>Contact: clubs@campusmesh.edu</div>
          </div>
        </footer>
      </main>
    </div>
  );
}