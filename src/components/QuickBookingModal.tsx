import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Check, Car, Calendar, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHATSAPP_RAW, WHATSAPP_PHONE } from '../data/reviewsData';
import { TopFranceLogo } from './TopFranceLogo';
import { PeugeotLogo, CitroenLogo, RenaultLogo, MultimarcasLogo } from './BrandLogos';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBrand?: string;
}

const BRANDS_LIST = [
  'Peugeot',
  'Citroën',
  'Renault',
  'DS Automobiles',
  'Toyota',
  'Honda',
  'Volkswagen',
  'Fiat',
  'Jeep',
  'Chevrolet',
  'Hyundai',
  'Nissan',
  'Volvo',
  'RAM',
  'Lexus',
  'Mini',
  'Kia',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Ford',
  'Outra Marca'
];

const SERVICES_LIST = [
  'Troca de Óleo de Câmbio Automático',
  'Sistema de Arrefecimento Completo',
  'Revisão Geral Preventiva (Check-up)',
  'Troca de Óleo do Motor e Filtros',
  'Alinhamento 3D e Balanceamento',
  'Diagnóstico Eletrônico com Scanner',
  'Correia Dentada / Sincronismo',
  'Suspensão e Freios',
  'Injeção Eletrônica & Descarbonização THP',
  'Ar-Condicionado & Higienização',
  'Barulho ou Sintoma Específico',
  'Outro Serviço'
];

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialBrand
}) => {
  const [brand, setBrand] = useState('Peugeot');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [service, setService] = useState('Revisão Geral Preventiva (Check-up)');
  const [preferredTime, setPreferredTime] = useState('Manhã (08h às 12h)');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
    if (initialBrand) {
      if (BRANDS_LIST.includes(initialBrand)) {
        setBrand(initialBrand);
      } else {
        setBrand('Outra Marca');
      }
    }
  }, [initialService, initialBrand, isOpen]);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    let msg = `Olá Top France! Gostaria de solicitar um agendamento / orçamento técnico:\n\n`;
    msg += `🚗 *Veículo:* ${brand} ${model.trim() ? model.trim() : ''} ${year.trim() ? `(${year.trim()})` : ''}\n`;
    msg += `🔧 *Serviço desejado:* ${service}\n`;
    msg += `⏰ *Preferência de horário:* ${preferredTime}\n`;
    if (notes.trim()) {
      msg += `📝 *Observação / Sintoma:* ${notes.trim()}\n`;
    }
    msg += `\nLocal: Oficina em Goiânia. Aguardo retorno para confirmação de horário!`;
    return msg;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${WHATSAPP_RAW}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-xl w-full p-5 sm:p-7 shadow-2xl relative my-8 text-slate-900 dark:text-white transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* French accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 french-tricolor-gradient rounded-t-2xl" />

        {/* Modal Header with TopFranceLogo */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <TopFranceLogo className="w-11 h-11 shrink-0" />
            <div>
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Top France · Centro Automotivo
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-heading mt-0.5">
                Agendamento & Orçamento
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg text-lg cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendToWhatsApp} className="space-y-4 mt-5">
          
          {/* Quick Brand Selector with Logos */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Selecione a Marca do Veículo *
            </label>
            <div className="grid grid-cols-4 gap-2 mb-2">
              <button
                type="button"
                onClick={() => setBrand('Peugeot')}
                className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                  brand === 'Peugeot'
                    ? 'bg-blue-50 dark:bg-blue-600/20 border-blue-500 text-blue-700 dark:text-white shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <PeugeotLogo className="w-5 h-5" />
                <span className="text-[11px] font-semibold">Peugeot</span>
              </button>

              <button
                type="button"
                onClick={() => setBrand('Citroën')}
                className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                  brand === 'Citroën'
                    ? 'bg-blue-50 dark:bg-blue-600/20 border-blue-500 text-blue-700 dark:text-white shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <CitroenLogo className="w-5 h-5" />
                <span className="text-[11px] font-semibold">Citroën</span>
              </button>

              <button
                type="button"
                onClick={() => setBrand('Renault')}
                className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                  brand === 'Renault'
                    ? 'bg-blue-50 dark:bg-blue-600/20 border-blue-500 text-blue-700 dark:text-white shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <RenaultLogo className="w-5 h-5" />
                <span className="text-[11px] font-semibold">Renault</span>
              </button>

              <button
                type="button"
                onClick={() => setBrand('Outra Marca')}
                className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-center transition-all cursor-pointer ${
                  brand !== 'Peugeot' && brand !== 'Citroën' && brand !== 'Renault'
                    ? 'bg-blue-50 dark:bg-blue-600/20 border-blue-500 text-blue-700 dark:text-white shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <MultimarcasLogo className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-[11px] font-semibold">Outras</span>
              </button>
            </div>
          </div>

          {/* Brand & Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Todas as Opções de Marca
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {BRANDS_LIST.map((b) => (
                  <option key={b} value={b} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Modelo (ex: 208, C4, Duster, Civic)
              </label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Ex: 3008 THP, C3, Sandero..."
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Year & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Ano de Fabricação
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Ex: 2020"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Serviço Principal Desejado *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 truncate"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s} value={s} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Melhor Período para Atendimento
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Manhã (08h às 12h)', 'Tarde (13h às 18h)', 'Qualquer horário'].map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setPreferredTime(time)}
                  className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    preferredTime === time
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {time.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Notes / Symptoms */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Descreva algum sintoma ou dúvida adicional (opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Câmbio dando tranco leve, luz de injeção acendeu ontem, ou barulho na dianteira ao esterçar..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Live Message Preview */}
          <div className="p-3 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-slate-300">Prévia da mensagem pronta: </span>
            <span className="italic text-slate-600 dark:text-slate-400">
              "Gostaria de agendar para meu {brand} {model || ''} - Serviço: {service}..."
            </span>
          </div>

          {/* Submit Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-600/20 dark:shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Enviar Agendamento no WhatsApp ({WHATSAPP_PHONE})</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2">
              Ao clicar, seu aplicativo do WhatsApp será aberto com o texto pronto para envio.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
