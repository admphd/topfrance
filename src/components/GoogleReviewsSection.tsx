import React, { useState } from 'react';
import { Star, ExternalLink, CheckCircle, Quote, ThumbsUp, MapPin } from 'lucide-react';
import { REVIEWS_DATA, GOOGLE_REVIEWS_URL, GOOGLE_MAPS_LOCATION_URL } from '../data/reviewsData';
import { PeugeotLogo, CitroenLogo, RenaultLogo, MultimarcasLogo } from './BrandLogos';

export const GoogleReviewsSection: React.FC = () => {
  const [filterBrand, setFilterBrand] = useState('all');

  const filteredReviews = filterBrand === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => {
        if (filterBrand === 'peugeot') return r.carModel.toLowerCase().includes('peugeot');
        if (filterBrand === 'citroen') return r.carModel.toLowerCase().includes('citroën') || r.carModel.toLowerCase().includes('citroen');
        if (filterBrand === 'renault') return r.carModel.toLowerCase().includes('renault');
        if (filterBrand === 'outros') return !r.carModel.toLowerCase().includes('peugeot') && !r.carModel.toLowerCase().includes('citro') && !r.carModel.toLowerCase().includes('renault');
        return true;
      });

  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Google Proof Bar */}
        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-xl shadow-slate-200/50 dark:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Google Proof Bar */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 pb-6 lg:pb-0 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-2">
                {/* Official Google G mark styled */}
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white flex items-center justify-center font-black text-slate-900 text-base shadow-xs border border-slate-200 dark:border-transparent">
                  G
                </div>
                <div>
                  <span className="text-base font-bold text-slate-900 dark:text-white block">Depoimentos no Google</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Opiniões de clientes reais</span>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Opiniões de proprietários reais de veículos em Goiânia e região metropolitana que confiam a manutenção na Top France.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Avaliações no Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={GOOGLE_MAPS_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                  title="Abrir no Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                  <span>Ver no Maps</span>
                </a>
              </div>
            </div>

            {/* Qualitative Trust Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-sm">Diagnóstico Honesto</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Troca apenas do que realmente está gasto, com comprovação por fotos e vídeos enviados diretamente para o cliente.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">Especialistas Certificados</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Técnicos treinados nas arquiteturas PSA e Renault, equipados com scanners de concessionária.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-amber-600 dark:text-amber-400 font-bold text-sm">Atendimento Multimarcas</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Clientes de marcas japonesas, alemãs e americanas elogiam a agilidade, precisão e garantia nos serviços.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Reviews by Brand */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              Depoimentos Recentes de Clientes
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Experiências de clientes com seus respectivos carros e serviços executados.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs shadow-xs">
            <button
              onClick={() => setFilterBrand('all')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors cursor-pointer ${
                filterBrand === 'all' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Todos ({REVIEWS_DATA.length})
            </button>
            <button
              onClick={() => setFilterBrand('peugeot')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                filterBrand === 'peugeot' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <PeugeotLogo className="w-3.5 h-3.5" />
              <span>Peugeot</span>
            </button>
            <button
              onClick={() => setFilterBrand('citroen')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                filterBrand === 'citroen' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CitroenLogo className="w-3.5 h-3.5" />
              <span>Citroën</span>
            </button>
            <button
              onClick={() => setFilterBrand('renault')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                filterBrand === 'renault' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <RenaultLogo className="w-3.5 h-3.5" />
              <span>Renault</span>
            </button>
            <button
              onClick={() => setFilterBrand('outros')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                filterBrand === 'outros' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <MultimarcasLogo className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Multimarcas</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm dark:shadow-none hover:shadow-md"
            >
              <div>
                {/* Header with 5 stars & verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-500 dark:text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 dark:fill-amber-400 text-amber-500 dark:text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] text-slate-500 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Vehicle Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-900 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {rev.author}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verificada</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {rev.carModel}
                </div>

                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Serviço: <span className="text-slate-700 dark:text-slate-300 font-medium">{rev.serviceDone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Link Callout */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-white transition-colors py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-md"
          >
            <span>Avaliações no Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
