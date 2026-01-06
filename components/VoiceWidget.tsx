import React, { useState } from 'react';
import { MessageSquare, X, Mic } from 'lucide-react';

export const VoiceWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[90] flex flex-col items-end gap-4">
      {/* Chat Window */}
      <div 
        className={`bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'w-[350px] h-[500px] opacity-100 scale-100' 
            : 'w-0 h-0 opacity-0 scale-95'
        }`}
      >
        <div className="flex justify-between items-center p-3 bg-slate-800 border-b border-slate-700">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="font-display font-bold text-white text-sm">AI Ассистент</span>
           </div>
           <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
             <X size={18} />
           </button>
        </div>
        <div className="w-full h-[calc(100%-50px)] bg-slate-950">
            {/* Using Iframe for the specific ElevenLabs agent link */}
            <iframe 
                src="https://elevenlabs.io/app/talk-to?agent_id=agent_4601ke9ep2g0ehe9pt0e0pcfr7nx&branch_id=agtbrch_2201ke9ep4sde7a85pm5yjwmc7yn"
                className="w-full h-full border-0"
                allow="microphone"
                title="AI Assistant"
            />
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center hover:scale-110 transition-transform group"
      >
        {isOpen ? <X size={24} /> : <Mic size={24} className="animate-pulse" />}
      </button>
    </div>
  );
};