import React from 'react';
import { Check, X, Shield, Cpu, Gauge, Wrench } from 'lucide-react';

export const WhyTopFrance: React.FC = () => {
  const COMPARISONS = [
    {
      title: 'Diagnóstico Eletrônico',
      generic: 'Scanners genéricos OBD2 que não acessam centrais BSI/UCH e resultam em "troca de peças por adivinhação".',
      topfrance: 'Scanners oficiais de montadora (Diagbox PSA e Renault Clip) com leitura de parâmetros ao vivo e telecarregamento.',
      icon: Cpu
    },
    {
      title: 'Óleo de Câmbio Automático',
      generic: 'Troca parcial por gravidade (drena apenas 40% do óleo velho e mistura com óleo novo, mantendo a sujeira).',
      topfrance: 'Máquina automática de diálise 100%, troca total do fluido e ajuste milimétrico de nível monitorado por temperatura no scanner.',
      icon: Gauge
    },
    {
      title: 'Sistema de Arrefecimento',
      generic: 'Colocam água de torneira ou aditivo químico barato sem sangria técnica, gerando bolhas de ar que estouram a junta de cabeçote.',
      topfrance: 'Teste hidrostático pressurizado, aditivo orgânico homologado PSA/Renault e sangria em todos os pontos de alívio do motor.',
      icon: Wrench
    },
    {
      title: 'Transparência no Atendimento',
      generic: 'Orçamentos surpresa, trocas de peças sem consentimento e falta de explicação técnica clara.',
      topfrance: 'Orçamento prévio detalhado, envio de fotos e vídeos em tempo real pelo WhatsApp e entrega das peças antigas trocadas.',
      icon: Shield
    }
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Padrão Técnico de Concessionária, Preço Justo de Oficina
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Por que somos diferentes da oficina convencional?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A má fama de alguns carros no Brasil nasceu da falta de preparo de mecânicos que não respeitam as especificações europeias. 
            Veja a comparação prática do nosso método:
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPARISONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* Ordinary Workshop */}
                    <div className="p-3.5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-red-600 dark:text-red-400 text-xs">
                        <X className="w-4 h-4 shrink-0" />
                        <span>Oficina Genérica</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 pl-5 leading-relaxed">
                        {item.generic}
                      </p>
                    </div>

                    {/* Top France */}
                    <div className="p-3.5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 text-xs">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>Na Top France</span>
                      </div>
                      <p className="text-slate-800 dark:text-slate-200 pl-5 leading-relaxed font-medium">
                        {item.topfrance}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900 text-[11px] text-slate-500">
                  Compromisso com o manual de reparação oficial do fabricante.
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
