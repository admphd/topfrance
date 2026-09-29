import { SymptomItem } from '../types';

export const SYMPTOMS_DATA: SymptomItem[] = [
  {
    id: 'symptom-cambio-tranco',
    symptom: 'Trancos ou atraso na troca de marcha',
    commonCars: 'Peugeot 208/2008/308, Citroën C3/C4, Renault Duster/Captur/Sandero e outros automáticos',
    probableCause: 'Degradação térmica do fluido da transmissão, saturação do filtro interno ou perda de calibração das válvulas solenoides.',
    urgency: 'alta',
    urgencyLabel: 'Urgência Alta (Pode danificar o câmbio)',
    solution: 'Troca de 100% do óleo por diálise computadorizada com fluido homologado e ajuste do nível por temperatura no scanner.',
    iconName: 'Gauge'
  },
  {
    id: 'symptom-temperatura-alta',
    symptom: 'Temperatura subindo ou aviso de "STOP" / Arrefecimento',
    commonCars: 'Peugeot 208/3008, Citroën C4/Aircross, Renault Sandero/Logan/Clio e multimarcas',
    probableCause: 'Bolhas de ar no circuito (falta de sangria técnica), vazamento na carcaça plástica da termostática ou bomba d\'água inoperante.',
    urgency: 'imediata',
    urgencyLabel: 'Urgência Imediata (Risco de queimar junta do cabeçote)',
    solution: 'Teste de pressão hidrostática no sistema, substituição de componente avariado, aditivo orgânico e sangria técnica nos 3 pontos de alívio.',
    iconName: 'ThermometerSnowflake'
  },
  {
    id: 'symptom-barulho-suspensao',
    symptom: 'Barulho metálico ("toc-toc") ao passar em lombadas ou asfalto irregular',
    commonCars: 'Peugeot 208/2008, Citroën C3/C4 Cactus, Renault Sandero/Duster, VW, Fiat, GM',
    probableCause: 'Folga nas bieletas da barra estabilizadora, estalo no rolamento do coxim superior de amortecedor ou buchas de bandeja desgastadas.',
    urgency: 'moderada',
    urgencyLabel: 'Urgência Moderada',
    solution: 'Inspeção no elevador com palanca de teste, substituição por peças de primeira linha e conferência no alinhamento 3D.',
    iconName: 'Activity'
  },
  {
    id: 'symptom-luz-injecao',
    symptom: 'Luz da injeção acesa no painel / perda momentânea de aceleração',
    commonCars: 'Peugeot/Citroën THP 1.6, Renault SCe 1.0/1.6, Puretech 1.2 e todos os multimarcas',
    probableCause: 'Carbonização nas válvulas de admissão, falha de combustão (vela/bobina), sonda lambda descalibrada ou sensor de pressão de rail.',
    urgency: 'alta',
    urgencyLabel: 'Urgência Alta',
    solution: 'Diagnóstico com scanner oficial (Diagbox/Clip), leitura de parâmetros de combustão e descarbonização/troca de velas de irídio.',
    iconName: 'Cpu'
  },
  {
    id: 'symptom-pedal-freio',
    symptom: 'Vibração no volante ao frear ou pedal com curso longo',
    commonCars: 'Todas as marcas e modelos',
    probableCause: 'Empenamento nos discos de freio por choque térmico ou fluido de freio contaminado por umidade (ebulição interna).',
    urgency: 'alta',
    urgencyLabel: 'Urgência Alta (Segurança)',
    solution: 'Aferição de empenamento com relógio comparador micrométrico, substituição de pastilhas/discos e sangria de fluido DOT 4 sob pressão.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'symptom-ar-condicionado-fraco',
    symptom: 'Ar-condicionado parou de gelar ou com cheiro desagradável',
    commonCars: 'Todas as marcas e modelos em Goiânia',
    probableCause: 'Microvazamento de gás refrigerante, perda de eficiência do compressor ou filtro de cabine saturado com ácaros e fungos.',
    urgency: 'baixa',
    urgencyLabel: 'Urgência Baixa (Conforto)',
    solution: 'Teste com contraste UV, recarga digital com gás e óleo sintético novo, troca do filtro antipólen e oxi-sanitização com ozônio.',
    iconName: 'Wind'
  }
];
