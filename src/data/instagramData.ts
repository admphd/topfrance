export interface InstagramPost {
  id: string;
  imageUrl: string;
  title: string;
  caption: string;
  carModel: string;
  serviceCategory: string;
  likes: number;
  commentsCount: number;
  date: string;
  tags: string[];
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    title: 'Diálise 100% de Câmbio Automático Aisin',
    caption: 'Troca de óleo de câmbio por diálise 100% no Peugeot 3008 THP. Aqui não fazemos troca parcial por gravidade: máquina conectada, circuito pressurizado e nível conferido rigorosamente na temperatura de 58°C via scanner. Adeus trancos entre marchas! 🚗⚙️',
    carModel: 'Peugeot 3008 1.6 THP',
    serviceCategory: 'Câmbio Automático',
    likes: 184,
    commentsCount: 23,
    date: 'Há 2 dias',
    tags: ['#topfrance', '#cambioautomatico', '#peugeot3008', '#oficinagoiania', '#thpbrasil']
  },
  {
    id: 'post-2',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    title: 'Diagnóstico Oficial com Scanner DiagBox PSA',
    caption: 'Luz de injeção acesa no Citroën C4 Lounge? Nada de adivinhar trocando peças à toa. Diagnóstico com software oficial de montadora DiagBox PSA com leitura de parâmetros em tempo real, teste de atuadores e telecarregamento de software original. 💻🔍',
    carModel: 'Citroën C4 Lounge Turbo',
    serviceCategory: 'Diagnóstico Computadorizado',
    likes: 142,
    commentsCount: 16,
    date: 'Há 4 dias',
    tags: ['#diagbox', '#citroenc4', '#diagnosticoautomotivo', '#topfrancegoiania', '#psabrasil']
  },
  {
    id: 'post-3',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    title: 'Descarbonização e Revisão Preventiva THP',
    caption: 'Manutenção minuciosa no motor 1.6 THP Turbo: descarbonização de dutos e válvulas de admissão, troca das velas originais de irídio e verificação da corrente de comando com ferramentas de ponto dedicadas. Motor respirando como novo! ⚡🛠️',
    carModel: 'Peugeot 208 GT & 2008 THP',
    serviceCategory: 'Motor & Injeção Direta',
    likes: 215,
    commentsCount: 31,
    date: 'Há 6 dias',
    tags: ['#motorthp', '#descarbonizacao', '#peugeot208', '#topfrance', '#goianiamotores']
  },
  {
    id: 'post-4',
    imageUrl: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80',
    title: 'Arrefecimento Técnico com Sangria nos 3 Pontos',
    caption: 'Revisão completa do sistema de arrefecimento do Renault Duster: teste de estanqueidade pressurizado a 1.5 bar, aditivo orgânico homologado e sangria rigorosa nos 3 pontos de purga de fábrica. Sem bolhas de ar e sem risco para a junta de cabeçote! 💧🛡️',
    carModel: 'Renault Duster 2.0 16V',
    serviceCategory: 'Arrefecimento Especializado',
    likes: 168,
    commentsCount: 19,
    date: 'Há 1 semana',
    tags: ['#renaultduster', '#arrefecimento', '#sangriatecnica', '#topfrancegoiania', '#mecanicagoiania']
  }
];
