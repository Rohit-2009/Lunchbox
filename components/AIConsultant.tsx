
import React, { useState, useRef, useEffect } from 'react';
import { getMealRecommendation } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hello! I am Lunch Mate, your personal food guide. Looking for something specific or have dietary concerns? Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const aiResponse = await getMealRecommendation(userMsg, { dietaryPreference: 'All', allergies: [] });
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "I'm sorry, I couldn't process that." }]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col h-[600px]">
      <div className="flex items-center gap-4 mb-6 border-b pb-4">
        <div className="w-12 h-12 bg-[#556B2F] rounded-full flex items-center justify-center text-white text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold">Lunch Mate</h2>
          <p className="text-xs text-gray-400">Powered by Gemini AI</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2 custom-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
              ? 'bg-[#556B2F] text-white rounded-br-none' 
              : 'bg-[#FAF9F6] text-gray-700 rounded-bl-none border border-gray-100'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#FAF9F6] p-4 rounded-2xl rounded-bl-none text-sm text-gray-400 animate-pulse">
              Lunch Mate is thinking...
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your craving or health query..."
          className="flex-1 px-6 py-4 bg-[#FAF9F6] border-none rounded-2xl focus:ring-2 focus:ring-[#556B2F] transition-all"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-[#556B2F] text-white p-4 rounded-2xl hover:bg-[#4a5e29] disabled:opacity-50 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AIConsultant;
