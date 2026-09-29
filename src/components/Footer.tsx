import React from 'react';
import { Instagram, Phone, MapPin, ExternalLink, Star } from 'lucide-react';
import { 
  WHATSAPP_PHONE, 
  WHATSAPP_RAW, 
  INSTAGRAM_URL, 
  GOOGLE_REVIEWS_URL,
  GOOGLE_MAPS_LOCATION_URL 
} from '../data/reviewsData';
import { TopFranceLogo } from './TopFranceLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info with Official Logo */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <TopFranceLogo className="w-9 h-9 shrink-0" />
              <div>
                <span className="text-lg font-black text-slate-900 dark:text-white font-heading tracking-tight block">
                  TOP FRANCE
                </span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
                  CENTRO AUTOMOTIVO
                </span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Oficina mecânica de alta precisão especializada em veículos franceses (Peugeot, Citroën, Renault, DS) e multimarcas em Goiânia - GO.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#especialidades" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Especialidades Francesas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Serviços Mecânicos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Guia de Sintomas
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Diferenciais Técnicos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Serviços em Destaque
            </h4>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-400">
              <li>Troca de Óleo de Câmbio Automático por Diálise</li>
              <li>Sistema de Arrefecimento com Sangria Técnica</li>
              <li>Revisão Geral Preventiva 50 Itens</li>
              <li>Diagnóstico Eletrônico Computadorizado</li>
              <li>Troca de Óleo Homologado PSA/Renault</li>
              <li>Alinhamento 3D e Balanceamento</li>
            </ul>
          </div>

          {/* Contacts & Social */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Canais Oficiais
            </h4>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent('Olá Top France! Gostaria de informações.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="tabular-nums font-medium text-slate-800 dark:text-slate-300">{WHATSAPP_PHONE}</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" />
                <span>@topfrancegoiania</span>
                <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-600" />
              </a>

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Avaliações no Google</span>
                <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-600" />
              </a>

              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 pt-1 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Abrir no Google Maps"
              >
                <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                <span>Goiânia - GO · Ver no Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Top France Oficina Mecânica Especializada. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span>Peugeot · Citroën · Renault · Multimarcas</span>
            <div className="w-8 h-2 french-tricolor-gradient rounded-sm opacity-75" title="Top France" />
          </div>
        </div>

      </div>
    </footer>
  );
};
