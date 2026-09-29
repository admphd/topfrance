import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_RAW, WHATSAPP_PHONE } from '../data/reviewsData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      {/* Tooltip badge for desktop */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-700 shadow-lg backdrop-blur-sm pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Atendimento Online</span>
      </div>

      {/* Button */}
      <button
        onClick={onOpenBooking}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white shadow-xl shadow-emerald-950/50 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
        aria-label={`Falar no WhatsApp com a Top France: ${WHATSAPP_PHONE}`}
        title={`Falar no WhatsApp (${WHATSAPP_PHONE})`}
      >
        <MessageSquare className="w-7 h-7 fill-white/20 text-white" />
      </button>
    </div>
  );
};
