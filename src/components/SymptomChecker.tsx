import React, { useState } from 'react';
import { 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  Gauge,
  ThermometerSnowflake,
  Activity,
  Cpu,
  ShieldAlert,
  Wind
} from 'lucide-react';
import { SYMPTOMS_DATA } from '../data/symptomsData';
import { SymptomItem } from '../types';
import { WHATSAPP_RAW } from '../data/reviewsData';

export const SymptomChecker: React.FC = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomItem>(SYMPTOMS_DATA[0]);
  const [carInput, setCarInput] = useState('');

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'imediata':
        return <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800/80 px-2.5 py-1 rounded">Urgência Imediata (Risco Mecânico)</span>;
      case 'alta':
        return <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800/80 px-2.5 py-1 rounded">Urgência Alta (Evite rodar muito)</span>;
      case 'moderada':
        return <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/80 border border-yellow-200 dark:border-yellow-800/80 px-2.5 py-1 rounded">Urgência Moderada</span>;
      default:
        return <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 px-2.5 py-1 rounded">Urgência Baixa / Conforto</span>;
    }
  };

  const generateWhatsAppLink = () => {
    const carStr = carInput.trim() ? ` no meu ${carInput.trim()}` : '';
    const text = `Olá Top France! Identifiquei o seguinte sintoma${carStr}:\n• Sintoma: ${selectedSymptom.symptom}\n• Causa provável indicada pelo site: ${selectedSymptom.probableCause}\n\nGostaria de agendar uma avaliação técnica em Goiânia.`;
    return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="diagnostico" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Guia Interativo de Sintomas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            O que seu carro está sentindo?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Identifique comportamentos anormais antes que um reparo preventivo se transforme em um prejuízo maior. 
            Veja os sintomas mais comuns em carros franceses e multimarcas e envie direto para nossos técnicos.
          </p>
        </div>

        {/* Interactive Layout: Left selector list + Right technical diagnostic breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Symptoms Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Selecione o sintoma observado:
            </div>

            {SYMPTOMS_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedSymptom(item)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                  selectedSymptom.id === item.id
                    ? 'bg-blue-50 dark:bg-blue-600/15 border-blue-500 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-950 dark:hover:text-white shadow-xs dark:shadow-none'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${selectedSymptom.id === item.id ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                    {renderIcon(item.iconName)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.symptom}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{item.commonCars}</div>
                  </div>
                </div>

                <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${selectedSymptom.id === item.id ? 'text-blue-600 dark:text-blue-400 translate-x-1' : 'text-slate-400 dark:text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Diagnostic Card */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-xl">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Diagnóstico Preliminar:</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-0.5">
                    {selectedSymptom.symptom}
                  </h3>
                </div>
                {getUrgencyBadge(selectedSymptom.urgency)}
              </div>

              {/* Vehicles Most Affected */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-950/70 rounded-xl border border-slate-200 dark:border-slate-800/80">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Modelos mais frequentemente afetados: </span>
                <span className="text-xs text-slate-800 dark:text-slate-200">{selectedSymptom.commonCars}</span>
              </div>

              {/* Probable Cause & Solution */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5">
                    Causa Provável:
                  </h4>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    {selectedSymptom.probableCause}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1.5">
                    Solução Técnica na Top France:
                  </h4>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    {selectedSymptom.solution}
                  </p>
                </div>
              </div>

              {/* Pre-fill Vehicle Input & WhatsApp Dispatch */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <div>
                  <label htmlFor="symptom-car" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Qual é o modelo e ano do seu carro? (Opcional)
                  </label>
                  <input
                    id="symptom-car"
                    type="text"
                    value={carInput}
                    onChange={(e) => setCarInput(e.target.value)}
                    placeholder="Ex: Peugeot 208 2021, Citroën C4 Lounge, Duster 2018..."
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-600/20 dark:shadow-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar este sintoma direto para o WhatsApp da Top France</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
