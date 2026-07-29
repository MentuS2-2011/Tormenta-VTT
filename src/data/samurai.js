// samurai.js — Entrada da classe Samurai (DB 199)
// Mesmo formato usado em classesData.js. Para adicionar, importe este objeto
// e inclua-o no array `classesData` (ex.: import { samurai } from './samurai'
// e depois `export const classesData = [...outrasClasses, samurai]`).

export const samurai = {
  nome: "Samurai",
  livro: "DB 199",
  descricao: "Antes do Império, antes da grande unificação, havia os poderosos senhores da guerra — os xogum. Tamu-ra vivia em conflito, cada província tentando conquistar as demais, cada regente buscando a supremacia. Nos tempos em que os militares governavam, quando a própria aristocracia era formada por combatentes, surgiu o lendário guerreiro poeta. Surgiu o samurai.\n\nNascidos na nobreza, treinados pelos melhores mestres, equipados com as mais finas armas e armaduras, até hoje os samurais são a elite guerreira de Tamu-ra. Exceto pelo próprio Imperador e seu círculo de conselheiros shugenja, não há homens e mulheres mais prestigiados. Ainda assim, apesar de sua elevada posição social, o samurai vive para servir — seu próprio nome significa \"aquele que serve\". Sua espada e perícia pertencem a Lin-Wu, pertencem ao Império. Ele protege os plebeus que o reverenciam. E sem essa devoção, sem um senhor ou causa a quem servir, o samurai está perdido.\n\nCom a destruição da ilha, milhares de samurais perderam seus senhores, falharam em protegê-los. Para preservar a honra, muitos cometeram suicídio ritual. Outros, desonrados, vagaram sem rumo como ronin — samurais sem mestres. Hoje, o sol volta a nascer em Tamu-ra. A terra natal dos samurais pode ser recuperada. Assim como sua honra.\n\nO \"exílio\" imposto aos samurai pela Tormenta em Tamu-ra fez com que membros desta classe se espalhassem pelo mundo. Isso permitiu que diversos outros povos entrassem em contato com as técnicas e tradições desses guerreiros, fazendo surgir samurais entre membros de outras raças e culturas. Estes samurais não tamurianos trouxeram para este caminho também elementos de suas próprias vivências e costumes marciais. Alguns até romperam com a tradição da katana como arma símbolo, empunhando suas próprias armas típicas de forma igualmente honrada e tradicional.",
  imagem: "https://i.pinimg.com/originals/8e/5a/39/8e5a39c2e63493be21873c7005ff79cd.jpg",
  famosos: "",
  pv: "20 + Constituição no 1º nível; +5 + Constituição por nível.",
  pm: "3 PM por nível.",
  pericias: "Luta (For) e Vontade (Sab), mais 2 a sua escolha entre Acrobacia (Des), Adestramento (Car), Atletismo (For), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pontaria (Des).",
  proficiencias: "Armas marciais e armaduras pesadas.",
  tabela: [
    { nivel: "1º", habilidades: "Arma ancestral (1 Melhoria), código do samurai, grito de kiai (+1d4)" },
    { nivel: "2º", habilidades: "Poder de samurai" },
    { nivel: "3º", habilidades: "Olhar assustador +1, poder de samurai" },
    { nivel: "4º", habilidades: "Arma ancestral (2 Melhorias), poder de samurai" },
    { nivel: "5º", habilidades: "Grito de kiai (+1d6), poder de samurai" },
    { nivel: "6º", habilidades: "Arma ancestral (3 Melhorias), poder de samurai" },
    { nivel: "7º", habilidades: "Poder de samurai" },
    { nivel: "8º", habilidades: "Arma ancestral (4 Melhorias), poder de samurai" },
    { nivel: "9º", habilidades: "Grito de kiai (+1d8), olhar assustador +2, poder de samurai" },
    { nivel: "10º", habilidades: "Arma espiritual (1 Encanto), poder de samurai" },
    { nivel: "11º", habilidades: "Poder de samurai" },
    { nivel: "12º", habilidades: "Arma espiritual (2 Encantos), poder de samurai" },
    { nivel: "13º", habilidades: "Grito de kiai (+1d10), poder de samurai" },
    { nivel: "14º", habilidades: "Arma espiritual (3 Encantos), poder de samurai" },
    { nivel: "15º", habilidades: "Olhar assustador +3, poder de samurai" },
    { nivel: "16º", habilidades: "Poder de samurai" },
    { nivel: "17º", habilidades: "Grito de kiai (+1d12), poder de samurai" },
    { nivel: "18º", habilidades: "Poder de samurai" },
    { nivel: "19º", habilidades: "Poder de samurai" },
    { nivel: "20º", habilidades: "Poder de samurai, shogun" }
  ],
  habilidades: [
    { nome: "Arma Ancestral", descricao: "Você recebe proficiência em katana e começa o jogo com uma arma ancestral, uma katana superior com uma melhoria com preço total de até T$ 500. Nos níveis 4, 6 e 8, sua arma ancestral recebe uma nova melhoria à sua escolha. Nas mãos de qualquer outra pessoa, sua arma ancestral funciona como uma arma normal (sem benefícios por melhorias ou encantamentos). Se perder sua arma ancestral, você perde todos os seus PM e só pode recuperá-los no dia seguinte. Você pode reforjar uma arma ancestral perdida ou destruída com uma semana de trabalho e o gasto de tibares em valor igual ao preço básico da arma." },
    { nome: "Código do Samurai", descricao: "Você deve sempre manter sua palavra e nunca pode recusar um pedido de ajuda de alguém inocente. Além disso, nunca pode mentir, trapacear ou roubar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia." },
    { nome: "Grito de Kiai", descricao: "Quando faz um ataque corpo a corpo, você pode gastar 2 PM para rolar dois dados e usar o melhor resultado. Se acertar esse ataque, você recebe +1d4 na rolagem de dano. Esse dano extra é multiplicado em caso de acerto crítico. A cada quatro níveis, o bônus de dano aumenta conforme indicado na tabela da classe." },
    { nome: "Olhar Assustador", descricao: "No 3º nível, você recebe +1 em Intimidação e Intuição. A cada seis níveis, esse bônus aumenta em +1." },
    { nome: "Arma Espiritual", descricao: "No 10º nível, sua arma ancestral se torna uma arma mágica com um encanto à sua escolha. Nos níveis 12 e 14 ela recebe um novo encanto a sua escolha." },
    { nome: "Shogun", descricao: "No 20º nível, o multiplicador de crítico da sua arma ancestral aumenta em dois. Além disso, recupera uma quantidade de pontos de vida igual a esse dano extra." }
  ],
  poderes: [
    { nome: "Arma Ancestral Adicional", descricao: "Você recebe uma arma ancestral adicional de um tipo à sua escolha. Esta arma segue a mesma progressão de melhorias e encantos de sua primeira arma ancestral, mas você pode escolher benefícios diferentes para ela." },
    { nome: "Arma Reverberante", descricao: "Quando usa Grito de Kiai para atacar com sua arma ancestral, você pode gastar +1 PM para aumentar o bônus de dano em +1 dado do mesmo tipo concedido por seu grito. Pré-requisito: 5º nível de samurai." },
    { nome: "Arma Veloz", descricao: "Uma vez por rodada, quando usa a ação agredir com sua arma ancestral, você pode gastar 2 PM para realizar um ataque adicional com essa mesma arma. Pré-requisito: 6º nível de samurai." },
    { nome: "Ataque Disciplinado", descricao: "Quando ataca com sua arma ancestral, você soma sua Sabedoria nas rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 1." },
    { nome: "Aumento de Atributo", descricao: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo." },
    { nome: "Avalanche das Três Mãos", descricao: "Se estiver usando sua arma ancestral com as duas mãos, você soma sua Constituição nas rolagens de dano (limitado pelo seu nível). Pré-requisitos: Con 1." },
    { nome: "Corte da Correnteza", descricao: "Se estiver usando sua arma ancestral em corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e causa +1d6 pontos de dano com acertos críticos." },
    { nome: "Daisho", descricao: "Você recebe proficiência com wakizashi e recebe uma dessas armas como uma arma ancestral adicional. Esta arma segue a mesma progressão de melhorias e encantos de sua primeira arma ancestral, mas você pode escolher benefícios diferentes para ela." },
    { nome: "Dois Céus", descricao: "Se estiver empunhando sua arma ancestral e uma segunda arma (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Estilo de Duas Armas, quando usa Grito de Kiai você pode gastar +1 PM para aplicar seu efeito a ambas as armas. Pré-requisito: Des 2." },
    { nome: "Emblema do Império de Jade", descricao: "Você soma sua Sabedoria em Diplomacia, Guerra e Nobreza. Pré-requisito: Sab 1." },
    { nome: "Equilíbrio Interior", descricao: "Quando rola um 1 natural em um teste, você pode rolar novamente o dado. Você só pode usar este poder uma vez por teste. Pré-requisito: treinado em Vontade." },
    { nome: "Espírito Incisivo", descricao: "Você recebe +1 no multiplicador de crítico em ataques com sua arma ancestral." },
    { nome: "Honra dos Ancestrais", descricao: "O nome de sua família invoca a honra e tradição de seus antepassados. Uma vez por cena, você pode gastar uma ação de movimento para fazer um teste de Diplomacia, Intimidação ou Nobreza (CD 10) e impressionar os presentes. Se passar, você recebe +1 em todos os seus testes de perícias baseadas em Carisma até o fim da cena. Esse bônus aumenta em +1 para cada 5 pontos pelos quais o resultado do teste exceder a CD (+2 para um resultado 15, +3 para 20 e assim por diante). Como alternativa, você pode aplicar esse bônus em seu próximo teste de ataque nesta cena. Pré-requisito: 12º nível de samurai." },
    { nome: "Honra Inabalável", descricao: "Você soma sua Sabedoria em seu total de pontos de vida e se torna imune a efeitos de medo. Este poder não elimina fobias raciais (como o medo de altura dos minotauros). Pré-requisito: Sab 1." },
    { nome: "Iaijutsu", descricao: "Você soma sua Sabedoria em Iniciativa e pode sacar ou guardar armas como uma ação livre (em vez de ação de movimento). Além disso, quando faz um teste de Iniciativa para agir, para cada 10 pontos no resultado de seu teste, você recebe +1 em testes de ataque e rolagens de dano com arma na primeira rodada de combate. Pré-requisito: treinado em Iniciativa." },
    { nome: "Ira Gentil", descricao: "Enquanto tiver pontos de vida temporários fornecidos por Serenidade dos Kami, você soma seu bônus de Olhar Assustador em testes de ataque e rolagens de dano com sua arma ancestral. Pré-requisito: Serenidade dos Kami." },
    { nome: "Kiai Assustador", descricao: "Quando usa Grito de Kiai, você pode pagar 1 PM. Se acertar o ataque, todos os oponentes em alcance curto ficam abalados por 1 rodada. Pré-requisito: treinado em Intimidação." },
    { nome: "Kiai Estremecedor", descricao: "Quando usa Grito de Kiai, você pode pagar 1 PM. Se acertar o ataque, todos os oponentes em alcance curto do alvo do ataque ficam caídos (Fortitude CD Sab evita)." },
    { nome: "Limiar da Tempestade", descricao: "Quando faz um ataque, você pode gastar todos os PV temporários fornecidos por Serenidade dos Kami. Se fizer isso, você recebe um bônus na rolagem de dano deste ataque igual à metade dos PV gastos. Pré-requisito: Serenidade dos Kami." },
    { nome: "Kyudo", descricao: "Você pode usar Grito de Kiai com ataques à distância. Quando usa uma arma de ataque à distância, pode usar sua Sabedoria em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano). Pré-requisito: treinado em Pontaria." },
    { nome: "Meditação Artística", descricao: "Você pode gastar 1 hora e 5 PM escrevendo um pequeno poema enquanto medita sobre os desafios por vir. Você recebe 5d6 dados de concentração. Pelas próximas 24 horas, sempre que for realizar um teste de perícia, você pode gastar um desses d6 e adicionar o resultado rolado como um bônus no teste. Pré-requisitos: 8º nível de samurai, treinado em Ofício (calígrafo)." },
    { nome: "Montanha Serena", descricao: "Enquanto tiver pontos de vida temporários fornecidos por Serenidade dos Kami, você soma sua Constituição em testes de manobra e na CD para resistir às suas habilidades de samurai. Pré-requisitos: Avalanche das Três Mãos, Serenidade dos Kami." },
    { nome: "Nuvem Serena", descricao: "Enquanto tiver pontos de vida temporários fornecidos por Serenidade dos Kami, o dano de sua arma ancestral aumenta em um passo. Pré-requisitos: Dois Céus, Serenidade dos Kami." },
    { nome: "Rio Sereno", descricao: "Enquanto tiver pontos de vida temporários fornecidos por Serenidade dos Kami, seu deslocamento aumenta em +3m e não é reduzido por terreno difícil natural. Pré-requisitos: Corte da Correnteza, Serenidade dos Kami." },
    { nome: "Ronin", descricao: "Você não precisa mais seguir seu Código do Samurai. Além disso, você pode trocar sua katana por outro tipo de arma, e não está limitado a katanas como sua arma ancestral." },
    { nome: "Serenidade dos Kami", descricao: "Você pode gastar uma ação de movimento e 3 PM para receber uma quantidade de PV temporários igual ao seu nível + sua sabedoria. Se usar este poder na primeira rodada de um combate, você não precisa gastar PM." }
  ]
}