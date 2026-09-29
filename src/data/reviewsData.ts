import { ReviewItem } from '../types';

export const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=topfrance#lrd=0x935ef192526f5bb3:0xec9b67f2aa733d30,1,,,,';
export const GOOGLE_MAPS_LOCATION_URL = 'https://maps.app.goo.gl/ZJADdL5BKVgvZs5V9?g_st=ac';
export const INSTAGRAM_URL = 'https://www.instagram.com/topfrancegoiania/';
export const WHATSAPP_PHONE = '(62) 98203-0538';
export const WHATSAPP_RAW = '5562982030538';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rodrigo Alencar',
    carModel: 'Peugeot 3008 Griffe 1.6 THP',
    rating: 5,
    date: 'Há 2 semanas',
    text: 'A melhor oficina de Goiânia para carros franceses! Tinha levado meu 3008 em duas outras mecânicas que queriam me cobrar uma fortuna inventando problema no câmbio. Na Top France eles colocaram o scanner específico da PSA, diagnosticaram que era apenas sensor de arrefecimento e troca de óleo de câmbio por diálise. Carro ficou um espetáculo, liso demais! Recomendo de olhos fechados.',
    serviceDone: 'Troca de Óleo de Câmbio & Arrefecimento',
    verifiedOnGoogle: true
  },
  {
    id: 'rev-2',
    author: 'Camila Guimarães',
    carModel: 'Citroën C3 1.2 PureTech',
    rating: 5,
    date: 'Há 1 mês',
    text: 'Atendimento impecável! Eu tinha muito medo da história da correia banhada a óleo do meu C3. Eles usaram o gabarito original para medir a correia, explicaram tudo com vídeos e fotos no WhatsApp durante o serviço e colocaram o óleo homologado certinho. Honestidade rara de encontrar hoje em dia.',
    serviceDone: 'Revisão Geral & Troca de Correia',
    verifiedOnGoogle: true
  },
  {
    id: 'rev-3',
    author: 'Marcio Vinicius Rocha',
    carModel: 'Renault Duster 2.0 4WD',
    rating: 5,
    date: 'Há 1 mês',
    text: 'Oficina extremamente limpa, organizada e com mecânicos que realmente entendem a tecnologia francesa. Fizeram a revisão da suspensão, freios e troca de fluidos da minha Duster. Preço justo e prazo rigorosamente cumprido. Parabéns à equipe Top France!',
    serviceDone: 'Suspensão, Freios e Fluidos',
    verifiedOnGoogle: true
  },
  {
    id: 'rev-4',
    author: 'Fernando Vasconcelos',
    carModel: 'Peugeot 208 GT Turbo',
    rating: 5,
    date: 'Há 2 meses',
    text: 'Meu carro estava com falha em arrancadas e acendendo luz de injeção. O pessoal da Top France fez a descarbonização das válvulas de admissão e troca das velas de irídio. O carro voltou a ter o torque brutal de zero km! Sem falar no atendimento educado do início ao fim.',
    serviceDone: 'Diagnóstico & Descarbonização THP',
    verifiedOnGoogle: true
  },
  {
    id: 'rev-5',
    author: 'Letícia Mendonça',
    carModel: 'Citroën C4 Lounge THP Exclusive',
    rating: 5,
    date: 'Há 3 semanas',
    text: 'Faço a manutenção preventiva do meu C4 Lounge sempre com eles. Fizeram a sangria do sistema de arrefecimento e a troca do óleo do câmbio Aisin com máquina. Todo o processo com relatório técnico antes de mexer em qualquer parafuso. Confiança total.',
    serviceDone: 'Troca de Óleo de Câmbio Aisin & Arrefecimento',
    verifiedOnGoogle: true
  },
  {
    id: 'rev-6',
    author: 'Eduardo Martins Siqueira',
    carModel: 'Toyota Corolla Cross (Multimarcas)',
    rating: 5,
    date: 'Há 1 mês',
    text: 'Embora o nome seja Top France, levei meu Corolla para fazer alinhamento 3D, balanceamento e revisão dos 50.000 km por indicação de um amigo. Fiquei impressionado com o nível técnico da equipe. O equipamento deles é top de linha. Recomendo para qualquer marca!',
    serviceDone: 'Alinhamento 3D, Balanceamento & Revisão',
    verifiedOnGoogle: true
  },
  {
    id: 'rev-7',
    author: 'Gabriel Fontana',
    carModel: 'Renault Sandero R.S. 2.0',
    rating: 5,
    date: 'Há 2 meses',
    text: 'Quem tem Sandero RS sabe como é difícil achar oficina que não trate o carro com preconceito ou faça serviço de qualquer jeito. Na Top France eles conhecem cada parafuso desse motor F4R. Troca de óleo Motul, pastilhas e alinhamento impecável.',
    serviceDone: 'Revisão Esportiva, Freios & Alinhamento 3D',
    verifiedOnGoogle: true
  },
  {
    id: 'rev-8',
    author: 'Juliana Pires Costa',
    carModel: 'Peugeot 2008 Allure Automático',
    rating: 5,
    date: 'Há 3 meses',
    text: 'Oficina nota 10! Muito transparentes. Me mandaram fotos de todas as peças velhas trocadas e explicaram o que precisava ser feito agora e o que podia esperar mais 5.000 km. Economizei muito graças à sinceridade deles.',
    serviceDone: 'Revisão Periódica e Freios',
    verifiedOnGoogle: true
  }
];
