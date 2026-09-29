import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PeugeotLogo, CitroenLogo, RenaultLogo, MultimarcasLogo, MultimarcasStrip } from './BrandLogos';

interface BrandPillarsProps {
  onOpenBooking: (serviceName?: string, brand?: string) => void;
}

const BRANDS = [
  {
    name: 'Peugeot',
    id: 'peugeot',
    origin: 'França · Desde 1810',
    logo: PeugeotLogo,
    specialties: [
      'Domínio completo de motores 1.6 THP Turbo e 1.2 PureTech',
      'Diagnóstico oficial Lexia / DiagBox com parametrização de BSI',
      'Calibração e manutenção de câmbios automáticos AL4, AT8 e EAT6 (Aisin)'
    ],
    popularCars: '208, 2008, 3008, 308, 408, 5008, Partner, Boxer'
  },
  {
    name: 'Citroën',
    id: 'citroen',
    origin: 'França · Pioneirismo & Conforto',
    logo: CitroenLogo,
    specialties: [
      'Geometria e calibração fina de suspensão e coxins hidráulicos',
      'Sangria técnica de arrefecimento nos 3 pontos de fábrica',
      'Troca técnica de correia com gabarito de largura de óleo'
    ],
    popularCars: 'C3, C4 Lounge, C4 Cactus, C4 Pallas, Aircross, Jumpy'
  },
  {
    name: 'Renault',
    id: 'renault',
    origin: 'França · Robustez & Performance',
    logo: RenaultLogo,
    specialties: [
      'Scanner Renault CAN Clip com leitura total de injeção e módulos UCH',
      'Troca de óleo e manutenção em caixas automáticas e câmbio CVT X-Tronic',
      'Sincronismo com ferramentas dedicadas nos motores SCe e F4R (Sandero R.S.)'
    ],
    popularCars: 'Duster, Sandero, Logan, Captur, Oroch, Megane, Fluence, Kwid'
  },
  {
    name: 'Multimarcas',
    id: 'multimarcas',
    origin: 'Atendimento Completo a Todas as Marcas',
    logo: MultimarcasLogo,
    specialties: [
      'Scanners multimarcas de última geração para importados e nacionais',
      'Troca de óleo de câmbio automático para todas as transmissões',
      'Revisão geral com checklist digital transparente e garantia por escrito'
    ],
    popularCars: 'Toyota, VW, Fiat, Jeep, Chevrolet, Nissan, Hyundai, Ford, Volvo, RAM, Lexus, DS, Mini, Kia'
  }
];

export const BrandPillars: React.FC<BrandPillarsProps> = ({ onOpenBooking }) => {
  return (
    <section id="especialidades" className="py-16 sm:py-20 bg-slate-100/60 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <span>Especialização & Compromisso Técnico</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            O rigor da engenharia francesa para o seu carro, qualquer que seja a marca.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Carros franceses não são difíceis; eles exigem ferramentas específicas, procedimentos de fábrica e respeito aos fluidos recomendados. 
            Aplicamos essa mesma disciplina cirúrgica em todas as marcas que entram na Top France.
          </p>
        </div>

        {/* Brand Grid (Asymmetric Bento style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANDS.map((item, idx) => {
            const BrandLogoComponent = item.logo;
            return (
              <div
                key={item.name}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  idx === 3
                    ? 'bg-white dark:bg-slate-900/90 border-blue-400/60 dark:border-blue-500/40 hover:border-blue-500 shadow-md shadow-blue-500/5'
                    : 'bg-white dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Official Brand Logo (replaces initials) */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-2.5 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700/80 shadow-xs group-hover:scale-105 transition-transform">
                      <BrandLogoComponent className="w-7 h-7 text-slate-900 dark:text-white" />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.origin}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-1">{item.name}</h3>
                  
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Modelos: </span>
                    {item.popularCars}
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                    {item.specialties.map((spec) => (
                      <div key={spec} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenBooking(undefined, item.name)}
                    className="w-full py-2.5 px-3 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Agendar {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workshop Credo Bar with Multimarcas Strip from uploaded image */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                Seu carro não é francês? Sem problemas!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
                Nossa oficina atende todas as montadoras nacionais e importadas. Quem tem competência para reparar a complexa eletrônica de um Peugeot ou Citroën entrega excelência em qualquer veículo.
              </p>
            </div>
            <button
              onClick={() => onOpenBooking('Revisão Geral Preventiva', 'Outra Marca')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs whitespace-nowrap cursor-pointer transition-colors shrink-0 shadow-sm"
            >
              Fazer orçamento para meu carro
            </button>
          </div>

          {/* Multimarcas Logos Lineup */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
            <div className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-1.5 text-center sm:text-left">
              Marcas atendidas diariamente:
            </div>
            <MultimarcasStrip />
          </div>
        </div>

      </div>
    </section>
  );
};
