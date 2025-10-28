import React, { useState, useMemo } from 'react';

// CampusMesh Mentor Connect Page
// - Connect students, mentors, and alumni
// - Interactive features: LinkedIn connect, search, filter, view profiles
// - Tailwind CSS used for styling and background

export default function CampusMeshMentorConnectPage() {
  const bgClass = "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen min-h-screen font-sans text-slate-100";

  const sampleMentors = [
    { id: 'm1', name: 'Dr. Asha R.', role: 'Professor', expertise: ['AI', 'Data Science'], linkedin: 'https://linkedin.com/in/asha' },
    { id: 'm2', name: 'Vikram S.', role: 'Alumni', expertise: ['Robotics', 'IoT'], linkedin: 'https://linkedin.com/in/vikram' },
    { id: 'm3', name: 'Priya K.', role: 'Mentor', expertise: ['Web Development', 'React'], linkedin: 'https://linkedin.com/in/priya' },
    { id: 'm4', name: 'Rohan M.', role: 'Alumni', expertise: ['Music', 'Event Management'], linkedin: 'https://linkedin.com/in/rohan' }
  ];

  const [mentors] = useState(sampleMentors);
  const [query, setQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const roles = useMemo(() => ['all', ...new Set(mentors.map(m => m.role))], [mentors]);

  const filteredMentors = useMemo(() => {
    return mentors.filter(m => {
      const matchQuery = (m.name + m.expertise.join(' ')).toLowerCase().includes(query.toLowerCase());
      const matchRole = filterRole === 'all' ? true : m.role === filterRole;
      return matchQuery && matchRole;
    });
  }, [mentors, query, filterRole]);

  return (
    <div className={bgClass}>
      <header className="flex items-end">
        <div className="max-w-6xl mx-auto w-full px-6 pb-8">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold">Campus Mesh — Mentor Connect</h1>
            <p className="mt-1 text-slate-300">Connect with mentors, professors, and alumni in your field. Network, learn, and grow.</p>
            <div className="mt-4 flex gap-3">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search mentors by name or expertise..."
                className="px-4 py-2 rounded-lg bg-slate-800/60 placeholder:text-slate-400 w-full max-w-md"
              />
              <select value={filterRole} onChange={e => setFilterRole(e.target.value)} className="px-3 py-2 rounded-lg bg-slate-800/60">
                {roles.map(r => <option key={r} value={r}>{r === 'all' ? 'All roles' : r}</option>)}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-10 relative z-10 max-w-6xl mx-auto px-6 pb-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredMentors.map(m => (
            <div key={m.id} className="bg-slate-950/80 p-4 rounded-2xl shadow hover:bg-slate-950/90 transition">
              <h2 className="font-medium text-lg">{m.name}</h2>
              <p className="text-sm text-slate-400 mt-1">Role: {m.role}</p>
              <p className="text-sm text-slate-400 mt-1">Expertise: {m.expertise.join(', ')}</p>
              <div className="mt-3 flex gap-2">
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-xs">LinkedIn</a>
                <button onClick={() => alert(`Message ${m.name} (placeholder)`)} className="px-3 py-1 rounded border text-xs">Message</button>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 bg-slate-900/60 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Cool Features</h2>
          <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
            <li>Direct LinkedIn connection with mentors and alumni.</li>
            <li>Search and filter by expertise and role.</li>
            <li>One-click messaging placeholder for future chat integration.</li>
            <li>Interactive mentor cards with hover effects.</li>
          </ul>
        </section>

        <footer className="mt-12 text-slate-400 text-sm text-center">
          <div>Campus Mesh · Mentor Connect</div>
          <div>Contact: mentors@campusmesh.edu</div>
        </footer>
      </main>
    </div>
  );
}