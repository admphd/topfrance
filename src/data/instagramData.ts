export interface InstagramPost {
  id: string;
  postUrl: string;
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
    id: 'DUHHSBsE2Ry',
    postUrl: 'https://www.instagram.com/p/DUHHSBsE2Ry/',
    imageUrl: '/images/instagram/post-1-peugeot-rcz.jpg',
    title: 'Peugeot RCZ na Top France',
    caption: 'Peugeot RCZ. Lindíssima máquina nas mãos de quem entende do assunto! Traga a sua máquina também para avaliação com ferramental e scanner específicos. 🦁🏎️',
    carModel: 'Peugeot RCZ 1.6 THP',
    serviceCategory: 'Mecânica Especializada',
    likes: 198,
    commentsCount: 14,
    date: 'Recente',
    tags: ['#topfrance', '#peugeotrcz', '#oficinagoiânia', '#topfrancecentroautomotivo', '#mecânica', '#cuidedoseucarro']
  },
  {
    id: 'DOdgQ2OAESO',
    postUrl: 'https://www.instagram.com/p/DOdgQ2OAESO/',
    imageUrl: '/images/instagram/post-2-barulho-motor.jpg',
    title: 'Dica Técnica: Barulho no Motor?',
    caption: 'Dica boa é aqui na Top France! 🔧🚗 Barulho no motor, será? Identificação precisa de ruídos anormais e diagnóstico prévio antes que se torne uma quebra de alto custo.',
    carModel: 'Diagnóstico & Inspeção',
    serviceCategory: 'Dica Técnica & Motor',
    likes: 165,
    commentsCount: 21,
    date: 'Recente',
    tags: ['#topfrance', '#barulhonomotor', '#oficinagoiânia', '#topfrancecentroautomotivo', '#dicatecnica']
  },
  {
    id: 'DPRfvFkEfy1',
    postUrl: 'https://www.instagram.com/p/DPRfvFkEfy1/',
    imageUrl: '/images/instagram/post-3-peugeot-3008-falha.jpg',
    title: 'Peugeot 3008: Falha de Funcionamento',
    caption: 'Peugeot 3008 com falha de funcionamento. 🚗🔧 Diagnóstico com scanner dedicado DiagBox PSA para identificar a causa raiz da anomalia sem substituições desnecessárias.',
    carModel: 'Peugeot 3008 THP',
    serviceCategory: 'Diagnóstico Computadorizado',
    likes: 212,
    commentsCount: 18,
    date: 'Recente',
    tags: ['#peugeot3008', '#topfrance', '#oficinagoiânia', '#diagbox', '#falhadefuncionamento']
  },
  {
    id: 'DYm6bcaTxJo',
    postUrl: 'https://www.instagram.com/p/DYm6bcaTxJo/',
    imageUrl: '/images/instagram/post-4-correia-dentada-3cil.jpg',
    title: 'Atenção: Correia Dentada em Motores 3 Cilindros',
    caption: '⚠️ MUITA ATENÇÃO⚠️: Correia dentada em veículos 3 cilindros! Componente fundamental para o funcionamento do motor. Quando não recebe manutenção correta ou ultrapassa o período recomendado, pode causar sérios danos. Evite surpresas! 🔧📲',
    carModel: 'Motores 3 Cilindros (PureTech/SCe)',
    serviceCategory: 'Correia Dentada & Prevenção',
    likes: 284,
    commentsCount: 35,
    date: 'Recente',
    tags: ['#correiadentada', '#3cilindros', '#puretech', '#topfrance', '#oficinagoiânia', '#manutencaopreventiva']
  }
];
