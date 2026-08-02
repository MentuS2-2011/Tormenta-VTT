// personagemRules.js — regras simplificadas para a criação de personagens
// Baseado nas mesmas fontes de dados do status.html/ficha.js, mas com escopo
// reduzido para caber num criador React enxuto: raças "especiais" (golem,
// moreau, nagah, aberrante, humano etc.) usam a regra genérica "escolha 2
// atributos para +1", em vez do sub-sistema completo de cada uma.

// ── ATRIBUTOS ──
export const ATTR_KEYS = ["FOR", "DES", "CON", "INT", "SAB", "CAR"]

export const ATTR_LABELS = {
  FOR: "Força", DES: "Destreza", CON: "Constituição",
  INT: "Inteligência", SAB: "Sabedoria", CAR: "Carisma"
}

// Custo cumulativo em pontos para cada valor de atributo (método de compra)
export const ATTR_COST = { "-2": -2, "-1": -1, "0": 0, "1": 1, "2": 3, "3": 6, "4": 10 }
export const ATTR_MIN = -2
export const ATTR_MAX = 4
export const ATTR_BUDGET = 10

// ── RAÇAS ──
// `mods` = modificadores fixos. `variable: true` = raça "à escolha": o
// jogador escolhe 2 atributos distintos para receber +1 cada (simplificação
// da regra oficial de Humano, aplicada às demais raças de atributos livres).
export const RACES = {
  "Anão": { mods: { FOR: 0, DES: -1, CON: 2, INT: 0, SAB: 1, CAR: 0 } },
  "Aggelus": { mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 2, CAR: 1 } },
  "Bugbear": { mods: { FOR: 2, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: -1 } },
  "Centauro": { mods: { FOR: 1, DES: 0, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Ceratops": { mods: { FOR: 1, DES: -1, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Dahllan": { mods: { FOR: 0, DES: 1, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Eiradaan": { mods: { FOR: -1, DES: 0, CON: 0, INT: 0, SAB: 2, CAR: 1 } },
  "Elfo": { mods: { FOR: 0, DES: 1, CON: -1, INT: 2, SAB: 0, CAR: 0 } },
  "Elfo-do-Mar": { mods: { FOR: 0, DES: 2, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Elfo-Negro": { mods: { FOR: 0, DES: 2, CON: -1, INT: 0, SAB: 0, CAR: 1 } },
  "Finntroll": { mods: { FOR: -1, DES: 0, CON: 1, INT: 2, SAB: 0, CAR: 0 } },
  "Galokk": { mods: { FOR: 1, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: -1 } },
  "Gnoll": { mods: { FOR: 0, DES: 0, CON: 2, INT: -1, SAB: 1, CAR: 0 } },
  "Goblin": { mods: { FOR: 0, DES: 2, CON: 0, INT: 1, SAB: 0, CAR: -1 } },
  "Harpia": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 0, CAR: 1 } },
  "Hobgoblin": { mods: { FOR: 0, DES: 1, CON: 2, INT: 0, SAB: 0, CAR: -1 } },
  "Hynne": { mods: { FOR: -1, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 1 } },
  "Kaijin": { mods: { FOR: 2, DES: 0, CON: 1, INT: 0, SAB: 0, CAR: -2 } },
  "Kappa": { mods: { FOR: 0, DES: 2, CON: 1, INT: 0, SAB: 0, CAR: -1 } },
  "Kliren": { mods: { FOR: -1, DES: 0, CON: 0, INT: 2, SAB: 0, CAR: 1 } },
  "Kobold": { mods: { FOR: -1, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  "Medusa": { mods: { FOR: 0, DES: 2, CON: 0, INT: 0, SAB: 0, CAR: 2 } },
  "Minotauro": { mods: { FOR: 2, DES: 0, CON: 1, INT: 0, SAB: -1, CAR: 0 } },
  "Nezumi": { mods: { FOR: 0, DES: 1, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Ogro": { mods: { FOR: 3, DES: 0, CON: 2, INT: -1, SAB: 0, CAR: -1 } },
  "Orc": { mods: { FOR: 2, DES: 0, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Qareen": { mods: { FOR: 0, DES: 0, CON: 0, INT: 1, SAB: -1, CAR: 2 } },
  "Sátiro": { mods: { FOR: 0, DES: 1, CON: 0, INT: 0, SAB: -1, CAR: 2 } },
  "Sílfide": { mods: { FOR: -2, DES: 1, CON: 0, INT: 0, SAB: 0, CAR: 2 } },
  "Tengu": { mods: { FOR: 0, DES: 2, CON: 0, INT: 1, SAB: 0, CAR: 0 } },
  "Thri-Kreen": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 1, CAR: -1 } },
  "Trabachi": { mods: { FOR: 1, DES: 0, CON: 2, INT: 0, SAB: 0, CAR: -1 } },
  "Trog": { mods: { FOR: 1, DES: 0, CON: 2, INT: -1, SAB: 0, CAR: 0 } },
  "Vardak": { mods: { FOR: 0, DES: 2, CON: 0, INT: -1, SAB: 0, CAR: 1 } },
  "Velocis": { mods: { FOR: 0, DES: 1, CON: 0, INT: -1, SAB: 2, CAR: 0 } },
  "Voracis": { mods: { FOR: 0, DES: 2, CON: 1, INT: -1, SAB: 0, CAR: 0 } },
  "Byxies'Mori": { mods: { FOR: 0, DES: 0, CON: -1, INT: 0, SAB: 2, CAR: 1 } },
  "Keisarinna": { mods: { FOR: -2, DES: 3, CON: 2, INT: 0, SAB: 0, CAR: 0 } },
  // Raças de atributos livres / sub-sistema especial — simplificadas
  "Humano": { variable: true },
  "Duende": { variable: true },
  "Aberrante": { variable: true },
  "Golem": { variable: true },
  "Moreau": { variable: true },
  "Nagah": { variable: true },
  "Kallyanach": { variable: true },
  "Lefou": { variable: true },
  "Mashin": { variable: true },
  "Minauro": { variable: true },
  "Meio-Elfo": { variable: true },
  "Meio-Orc": { variable: true },
  "Nimbus": { variable: true },
  "Osteon": { variable: true },
  "Sereia / Tritão": { variable: true },
  "Yidishan": { variable: true },
  "Vampiro": { variable: true }
}

// Bônus racial fixo de perícia (soma direta, sem gastar treino)
export const RACE_SKILL_BONUS = {
  "Anão": { percepcao: 2, sobrevivencia: 2 },
  "Dahllan": { adestramento: 2 },
  "Duende": { adestramento: 2, sobrevivencia: 2 },
  "Elfo": { misticismo: 2, percepcao: 2 },
  "Elfo-do-Mar": { furtividade: 2, sobrevivencia: 2 },
  "Finntroll": { misticismo: 2 },
  "Harpia": { intimidacao: 2, sobrevivencia: 2 },
  "Hobgoblin": { furtividade: 2 },
  "Hynne": { enganacao: 2 },
  "Kobold": { sobrevivencia: 2 },
  "Meio-Orc": { intimidacao: 2 },
  "Minauro": { diplomacia: 2, investigacao: 2 },
  "Nagah": { enganacao: 2 },
  "Nezumi": { intimidacao: 2 },
  "Orc": { percepcao: 2, sobrevivencia: 2 },
  "Sátiro": { atuacao: 2, fortitude: 2 },
  "Tengu": { percepcao: 2 }
}

// ── SEXO ──
export const SEXO_OPTIONS = ["Feminino", "Masculino", "Outro"]

// ── IDADE ──
// `ageMode`: 'nenhuma' (padrão, nada é aplicado) | 'basico' | 'herois'
export const AGE_MODES = [
  { key: "nenhuma", label: "Não usar regra de idade" },
  { key: "basico", label: "Sim (Livro Básico)" },
  { key: "herois", label: "Sim (Heróis de Arton)" }
]

// Regra simplificada de 3 faixas (Livro Básico)
export const AGE_BASICO = {
  none: { label: "Adulto", mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 } },
  young: { label: "Jovem", mods: { FOR: 1, DES: 1, CON: 1, INT: -1, SAB: -1, CAR: -1 } },
  old: { label: "Idoso", mods: { FOR: -1, DES: -1, CON: -1, INT: 1, SAB: 1, CAR: 1 } }
}

// Regra completa de 7 faixas (Heróis de Arton, Tabela 4-2: Faixas Etárias)
export const AGE_HEROIS = {
  crianca: {
    label: "Criança (9-12 anos)",
    mods: { FOR: -2, DES: 0, CON: -1, INT: 0, SAB: -1, CAR: 0 },
    tamanhoMenor: true,
    semOrigem: true,
    defesaBonus: 2,
    resistenciaBonus: 5,
    nota: "Tamanho menor, sem benefícios de origem, +2 na Defesa e +5 em testes de resistência (Protegido dos Deuses)."
  },
  adolescente: {
    label: "Adolescente (13-17 anos)",
    mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: -1, CAR: 0 },
    pmBonus: 3,
    origemReduzida: true,
    nota: "+3 PM (Ímpeto Juvenil). Recebe apenas um benefício de origem, em vez de dois."
  },
  jovem: {
    label: "Jovem (18-24 anos)",
    mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 },
    nota: "Idade padrão — nenhum modificador."
  },
  adulto: {
    label: "Adulto (25-39 anos)",
    mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 },
    poderGeralOpcional: true,
    complicacoesQtd: 0,
    nota: "Pode receber um poder geral opcional (em troca de uma complicação de idade)."
  },
  maduro: {
    label: "Maduro (40-59 anos)",
    mods: { FOR: 0, DES: 0, CON: 0, INT: 0, SAB: 0, CAR: 0 },
    niveisExtras: 1,
    complicacoesQtd: 2,
    nota: "Começa com 1 nível adicional. Recebe 2 complicações de idade (Veterano Calejado)."
  },
  velho: {
    label: "Velho (60-79 anos)",
    mods: { FOR: -1, DES: -1, CON: -1, INT: 0, SAB: 0, CAR: 0 },
    niveisExtras: 2,
    complicacoesQtd: 3,
    bloqueiaAumentoFisico: true,
    nota: "Começa com 2 níveis adicionais. Recebe 3 complicações de idade e não pode escolher Aumento de Atributo para atributos físicos (Ai Minhas Costas)."
  },
  anciao: {
    label: "Ancião (80+ anos)",
    mods: { FOR: -2, DES: -2, CON: -2, INT: 0, SAB: 0, CAR: 0 },
    niveisExtras: 3,
    complicacoesQtd: 4,
    bloqueiaAumentoFisico: true,
    nota: "Começa com 3 níveis adicionais. Recebe 4 complicações de idade e não pode escolher Aumento de Atributo para atributos físicos (O Inverno da Vida)."
  }
}

// Complicações de idade (Heróis de Arton) — o jogador escolhe a quantidade
// exigida pela sua faixa etária. Os efeitos numéricos de cada uma são
// aplicados manualmente durante o jogo (não são calculados automaticamente
// aqui, dada a grande variedade de mecânicas envolvidas).
export const COMPLICACOES_IDADE = [
  { key: "abatido", nome: "Abatido", descricao: "Seu vigor se foi. Você recebe –2 PV por nível." },
  { key: "catarata", nome: "Catarata", descricao: "Seus olhos já não são os mesmos. Você sofre –5 em Percepção e Pontaria." },
  { key: "dedos-tremulos", nome: "Dedos Trêmulos", descricao: "Você sofre –2 em Luta e Pontaria. Além disso, quando usa um item que esteja empunhando, role 1d4. Em um resultado 1, você derruba esse item." },
  { key: "definhamento", nome: "Definhamento", descricao: "A idade roubou seu peso, deixando-o um fiapo do que era antes. Você sofre –5 em Fortitude e em testes de manobras de combate." },
  { key: "desatento", nome: "Desatento", descricao: "Você já não é mais tão atento quanto outrora. Na primeira rodada de qualquer cena de ação, role um dado. Em um resultado ímpar, você fica surpreendido (mesmo que um efeito possa evitar isso)." },
  { key: "devagar-jovem", nome: "\"Devagar, Jovem!\"", descricao: "Você já não anda no mesmo ritmo que antes. Seu deslocamento diminui em –3m e você não pode correr ou fazer investidas." },
  { key: "gota", nome: "Gota", descricao: "Sempre que faz um teste de Destreza ou de perícias baseadas nesse atributo você perde 1d6 pontos de vida. Você só pode recuperar esses PV com descanso." },
  { key: "juntas-duras", nome: "Juntas Duras", descricao: "Suas articulações doem. Você sofre –5 em testes de Acrobacia e Reflexos." },
  { key: "melancolico", nome: "Melancólico", descricao: "Você já não tem mais tanta motivação para realizar grandes façanhas. Você perde 1 PM por nível." },
  { key: "memorias-tristes", nome: "Memórias Tristes", descricao: "Você passou por um trauma, como a perda de um ente querido ou a culpa por um erro que cometeu e pelo qual nunca se perdoou. Sempre que rola um resultado 1 natural em qualquer teste, você fica pasmo por 1 rodada e frustrado até o fim do dia (cumulativo)." },
  { key: "no-meu-tempo", nome: "\"No Meu Tempo...\"", descricao: "Você se prende a visões idealizadas de um passado que nunca existiu e se torna presa fácil para manipulação. Você sofre –5 em Intuição e Vontade." },
  { key: "pulmao-ruim", nome: "Pulmão Ruim", descricao: "Quando corre ou prende a respiração, você precisa fazer testes de Fortitude para não ficar fatigado a partir da primeira rodada (normalmente, personagens só precisam fazer esses testes após um número de rodadas igual a sua Constituição +1). Além disso, sempre que faz uma investida, você fica fatigado até o fim da cena." },
  { key: "rabugento", nome: "Rabugento", descricao: "Você reclama de tudo. Você sofre –5 em testes de Carisma e de perícias baseadas nesse atributo, exceto Intimidação." },
  { key: "recurvado", nome: "Recurvado", descricao: "A idade dobrou suas costas. Você conta como uma categoria de tamanho menor para alcance natural, modificador de manobras e armas que pode empunhar (mas não para espaço ocupado, modificador de Furtividade ou dano de armas naturais)." },
  { key: "sono-ruim", nome: "Sono Ruim", descricao: "Você acorda várias vezes no meio da noite, o que atrapalha seu descanso. Sua recuperação de PM e PV é sempre uma categoria pior. Se a condição de descanso já é ruim, você recupera apenas 1 PM e 1 PV, independentemente do seu nível. Se já recupera apenas 1 PM e 1 PV, não recupera nada!" },
  { key: "teimoso", nome: "Teimoso", descricao: "Sempre que falha em um teste de atributo ou de perícia que possa tentar novamente, você é obrigado a tentar pelo menos mais uma vez (mesmo que isso possa prejudicá-lo)." },
  { key: "tosse", nome: "Tosse", descricao: "Em cenas de ação, role 1d6 no início de cada rodada. Num resultado 1, você tem uma crise de tosse e fica atordoado por 1 rodada. Em cenas de interpretação, role 1d6 sempre que fizer um teste de perícia baseada em Carisma. Num resultado 1, você tem uma crise de tosse e sofre uma penalidade de –5 nesse teste." },
  { key: "turrao", nome: "Turrão", descricao: "Você faz tudo sempre do seu jeito e tem dificuldade de lidar com coisas nas quais não é perito. Você não recebe o bônus de metade do nível em perícias nas quais não é treinado." },
  { key: "velha-ferida", nome: "Velha Ferida", descricao: "Você tem um machucado antigo, que nunca cicatrizou direito. Sempre que você sofre um acerto crítico, o multiplicador de dano aumenta em +1 e você fica fraco (mesmo que seja imune, cumulativo)." }
]

// ── TAMANHO ──
export const SIZE_ORDER = ["minusculo", "pequeno", "medio", "grande", "enorme"]
export const SIZES = {
  minusculo: { label: "Minúsculo", atk: 2, def: 2 },
  pequeno: { label: "Pequeno", atk: 1, def: 1 },
  medio: { label: "Médio", atk: 0, def: 0 },
  grande: { label: "Grande", atk: -1, def: -1 },
  enorme: { label: "Enorme", atk: -2, def: -2 }
}

// ── PERÍCIAS ──
export const SKILLS = [
  { key: "acrobacia", name: "Acrobacia", attr: "DES" },
  { key: "adestramento", name: "Adestramento", attr: "CAR" },
  { key: "atletismo", name: "Atletismo", attr: "FOR" },
  { key: "atuacao", name: "Atuação", attr: "CAR" },
  { key: "cavalgar", name: "Cavalgar", attr: "DES" },
  { key: "conhecimento", name: "Conhecimento", attr: "INT", noUntrained: true },
  { key: "cura", name: "Cura", attr: "SAB" },
  { key: "diplomacia", name: "Diplomacia", attr: "CAR" },
  { key: "enganacao", name: "Enganação", attr: "CAR" },
  { key: "fortitude", name: "Fortitude", attr: "CON" },
  { key: "furtividade", name: "Furtividade", attr: "DES" },
  { key: "guerra", name: "Guerra", attr: "INT", noUntrained: true },
  { key: "iniciativa", name: "Iniciativa", attr: "DES" },
  { key: "intimidacao", name: "Intimidação", attr: "CAR" },
  { key: "intuicao", name: "Intuição", attr: "SAB" },
  { key: "investigacao", name: "Investigação", attr: "INT" },
  { key: "jogatina", name: "Jogatina", attr: "CAR", noUntrained: true },
  { key: "ladinagem", name: "Ladinagem", attr: "DES", noUntrained: true },
  { key: "luta", name: "Luta", attr: "FOR" },
  { key: "misticismo", name: "Misticismo", attr: "INT", noUntrained: true },
  { key: "nobreza", name: "Nobreza", attr: "INT", noUntrained: true },
  { key: "oficio", name: "Ofício", attr: "INT", noUntrained: true },
  { key: "percepcao", name: "Percepção", attr: "SAB" },
  { key: "pilotagem", name: "Pilotagem", attr: "DES", noUntrained: true },
  { key: "pontaria", name: "Pontaria", attr: "DES" },
  { key: "reflexos", name: "Reflexos", attr: "DES" },
  { key: "religiao", name: "Religião", attr: "SAB", noUntrained: true },
  { key: "sobrevivencia", name: "Sobrevivência", attr: "SAB" },
  { key: "vontade", name: "Vontade", attr: "SAB" }
]

// ── CLASSES ──
// hp1 = PV no 1º nível (fixo, sem CON), hpN = PV ganho por nível (sem CON)
// pmN = PM por nível, pmAttr = atributo somado ao total de PM (se houver)
export const CLASSES = {
  "Guerreiro": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["fortitude"] },
  "Bárbaro": { hp1: 24, hpN: 6, pmN: 3, pmAttr: null, startingSkills: ["fortitude", "luta"] },
  "Nobre": { hp1: 16, hpN: 4, pmN: 4, pmAttr: null, startingSkills: ["vontade"] },
  "Burguês": { hp1: 16, hpN: 4, pmN: 4, pmAttr: null, startingSkills: ["diplomacia", "vontade"] },
  "Arcanista": { hp1: 8, hpN: 2, pmN: 6, pmAttr: "INT", startingSkills: ["misticismo", "vontade"], subclasses: ["Mago", "Feiticeiro", "Bruxo"] },
  "Inventor": { hp1: 12, hpN: 3, pmN: 4, pmAttr: null, startingSkills: ["oficio", "vontade"] },
  "Alquimista": { hp1: 12, hpN: 3, pmN: 4, pmAttr: null, startingSkills: ["oficio", "vontade"] },
  "Treinador": { hp1: 16, hpN: 4, pmN: 4, pmAttr: null, startingSkills: ["adestramento", "vontade"] },
  "Inovador": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["luta", "pontaria"] },
  "Ladino": { hp1: 12, hpN: 3, pmN: 4, pmAttr: null, startingSkills: ["ladinagem", "reflexos"] },
  "Paladino": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["luta", "vontade"] },
  "Santo": { hp1: 20, hpN: 5, pmN: 4, pmAttr: null, startingSkills: ["religiao", "vontade"] },
  "Samurai": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["luta", "vontade"] },
  "Cavaleiro": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["fortitude", "luta"] },
  "Vassalo": { hp1: 20, hpN: 5, pmN: 3, pmAttr: null, startingSkills: ["fortitude", "luta"] }
}

export const CLASS_NAMES = Object.keys(CLASSES)