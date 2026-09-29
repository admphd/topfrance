import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageSquare, 
  ExternalLink,
  Navigation,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { 
  WHATSAPP_PHONE, 
  WHATSAPP_RAW, 
  INSTAGRAM_URL, 
  GOOGLE_MAPS_LOCATION_URL 
} from '../data/reviewsData';
import { TopFranceLogo } from './TopFranceLogo';

interface LocationContactProps {
  onOpenBooking: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Localização & Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Venha tomar um café e fazer o diagnóstico do seu carro na Top France.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Estamos estrategicamente localizados em Goiânia - GO, com oficina ampla, organizada e equipada com elevadores modernos e sala de espera confortável.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: Contact Info & Opening Hours */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Contact Card */}
            <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm dark:shadow-none">
              
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Telefone & WhatsApp Oficial
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent('Olá Top France! Gostaria de informações sobre agendamento de serviços.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors tabular-nums mt-0.5 inline-block font-heading"
                  >
                    {WHATSAPP_PHONE}
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Envie fotos, vídeos ou tire dúvidas técnicas diretamente com nossa equipe.
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Siga no Instagram
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <span>@topfrancegoiania</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  </a>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Acompanhe nosso dia a dia na oficina, procedimentos mecânicos e dicas técnicas para seu veículo.
                  </p>
                </div>
              </div>

              {/* Location in Goiânia with Official Map Link */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-rose-500 dark:text-rose-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Localização da Oficina
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Goiânia - Estado de Goiás (GO)
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Atendimento especializado presencial. Fácil acesso e vaga para clientes.
                  </p>
                  <a
                    href={GOOGLE_MAPS_LOCATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-2 transition-colors"
                  >
                    <span>Abrir endereço exato no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Horário de Funcionamento
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Segunda a Sexta-feira: 08:00 às 18:00
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Sábados: Plantão de entregas e agendamentos prévios
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent('Olá Top France! Gostaria de agendar uma visita na oficina.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Como Chegar (Google Maps)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Workshop Direct Booking Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <TopFranceLogo className="w-10 h-10 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Agendamento Expresso
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mt-0.5">
                      Reserve seu atendimento em segundos
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sem compromisso</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Preencha o formulário rápido para gerar a mensagem com os detalhes do seu carro e enviar direto para a nossa equipe pelo WhatsApp.
                </p>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Como funciona:</span>
                  </div>
                  <p>1. Clique em "Iniciar Agendamento Inteligente".</p>
                  <p>2. Selecione a marca, modelo e serviço desejado.</p>
                  <p>3. Receba a confirmação de data e horário no seu WhatsApp.</p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 dark:shadow-blue-900/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Abrir Agendador Inteligente</span>
                </button>

                <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                  Atendimento também por ligação telefônica: <strong className="text-slate-900 dark:text-white">{WHATSAPP_PHONE}</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
