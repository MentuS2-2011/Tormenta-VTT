// santo.js — Entrada da classe Santo (Heróis de Arton)
// O Santo é uma variante do Paladino: usa a mesma tabela de Poderes de Paladino
// (por isso importamos `paladino.poderes` em vez de duplicar a lista inteira).
// Mesmo formato usado em classesData.js. Para adicionar, importe este objeto
// e inclua-o no array `classesData`.

import { paladino } from './paladino'

export const santo = {
  nome: "Santo",
  livro: "Heróis de Arton",
  descricao: "Paladinos são campeões do bem, mas ainda são pessoas. Têm ambições, desejos e fraquezas. Às vezes escorregam. Têm vontade própria e opiniões individuais.\n\nExceto o paladino santo.\n\nO santo é o mais altruísta dos paladinos. É menos uma pessoa e mais um veículo para a vontade de seu deus, abrindo mão de boa parte de seu livre arbítrio. Não hesita em sacrificar a própria vida para cumprir uma única ordem divina, mesmo que não a compreenda. O santo não quer nada, não realmente, e acha um pouco confusa a necessidade que as outras pessoas têm de bens materiais e satisfação mundana. Para o santo, Arton é apenas um estágio, o local onde ele cumpre seu dever, antes de partir para a próxima missão, nos reinos dos deuses.\n\nÀs vezes, o santo parece estar seguindo um roteiro, agindo como se sempre soubesse o que fazer. Não hesita, é seguro de si mesmo e tem fé cega na divindade. Isso pode ser irritante. Contudo, se souber que está irritando os outros, o santo faz de tudo para deixar de ser um incômodo.\n\nSim, o santo parece perfeito. E sim, isso pode ser odioso. Mas ele é a melhor arma de seu deus.",
  imagem: "",
  pv: "Como o paladino básico: 20 + Constituição no 1º nível; +5 + Constituição por nível.",
  pm: "4 PM por nível.",
  pericias: "Religião (Sab) e Vontade (Sab), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intuição (Sab), Luta (For), Ofício (Int) e Percepção (Sab).",
  proficiencias: "Como o paladino básico: armas marciais, armaduras pesadas e escudos.",
  tabela: [
    { nivel: "1º", habilidades: "Abençoado, código do herói, ladainha de combate (+1)" },
    { nivel: "2º", habilidades: "Poder de paladino, santo curandeiro" },
    { nivel: "3º", habilidades: "Poder de paladino, vaso sagrado" },
    { nivel: "4º", habilidades: "Poder de paladino" },
    { nivel: "5º", habilidades: "Ladainha de combate (+2, sacra), poder de paladino" },
    { nivel: "6º", habilidades: "Mártir, poder de paladino" },
    { nivel: "7º", habilidades: "Poder de paladino" },
    { nivel: "8º", habilidades: "Pira santa, poder de paladino" },
    { nivel: "9º", habilidades: "Ladainha de combate (+3, veloz), poder de paladino" },
    { nivel: "10º", habilidades: "Poder de paladino" },
    { nivel: "11º", habilidades: "Poder de paladino" },
    { nivel: "12º", habilidades: "Poder de paladino" },
    { nivel: "13º", habilidades: "Ladainha de combate (+4), poder de paladino" },
    { nivel: "14º", habilidades: "Poder de paladino" },
    { nivel: "15º", habilidades: "Poder de paladino" },
    { nivel: "16º", habilidades: "Poder de paladino" },
    { nivel: "17º", habilidades: "Ladainha de combate (+5), poder de paladino" },
    { nivel: "18º", habilidades: "Poder de paladino" },
    { nivel: "19º", habilidades: "Poder de paladino" },
    { nivel: "20º", habilidades: "Poder de paladino, vingador santificado" }
  ],
  habilidades: [
    { nome: "Abençoado", descricao: "Como o paladino básico, mas você não pode escolher ser um santo do bem." },
    { nome: "Código do Herói", descricao: "Como o paladino básico." },
    { nome: "Ladainha de Combate", descricao: "Você pode gastar uma ação padrão e 2 PM para gerar uma aura de 9m de raio com duração sustentada. Você e os aliados dentro da aura recebem +1 em testes de ataque, rolagens de dano e na Defesa. A cada quatro níveis, você pode gastar +2 PM para aumentar esses bônus em +1. Sua ladainha conta como Aura Sagrada para pré-requisitos e efeitos de poderes de paladino.\n\nNo 5º nível, você e os aliados dentro da aura causam +1d8 pontos de dano de luz com ataques contra devotos de deuses que canalizam apenas energia negativa e criaturas malignas (a critério do mestre).\n\nNo 9º nível, suas armas e as dos aliados dentro da aura recebem o encanto veloz." },
    { nome: "Poder de Paladino", descricao: "A partir do 2º nível, você recebe esta habilidade como o paladino básico, escolhendo entre os Poderes de Paladino." },
    { nome: "Santo Curandeiro", descricao: "A partir do 2º nível, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que você gastar, o aliado em alcance médio com a maior redução em seus PV (por dano ou perda de vida) recupera 2d8 pontos de vida por luz. A partir do 6º nível, quando usa Santo Curandeiro, você também pode remover uma condição do alvo entre abalado, apavorado, atordoado, cego, doente, exausto, fatigado ou surdo." },
    { nome: "Vaso do Espírito", descricao: "A partir do 3º nível, quando faz um teste de resistência, você pode gastar 1 PM para somar seu Carisma nesse teste." },
    { nome: "Mártir", descricao: "A partir do 6º nível, quando um aliado em alcance médio faz um teste de resistência, você pode gastar 1 PM para conceder a ele um bônus nesse teste igual ao seu próprio Carisma. A partir do 12º nível, uma vez por cena, se ele ainda assim falhar, você pode sofrer o efeito no lugar dele (mas você é afetado mesmo que seja imune ao efeito)." },
    { nome: "Pira Santa", descricao: "No 8º nível, enquanto estiver sob efeito de Ladainha de Combate, você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitada pelo seu Carisma). Para cada PM que gastar, o inimigo de maior ND em alcance médio sofre 2d8 pontos de dano de luz e fica ofuscado por 1 rodada (Fort CD Car reduz à metade)." },
    { nome: "Vingador Santificado", descricao: "No 20º nível, quando usa Ladainha de Combate, você pode gastar +5 PM. Se fizer isso, os bônus numéricos fornecidos por sua Ladainha dobram e você e os aliados dentro da aura recebem imunidade a acertos críticos e RD igual a 5 + seu Carisma." }
  ],
  // O santo escolhe seus poderes na mesma lista de Poderes de Paladino (Livro Básico).
  poderes: paladino.poderes
}