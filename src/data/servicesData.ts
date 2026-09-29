import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cambio-automatico',
    title: 'Troca de Óleo de Câmbio Automático',
    category: 'cambio',
    categoryLabel: 'Transmissão & Câmbio',
    shortDesc: 'Troca 100% por diálise computadorizada com fluido homologado e calibração de nível por temperatura.',
    description: 'Realizamos a substituição total do fluido da transmissão por máquina de diálise automática. Essencial para evitar os famosos trancos, patinação e quebra precoce das transmissões francesas e multimarcas.',
    features: [
      'Máquina de diálise que substitui 100% do fluido antigo (e não apenas 40% por gravidade)',
      'Especialidade em transmissões AL4, AT8, EAT6, EAT8 (Aisin), Renault EDC (dupla embreagem) e CVT X-Tronic',
      'Fluidos originais 100% sintéticos homologados (Motul, Mobil, Febi, TotalEnergies)',
      'Conferência de nível na temperatura correta monitorada via scanner original',
      'Reset de autoadaptação e telecarregamento quando aplicável'
    ],
    frenchSpecifics: 'Evita a queima prematura das válvulas solenoides e o modo de emergência ("anomalia de câmbio") comum na falta de manutenção preventiva.',
    recommendedInterval: 'A cada 40.000 a 60.000 km ou 3 anos',
    iconName: 'Gauge',
    badge: 'Especialidade Top France'
  },
  {
    id: 'arrefecimento',
    title: 'Sistema de Arrefecimento Completo',
    category: 'arrefecimento',
    categoryLabel: 'Arrefecimento & Temperatura',
    shortDesc: 'Teste de pressão hidrostática, sangria técnica em múltiplos pontos e aditivo orgânico homologado.',
    description: 'O calcanhar de Aquiles dos veículos franceses quando mantidos em oficinas despreparadas. Realizamos limpeza técnica do sistema, teste de estanqueidade para identificar microvazamentos e sangria profissional sem bolhas de ar.',
    features: [
      'Sangria técnica nos pontos específicos de alívio (evita bolsões de ar que queimam a junta de cabeçote)',
      'Teste pressurizado da tampa, vaso de expansão, mangueiras e radiador',
      'Inspeção da carcaça da válvula termostática e bomba d\'água',
      'Aplicação de aditivo orgânico Long Life na proporção correta com água desmineralizada',
      'Aferição do acionamento das 2 velocidades da ventoinha via scanner'
    ],
    frenchSpecifics: 'Motores PSA e Renault exigem sangria técnica criteriosa; encher o reservatório sem sangrar causa superaquecimento imediato.',
    recommendedInterval: 'Revisão preventiva semestral / troca de fluido a cada 2 anos',
    iconName: 'Thermometer',
    badge: 'Crítico p/ Franceses'
  },
  {
    id: 'revisao-geral',
    title: 'Revisão Geral Preventiva & Check-up',
    category: 'revisao',
    categoryLabel: 'Revisão Periódica',
    shortDesc: 'Checklist rigoroso de mais de 50 itens com transparência total e fotos do serviço em tempo real.',
    description: 'Inspeção completa de mecânica, elétrica, suspensão, freios e segurança. Você recebe fotos e vídeos no seu WhatsApp de cada peça que realmente precisa de intervenção, sem orçamentos desnecessários.',
    features: [
      'Inspeção detalhada de 50 itens de segurança e funcionamento',
      'Relatório técnico digital transparente com fotos antes e depois',
      'Verificação de todos os níveis de fluidos e pontos de lubrificação',
      'Diagnóstico de bateria e alternador com testador de carga eletrônico',
      'Orçamento prévio aprovado pelo cliente antes de qualquer execução'
    ],
    frenchSpecifics: 'Checklist adaptado às particularidades crônicas de Peugeot, Citroën e Renault, além de protocolo completo para outras marcas.',
    recommendedInterval: 'A cada 10.000 km ou 12 meses',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'troca-oleo-motor',
    title: 'Troca de Óleo de Motor Especializada',
    category: 'motor',
    categoryLabel: 'Lubrificação',
    shortDesc: 'Lubrificantes 100% sintéticos atendendo às normas rigorosas PSA B71 e Renault RN.',
    description: 'Utilizar óleo incorreto em motores modernos (especialmente THP, Puretech e motores 16v) causa carbonização, falha de tuchos hidráulicos e desgaste da correia dentada. Usamos apenas lubrificantes certificados pelas montadoras.',
    features: [
      'Óleos com homologações oficiais PSA B71 2297 / 2312 e Renault RN0700 / RN0710 / RN0720',
      'Marcas homologadas: TotalEnergies, Motul, Mobil 1, Castrol',
      'Substituição obrigatória do anel de vedação do bujão e filtro de óleo original/premium',
      'Checagem gratuita de mais de 10 itens complementares durante a troca',
      'Troca dos filtros de ar, combustível e cabine (ar-condicionado)'
    ],
    frenchSpecifics: 'Crucial nos motores 1.2 PureTech (correia banhada em óleo que esfarela com óleo incorreto) e 1.6 THP Turbo.',
    recommendedInterval: 'A cada 10.000 km ou 12 meses (5.000 km ou 6 meses em caso de uso severo urbano)',
    iconName: 'Droplet'
  },
  {
    id: 'alinhamento-balanceamento',
    title: 'Alinhamento 3D Computadorizado & Balanceamento',
    category: 'chassi',
    categoryLabel: 'Geometria & Rodas',
    shortDesc: 'Geometria a laser de alta precisão calibrada com os parâmetros de fábrica de cada montadora.',
    description: 'Alinhamento tridimensional de precisão milimétrica e balanceamento dinâmico de rodas para eliminar vibrações ao volante, desgastes irregulares de pneus e puxões na direção.',
    features: [
      'Sistema de leitura tridimensional 3D com câmeras de alta definição',
      'Banco de dados atualizado com a geometria de fábrica de todas as montadoras',
      'Conferência do eixo de torção traseiro (característico de Peugeot/Citroën/Renault)',
      'Balanceamento eletrônico com compensação de peso de chumbo embutido',
      'Inspeção prévia de folgas em pivôs, terminais e buchas antes de alinhar'
    ],
    frenchSpecifics: 'Aferição cuidadosa de cáster, câmber e convergência respeitando a suspensão macia e responsiva francesa.',
    recommendedInterval: 'A cada 10.000 km ou sempre que trocar pneus/sofrer impacto em buracos',
    iconName: 'Compass'
  },
  {
    id: 'diagnostico-eletronico',
    title: 'Diagnóstico Eletrônico Computadorizado',
    category: 'diagnostico',
    categoryLabel: 'Injeção & Eletrônica',
    shortDesc: 'Scanners originais Diagbox, Lexia e Renault Clip, além de equipamentos avançados multimarcas.',
    description: 'Nada de "trocar peças por adivinhação". Usamos scanners originais de fábrica para ler os módulos BSI, BSM, UCH, ECU do motor, ABS, Airbag e transmissão, analisando parâmetros ao vivo e identificando a raiz real da falha.',
    features: [
      'Scanners dedicados Lexia / DiagBox (PSA Peugeot Citroën) e Renault CAN Clip',
      'Scanners avançados multimarcas Autel e Launch para veículos nacionais e importados',
      'Análise de parâmetros em tempo real (pressão de rail, pressão do turbo, avanço de ignição)',
      'Osciloscópio automotivo para teste de sensores e atuadores',
      'Reset de avisos de revisão, codificação de bicos injetores e telecarregamento'
    ],
    frenchSpecifics: 'Comunicação direta com a central BSI/UCH sem falsos códigos de falha gerados por scanners genéricos.',
    recommendedInterval: 'A qualquer sinal de luz de injeção acesa ou perda de desempenho',
    iconName: 'Cpu',
    badge: 'Scanners Oficiais'
  },
  {
    id: 'correia-distribuicao',
    title: 'Correia Dentada & Sincronismo do Motor',
    category: 'motor',
    categoryLabel: 'Motor & Distribuição',
    shortDesc: 'Substituição com ferramentas de fasagem dedicadas para motores THP, Puretech, EC5 e SCe.',
    description: 'A quebra da correia dentada ou folga na corrente de sincronismo pode destruir as válvulas e o cabeçote do motor. Fazemos a troca preventiva completa com kit tensor, guia e bomba d\'água usando ferramentas de sincronismo de fábrica.',
    features: [
      'Ferramentas de fasagem específicas para travamento dos comandos de válvulas e virabrequim',
      'Avaliação com medidor de largura de correia para motor 1.2 PureTech banhado a óleo',
      'Verificação e troca de corrente de comando, guias e esticadores do motor THP 1.6',
      'Troca simultânea recomendada da bomba d\'água para evitar retrabalho de mão de obra',
      'Kits originais Dayco, Gates, Continental com nota fiscal e garantia'
    ],
    frenchSpecifics: 'Motores THP e Puretech exigem torque angular e ferramentas milimétricas para não perder o ponto do motor.',
    recommendedInterval: 'Puretech: a cada 60.000 km / Demais motores: 50.000 a 70.000 km ou 4 anos',
    iconName: 'RotateCw'
  },
  {
    id: 'suspensao-freios',
    title: 'Suspensão, Freios & Estabilidade',
    category: 'chassi',
    categoryLabel: 'Suspensão & Freios',
    shortDesc: 'Revisão de amortecedores, buchas de bandeja, bieletas, discos, pastilhas e sangria de fluido.',
    description: 'Segurança não se negocia. Revisamos todo o conjunto de suspensão e freios para manter a estabilidade original do veículo, acabando com barulhos de estalo, rangidos e desgaste precoce dos pneus.',
    features: [
      'Troca de pastilhas e discos de freio com aferição de empenamento com relógio comparador',
      'Substituição de fluido de freio DOT 4 / 5.1 por máquina de sangria sob pressão',
      'Diagnóstico de amortecedores, coxins superiores com rolamento, batentes e coifas',
      'Troca de buchas de bandeja prensadas com gabarito técnico',
      'Inspeção do sistema de freio de estacionamento eletrônico (EPB) via scanner'
    ],
    frenchSpecifics: 'Solução definitiva para os tradicionais barulhos no coxim de amortecedor e bieletas comuns no relevo brasileiro.',
    recommendedInterval: 'Inspeção a cada 10.000 km / Fluido de freio a cada 2 anos',
    iconName: 'ShieldAlert'
  },
  {
    id: 'injecao-descarbonizacao',
    title: 'Injeção Direta & Descarbonização THP / TSI',
    category: 'motor',
    categoryLabel: 'Performance & Injeção',
    shortDesc: 'Descarbonização química e mecânica das válvulas de admissão e teste de bicos de alta pressão.',
    description: 'Motores com injeção direta (como o 1.6 THP de Peugeot e Citroën) acumulam carvão nas válvulas de admissão com o tempo, causando falha em marcha lenta, perda de potência e aumento no consumo. Fazemos a descarbonização completa.',
    features: [
      'Descarbonização das válvulas de admissão sem necessidade de desmontar o cabeçote',
      'Teste e equalização de bicos injetores de alta pressão em bancada apropriada',
      'Troca e calibração de bomba de alta pressão (HPFP)',
      'Substituição de velas de ignição de irídio de especificação correta',
      'Desobstrução do sistema blow-by e verificação da válvula PCV da tampa de válvulas'
    ],
    frenchSpecifics: 'Restaura a potência original e o torque linear dos esportivos e SUVs da linha THP.',
    recommendedInterval: 'Recomendada entre 40.000 e 60.000 km para motores com injeção direta',
    iconName: 'Flame'
  },
  {
    id: 'ar-condicionado',
    title: 'Ar-Condicionado & Higienização por Ozônio',
    category: 'revisao',
    categoryLabel: 'Climatização',
    shortDesc: 'Recarga ecológica com recolhedora automática, teste de vazamento com contraste e oxi-sanitização.',
    description: 'Em Goiânia, ar-condicionado é item de necessidade diária. Mantemos o sistema gelando com eficiência máxima, sem odores, fungos ou bactérias, garantindo a saúde da sua família.',
    features: [
      'Recarga de gás R134a dosada por balança digital de precisão na quantidade de fábrica',
      'Adição de óleo sintético específico para o compressor e contraste UV para vazamentos',
      'Troca do filtro de cabine (filtro antipólen com carvão ativado)',
      'Higienização com máquina geradora de ozônio (elimina 99,9% de ácaros e bactérias)',
      'Teste de temperatura nos difusores para garantir refrigeração ideal'
    ],
    frenchSpecifics: 'Regulagem da caixa de ar climatizada e servo-motores de direcionamento de fluxo de ar.',
    recommendedInterval: 'Higienização a cada 6 meses / revisão do gás a cada 1 a 2 anos',
    iconName: 'Wind'
  }
];
