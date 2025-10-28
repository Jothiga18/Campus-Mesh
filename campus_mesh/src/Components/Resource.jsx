import React, { useState, useMemo } from 'react';

export default function CampusMeshResourcesPage() {
  const bgClass = "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen min-h-screen font-sans text-slate-100";

  const subjects = [
    { id: 's1', name: 'Data Structures' },
    { id: 's2', name: 'Operating Systems' },
    { id: 's3', name: 'Database Management' },
    { id: 's4', name: 'Computer Networks' }
  ];

  const years = [2025, 2024, 2023, 2022];

  const sampleQP = [
    { subjectId: 's1', year: 2025, link: '#' },
    { subjectId: 's1', year: 2024, link: '#' },
    { subjectId: 's2', year: 2025, link: '#' },
    { subjectId: 's3', year: 2023, link: '#' },
    { subjectId: 's4', year: 2022, link: '#' }
  ];

  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredQP = useMemo(() => {
    return sampleQP.filter(q =>
      (selectedSubject === 'all' ? true : q.subjectId === selectedSubject) &&
      (selectedYear === 'all' ? true : q.year === Number(selectedYear))
    );
  }, [selectedSubject, selectedYear]);

  return (
    <div className={bgClass}>
      <header className="flex items-end">
        <div className="max-w-6xl mx-auto w-full px-6 pb-8">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold">Campus Mesh — Resources</h1>
            <p className="mt-1 text-slate-300">Access previous year question papers, timetables, and academic resources.</p>
            <div className="mt-4 flex gap-3">
              <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} className="px-3 py-2 rounded-lg bg-slate-800/60">
                <option value="all">All Subjects</option>
                {subjects.map(s => (<option key={s.id} value={s.id}>{s.name}</option>))}
              </select>
              <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="px-3 py-2 rounded-lg bg-slate-800/60">
                <option value="all">All Years</option>
                {years.map(y => (<option key={y} value={y}>{y}</option>))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-10 relative z-10 max-w-6xl mx-auto px-6 pb-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredQP.map(q => {
            const subject = subjects.find(s => s.id === q.subjectId)?.name;
            return (
              <div key={`${q.subjectId}-${q.year}`} className="bg-slate-950/80 p-4 rounded-2xl shadow hover:bg-slate-950/90 transition">
                <h2 className="font-medium text-lg">{subject}</h2>
                <p className="text-sm text-slate-400 mt-1">Year: {q.year}</p>
                <a href={q.link} className="mt-2 inline-block px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-700 text-xs">Download QP</a>
              </div>
            );
          })}
          {filteredQP.length === 0 && (
            <div className="text-center text-slate-400 col-span-full py-10">No resources found for selected filters.</div>
          )}
        </section>

        <section className="mt-12 bg-slate-900/60 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold">Timetables</h2>
          <p className="mt-2 text-slate-300">View year-wise timetables for staff and students.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {years.map(y => (
              <div key={y} className="bg-slate-800/50 p-3 rounded">
                <h3 className="font-medium text-lg">Year {y}</h3>
                <a href="#" className="text-xs underline text-indigo-400 mt-1 inline-block">View Timetable</a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-slate-900/40 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Cool Features</h2>
          <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
            <li>Download previous year question papers by subject and year.</li>
            <li>Quick access to timetables for students and staff.</li>
            <li>Search and filter resources for efficient study planning.</li>
            <li>Responsive grid layout with hover effects for clarity.</li>
          </ul>
        </section>

        <footer className="mt-12 text-slate-400 text-sm text-center">
          <div>Campus Mesh · Resources</div>
          <div>Contact: resources@campusmesh.edu</div>
        </footer>
      </main>
    </div>
  );
}