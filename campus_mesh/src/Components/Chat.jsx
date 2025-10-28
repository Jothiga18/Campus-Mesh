import React, { useState, useRef, useEffect } from 'react';

export default function CampusMeshChatPage() {
  const bgClass = "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen min-h-screen font-sans text-slate-100";
  
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Welcome to Campus Mesh Chat! Ask your query.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Dummy bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        from: 'bot',
        text: `You asked: "${input}". This is a sample response.`
      };
      setMessages(prev => [...prev, botMessage]);
    }, 700);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className={bgClass}>
      <header className="flex items-end">
        <div className="max-w-6xl mx-auto w-full px-6 pb-8">
          <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold">Campus Mesh Chat</h1>
            <p className="mt-1 text-slate-300">Ask questions, get updates, or chat with the Campus Mesh assistant.</p>
          </div>
        </div>
      </header>

      <main className="-mt-10 relative z-10 max-w-4xl mx-auto px-6 pb-12 flex flex-col h-[75vh]">
        <div className="flex-1 overflow-y-auto bg-slate-950/80 p-4 rounded-2xl shadow-lg flex flex-col space-y-3">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-lg max-w-xs break-words ${msg.from === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-100'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-4 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg bg-slate-800/60 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-4 text-slate-400 text-sm text-center">
        Campus Mesh Chat · Your Campus Assistant
      </footer>
    </div>
  );
}
