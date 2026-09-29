import React, { useState } from 'react';
import { 
  Gauge, 
  Thermometer, 
  ClipboardCheck, 
  Droplet, 
  Compass, 
  Cpu, 
  RotateCw, 
  ShieldAlert, 
  Flame, 
  Wind,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'Todos os Serviços' },
  { id: 'cambio', label: 'Câmbio Automático' },
  { id: 'arrefecimento', label: 'Arrefecimento' },
  { id: 'motor', label: 'Motor & Óleo' },
  { id: 'revisao', label: 'Revisão & Climatização' },
  { id: 'chassi', label: 'Geometria & Freios' },
  { id: 'diagnostico', label: 'Diagnóstico Scanner' }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gauge': return <Gauge className="w-5 h-5 text-blue-400" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5 text-emerald-400" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-blue-400" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-amber-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'RotateCw': return <RotateCw className="w-5 h-5 text-rose-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-red-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-sky-400" />;
      default: return <Gauge className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
              Nossas Especialidades Mecânicas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
              Serviços executados com ferramental específico e padrão de montadora.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Da troca de óleo por diálise completa ao diagnóstico computadorizado com scanner original, 
              sua garantia e a vida útil do seu carro estão sempre em primeiro lugar.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenBooking('Consulta Geral')}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Orçamento Geral</span>
            </button>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all group shadow-sm dark:shadow-none hover:shadow-md"
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-xs">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 px-2 py-0.5 rounded">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  {service.categoryLabel}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Points */}
                <div className="space-y-2 mb-5">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Technical Note */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Intervalo:</span>
                  <span className="text-slate-800 dark:text-slate-300 font-medium">{service.recommendedInterval}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-lg text-xs font-semibold transition-colors text-center cursor-pointer"
                  >
                    Ver detalhes
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Cotar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedServiceModal(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                  {selectedServiceModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mt-1">
                  {selectedServiceModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm p-1 cursor-pointer"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedServiceModal.description}
            </p>

            <div className="p-4 bg-blue-50/70 dark:bg-slate-950/80 rounded-xl border border-blue-100 dark:border-slate-800">
              <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Particularidade em Veículos Franceses</span>
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedServiceModal.frenchSpecifics}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-3">
                O que está incluído neste procedimento:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {selectedServiceModal.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-slate-100 dark:bg-slate-950 rounded-lg text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span>Intervalo Recomendado:</span>
              <span className="font-semibold text-slate-900 dark:text-white">{selectedServiceModal.recommendedInterval}</span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const service = selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  onOpenBooking(service);
                }}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Agendar {selectedServiceModal.title} no WhatsApp</span>
              </button>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="py-3 px-5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm rounded-xl cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
