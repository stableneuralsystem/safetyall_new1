import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, isOpen]);

  // If not open, do not render at all to ensure iframe resets state and reloads correctly when opened next time.
  // This solves the issue of the form not appearing on the second click.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500"
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-800/50">
          <h3 className="text-xl font-display font-bold text-white">Заявка на обучение</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="w-full h-[500px] md:h-[600px] bg-slate-900">
             {/* Use Iframe for reliable rendering */}
             <iframe 
               src="https://forms.fillout.com/t/6x6kuCCH6dus" 
               style={{ width: '100%', height: '100%', border: 'none' }}
               title="Заявка на обучение"
               allow="camera; microphone; geolocation"
             />
        </div>
      </div>
    </div>
  );
};