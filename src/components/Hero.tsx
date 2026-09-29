import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Star, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Cpu, 
  Droplets,
  CalendarCheck,
  MapPin
} from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_RAW, GOOGLE_REVIEWS_URL, GOOGLE_MAPS_LOCATION_URL } from '../data/reviewsData';
import { PeugeotLogo, CitroenLogo, RenaultLogo, MultimarcasLogo } from './BrandLogos';
import { TopFranceLogo } from './TopFranceLogo';

interface HeroProps {
  onOpenBooking: (serviceName?: string, brand?: string) => void;
}

const BRAND_PREVIEWS = [
  {
    id: 'peugeot',
    name: 'Peugeot',
    logo: PeugeotLogo,
    models: '208 · 2008 · 3008 · 308 · 408 · Partner',
    engineFocus: '1.6 THP Turbo, 1.2 PureTech e 1.6 EC5',
    scanner: 'Lexia 3 / DiagBox Original PSA',
    tagline: 'Precisão milimétrica para a sofisticação do leão francês'
  },
  {
    id: 'citroen',
    name: 'Citroën',
    logo: CitroenLogo,
    models: 'C3 · C4 Lounge · C4 Cactus · Aircross · Jumpy',
    engineFocus: 'PureTech, THP, 1.6 16v e BlueHDi',
    scanner: 'DiagBox PSA dedicado com telecarregamento',
    tagline: 'Conforto acústico e suspensão preservados de fábrica'
  },
  {
    id: 'renault',
    name: 'Renault',
    logo: RenaultLogo,
    models: 'Duster · Sandero · Logan · Captur · Oroch · Kwid · Fluence',
    engineFocus: '1.0/1.6 SCe, 2.0 16v F4R, 1.3 TCe Turbo',
    scanner: 'Renault CAN Clip Oficial com leitura total de rede',
    tagline: 'Robustez e mecânica afinada sem mitos de oficina'
  },
  {
    id: 'multimarcas',
    name: 'Todas as Marcas',
    logo: MultimarcasLogo,
    models: 'Toyota · VW · Fiat · Jeep · Chevrolet · Nissan · Volvo · RAM · Lexus · DS · Mini · Kia',
    engineFocus: 'Motores TSI, Flex, V6, Diesel Leve e Híbridos',
    scanner: 'Autel MaxiSys Ultra + Launch X431 Pro',
    tagline: 'O mesmo rigor técnico europeu aplicado ao seu veículo'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedBrand, setSelectedBrand] = useState(BRAND_PREVIEWS[0]);
  const SelectedBrandLogo = selectedBrand.logo;

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-radial-[at_top] dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200 dark:border-slate-800/60 transition-colors duration-200">
      {/* Subtle French automotive ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-200/50 via-indigo-100/20 to-transparent dark:from-blue-600/10 dark:via-indigo-600/5 dark:to-transparent blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Proof */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Trust Line (Zero-Pill discipline) with Location Link */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                title="Ver endereço no Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Goiânia - GO (Ver no Google Maps)</span>
              </a>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Peugeot, Citroën, Renault & Multimarcas</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <a 
                href={GOOGLE_REVIEWS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                <span>Avaliações no Google</span>
                <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.1] font-heading max-w-2xl text-balance">
              A oficina certa para quem exige <span className="text-blue-600 dark:text-blue-500">precisão em carros franceses</span> e todas as marcas.
            </h1>

            {/* Concrete Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Chega de mecânicos que condenam seu carro por falta de ferramenta ou conhecimento. 
              Na <strong className="text-slate-900 dark:text-white font-semibold">Top France</strong>, utilizamos scanners originais de montadora, 
              máquina de diálise 100% para óleo de câmbio e sangria técnica de arrefecimento. Transparência com vídeos e fotos em tempo real.
            </p>

            {/* Quick Spec Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-950 dark:text-white font-medium">Troca de óleo de câmbio por máquina:</strong> 100% do fluido renovado.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-950 dark:text-white font-medium">Scanners Oficiais Diagbox & Clip:</strong> Diagnóstico sem adivinhação.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-950 dark:text-white font-medium">Arrefecimento sem bolhas:</strong> Sangria nos 3 pontos de fábrica.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-950 dark:text-white font-medium">Atendimento Multimarcas:</strong> O mesmo padrão para qualquer veículo.
                </span>
              </div>
            </div>

            {/* Single Primary Decision Block */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenBooking(undefined, selectedBrand.name)}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-600/20 dark:shadow-blue-900/30 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Agendar Avaliação via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                <span>Ver Localização da Oficina</span>
              </a>
            </div>

            {/* Contact Micro-Data */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Atendimento rápido via WhatsApp:</span>
              </span>
              <a
                href={`https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent('Olá Top France! Gostaria de tirar uma dúvida sobre meu veículo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 dark:text-white font-bold hover:underline tabular-nums"
              >
                {WHATSAPP_PHONE}
              </a>
            </div>

          </div>

          {/* Right Column: Dominant Focal Carrier (Interactive Automotive Tech Card with TopFranceLogo) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-2xl relative transition-colors">
              {/* Top Card Title with Official Logo */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <TopFranceLogo className="w-11 h-11 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                      Centro Automotivo Especializado
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                      Selecione a marca do seu carro
                    </h3>
                  </div>
                </div>
                <div className="h-6 w-9 french-tricolor-gradient rounded-sm opacity-80 shrink-0" title="Especialidade Francesa" />
              </div>

              {/* Functional Segmented Controls with Brand Logos */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 dark:bg-slate-950/80 rounded-xl mt-4 border border-slate-200 dark:border-slate-800/80">
                {BRAND_PREVIEWS.map((brand) => {
                  const Logo = brand.logo;
                  const isSelected = selectedBrand.id === brand.id;
                  return (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand)}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <Logo className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`} />
                      <span className="text-[11px] truncate">{brand.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Brand Intelligence Box */}
              <div className="mt-5 space-y-4">
                <div className="p-3.5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Modelos atendidos com frequência:</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{selectedBrand.models}</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-2 shrink-0 shadow-xs">
                    <SelectedBrandLogo className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Scanner Específico: </span>
                      <span>{selectedBrand.scanner}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <Droplets className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Foco de Motorização: </span>
                      <span>{selectedBrand.engineFocus}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">Compromisso Top France: </span>
                      <span>{selectedBrand.tagline}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action for Selected Brand */}
                <div className="pt-3">
                  <button
                    onClick={() => onOpenBooking('Revisão Geral e Diagnóstico', selectedBrand.name)}
                    className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 active:bg-slate-950 text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-800 dark:border-slate-700/80 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <CalendarCheck className="w-4 h-4 text-blue-400" />
                    <span>Cotar manutenção para {selectedBrand.name}</span>
                  </button>
                </div>
              </div>

              {/* Footer Trust Quote */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Orçamento transparente prévio</span>
                <span>Garantia em peças e serviços</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

