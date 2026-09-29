import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: 'A Top France atende apenas veículos franceses ou qualquer marca?',
    a: 'Atendemos todas as marcas do mercado! Embora nosso foco principal e maior autoridade técnica seja em Peugeot, Citroën, Renault e DS, nossa equipe possui ferramental avançado, scanners multimarcas de topo de linha e conhecimento para atender Toyota, Honda, Volkswagen, Fiat, Chevrolet, Jeep, Hyundai e veículos importados com o mesmo rigor técnico europeu.'
  },
  {
    q: 'Por que os carros franceses ganharam fama injusta de "difíceis" no Brasil?',
    a: 'A má fama foi criada principalmente por oficinas não especializadas que tentavam reparar motores modernos com métodos dos anos 80: usavam óleo mineral ou sem especificação (danificando tuchos e correias banhadas a óleo como o PureTech), completavam o radiador com água de torneira sem fazer a sangria nos 3 parafusos de purga (gerando ar e superaquecimento) e usavam scanners genéricos que não conseguiam ler as centrais BSI. Na Top France seguimos 100% o manual de fábrica.'
  },
  {
    q: 'O óleo do câmbio automático é mesmo "vitalício" como dizem alguns manuais?',
    a: 'Não existe fluido lubrificante eterno. Todo óleo degrada com calor, atrito e cisalhamento, gerando verniz e partículas que travam as válvulas solenoides do câmbio (causando os temidos trancos entre 1ª e 2ª marcha). Fabricantes das transmissões (como a Aisin e ZF) recomendam a troca preventiva a cada 40.000 a 60.000 km. Na Top France realizamos a troca de 100% do óleo por diálise com máquina automática.'
  },
  {
    q: 'Qual a importância da sangria técnica no sistema de arrefecimento?',
    a: 'Nos motores Peugeot, Citroën e Renault, o circuito de arrefecimento possui câmaras altas e tubulações que acumulam ar facilmente. Se você apenas colocar água no reservatório, forma-se uma bolsa de ar que impede a circulação do fluido e engana o sensor de temperatura, queimando a junta de cabeçote em poucos quilômetros. Nós usamos equipamento de vácuo e sangramos os pontos específicos de alívio com aditivo orgânico homologado.'
  },
  {
    q: 'Como funciona o envio de fotos e vídeos durante a revisão do meu carro?',
    a: 'Transparência é nosso lema. Durante a desmontagem e diagnóstico, gravamos vídeos e tiramos fotos nítidas das peças que apresentam desgaste ou folga, explicando o motivo técnico de cada recomendação diretamente no seu WhatsApp antes de qualquer substituição. Você só paga pelo que realmente precisa e autorizou.'
  },
  {
    q: 'Quais são as formas de pagamento e garantias oferecidas?',
    a: 'Facilitamos o pagamento em cartões de crédito em até 12x, além de Pix e boleto (para frotistas). Todos os serviços e peças aplicadas possuem garantia legal por escrito com nota fiscal.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-100/60 dark:bg-slate-900/30 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tira-Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Respostas diretas sobre manutenções, peças e procedimentos na Top France.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-xl overflow-hidden transition-all shadow-xs dark:shadow-none"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-900">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
