import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight, Sun, Moon } from 'lucide-react';
import { WHATSAPP_PHONE, WHATSAPP_RAW } from '../data/reviewsData';
import { TopFranceLogo } from './TopFranceLogo';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200 shadow-xs dark:shadow-none">
      {/* French subtle accent hairline on top */}
      <div className="h-0.5 w-full french-tricolor-gradient" />

      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav links) — Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with official logo */}
        <a href="#" className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
          <TopFranceLogo className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-105 shrink-0" />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
              TOP FRANCE
            </span>
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider">
              CENTRO AUTOMOTIVO
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#especialidades" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Especialidades
          </a>
          <a href="#servicos" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Serviços
          </a>
          <a href="#instagram" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#avaliacoes" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Depoimentos
          </a>
          <a href="#diagnostico" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Diagnóstico
          </a>
          <a href="#diferenciais" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Por que nós?
          </a>
          <a href="#contato" className="hover:text-blue-600 dark:hover:text-white transition-colors">
            Contato
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions + Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            title={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
            aria-label={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          <a
            href={`tel:${WHATSAPP_PHONE.replace(/\D/g, '')}`}
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-900/60"
            title="Ligar para a oficina"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="tabular-nums">{WHATSAPP_PHONE}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Agendar WhatsApp</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tema de visualização
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                  <span>Modo Escuro</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Modo Claro</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-800 dark:text-slate-200">
            <a
              href="#especialidades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between"
            >
              <span>Especialidades Francesas & Multimarcas</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between"
            >
              <span>Serviços Oferecidos</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between"
            >
              <span>Instagram (@topfrancegoiania)</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between"
            >
              <span>Depoimentos de Clientes no Google</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </a>
            <a
              href="#diagnostico"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between"
            >
              <span>Diagnóstico Rápido de Sintomas</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between"
            >
              <span>Diferenciais Top France</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between"
            >
              <span>Localização & Contatos em Goiânia</span>
              <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent('Olá! Gostaria de agendar um atendimento na Top France.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp ({WHATSAPP_PHONE})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
