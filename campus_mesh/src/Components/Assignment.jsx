import React, { useState, useRef, useEffect } from "react";

// CampusMesh Assignment Page (single-file React component)
// - Tailwind CSS classes throughout (Tailwind + Tailwind JIT expected in project)
// - Uses user's background class in the hero section
// - Simple interactive SVG graph (draggable nodes) to illustrate "graph-based linkage"

export default function CampusMeshAssignmentPage() {
  const bgClass =
    "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen bg-cover h-screen";

  const initialNodes = [
    { id: 1, label: "CS Club", x: 120, y: 120 },
    { id: 2, label: "AI Group", x: 320, y: 80 },
    { id: 3, label: "Sports", x: 520, y: 160 },
    { id: 4, label: "Hostel", x: 220, y: 260 },
    { id: 5, label: "Library", x: 420, y: 300 },
  ];

  const initialEdges = [
    { from: 1, to: 2 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 5 },
    { from: 4, to: 5 },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);
  const [selected, setSelected] = useState(null);
  const svgRef = useRef(null);

  // Helper: update node position
  function updateNodePos(id, x, y) {
    setNodes((prev) => prev.map((n) => (n.id === id ? { ...n, x, y } : n)));
  }

  // Mouse / Pointer handlers for drag
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let dragging = null;
    let offset = { x: 0, y: 0 };

    function pointerDown(e) {
      const target = e.target;
      const nodeId = target.getAttribute("data-nodeid");
      if (!nodeId) return;
      const id = Number(nodeId);
      dragging = id;
      const node = nodes.find((n) => n.id === id);
      const pt = svg.createSVGPoint();
      pt.x = e.clientX; pt.y = e.clientY;
      const ctm = svg.getScreenCTM()?.inverse();
      const cursor = pt.matrixTransform(ctm);
      offset = { x: cursor.x - node.x, y: cursor.y - node.y };
      setSelected(id);
      svg.setPointerCapture(e.pointerId);
    }

    function pointerMove(e) {
      if (!dragging) return;
      const pt = svg.createSVGPoint();
      pt.x = e.clientX; pt.y = e.clientY;
      const ctm = svg.getScreenCTM()?.inverse();
      const cursor = pt.matrixTransform(ctm);
      updateNodePos(dragging, cursor.x - offset.x, cursor.y - offset.y);
    }

    function pointerUp(e) {
      if (!dragging) return;
      dragging = null;
      setSelected(null);
    }

    svg.addEventListener("pointerdown", pointerDown);
    svg.addEventListener("pointermove", pointerMove);
    svg.addEventListener("pointerup", pointerUp);
    svg.addEventListener("pointercancel", pointerUp);

    return () => {
      svg.removeEventListener("pointerdown", pointerDown);
      svg.removeEventListener("pointermove", pointerMove);
      svg.removeEventListener("pointerup", pointerUp);
      svg.removeEventListener("pointercancel", pointerUp);
    };
  }, [nodes]);

  // Export the page content as a printable assignment (very simple)
  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen font-inter text-slate-100 ">
      {/* Hero */}
      <header className={`${bgClass} flex items-center justify-center`}> 
        <div className="backdrop-blur-sm bg-black/30 p-6 rounded-2xl shadow-2xl max-w-4xl mx-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            CAMPUS MESH
          </h1>
          <p className="mt-2 text-lg md:text-xl text-slate-200 max-w-2xl">
            A Community Networking Platform using <span className="font-semibold">Graph-Based Linkage</span>
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-shadow shadow"
            >
              Print / Export
            </button>
            <a
              href="#details"
              className="px-4 py-2 rounded-lg border border-slate-200/10 hover:bg-white/5 transition"
            >
              Read Assignment
            </a>
          </div>
        </div>
      </header>

      <main className="-mt-10 relative z-10">
        <section id="details" className="max-w-6xl mx-auto px-6 py-10 m-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: Assignment details */}
            <article className="md:col-span-2 bg-slate-900/60 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold">Assignment</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                <strong>Abstract:</strong> Campus Mesh is a platform designed to connect students,
                clubs, and campus services using graph-based linkage. Users are represented as
                nodes and their relationships (shared interests, events, messages, or proximity)
                are edges. This model enables: community discovery, efficient event propagation,
                and personalized recommendations across the campus network.
              </p>

              <h3 className="mt-6 text-lg font-medium">Key Objectives</h3>
              <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1">
                <li>Model campus entities (students, clubs, venues) as graph nodes.</li>
                <li>Represent relationships such as "follows", "attended", and "nearby" as edges.</li>
                <li>Provide friend / group recommendations using simple graph traversal.</li>
                <li>Enable event broadcast with shortest path / centrality heuristics.</li>
              </ul>

              <h3 className="mt-6 text-lg font-medium">Methodology (overview)</h3>
              <ol className="mt-2 list-decimal list-inside text-slate-300 space-y-1">
                <li>Data modelling: define node and edge schemas (user, group, event, place).</li>
                <li>Graph storage: use a document DB with adjacency lists or a graph DB (Neo4j / JanusGraph).
                </li>
                <li>Linkage strategies: content-based similarity, collaborative filtering, and proximity.</li>
                <li>Evaluation: measure reachability, clustering coefficient, and average path length.</li>
              </ol>

              <h3 className="mt-6 text-lg font-medium">Expected Deliverables</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="p-3 bg-slate-800/40 rounded">
                  <strong>Module 1:</strong>
                  <div className="text-sm text-slate-300">User onboarding, profiles, and graph creation</div>
                </div>
                <div className="p-3 bg-slate-800/40 rounded">
                  <strong>Module 2:</strong>
                  <div className="text-sm text-slate-300">Visualization & interactive network explorer</div>
                </div>
                <div className="p-3 bg-slate-800/40 rounded">
                  <strong>Module 3:</strong>
                  <div className="text-sm text-slate-300">Recommendation & event propagation engine</div>
                </div>
                <div className="p-3 bg-slate-800/40 rounded">
                  <strong>Module 4:</strong>
                  <div className="text-sm text-slate-300">Testing, metrics & deployment notes</div>
                </div>
              </div>

              <h3 className="mt-6 text-lg font-medium">References / Tools</h3>
              <p className="text-slate-300 mt-2">React, Node.js, MongoDB / Neo4j, Tailwind CSS, Socket.IO (for real-time updates)</p>

              <hr className="my-6 border-slate-700/40" />

              <h3 className="text-lg font-medium">Notes on Graph-Based Linkage (concise)</h3>
              <p className="text-slate-300 mt-2 leading-relaxed">
                Graph-based linkage models relationships explicitly. Use degree and centrality
                measures to find influencers. Communities can be detected via clustering
                algorithms (Louvain, Girvan–Newman). For recommendations, run local
                neighborhood traversals and combine with content-similarity.
              </p>
            </article>

            {/* Right column: Graph visual + metadata */}
            <aside className="flex flex-col gap-4">
              <div className="bg-slate-900/60 p-4 rounded-2xl shadow-lg">
                <h4 className="font-semibold">Interactive Network (drag nodes)</h4>
                <p className="text-sm text-slate-300 mt-1">Demonstration of nodes & edges used in Campus Mesh.</p>

                <div className="mt-3 bg-black/30 rounded p-2">
                  <svg
                    ref={svgRef}
                    viewBox="0 0 640 360"
                    className="w-full h-48 rounded"
                    preserveAspectRatio="xMidYMid meet"
                    role="img"
                    aria-label="Campus mesh graph visualization"
                  >
                    {/* edges */}
                    {edges.map((e, i) => {
                      const a = nodes.find((n) => n.id === e.from);
                      const b = nodes.find((n) => n.id === e.to);
                      if (!a || !b) return null;
                      return (
                        <line
                          key={i}
                          x1={a.x}
                          y1={a.y}
                          x2={b.x}
                          y2={b.y}
                          stroke="#94a3b8"
                          strokeWidth={2}
                          opacity={0.8}
                        />
                      );
                    })}

                    {/* nodes */}
                    {nodes.map((n) => (
                      <g key={n.id} transform={`translate(${n.x}, ${n.y})`}>
                        <circle
                          data-nodeid={n.id}
                          r={22}
                          cx={0}
                          cy={0}
                          className={`cursor-grab ${selected === n.id ? "stroke-yellow-400" : ""}`}
                          strokeWidth={3}
                          stroke="#0ea5e9"
                          fill="#0f172a"
                        />
                        <text x={0} y={36} textAnchor="middle" fontSize={11} fill="#cbd5e1">
                          {n.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                  <p className="mt-2 text-xs text-slate-400">Tip: drag the circles to reposition nodes and see edge updates.</p>
                </div>

                <div className="mt-3 flex flex-col gap-2 text-slate-300 text-sm">
                  <div><strong>Total nodes:</strong> {nodes.length}</div>
                  <div><strong>Total edges:</strong> {edges.length}</div>
                  <div><strong>Central node idea:</strong> Nodes with higher degree act as hubs</div>
                </div>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-2xl shadow-lg">
                <h4 className="font-semibold">Assessment Rubric</h4>
                <ul className="mt-2 text-sm text-slate-300 list-disc list-inside space-y-1">
                  <li>Design & Modelling — 30%</li>
                  <li>Implementation & Functionality — 35%</li>
                  <li>Visualization & UX — 20%</li>
                  <li>Testing & Report — 15%</li>
                </ul>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-2xl shadow-lg text-center">
                <small className="text-slate-400">Prepared by: Your Name — Dept. of Computer Science</small>
                <div className="mt-3">
                  <a href="#" className="text-xs underline">Download (placeholder)</a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 py-8 text-slate-400 text-sm">
          <div className="border-t border-slate-800/50 pt-4 flex flex-col md:flex-row justify-between gap-4">
            <div>Course: Advanced Data Structures — Assignment</div>
            <div>Submission Date: <strong>DD/MM/YYYY</strong></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
