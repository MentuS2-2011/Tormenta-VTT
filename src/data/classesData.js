import { paladino } from './paladino'
import { santo } from './santo'
import { samurai } from './samurai' 
import { cavaleiro } from './cavaleiro'

export const classesData = [
  {
    "nome": "Guerreiro",
    "livro": "Livro Básico",
    "descricao": "Quando a primeira criatura inteligente ficou de pé sobre duas pernas e procurou algo para comer ou uma caverna onde se abrigar, existiu uma certeza: havia outra criatura tentando matá-la. Onde há vida, há luta. Em qualquer lugar de Arton, todos sempre precisarão de guerreiros.\n\nO guerreiro é o mais simples, direto e comum dos aventureiros. Em muitos aspectos, também é o mais importante. Nenhum grupo está completo sem alguém especializado em combate, nenhum reino está seguro sem soldados. Nem mesmo uma aldeia tem chance de sobreviver sem alguns tipos corajosos dispostos a empunhar uma arma para defender seus conterrâneos.\n\nLonge de ser apenas um capanga com uma arma, o guerreiro possui disciplina e força de vontade para treinar continuamente. Seu amplo conhecimento sobre armas e armaduras pode não parecer profundo ou filosófico, mas é fundamental e utilizado todos os dias. Guerreiros se dedicam à batalha, praticam técnicas para vencer seus inimigos acima de todo o resto.\n\nExistem guerreiros em toda parte. Muitos são soldados em exércitos ou guardas em grandes cidades. Outros são mercenários, gladiadores, senhores de terras, salteadores... Qualquer taverna em Arton tem pelo menos um ou dois guerreiros como fregueses ou atrás do balcão.\n\nSe existe uma característica comum a todos os guerreiros é a versatilidade. Eles sabem se virar com espadas, machados, arcos, porretes... Não se apegam a um só estilo, não valorizam uma doutrina acima das outras. Usam as técnicas, ferramentas e estratégias necessárias para sobreviver e lutar outro dia.",
    "imagem": "https://wikipw.com.br/images/4/4a/Personagem_Guerreiro.png",
    "famosos": "Christian Pryde, Katabrok, Ledd, Loriane, Vallen Allond, Sandro Galtran, Val, Verônica.",
    "pv": "20 + Constituição no 1º nível; +5 + Constituição por nível.",
    "pm": "3 PM por nível.",
    "pericias": "Luta (For) ou Pontaria (Des), Fortitude (Con), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Guerra (Int), Iniciativa (Des), Intimidação (Car), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des).",
    "proficiencias": "Armas marciais, armaduras pesadas e escudos.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Ataque especial +4"
      },
      {
        "nivel": "2º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "3º",
        "habilidades": "Durão, poder de guerreiro"
      },
      {
        "nivel": "4º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "5º",
        "habilidades": "Ataque especial +8, poder de guerreiro"
      },
      {
        "nivel": "6º",
        "habilidades": "Ataque extra, poder de guerreiro"
      },
      {
        "nivel": "7º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "8º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "9º",
        "habilidades": "Ataque especial +12, poder de guerreiro"
      },
      {
        "nivel": "10º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "11º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "13º",
        "habilidades": "Ataque especial +16, poder de guerreiro"
      },
      {
        "nivel": "14º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "17º",
        "habilidades": "Ataque especial +20, poder de guerreiro"
      },
      {
        "nivel": "18º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "20º",
        "habilidades": "Campeão, poder de guerreiro"
      }
    ],
    "habilidades": [
      {
        "nome": "Ataque Especial",
        "descricao": "Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano."
      },
      {
        "nome": "Durão",
        "descricao": "A partir do 3º nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode gastar 3 PM para reduzir esse dano à metade."
      },
      {
        "nome": "Ataque Extra",
        "descricao": "A partir do 6º nível, quando usa a ação agredir, você pode gastar 2 PM para realizar um ataque adicional uma vez por rodada."
      },
      {
        "nome": "Campeão",
        "descricao": "No 20º nível, o dano de todos os seus ataques aumenta em um passo. Além disso, sempre que você faz um Ataque Especial ou um Golpe Pessoal e acerta o ataque, recupera metade dos PM gastos nele."
      }
    ],
    "poderes": [
      {
        "nome": "Ambidestria",
        "descricao": "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Pré-requisito: Des 2."
      },
      {
        "nome": "Arqueiro",
        "descricao": "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria em rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 1."
      },
      {
        "nome": "Ataque Reflexo",
        "descricao": "Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover voluntariamente para fora do seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo (apenas uma vez por alvo a cada rodada). Pré-requisito: Des 1."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Bater e Correr",
        "descricao": "Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa."
      },
      {
        "nome": "Destruidor",
        "descricao": "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 da rolagem de dano da arma. Pré-requisito: For 1."
      },
      {
        "nome": "Esgrimista",
        "descricao": "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência em rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 1."
      },
      {
        "nome": "Especialização em Arma",
        "descricao": "Escolha uma arma. Você recebe +2 em rolagens de dano com essa arma. Você pode escolher este poder outras vezes para armas diferentes."
      },
      {
        "nome": "Especialização em Armadura",
        "descricao": "Você recebe redução de dano 5 se estiver usando uma armadura pesada. Pré-requisito: 12º nível de guerreiro."
      },
      {
        "nome": "Golpe de Raspão",
        "descricao": "Uma vez por rodada, quando erra um ataque, você pode gastar 2 PM. Se fizer isso, causa metade do dano que causaria (ignorando efeitos que se aplicariam caso o ataque acertasse)."
      },
      {
        "nome": "Golpe Demolidor",
        "descricao": "Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a redução de dano dele."
      },
      {
        "nome": "Ímpeto",
        "descricao": "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada."
      },
      {
        "nome": "Mestre em Arma",
        "descricao": "Escolha uma arma. Com esta arma, seu dano aumenta em um passo e quando faz um teste de ataque você pode gastar 2 PM para rolá-lo novamente. Pré-requisitos: Especialização em Arma com a arma escolhida, 12º nível de guerreiro."
      },
      {
        "nome": "Planejamento Marcial",
        "descricao": "Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia. Pré-requisitos: treinado em Guerra, 10º nível de guerreiro."
      },
      {
        "nome": "Romper Resistências",
        "descricao": "Quando faz um Ataque Especial, você pode gastar 1 PM adicional para ignorar 10 pontos de redução de dano."
      },
      {
        "nome": "Solidez",
        "descricao": "Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência."
      },
      {
        "nome": "Tornado de Dor",
        "descricao": "Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque corpo a corpo e compare-o com a Defesa de cada inimigo em seu alcance natural. Então faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido. Pré-requisito: 6º nível de guerreiro."
      },
      {
        "nome": "Valentão",
        "descricao": "Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos."
      },
      {
        "nome": "Análise Tática",
        "descricao": "Você recebe +2 em Guerra e pode fazer testes dessa perícia para identificar criatura contra humanoides. Pré-requisito: treinado em Guerra."
      },
      {
        "nome": "Arremesso de Investida",
        "descricao": "Quando faz uma investida, você pode gastar 1 PM para realizar um ataque à distância adicional com uma arma de arremesso contra o alvo da investida."
      },
      {
        "nome": "Bloqueio Brutal",
        "descricao": "Uma vez por rodada, quando é atingido por um ataque, você pode gastar 2 PM para fazer uma rolagem de dano corpo a corpo e subtrair o resultado dessa rolagem do dano causado pelo ataque. Pré-requisito: For 5."
      },
      {
        "nome": "Corte Ágil",
        "descricao": "Uma vez por rodada, quando faz um ataque com uma arma ágil ou leve, você pode gastar 1 PM para se mover até metade do seu deslocamento antes ou depois de fazer o ataque. Esse movimento não ativa reações dos inimigos. Pré-requisito: Des 1."
      },
      {
        "nome": "Criar Oportunidade",
        "descricao": "Quando você ou um aliado em alcance curto atacar uma criatura sob efeito do seu Xadrez de Batalha, você pode gastar 1 PM para que esse ataque cause +1d10 pontos de dano. Pré-requisito: Xadrez de Batalha."
      },
      {
        "nome": "Defesa Estratégica",
        "descricao": "Você soma sua Inteligência na Defesa, limitada pelo seu nível. Pré-requisito: Int 1."
      },
      {
        "nome": "Determinação Inabalável",
        "descricao": "Enquanto estiver com metade dos seus pontos de vida ou menos, você recebe +2 em testes de resistência e o custo de sua habilidade Durão diminui em –1 PM. Pré-requisito: 11º nível de guerreiro."
      },
      {
        "nome": "Estrategista Inspirador",
        "descricao": "Em seu primeiro turno de um combate, você pode gastar uma ação padrão e fazer um teste de Guerra. Se fizer isso, para cada 10 pontos no resultado do teste, você e seus aliados em alcance curto recebem 1 PM temporário. Esses PM temporários desaparecem no fim da cena. Pré-requisito: treinado em Guerra."
      },
      {
        "nome": "Executor",
        "descricao": "Você recebe +1d6 nas rolagens de dano contra criaturas que estejam com menos da metade dos pontos de vida. A cada quatro níveis além do 1º, esse dano extra aumenta em um passo."
      },
      {
        "nome": "Fender Defesas",
        "descricao": "Quando você acerta um ataque usando Ataque Especial, a criatura sofre uma penalidade na Defesa igual ao total de PM gastos nessa habilidade por 1 rodada."
      },
      {
        "nome": "Inércia do Aço",
        "descricao": "Quando acerta um ataque com uma arma de duas mãos em uma criatura, você pode gastar 3 PM para causar metade do dano desse ataque a cada inimigo adjacente a essa criatura. Pré-requisito: 5º nível de guerreiro."
      },
      {
        "nome": "Investida Ricochete",
        "descricao": "Uma vez por rodada, quando faz uma investida e acerta o ataque, você pode gastar 2 PM para atacar outra criatura que você consiga alcançar como parte dessa investida. Pré-requisitos: Bater e Correr, 5º nível de guerreiro."
      },
      {
        "nome": "Manobra Dupla",
        "descricao": "Uma vez por rodada, quando faz uma manobra de combate usando uma arma versátil, você pode pagar 1 PM para executar uma manobra diferente extra."
      },
      {
        "nome": "Mente Disciplinada",
        "descricao": "Sempre que você é afetado por uma habilidade de um aliado que fornece um bônus numérico em testes de perícia, rolagens de dano ou na Defesa, para você esse bônus aumenta em +1. Pré-requisito: 6º nível de guerreiro."
      },
      {
        "nome": "Operações Combinadas",
        "descricao": "Quando usa Ordens de Engajamento, você pode gastar +3 PM. Se fizer isso, pode atacar junto do aliado e, se um de vocês usar habilidades com custo em PM que forneçam bônus a esse ataque ou a seu dano, o outro também é afetado. Pré-requisitos: Ordens de Engajamento, 14º nível de guerreiro."
      },
      {
        "nome": "Ordens de Engajamento",
        "descricao": "Uma vez por rodada, quando acerta um ataque em uma criatura sob efeito do seu Xadrez de Batalha, você pode gastar 2 PM para que um aliado em alcance curto possa fazer um ataque contra essa criatura. Pré-requisitos: Criar Oportunidade, Xadrez de Batalha, 11º nível de guerreiro."
      },
      {
        "nome": "Recuperar Fôlego",
        "descricao": "Uma vez por cena, se estiver com 0 PM, você pode gastar uma ação de movimento para recuperar 1d8 PM."
      },
      {
        "nome": "Resiliência Marcial",
        "descricao": "Sempre que sofrer dano letal, você recebe redução de dano 1 cumulativa (limitada pelo seu nível). Esse efeito dura até o fim da cena ou até você recuperar pontos de vida de qualquer forma. Pré-requisito: 4º nível de guerreiro."
      },
      {
        "nome": "Soldado de Infantaria",
        "descricao": "Você recebe +3m em seu deslocamento e seu limite de carga aumenta em 6 espaços."
      },
      {
        "nome": "Velho de Guerra",
        "descricao": "Você recebe +5 em Intimidação e imunidade a medo. Além disso, uma vez por cena pode gastar 5 PM para evitar completamente um efeito qualquer usado contra você por outra criatura. Pré-requisito: 17º nível de guerreiro."
      },
      {
        "nome": "Xadrez de Batalha",
        "descricao": "Você pode gastar uma ação de movimento e 1 PM para analisar um oponente em alcance curto. Se fizer isso, você recebe +2 na Defesa e em testes de Reflexos contra essa criatura até o fim da cena. Esse bônus aumenta em +1 para cada outro poder que você possua que tenha Xadrez de Batalha como pré-requisito. Pré-requisito: treinado em Guerra."
      },
      {
        "nome": "Estilo Clássico",
        "descricao": "Um clichê só é clichê porque funciona! Quando usa Ataque Especial, se estiver empunhando um escudo e uma espada longa, você recebe +2 na Defesa e em rolagens de dano até o início do seu próximo turno. Pré-requisitos: humano, Estilo de Arma e Escudo. — Dragão Brasil #221"
      },
      {
        "nome": "Duro Como Aço",
        "descricao": "Você vem de uma linhagem de anões da infantaria. Se estiver usando armadura pesada, você pode somar sua Constituição na Defesa, limitado pelo seu nível. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos o façam. Pré-requisitos: anão, Encouraçado, 8º nível de guerreiro. — Dragão Brasil #221"
      },
      {
        "nome": "Herdeiro dos Gigantes",
        "descricao": "Poucos são capazes de equiparar sua força. Quando usa Ataque Especial e Força dos Titãs em um mesmo ataque, você aumenta o dano extra concedido por Força dos Titãs em +1d12. Pré-requisito: galokk. — Dragão Brasil #221"
      },
      {
        "nome": "Golpe Pessoal",
        "descricao": "Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma técnica única com efeitos determinados por você. Você constrói seu Golpe Pessoal escolhendo efeitos da lista abaixo — a soma dos custos será o custo do Golpe Pessoal (mínimo 1 PM). O Golpe Pessoal só pode ser usado com uma arma específica. Pré-requisito: 5º nível de guerreiro.\n\nEfeitos disponíveis:\n• Amplo (+3 PM): Atinge todas as criaturas em alcance curto.\n• Atordoante (+2 PM): Criatura atingida fica atordoada por uma rodada (Fort CD For anula).\n• Brutal (+1 PM): Fornece um dado extra de dano do mesmo tipo.\n• Conjurador (Custo da Magia +1 PM): Lança uma magia de 1º ou 2º círculo ao acertar.\n• Destruidor (+2 PM): Aumenta o multiplicador de crítico em +1.\n• Distante (+1 PM): Aumenta o alcance em um passo.\n• Elemental (+2 PM): Causa +2d6 de dano de ácido, eletricidade, fogo ou frio.\n• Impactante (+1 PM): Empurra o alvo 1,5m para cada 10 pontos de dano.\n• Letal (+2 PM): Aumenta a margem de ameaça em +2 (pode escolher duas vezes: +5).\n• Penetrante (+1 PM): Ignora 10 pontos de RD.\n• Preciso (+1 PM): Rola dois dados no teste de ataque e usa o melhor.\n• Qualquer Arma (+1 PM): Pode usar com qualquer tipo de arma.\n• Ricocheteante (+1 PM): A arma retorna após o ataque (apenas arremesso).\n• Teleguiado (+1 PM): Ignora penalidades por camuflagem ou cobertura leves.\n• Avanço (+1 PM): Percorre até o deslocamento em linha reta antes do golpe.\n• Brando (+0 PM): Causa dano não letal.\n• Carregado (+1 PM): Gasta ação padrão para energizar; causa +2d8 no próximo ataque.\n• Sequencial (+2 PM): Causa +1d6; aumenta um passo a cada acerto na mesma cena.\n• Sifão (+2 PM): Recebe 1 PM temporário para cada 10 pontos de dano (máx. seu nível/cena).\n• Lento (–2 PM): Exige ação completa para ser usado.\n• Perto da Morte (–2 PM): Só pode ser usado com ¼ dos PV ou menos.\n• Sacrifício (–2 PM): Perde 10 PV sempre que usa o golpe.\n• Golpe de Abertura (–2 PM): Só pode ser usado no primeiro turno do combate.\n• Truque Secreto (–2 PM): Só pode ser usado uma vez contra cada alvo por cena."
      },
      {
        "nome": "Estilo Clássico - DB 212 -",
        "descricao": "Um clichê só é clichê porque funciona! Quando usa Ataque Especial, se estiver empunhando um escudo e uma espada longa, você recebe +2 na Defesa e em rolagens de dano até o início do seu próximo turno. Pré-requisitos: humano, Estilo de Arma e Escudo.",
      },
      {
        "nome": "Duro Como Aço - DB 212 -",
        "descricao": "Você vem de uma linhagem de anões da infantaria. Se estiver usando armadura pesada, você pode somar sua Constituição na Defesa, limitado pelo seu nível. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos o façam. Pré-requisitos: anão, Encouraçado, 8º nível de guerreiro.",
      },
      {
        "nome": "Herdeiro dos Gigantes - DB 212 -",
        "descricao": "Poucos são capazes de equiparar sua força. Quando usa Ataque Especial e Força dos Titãs em um mesmo ataque, você aumenta o dano extra conce- dido por Força dos Titãs em +1d12. Pré-requisito: galokk.",
      }
    ]
  },
  {
    "nome": "Bárbaro",
    "livro": "Livro Básico",
    "descricao": "Arton não é civilizado. Mesmo com reinos, grandes cidades e política intrincada, este mundo possui vastas extensões de terra não mapeadas, onde nenhum nobre, soldado ou autoridade jamais pisou. Em grandes florestas escuras, em vastas cordilheiras aterrorizantes, em pradarias indomadas e ilhas remotas, Arton é governado pela força, pela selvageria, pela coragem e pela honra. É o território dos bárbaros.\n\nO bárbaro é um herói primitivo que ignora ou descarta as frivolidades da civilização. Um combatente terrível, o bárbaro luta por instinto, confiando menos em técnica e mais em puro frenesi de batalha. Em momentos de grande perigo, ou apenas frente a algo que desperte seu ódio, o bárbaro é tomado por uma fúria guerreira, ficando cego para tudo que não seja o combate e sendo imbuído de força e resistência animalescas.\n\nBárbaros não se sentem confortáveis com todas as restrições da civilização. As paredes altas de um castelo parecem prisões, as ruas lotadas das cidades parecem labirintos fedorentos. Seu conhecimento é adquirido em forma de histórias e lições passadas oralmente por seus ancestrais, ou aprendido com observação do mundo natural.\n\nPodem ser apenas brutamontes monossilábicos, sem talento para nada além da violência. Contudo, também podem ser expoentes de culturas tão ricas e sábias quanto a 'civilização', bravos que rejeitam fingimentos e mentiras em favor da honestidade e simplicidade dos ermos. E mesmo aqueles que mal sabem falar muitas vezes são dotados de uma ingenuidade e bondade tocantes, tendo crescido num mundo em que família e amigos valem mais que ouro.\n\nAs Montanhas Uivantes produzem bárbaros do gelo, acostumados a condições adversas, que bebem leite de mamute e seguem um código de honra estrito. Os Ermos Púrpuras produzem bárbaros das florestas, um povo ancestral e independente que se viu cada vez mais acuado enquanto suas terras foram roubadas por forasteiros. As Montanhas Sanguinárias produzem bárbaros que enfrentam monstros desde a infância e muitas vezes criam vínculos com essas criaturas. Também há bárbaros em todas as regiões ermas e remotas, além de habitantes das cidades que rejeitam a civilização e se entregam à selvageria, tornando-se bárbaros por escolha própria.\n\nBárbaros não costumam usar armaduras pesadas e empunham armas rústicas e brutais, como tacapes e machados. Contudo, o que os define não é seu equipamento, mas seu anseio pela liberdade. Sua sede de sangue é enorme, mas sua lealdade é maior ainda. Livre de amarras, feroz, digno, honesto e forte, o bárbaro simboliza o passado selvagem e inspirador de Arton.",
    "imagem": "https://png.pngtree.com/png-vector/20250805/ourlarge/pngtree-male-barbarian-minotaur-full-body-dnd-illustration-white-background-png-image_17003871.webp",
    "famosos": "Alenn Toren Greenfeld, Andilla Dente-de-Ferro, Klunc, Galo Louco.",
    "pv": "24 + Constituição no 1º nível; +6 + Constituição por nível.",
    "pm": "3 PM por nível.",
    "pericias": "Fortitude (Con), Luta (For), mais 4 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des), Sobrevivência (Sab) e Vontade (Sab).",
    "proficiencias": "Armas marciais e escudos.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Fúria +2"
      },
      {
        "nivel": "2º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "3º",
        "habilidades": "Instinto selvagem +1, poder de bárbaro"
      },
      {
        "nivel": "4º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "5º",
        "habilidades": "Poder de bárbaro, redução de dano 2"
      },
      {
        "nivel": "6º",
        "habilidades": "Fúria +3, poder de bárbaro"
      },
      {
        "nivel": "7º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "8º",
        "habilidades": "Poder de bárbaro, redução de dano 4"
      },
      {
        "nivel": "9º",
        "habilidades": "Instinto selvagem +2, poder de bárbaro"
      },
      {
        "nivel": "10º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "11º",
        "habilidades": "Fúria +4, poder de bárbaro, redução de dano 6"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "13º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "14º",
        "habilidades": "Poder de bárbaro, redução de dano 8"
      },
      {
        "nivel": "15º",
        "habilidades": "Instinto selvagem +3, poder de bárbaro"
      },
      {
        "nivel": "16º",
        "habilidades": "Fúria +5, poder de bárbaro"
      },
      {
        "nivel": "17º",
        "habilidades": "Poder de bárbaro, redução de dano 10"
      },
      {
        "nivel": "18º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de bárbaro"
      },
      {
        "nivel": "20º",
        "habilidades": "Fúria titânica, poder de bárbaro"
      }
    ],
    "habilidades": [
      {
        "nome": "Fúria",
        "descricao": "Você pode gastar 2 PM para invocar uma fúria selvagem. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +1 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito (ataque, habilidade, magia...) hostil."
      },
      {
        "nome": "Instinto Selvagem",
        "descricao": "No 3º nível, você recebe +1 em rolagens de dano, Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1."
      },
      {
        "nome": "Redução de Dano",
        "descricao": "A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe redução de dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível."
      },
      {
        "nome": "Fúria Titânica",
        "descricao": "No 20º nível, o bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria é dobrado. Por exemplo, se gastar 5 PM, em vez de um bônus de +5, recebe um bônus de +10."
      }
    ],
    "poderes": [
      {
        "nome": "Alma de Bronze",
        "descricao": "Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a seu nível + sua Força."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Brado Assustador",
        "descricao": "Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto ficam vulneráveis até o fim da cena. Pré-requisito: treinado em Intimidação. Medo."
      },
      {
        "nome": "Crítico Brutal",
        "descricao": "Seu multiplicador de crítico com armas corpo a corpo e de arremesso aumenta em +1. Por exemplo, seu multiplicador com um machado de batalha (normalmente x3) será x4. Pré-requisito: 6º nível de bárbaro."
      },
      {
        "nome": "Destruidor",
        "descricao": "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma. Pré-requisito: For 1."
      },
      {
        "nome": "Espírito Inquebrável",
        "descricao": "Enquanto está em fúria, você não fica inconsciente por estar com 0 PV ou menos (você ainda morre se chegar em um valor negativo igual à metade de seus pontos de vida máximos). Pré-requisito: Alma de Bronze."
      },
      {
        "nome": "Esquiva Sobrenatural",
        "descricao": "Seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos o percebam. Você nunca fica surpreendido."
      },
      {
        "nome": "Força Indomável",
        "descricao": "Quando faz um teste de Força ou Atletismo, você pode gastar 1 PM para somar seu nível nele. Você pode usar esta habilidade depois de rolar o dado, mas deve usá-la antes de o mestre dizer se você passou ou não."
      },
      {
        "nome": "Frenesi",
        "descricao": "Uma vez por rodada, se estiver em fúria e usar a ação agredir para fazer um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 2 PM para fazer um ataque adicional."
      },
      {
        "nome": "Fúria da Savana",
        "descricao": "Seu deslocamento aumenta em +3m. Quando usa Fúria, você aplica o bônus em ataque e dano também a armas de arremesso."
      },
      {
        "nome": "Fúria Raivosa",
        "descricao": "Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente."
      },
      {
        "nome": "Golpe Poderoso",
        "descricao": "Ao acertar um ataque corpo a corpo ou com uma arma de arremesso, você pode gastar 1 PM para causar um dado extra de dano do mesmo tipo (por exemplo, com um montante, causa +1d6, para um dano total de 3d6; com um machado de guerra, causa +1d12, para um dano total de 2d12)."
      },
      {
        "nome": "Ímpeto",
        "descricao": "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada."
      },
      {
        "nome": "Investida Imprudente",
        "descricao": "Quando faz uma investida, você pode aumentar sua penalidade na Defesa pela investida para –5 para receber um bônus de +1d12 na rolagem de dano deste ataque."
      },
      {
        "nome": "Pele de Aço",
        "descricao": "O bônus de Pele de Ferro aumenta para +8. Pré-requisitos: Pele de Ferro, 8º nível de bárbaro."
      },
      {
        "nome": "Pele de Ferro",
        "descricao": "Você recebe +4 na Defesa, mas apenas se não estiver usando armadura pesada."
      },
      {
        "nome": "Sangue dos Inimigos",
        "descricao": "Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena."
      },
      {
        "nome": "Superstição",
        "descricao": "Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +5."
      },
      {
        "nome": "Totem Espiritual",
        "descricao": "Você soma sua Sabedoria no seu total de pontos de mana. Escolha um animal totêmico. Você aprende e pode lançar uma magia definida pelo animal escolhido (atributo-chave Sabedoria) e pode lançá-la mesmo em fúria. Pré-requisitos: Sab 1, 4º nível de bárbaro."
      },
      {
        "nome": "Vigor Primal",
        "descricao": "Você pode gastar uma ação de movimento e uma quantidade de PM limitada por sua Constituição. Para cada PM que gastar, você recupera 1d12 pontos de vida."
      },
      {
        "nome": "Alma Inabalável",
        "descricao": "Quando faz um teste de resistência, você pode gastar 1 PM para substituir a perícia normal por Intimidação. Se você passar no teste e a fonte do efeito for uma criatura, ela fica abalada por 1d4 rodadas (Vontade CD igual ao resultado do teste de Intimidação evita). Pré-requisito: treinado em Intimidação."
      },
      {
        "nome": "Ampliar Brado",
        "descricao": "O alcance de seus brados aumenta para médio e a CD para resistir a eles aumenta em +2."
      },
      {
        "nome": "Arremesso Violento",
        "descricao": "Enquanto você está em fúria, o dano e o alcance de suas armas de arremesso aumenta em um passo (de curto para médio e de médio para longo) e a penalidade em ataques que você sofre por arremessar armas sem alcance diminui para –2. Pré-requisito: Fúria da Savana."
      },
      {
        "nome": "Beberrão Selvagem",
        "descricao": "Você pode gastar uma ação de movimento para ingerir um preparado alquímico que cause dano e tenha uma criatura como alvo. Se fizer isso, armazena o equivalente a 3 cargas do preparado em sua boca. Até o fim da cena, sempre que acerta um ataque corpo a corpo, você pode gastar uma carga para que o ataque cause dano adicional igual ao do preparado. Pré-requisito: Con 3."
      },
      {
        "nome": "Brado: Assombroso",
        "descricao": "Você pode gastar uma quantidade de PM limitada pela sua Constituição. Para cada PM que gastar, você causa 1d6 pontos de dano psíquico em todos os inimigos no alcance do brado (Von CD Con reduz à metade). Medo. Pré-requisito: Brado Assustador."
      },
      {
        "nome": "Brado: Retardante",
        "descricao": "Você dá um berro que faz seus inimigos hesitarem. Criaturas a sua escolha no alcance do brado ficam lentas por 1 rodada. Medo."
      },
      {
        "nome": "Brado: Sísmico",
        "descricao": "Você emite um brado que faz o chão tremer. Criaturas no alcance do brado ficam vulneráveis por 1d4 rodadas e caídas (Fort CD For reduz para vulneráveis por 1 rodada). Criaturas que já estavam vulneráveis, inclusive por este efeito, ficam desprevenidas pelo mesmo tempo. Pré-requisito: outro poder de brado."
      },
      {
        "nome": "Brado Vitorioso",
        "descricao": "Quando faz um acerto crítico ou reduz um inimigo a 0 ou menos PV enquanto está em fúria, você pode usar um dos seus poderes de brado como ação livre. Pré-requisitos: Brado Assustador, Sangue dos Inimigos."
      },
      {
        "nome": "Enigma do Aço",
        "descricao": "Após tantas lutas e matanças, você descobriu que a verdadeira força não reside na arma, mas na mão de quem a empunha. Se estiver empunhando uma arma mundana, você recebe +5 em testes de ataque e causa dois dados extras de dano do mesmo tipo. Pré-requisito: 17º nível de bárbaro."
      },
      {
        "nome": "Espiritualista",
        "descricao": "Você recebe +1 PM a cada nível ímpar. Além disso, aprende e pode lançar uma magia adicional definida pelo seu animal totêmico (atributo-chave Sabedoria) e pode lançá-la e sustentá-la mesmo em fúria. As magias são: Coruja (Augúrio), Corvo (Voz Divina), Falcão (Mapear), Grifo (Físico Divino), Lobo (Localização), Raposa (Camuflagem Ilusória), Tartaruga (Vestimenta da Fé), Urso (Soco de Arsenal). Pré-requisitos: Sab 2, Totem Espiritual, 6º nível de bárbaro."
      },
      {
        "nome": "Fúria Bestial",
        "descricao": "Enquanto você está em fúria, o dano das suas armas naturais aumenta em dois passos e o multiplicador de crítico delas aumenta em +1."
      },
      {
        "nome": "Fúria Elemental",
        "descricao": "Escolha um elemento entre ácido, eletricidade, fogo ou frio. Uma vez feita, essa escolha não pode ser mudada. Enquanto está em fúria e faz um ataque em que aplique seus benefícios, você causa +1d12 pontos de dano do tipo escolhido. Pré-requisitos: Totem Espiritual, 11º nível de bárbaro."
      },
      {
        "nome": "Impiedoso",
        "descricao": "Você recebe +2 em testes de ataque, rolagens de dano e na CD de suas habilidades contra criaturas vulneráveis."
      },
      {
        "nome": "Invocar os Ancestrais",
        "descricao": "Você pode gastar uma ação completa e 2 PM para invocar 1d4+1 ancestrais capangas em espaços desocupados em alcance curto. Eles têm Defesa igual à sua, 1 PV, são incorpóreos e falham automaticamente em qualquer teste de resistência ou oposto. Você pode gastar uma ação de movimento para fazê-los se mover (deslocamento 9m). Cada ancestral fornece um bônus cumulativo de +2 em rolagens de dano a um personagem adjacente e, uma vez por rodada, quando faz a ação agredir, você pode gastar um ancestral pra fazer um ataque adicional. Pré-requisitos: Totem Espiritual, 11º nível de bárbaro."
      },
      {
        "nome": "Manifestar Totem",
        "descricao": "Escolha um tipo de parceiro entre assassino, atirador, combatente, fortão, guardião, perseguidor ou montaria. Uma vez feita, essa escolha não pode ser mudada. Você pode gastar 3 PM e uma ação de movimento para invocar uma manifestação espiritual de seu animal totêmico até o fim da cena. Ele é um parceiro veterano do tipo escolhido. Pré-requisitos: Totem Espiritual, 7º nível de bárbaro."
      },
      {
        "nome": "Recuperação Gutural",
        "descricao": "Quando usa um brado enquanto está em fúria, você recebe uma quantidade de PV temporários igual à metade do seu nível + sua Força. Pré-requisitos: Alma de Bronze, um poder de brado."
      },
      {
        "nome": "Regeneração Sobrenatural",
        "descricao": "Enquanto está em fúria e com menos da metade de seus PV máximos, você tem Cura Acelerada 5. Pré-requisitos: Con 5, Vigor Primal, 5º nível de bárbaro."
      },
      {
        "nome": "Revide",
        "descricao": "Uma vez por rodada, quando sofre dano de um ataque corpo a corpo enquanto está em fúria, você pode gastar 2 PM para fazer um ataque corpo a corpo contra a criatura que o atacou, desde que ela esteja em seu alcance. Pré-requisitos: Frenesi, 11º nível de bárbaro."
      },
      {
        "nome": "Rigidez Selvagem",
        "descricao": "Enquanto está em fúria, você soma o bônus da fúria na Defesa, em Fortitude e em RD."
      },
      {
        "nome": "Sede Sanguinária",
        "descricao": "Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV ou menos, você recupera 10 PV e 2 PM. Pré-requisitos: Sangue dos Inimigos, 5º nível de bárbaro."
      },
      {
        "nome": "Fúria do Gigante - DB 212 -",
        "descricao": "Quando você entra em Fúria, inimigos em alcance curto ficam abalados por 1d4 rodadas (Von CD Con reduz para abalado por 1 rodada). Pré-requisito: galokk ou ogro.",
      },
      {
        "nome": "Fúria Primordial - DB 212 -",
        "descricao": "Quando está em Fúria, o bônus de dano com armas corpo a corpo e de arremesso concedido pela habilidade Feroz aumenta em +2. Quando sofre dano de um inimigo, esse aumento se torna +4 até o fim de seu próximo turno. Pré-requisito: orc.",
      },
      {
        "nome": "Fúria Trog - DB 212 -",
        "descricao": "Trogs, por natureza, sabem ceder particularmente bem à ira animalesca. Quando está em Fúria você pode, um vez por rodada, fazer um ataque corpo a corpo extra com sua Mordida sem gastar PM. Pré-requisito: trog.",
      },
    ]
  },
  {
    "nome": "Nobre",
    "livro": "Livro Básico",
    "descricao": "Todos precisam de um líder. Sem hierarquia, há anarquia. Sem uma ordem estabelecida, só o que existe é a lei do mais forte. Algumas dinastias tomam para si a responsabilidade e o privilégio de governar, servindo aos plebeus enquanto recebem deles obediência e tributo.\n\nO aventureiro nobre é mais do que alguém que nasceu nas circunstâncias certas. É um herói que reconhece o valor de um bom líder e se considera ligado à terra, ao povo, a seus aliados. Um burguês, um aventureiro ou mesmo um plebeu comum podem todos mudar de casa e de vida, ir atrás de suas próprias ambições. Mas o nobre não tem escolha. Se ele abandonar seu posto, toda uma sociedade pode ruir, pessoas vão ficar sem trabalho e sem destino, conquistadores inescrupulosos podem invadir. O nobre é rico, mas não é livre.\n\nNem todo nobre é um aristocrata ou um governante por nascença. Muitos são donos ou herdeiros de grandes impérios mercantes, líderes de guildas poderosas, governadores eleitos, senadores ou mesmo diplomatas treinados em escolas especiais. O que une todos os nobres é sua capacidade de organizar os outros, dando ordens, conselhos e palavras de encorajamento. Um nobre também usa seus recursos, contatos e notoriedade para vencer desafios, abrindo portas que estariam fechadas de outra forma.\n\nA posição do nobre pode não parecer muito adequada a uma vida de aventuras, mas muitas vezes o nobre é o único que tem verdadeira obrigação de se aventurar. Um destes heróis parte em grandes buscas e missões perigosas para combater os inimigos de sua terra, para encontrar artefatos que garantam a continuidade de sua linhagem, para defender o povo comum. Quando há uma ameaça, todos têm a opção de fugir, menos os soldados e os nobres.\n\nMuitos nobres aventureiros não têm grandes responsabilidades. Estão justamente tentando escapar de um destino que já foi decidido em seu nascimento, aventurando-se por rebeldia e sede de experiências. Contudo, mais cedo ou mais tarde todo nobre precisa encarar seu fardo.\n\nNobres se destacam em situações sociais e como suporte para o resto do grupo. Contudo, muitas vezes precisam provar seu valor mais do que qualquer outro herói. Aventureiros mais humildes pensam que todo nobre é um almofadinha mimado, acostumado a que todos façam tudo por ele. Isto às vezes é verdade, mas esse tipo de desocupado raramente sobrevive a mais de uma ou duas aventuras.\n\nNobres têm personalidades variadas, mas sempre marcadas por sua posição social e seus deveres. Alguns são extremamente sérios, nunca se permitindo um instante de descanso ou alegria. Outros têm um otimismo totalmente fantasioso, acreditando que tudo vai dar certo — porque, para eles, tudo sempre deu certo! Alguns ficam pasmos com pequenas realidades da vida dos plebeus, como a necessidade de economizar ou acordar cedo. Outros vivem cheios de culpa por sua posição privilegiada.\n\nDe qualquer forma, nenhum nobre pode negar que é diferente dos plebeus. Para o bem ou para o mal, ele sempre será algo além de uma pessoa comum.",
    "imagem": "https://i.pinimg.com/originals/9b/2b/8d/9b2b8d051715f21003ee4f10581637b2.jpg",
    "famosos": "Arius Gorgonius Dubitatius, General Supremo Hermann Von Krauser, Lady Ayleth Karst, Rainha-Imperatriz Shivara.",
    "pv": "16 + Constituição no 1º nível; +4 + Constituição por nível.",
    "pm": "4 PM por nível.",
    "pericias": "Diplomacia (Car) ou Intimidação (Car), Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pontaria (Des).",
    "proficiencias": "Armas marciais, armaduras pesadas e escudos.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Autoconfiança, espólio, orgulho"
      },
      {
        "nivel": "2º",
        "habilidades": "Palavras afiadas (2d6), poder de nobre"
      },
      {
        "nivel": "3º",
        "habilidades": "Poder de nobre, riqueza"
      },
      {
        "nivel": "4º",
        "habilidades": "Gritar ordens, poder de nobre"
      },
      {
        "nivel": "5º",
        "habilidades": "Poder de nobre, presença aristocrática"
      },
      {
        "nivel": "6º",
        "habilidades": "Palavras afiadas (4d6), poder de nobre"
      },
      {
        "nivel": "7º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "8º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "9º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "10º",
        "habilidades": "Palavras afiadas (6d6), poder de nobre"
      },
      {
        "nivel": "11º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "13º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "14º",
        "habilidades": "Palavras afiadas (8d6), poder de nobre"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "17º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "18º",
        "habilidades": "Palavras afiadas (10d6), poder de nobre"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "20º",
        "habilidades": "Realeza, poder de nobre"
      }
    ],
    "habilidades": [
      {
        "nome": "Autoconfiança",
        "descricao": "Você pode usar seu Carisma em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada)."
      },
      {
        "nome": "Espólio",
        "descricao": "Você recebe um item a sua escolha com preço de até T$ 2.000."
      },
      {
        "nome": "Orgulho",
        "descricao": "Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste."
      },
      {
        "nome": "Palavras Afiadas",
        "descricao": "No 2º nível, você pode gastar uma ação padrão e 1 PM para fazer um teste de Diplomacia ou Intimidação oposto ao teste de Vontade de uma criatura inteligente (Int –3 ou maior) em alcance curto. Se vencer, você causa 2d6 pontos de dano psíquico não letal à criatura. Se perder, causa metade deste dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende (se você usou Diplomacia) ou fica apavorada e foge de você da maneira mais eficiente possível (se usou Intimidação). A cada quatro níveis, você pode gastar +1 PM para aumentar o dano (veja a tabela da classe)."
      },
      {
        "nome": "Riqueza",
        "descricao": "No 3º nível, você passa a receber dinheiro de sua família, patrono ou negócios. Uma vez por aventura, pode fazer um teste de Carisma com um bônus igual ao seu nível de nobre. Você recebe um número de Tibares de ouro igual ao resultado do teste. Assim, um nobre de 5º nível com Carisma 4 que role 13 no dado recebe 22 TO. O uso desta habilidade é condicionado a sua relação com sua família, patrono ou negócios e a onde você está. Por exemplo, um nobre viajando pelos ermos, isolado da civilização, dificilmente teria como receber dinheiro."
      },
      {
        "nome": "Gritar Ordens",
        "descricao": "A partir do 4º nível, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Até o início de seu próximo turno, todos os seus aliados em alcance curto recebem um bônus nos testes de perícia igual à quantidade de PM que você gastou."
      },
      {
        "nome": "Presença Aristocrática",
        "descricao": "A partir do 5º nível, sempre que uma criatura inteligente tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura."
      },
      {
        "nome": "Realeza",
        "descricao": "No 20º nível, a CD para resistir a sua Presença Aristocrática aumenta em +5 e uma criatura que falhe no teste de Vontade por 10 ou mais se arrepende tanto de ter tentado machucá-lo que passa a lutar ao seu lado (e seguir suas ordens, se puder entendê-lo) pelo resto da cena. Além disso, uma criatura que seja reduzida a 0 PV por Palavras Afiadas não sofre este dano; em vez disso, passa a lutar ao seu lado pelo resto da cena."
      }
    ],
    "poderes": [
      {
        "nome": "Armadura Brilhante",
        "descricao": "Você pode usar seu Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso. Pré-requisito: 8º nível de nobre."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Autoridade Feudal",
        "descricao": "Você pode gastar uma hora e 2 PM para conclamar o povo a ajudá-lo (qualquer pessoa sem um título de nobreza ou uma posição numa igreja reconhecida pelo seu reino). Em termos de jogo, essas pessoas contam como um parceiro iniciante de um tipo a sua escolha (aprovado pelo mestre) que lhe acompanha até o fim da aventura. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre). Pré-requisito: 6º nível de nobre."
      },
      {
        "nome": "Educação Privilegiada",
        "descricao": "Você se torna treinado em duas perícias de nobre a sua escolha."
      },
      {
        "nome": "Estrategista",
        "descricao": "Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu Carisma). No próximo turno do aliado, ele ganha uma ação de movimento. Pré-requisitos: Int 1, treinado em Guerra, 6º nível de nobre."
      },
      {
        "nome": "Favor",
        "descricao": "Você pode usar sua influência para pedir favores a pessoas poderosas. Isso gasta 5 PM e uma hora de conversa e bajulação, ou mais, de acordo com o mestre, e funciona como o uso persuasão de Diplomacia. Porém, você pode pedir favores ainda mais caros, difíceis ou perigosos — um convite para uma festa particular, uma carona de barco até Galrasia ou mesmo acesso aos planos militares do reino. Se você falhar, não pode pedir o mesmo favor por pelo menos uma semana."
      },
      {
        "nome": "General",
        "descricao": "Quando você usa o poder Estrategista, aliados direcionados recebem 1d4 PM temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM. Pré-requisitos: Estrategista, 12º nível de nobre."
      },
      {
        "nome": "Grito Tirânico",
        "descricao": "Você pode usar Palavras Afiadas como uma ação completa, em vez de padrão. Se fizer isso, seus dados de dano aumentam para d8 e você atinge todos os inimigos em alcance curto. Pré-requisito: 8º nível de nobre."
      },
      {
        "nome": "Inspirar Confiança",
        "descricao": "Sua presença faz as pessoas darem o melhor de si. Quando um aliado em alcance curto faz um teste, você pode gastar 2 PM para fazer com que ele possa rolar esse teste novamente."
      },
      {
        "nome": "Inspirar Glória",
        "descricao": "A presença de um nobre motiva as pessoas a realizarem grandes façanhas. Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado. Pré-requisitos: Inspirar Confiança, 8º nível de nobre."
      },
      {
        "nome": "Jogo da Corte",
        "descricao": "Quando faz um teste de Diplomacia, Intuição ou Nobreza, você pode gastar 1 PM para rolá-lo novamente."
      },
      {
        "nome": "Liderar pelo Exemplo",
        "descricao": "Você pode gastar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado do seu teste em vez de fazer o seu próprio. Pré-requisito: 6º nível de nobre."
      },
      {
        "nome": "Língua de Ouro",
        "descricao": "Você pode gastar uma ação padrão e 4 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua capacidade de influenciar outras pessoas. Pré-requisitos: Língua de Prata, 8º nível de nobre."
      },
      {
        "nome": "Língua de Prata",
        "descricao": "Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível."
      },
      {
        "nome": "Língua Rápida",
        "descricao": "Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em vez de –10."
      },
      {
        "nome": "Presença Majestosa",
        "descricao": "Sua Presença Aristocrática passa a funcionar contra qualquer criatura com valor de Inteligência (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem Int). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena. Pré-requisitos: 16º nível de nobre."
      },
      {
        "nome": "Título",
        "descricao": "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, no início de cada aventura você recebe 20 TO por nível de nobre (rendimentos dos impostos) ou a ajuda de um parceiro veterano (um membro de sua corte). Pré-requisito: Autoridade Feudal, 10º nível de nobre, ter conquistado terras ou realizado um serviço para um nobre que possa se tornar seu suserano."
      },
      {
        "nome": "Voz Poderosa",
        "descricao": "Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio."
      },
      {
        "nome": "Agente de Elite",
        "descricao": "Você recebe um agente especial, um parceiro veterano que fornece os benefícios de um parceiro a sua escolha ou um poder de outra classe, cujos pré-requisitos você cumpra (para efeitos de nível na classe desse poder, considere seu nível de nobre −4). No início de cada aventura, você pode trocar seu agente. Pré-requisitos: Título, 11º nível de nobre."
      },
      {
        "nome": "Comandante de Campo",
        "descricao": "Seus capangas recebem +2 nas rolagens de dano e um bônus na Defesa igual ao seu Carisma. Além disso, quando contrata ou recebe capangas por qualquer motivo, você recebe um capanga adicional do mesmo tipo. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Comitiva",
        "descricao": "Seu limite de parceiros aumenta em +1. A partir do 11º nível, esse limite aumenta em +1 adicional. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Discurso de Batalha",
        "descricao": "Em seu primeiro turno de um combate, você pode gastar uma ação completa e fazer um teste de Diplomacia ou Intimidação. Se fizer isso, para cada 10 pontos no resultado do teste, você e seus aliados em alcance curto recebem 2 PM temporários. Esses PM temporários desaparecem no fim da cena."
      },
      {
        "nome": "Fofocas da Corte",
        "descricao": "Quando chega em um ambiente social (taverna, acampamento militar, praça de vila, salão de castelo etc.), você pode gastar 1 hora para se inteirar das 'novidades'. A critério do mestre, você recebe uma informação útil sobre os habitantes ou acontecimentos locais. Além disso, recebe 4d6 dados de auxílio. Sempre que faz um teste de perícia baseada em Carisma nesse ambiente, você pode gastar um desses dados e adicionar como um bônus no teste. Pré-requisitos: treinado em Intuição e Investigação."
      },
      {
        "nome": "Guarda Pessoal",
        "descricao": "Você recebe um pelotão de infantaria veterano que atua como seu guarda-costas. No 11º nível, o pelotão se torna um parceiro mestre. Se perder seu pelotão de infantaria, você pode arregimentar outro após uma semana. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Hedonismo Aristocrático",
        "descricao": "Uma vez por dia, você pode gastar 1 hora e um valor a sua escolha entre T$ 100, T$ 500 e T$ 2.000 em luxos como comida, bebida e apresentações artísticas. Se tiver gastado T$ 100, você recebe 4 PM temporários por patamar, que duram até o fim do dia. Se tiver gastado T$ 500, o ganho aumenta para 5 PM por patamar e, se tiver gastado T$ 2.000, para 6 PM por patamar."
      },
      {
        "nome": "Instigar Violência",
        "descricao": "Uma vez por rodada por aliado, quando um aliado em alcance curto faz um acerto crítico em um inimigo, você pode gastar 3 PM para que esse aliado faça mais um ataque contra o mesmo inimigo. Pré-requisitos: treinado em Guerra, 11º nível de nobre."
      },
      {
        "nome": "Insuflar Investida",
        "descricao": "Quando faz uma investida, você pode gastar 1 PM por aliado a sua escolha em alcance curto. Se fizer isso, a próxima investida que cada um desses aliados fizer até o início do seu próximo turno causa +2d8 pontos de dano. Pré-requisito: Estrategista."
      },
      {
        "nome": "Legado Mágico",
        "descricao": "Você recebe um item mágico menor a sua escolha, como um presente ou uma herança de família. No início de cada aventura, você pode substituir esse item por outro. A partir do 14º nível, quando substitui o item pode escolher um item mágico médio e, a partir do 17º nível, um item mágico maior. Pré-requisito: 11º nível de nobre."
      },
      {
        "nome": "Líder Enérgico",
        "descricao": "Você soma seu Carisma em Iniciativa. Além disso, se for o primeiro na iniciativa, em seu primeiro turno você pode usar uma habilidade de nobre com execução de ação de movimento ou padrão como ação livre. Pré-requisito: treinado em Iniciativa."
      },
      {
        "nome": "Líder Impiedoso",
        "descricao": "Sempre que um aliado sob efeito da sua habilidade Gritar Ordens fizer um acerto crítico ou reduzir um inimigo para 0 PV ou menos, você recupera 1 PM. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Linhagem Distinta",
        "descricao": "Você descende de uma família ilustre — ou, por suas ações, tornou sua família ilustre. Seja como for, o nome de sua família o inspira a grandes feitos. Quando você usa Orgulho, o custo da habilidade diminui em –1 PM. Além disso, uma vez por cena, quando usa Orgulho, você pode gastar +5 PM. Se fizer isso, o bônus fornecido pela habilidade dobra e, ao fazer o teste de perícia afetado por ela, você rola dois dados e usa o melhor resultado. Pré-requisito: 17º nível de nobre."
      },
      {
        "nome": "Ordens Agressivas",
        "descricao": "Quando você usa Gritar Ordens, a habilidade também soma seu bônus na primeira rolagem de dano dos aliados até o início do seu próximo turno. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Ordens Encorajadoras",
        "descricao": "Quando você usa Gritar Ordens, a habilidade também fornece 10 PV temporários cumulativos. Esses pontos desaparecem no fim da cena. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Palavras de Efeito",
        "descricao": "Você soma seu Carisma no dano de sua habilidade Palavras Afiadas e a ação necessária para usá-la diminui em um passo (de completa para padrão, de padrão para movimento). Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Palavras Ressonantes",
        "descricao": "Quando você usa Palavras Afiadas, sempre que rolar o resultado máximo ou um ponto abaixo do máximo em um dado da habilidade (por exemplo, um 5 ou 6 ao rolar 1d6), role um dado extra. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Protocolo Impecável",
        "descricao": "Quando chega em um ambiente social (veja Fofocas da Corte), você pode gastar 2 PM e fazer um teste de Nobreza (CD 20). Se passar, porta-se da maneira ideal para a situação, o que melhora a atitude de todas as criaturas em relação a você em uma categoria. Se passar por 10 ou mais, a critério do mestre você pode receber possibilidades de interação que normalmente não teria — por exemplo, ao chegar em um acampamento militar ou castelo, pode ser convidado para falar com o general ou o nobre comandante. Pré-requisitos: treinado em Nobreza, Jogo da Corte."
      },
      {
        "nome": "Senescal",
        "descricao": "Você recebe +1 por patamar em testes de perícia para resolver ações de base, domínio ou negócio e, uma vez por turno dessas estruturas, pode executar uma ação de estrutura adicional. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Voz Límpida",
        "descricao": "Quando você usa uma habilidade de nobre que afete um ou mais aliados, o custo dessa habilidade diminui em –1 PM (isso não reduz efeitos baseados no custo em PM pago)."
      },
      {
        "nome": "Abundância dos Pequeninos - DB 212 -",
        "descricao": "Você vem de uma família abastada de hynne. Quando faz o teste de Carisma para sua habilidade Riqueza, você pode somar 1d6 ao resultado do teste. Pré-requisitos: hynne, 3º nível de nobre.",
      },
      {
        "nome": "Inspirar Medo - DB 212 -",
        "descricao": "Sua ascendência monstruosa causa pavor nos ignorantes. Você pode gastar uma ação de movimento e 1 PM para esbravejar impropérios aos seus inimigos. Faça um teste de Intimidação oposto pelo teste de Vontade de cada criatura a sua escolha em alcance curto (você faz um único teste). Alvos que falhem ficam abalados até o início do seu próximo turno. Pré-requisitos: bugbear ou medusa, Inspirar Confiança.",
      },
      {
        "nome": "Mestra dos Sussurros - DB 212 -",
        "descricao": "Suas cobras assustam ou atraem seus colegas da aristocracia. Você também pode usar Jogo da Corte em testes de Intimidação e, quando usa esta habilidade em alguma de suas perícias, a segunda rolagem do teste é feita com +2. Pré-requisitos: medusa, Jogo da Corte.",
      }
    ]
  },
  {
    "nome": "Burguês",
    "livro": "Heróis de Arton",
    "descricao": "\"Não tenho um título... Mas, se quiser, posso comprá-lo.\"\n\nEm muitos lugares de Arton, a estrutura feudal de nobreza e plebe ainda impera. Contudo, nas cidades, o ouro fala mais alto. Esse é o domínio do burguês.\n\nO burguês é um aventureiro que, assim como o nobre, usa sua posição social para inspirar, liderar e auxiliar seus companheiros. No entanto, não faz isso através de discursos ou brasões — sabe que tudo pode ser comprado, até mesmo a vitória.\n\nBurgueses são plebeus que ascenderam através de comércio ou de um ofício. Em vez de habitar um castelo, a família do burguês compartilha dos mesmos espaços que cidadãos comuns — talvez morando em uma mansão, mas ainda trabalhando todos os dias. Em vez de uma linhagem que se estende por séculos, o burguês fala sobre seus antepassados que viviam na miséria. Em vez de exigir favores ou serviços, o burguês sabe negociar para conseguir o que deseja.\n\nQuase todos os burgueses são obcecados com trabalho e medem tudo pelo lucro que pode gerar. Isso porque sabem que apenas seu esforço (e seu dinheiro) os separam da pobreza. Muitos tipos altruístas criticam o burguês por essa postura... Mas talvez uma espada nova ou uma noitada na taverna os convençam do contrário?",
    "imagem": "https://i.redd.it/ejijpe1y6g271.jpg",
    "famosos": "",
    "pv": "12 + Constituição no 1º nível; +3 + Constituição por nível.",
    "pm": "4 PM por nível.",
    "pericias": "Diplomacia (Car) e Vontade (Sab), mais 6 a sua escolha entre Adestramento (Car), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pontaria (Des).",
    "proficiencias": "Nenhuma.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Meios de produção, orgulho, poder monetário"
      },
      {
        "nivel": "2º",
        "habilidades": "Desmoralizar -1, poder de nobre"
      },
      {
        "nivel": "3º",
        "habilidades": "Negociante nato, poder de nobre"
      },
      {
        "nivel": "4º",
        "habilidades": "Poder de nobre, suborno"
      },
      {
        "nivel": "5º",
        "habilidades": "Ostentação, poder de nobre"
      },
      {
        "nivel": "6º",
        "habilidades": "Desmoralizar -2, poder de nobre"
      },
      {
        "nivel": "7º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "8º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "9º",
        "habilidades": "Novo rico, poder de nobre"
      },
      {
        "nivel": "10º",
        "habilidades": "Desmoralizar -3, poder de nobre"
      },
      {
        "nivel": "11º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "13º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "14º",
        "habilidades": "Desmoralizar -4, poder de nobre"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "17º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "18º",
        "habilidades": "Desmoralizar -5, poder de nobre"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de nobre"
      },
      {
        "nivel": "20º",
        "habilidades": "Magnata"
      }
    ],
    "habilidades": [
      {
        "nome": "Meios de Produção",
        "descricao": "No início de cada aventura, você recebe T$ 100 em dinheiro, itens mundanos ou poções a sua escolha. Esse valor aumenta para T$ 300 no patamar veterano, T$ 600 no campeão e T$ 1.000 no lenda."
      },
      {
        "nome": "Orgulho",
        "descricao": "Quando faz um teste de perícia, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu Carisma). Para cada PM que gastar, recebe +2 no teste."
      },
      {
        "nome": "Poder Monetário",
        "descricao": "Quando usa uma habilidade com um custo em PM, você pode consumir uma quantidade de tibares de ouro (limitada pelo seu Carisma). Cada TO consumido dessa forma paga 1 PM do custo da habilidade. Você pode consumir um número de TO por dia igual ao seu nível. No 5º nível, este limite aumenta para o dobro do seu nível."
      },
      {
        "nome": "Desmoralizar",
        "descricao": "No 2º nível, você aprende e pode lançar Perdição, e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Entretanto, pode lançá-la apenas em criaturas inteligentes (Int –3 ou maior). Esta não é uma habilidade mágica e provém da sua capacidade de abalar a autoconfiança de outras pessoas. Mental."
      },
      {
        "nome": "Negociante Nato",
        "descricao": "No 3º nível, quando chega em uma nova comunidade, você pode gastar 1 dia fazendo contatos com o comércio local para fazer um teste de Diplomacia (CD 20). Se passar, pode vender itens nessa comunidade por 60% do seu preço (em vez de 50%). Para cada 10 pontos pelos quais o resultado do teste exceder a CD, você aumenta o preço de venda em +10% (até o máximo de 100%). Esta habilidade não se acumula com barganha, e NPCs ainda estão limitados a comprar somente o que desejam, com o dinheiro que possuem."
      },
      {
        "nome": "Suborno",
        "descricao": "No 4º nível, você aprende e pode lançar Enfeitiçar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de instigar os outros com promessas de enriquecimento. A CD para resistir a essa magia aumenta em +2 se você tiver consumido pelo menos 1 tibar de ouro para pagar seu custo."
      },
      {
        "nome": "Ostentação",
        "descricao": "A partir do 5º nível, você pode se beneficiar de um item vestido adicional. Além disso, a CD para resistir às suas habilidades de burguês aumenta em +1 se você possuir um item banhado a ouro, cravejado de gemas ou de mitral. Esse aumento é cumulativo; possuir três itens diferentes com as três modificações aumenta a CD em +3."
      },
      {
        "nome": "Novo Rico",
        "descricao": "No 9º nível, para cada item mágico que você estiver vestindo, você recebe +1 PM por nível de poder do item (somente após 1 dia de uso)."
      },
      {
        "nome": "Magnata",
        "descricao": "No 20º nível, quando você usa Desmoralizar, a penalidade em testes de ataque também se aplica à CD das habilidades das criaturas afetadas. Além disso, sempre que consome um tibar de ouro para pagar o custo em PM de uma habilidade, você recebe 10 PV temporários cumulativos, que duram até o fim da cena."
      }
    ],
    "poderes": [
      {
        "nome": "Armadura Brilhante",
        "descricao": "Você pode usar seu Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso. Pré-requisito: 8º nível de nobre."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Autoridade Feudal",
        "descricao": "Você pode gastar uma hora e 2 PM para conclamar o povo a ajudá-lo (qualquer pessoa sem um título de nobreza ou uma posição numa igreja reconhecida pelo seu reino). Em termos de jogo, essas pessoas contam como um parceiro iniciante de um tipo a sua escolha (aprovado pelo mestre) que lhe acompanha até o fim da aventura. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre). Pré-requisito: 6º nível de nobre."
      },
      {
        "nome": "Educação Privilegiada",
        "descricao": "Você se torna treinado em duas perícias de nobre a sua escolha."
      },
      {
        "nome": "Estrategista",
        "descricao": "Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu Carisma). No próximo turno do aliado, ele ganha uma ação de movimento. Pré-requisitos: Int 1, treinado em Guerra, 6º nível de nobre."
      },
      {
        "nome": "Favor",
        "descricao": "Você pode usar sua influência para pedir favores a pessoas poderosas. Isso gasta 5 PM e uma hora de conversa e bajulação, ou mais, de acordo com o mestre, e funciona como o uso persuasão de Diplomacia. Porém, você pode pedir favores ainda mais caros, difíceis ou perigosos — um convite para uma festa particular, uma carona de barco até Galrasia ou mesmo acesso aos planos militares do reino. Se você falhar, não pode pedir o mesmo favor por pelo menos uma semana."
      },
      {
        "nome": "General",
        "descricao": "Quando você usa o poder Estrategista, aliados direcionados recebem 1d4 PM temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM. Pré-requisitos: Estrategista, 12º nível de nobre."
      },
      {
        "nome": "Grito Tirânico",
        "descricao": "Você pode usar Palavras Afiadas como uma ação completa, em vez de padrão. Se fizer isso, seus dados de dano aumentam para d8 e você atinge todos os inimigos em alcance curto. Pré-requisito: 8º nível de nobre."
      },
      {
        "nome": "Inspirar Confiança",
        "descricao": "Sua presença faz as pessoas darem o melhor de si. Quando um aliado em alcance curto faz um teste, você pode gastar 2 PM para fazer com que ele possa rolar esse teste novamente."
      },
      {
        "nome": "Inspirar Glória",
        "descricao": "A presença de um nobre motiva as pessoas a realizarem grandes façanhas. Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado. Pré-requisitos: Inspirar Confiança, 8º nível de nobre."
      },
      {
        "nome": "Jogo da Corte",
        "descricao": "Quando faz um teste de Diplomacia, Intuição ou Nobreza, você pode gastar 1 PM para rolá-lo novamente."
      },
      {
        "nome": "Liderar pelo Exemplo",
        "descricao": "Você pode gastar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado do seu teste em vez de fazer o seu próprio. Pré-requisito: 6º nível de nobre."
      },
      {
        "nome": "Língua de Ouro",
        "descricao": "Você pode gastar uma ação padrão e 4 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua capacidade de influenciar outras pessoas. Pré-requisitos: Língua de Prata, 8º nível de nobre."
      },
      {
        "nome": "Língua de Prata",
        "descricao": "Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível."
      },
      {
        "nome": "Língua Rápida",
        "descricao": "Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em vez de –10."
      },
      {
        "nome": "Presença Majestosa",
        "descricao": "Sua Presença Aristocrática passa a funcionar contra qualquer criatura com valor de Inteligência (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem Int). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena. Pré-requisitos: 16º nível de nobre."
      },
      {
        "nome": "Título",
        "descricao": "Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, no início de cada aventura você recebe 20 TO por nível de nobre (rendimentos dos impostos) ou a ajuda de um parceiro veterano (um membro de sua corte). Pré-requisito: Autoridade Feudal, 10º nível de nobre, ter conquistado terras ou realizado um serviço para um nobre que possa se tornar seu suserano."
      },
      {
        "nome": "Voz Poderosa",
        "descricao": "Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio."
      },
      {
        "nome": "Agente de Elite",
        "descricao": "Você recebe um agente especial, um parceiro veterano que fornece os benefícios de um parceiro a sua escolha ou um poder de outra classe, cujos pré-requisitos você cumpra (para efeitos de nível na classe desse poder, considere seu nível de nobre −4). No início de cada aventura, você pode trocar seu agente. Pré-requisitos: Título, 11º nível de nobre."
      },
      {
        "nome": "Comandante de Campo",
        "descricao": "Seus capangas recebem +2 nas rolagens de dano e um bônus na Defesa igual ao seu Carisma. Além disso, quando contrata ou recebe capangas por qualquer motivo, você recebe um capanga adicional do mesmo tipo. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Comitiva",
        "descricao": "Seu limite de parceiros aumenta em +1. A partir do 11º nível, esse limite aumenta em +1 adicional. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Discurso de Batalha",
        "descricao": "Em seu primeiro turno de um combate, você pode gastar uma ação completa e fazer um teste de Diplomacia ou Intimidação. Se fizer isso, para cada 10 pontos no resultado do teste, você e seus aliados em alcance curto recebem 2 PM temporários. Esses PM temporários desaparecem no fim da cena."
      },
      {
        "nome": "Fofocas da Corte",
        "descricao": "Quando chega em um ambiente social (taverna, acampamento militar, praça de vila, salão de castelo etc.), você pode gastar 1 hora para se inteirar das 'novidades'. A critério do mestre, você recebe uma informação útil sobre os habitantes ou acontecimentos locais. Além disso, recebe 4d6 dados de auxílio. Sempre que faz um teste de perícia baseada em Carisma nesse ambiente, você pode gastar um desses dados e adicionar como um bônus no teste. Pré-requisitos: treinado em Intuição e Investigação."
      },
      {
        "nome": "Guarda Pessoal",
        "descricao": "Você recebe um pelotão de infantaria veterano que atua como seu guarda-costas. No 11º nível, o pelotão se torna um parceiro mestre. Se perder seu pelotão de infantaria, você pode arregimentar outro após uma semana. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Hedonismo Aristocrático",
        "descricao": "Uma vez por dia, você pode gastar 1 hora e um valor a sua escolha entre T$ 100, T$ 500 e T$ 2.000 em luxos como comida, bebida e apresentações artísticas. Se tiver gastado T$ 100, você recebe 4 PM temporários por patamar, que duram até o fim do dia. Se tiver gastado T$ 500, o ganho aumenta para 5 PM por patamar e, se tiver gastado T$ 2.000, para 6 PM por patamar."
      },
      {
        "nome": "Instigar Violência",
        "descricao": "Uma vez por rodada por aliado, quando um aliado em alcance curto faz um acerto crítico em um inimigo, você pode gastar 3 PM para que esse aliado faça mais um ataque contra o mesmo inimigo. Pré-requisitos: treinado em Guerra, 11º nível de nobre."
      },
      {
        "nome": "Insuflar Investida",
        "descricao": "Quando faz uma investida, você pode gastar 1 PM por aliado a sua escolha em alcance curto. Se fizer isso, a próxima investida que cada um desses aliados fizer até o início do seu próximo turno causa +2d8 pontos de dano. Pré-requisito: Estrategista."
      },
      {
        "nome": "Legado Mágico",
        "descricao": "Você recebe um item mágico menor a sua escolha, como um presente ou uma herança de família. No início de cada aventura, você pode substituir esse item por outro. A partir do 14º nível, quando substitui o item pode escolher um item mágico médio e, a partir do 17º nível, um item mágico maior. Pré-requisito: 11º nível de nobre."
      },
      {
        "nome": "Líder Enérgico",
        "descricao": "Você soma seu Carisma em Iniciativa. Além disso, se for o primeiro na iniciativa, em seu primeiro turno você pode usar uma habilidade de nobre com execução de ação de movimento ou padrão como ação livre. Pré-requisito: treinado em Iniciativa."
      },
      {
        "nome": "Líder Impiedoso",
        "descricao": "Sempre que um aliado sob efeito da sua habilidade Gritar Ordens fizer um acerto crítico ou reduzir um inimigo para 0 PV ou menos, você recupera 1 PM. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Linhagem Distinta",
        "descricao": "Você descende de uma família ilustre — ou, por suas ações, tornou sua família ilustre. Seja como for, o nome de sua família o inspira a grandes feitos. Quando você usa Orgulho, o custo da habilidade diminui em –1 PM. Além disso, uma vez por cena, quando usa Orgulho, você pode gastar +5 PM. Se fizer isso, o bônus fornecido pela habilidade dobra e, ao fazer o teste de perícia afetado por ela, você rola dois dados e usa o melhor resultado. Pré-requisito: 17º nível de nobre."
      },
      {
        "nome": "Ordens Agressivas",
        "descricao": "Quando você usa Gritar Ordens, a habilidade também soma seu bônus na primeira rolagem de dano dos aliados até o início do seu próximo turno. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Ordens Encorajadoras",
        "descricao": "Quando você usa Gritar Ordens, a habilidade também fornece 10 PV temporários cumulativos. Esses pontos desaparecem no fim da cena. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Palavras de Efeito",
        "descricao": "Você soma seu Carisma no dano de sua habilidade Palavras Afiadas e a ação necessária para usá-la diminui em um passo (de completa para padrão, de padrão para movimento). Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Palavras Ressonantes",
        "descricao": "Quando você usa Palavras Afiadas, sempre que rolar o resultado máximo ou um ponto abaixo do máximo em um dado da habilidade (por exemplo, um 5 ou 6 ao rolar 1d6), role um dado extra. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Protocolo Impecável",
        "descricao": "Quando chega em um ambiente social (veja Fofocas da Corte), você pode gastar 2 PM e fazer um teste de Nobreza (CD 20). Se passar, porta-se da maneira ideal para a situação, o que melhora a atitude de todas as criaturas em relação a você em uma categoria. Se passar por 10 ou mais, a critério do mestre você pode receber possibilidades de interação que normalmente não teria — por exemplo, ao chegar em um acampamento militar ou castelo, pode ser convidado para falar com o general ou o nobre comandante. Pré-requisitos: treinado em Nobreza, Jogo da Corte."
      },
      {
        "nome": "Senescal",
        "descricao": "Você recebe +1 por patamar em testes de perícia para resolver ações de base, domínio ou negócio e, uma vez por turno dessas estruturas, pode executar uma ação de estrutura adicional. Pré-requisito: 5º nível de nobre."
      },
      {
        "nome": "Voz Límpida",
        "descricao": "Quando você usa uma habilidade de nobre que afete um ou mais aliados, o custo dessa habilidade diminui em –1 PM (isso não reduz efeitos baseados no custo em PM pago)."
      },
      {
        "nome": "Abundância dos Pequeninos - DB 212 -",
        "descricao": "Você vem de uma família abastada de hynne. Quando faz o teste de Carisma para sua habilidade Riqueza, você pode somar 1d6 ao resultado do teste. Pré-requisitos: hynne, 3º nível de nobre.",
      },
      {
        "nome": "Inspirar Medo - DB 212 -",
        "descricao": "Sua ascendência monstruosa causa pavor nos ignorantes. Você pode gastar uma ação de movimento e 1 PM para esbravejar impropérios aos seus inimigos. Faça um teste de Intimidação oposto pelo teste de Vontade de cada criatura a sua escolha em alcance curto (você faz um único teste). Alvos que falhem ficam abalados até o início do seu próximo turno. Pré-requisitos: bugbear ou medusa, Inspirar Confiança.",
      },
      {
        "nome": "Mestra dos Sussurros - DB 212 -",
        "descricao": "Suas cobras assustam ou atraem seus colegas da aristocracia. Você também pode usar Jogo da Corte em testes de Intimidação e, quando usa esta habilidade em alguma de suas perícias, a segunda rolagem do teste é feita com +2. Pré-requisitos: medusa, Jogo da Corte.",
      }
    ]
  },
  {
    "nome": "Arcanista",
    "livro": "Livro Básico",
    "descricao": "A magia é a força mais poderosa de Arton. Está presente em todas as grandes maravilhas deste mundo, impregnada nas muralhas e torres dos maiores castelos e masmorras. Criaturas fantásticas são tocadas pela magia, armas e artefatos lendários são imbuídos de poder mágico. Mesmo assim, a magia permanece um mistério. Ninguém pode dizer que compreende totalmente esta força caprichosa, imprevisível, devastadora e deslumbrante. A magia esconde segredos infinitos, desde o truque de um ilusionista de rua até o poder de uma bola de fogo, desde o encanto para aprimorar uma espada até o segredo de cruzar dimensões.\n\nO arcanista é o grande mestre da magia. Muitos aventureiros aprendem algum rudimento das artes místicas, mas não têm noção de seu verdadeiro potencial e do perigo inerente a usá-las sem aprofundamento. Apenas um arcanista dedicado é capaz de dobrar a própria realidade.\n\nEste entendimento pode mexer com a mente de qualquer um. Alguns arcanistas se tornam arrogantes e distantes — como não se sentir superior possuindo poder para quebrar leis naturais? Os deuses podem comandar a Criação, mas os arcanistas conhecem as brechas no que eles criaram e sabem que nem todos os comandos divinos precisam ser seguidos. Outros arcanistas, vislumbrando algo tão maior que eles mesmos, tornam-se humildes, até mesmo niilistas. Prefeririam continuar na ignorância a ter noção do 'outro lado' da realidade. Existem até mesmo arcanistas que enlouquecem na busca por poder e conhecimento.\n\nEsta busca é constante, pois a disciplina da magia exige dedicação total. Em início de carreira, os arcanistas costumam ser fracos, frágeis, quase indefesos. Contudo, à medida que sua experiência aumenta, logo se tornam oponentes formidáveis. Em vez de serem protegidos por seus aliados, tomam para si o papel de protetores e líderes.\n\nNenhum arcanista é igual ao outro. Alguns encaram a magia como um conjunto de rituais e fórmulas que deve ser estudado e decorado. Outros têm forte ligação com um objeto de poder, através do qual canalizam seus feitiços. Outros ainda possuem capacidades arcanas brutas dentro de si desde o nascimento, apenas aprendendo a controlar e refinar este potencial. Seja como for, a magia nunca é banal, nunca é sutil e nunca é totalmente previsível. Mesmo em escolas mágicas como a Grande Academia Arcana, professores e alunos ficam fascinados com o que veem todos os dias. Mesmo o mais simples truque exige gestos, invocações, palavras secretas e grande concentração. Mesmo o feitiço mais codificado e esmiuçado esconde facetas que podem surpreender seu usuário.\n\nDescartando armaduras, armas e escudos em favor de robes, livros e varinhas, os arcanistas desafiam os perigos de Arton com seu intelecto, dedicação e personalidade. Abrindo mão de conhecimentos mundanos em troca de segredos obscuros, sabem pouco da vida cotidiana, mas muito sobre a natureza oculta do universo. Dedicando sua juventude ao estudo e aprimoramento, mais tarde se tornam poderosos, invencíveis ou até mesmo imortais.",
    "imagem": "https://static.wikia.nocookie.net/tsrd/images/5/5a/Alquimista.jpg/revision/latest?cb=20171114051534&path-prefix=pt-br",
    "famosos": "Aylarianna Purpúrea, Gradda, Ichabod, Reynard, Ripp, Rufus Domat, Salini Alan, Talude, Vladislav Tpish, Vectorius.",
    "pv": "8 + Constituição no 1º nível; +2 + Constituição por nível.",
    "pm": "6 PM por nível.",
    "pericias": "Misticismo (Int) e Vontade (Sab), mais 2 a sua escolha entre Conhecimento (Int), Diplomacia (Car), Enganação (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Nobreza (Int), Ofício (Int) e Percepção (Sab).",
    "proficiencias": "Nenhuma.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Caminho do arcanista, magias (1º círculo)"
      },
      {
        "nivel": "2º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "3º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "4º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "5º",
        "habilidades": "Magias (2º círculo), poder de arcanista"
      },
      {
        "nivel": "6º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "7º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "8º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "9º",
        "habilidades": "Magias (3º círculo), poder de arcanista"
      },
      {
        "nivel": "10º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "11º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "13º",
        "habilidades": "Magias (4º círculo), poder de arcanista"
      },
      {
        "nivel": "14º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "17º",
        "habilidades": "Magias (5º círculo), poder de arcanista"
      },
      {
        "nivel": "18º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de arcanista"
      },
      {
        "nivel": "20º",
        "habilidades": "Alta arcana, poder de arcanista"
      }
    ],
    "habilidades": [
      {
        "nome": "Caminho do Arcanista",
        "descricao": "A magia é um poder incrível, capaz de alterar a realidade. Esse poder tem fontes distintas e cada uma opera conforme suas próprias regras. Escolha uma das opções a seguir. Uma vez feita, essa escolha não pode ser mudada.\n\n• Bruxo. Você lança magias através de um foco — uma varinha, cajado, chapéu... Para lançar uma magia, você precisa empunhar o foco com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se falhar, a magia não funciona, mas você gasta os PM mesmo assim). O foco tem RD 10 e PV iguais à metade dos seus, independentemente de seu material ou forma. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM por descanso. Se for destruído (reduzido a 0 PV), você fica atordoado por uma rodada. Você pode recuperar um foco destruído ou perdido com uma semana de trabalho e T$ 100. Seu atributo-chave para magias é Inteligência.\n\n• Feiticeiro. Você lança magias através de um poder inato que corre em seu sangue. Escolha uma linhagem como origem de seus poderes. Você recebe a herança básica da linhagem escolhida. Você não depende de nenhum item ou estudo, mas sua capacidade de aprender magias é limitada — você aprende uma magia nova a cada nível ímpar (3º, 5º, 7º etc.), em vez de a cada nível. Seu atributo-chave para magias é Carisma.\n\n• Mago. Você lança magias através de estudo e memorização de fórmulas arcanas. Você só pode lançar magias memorizadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para memorizar magias, você precisa estudar seu grimório por uma hora. Quando faz isso, escolhe metade das magias que conhece (por exemplo, se conhece 7 magias, escolhe 3). Essas serão suas magias memorizadas. Você pode memorizar magias uma vez por dia. Caso não possa estudar (por não ter tempo, por ter perdido o grimório...), não poderá trocar suas magias memorizadas. Um grimório tem as mesmas estatísticas de um foco e pode ser recuperado da mesma forma. Você começa com uma magia adicional (para um total de 4) e, sempre que ganha acesso a um novo círculo de magias, aprende uma magia adicional daquele círculo. Seu atributo-chave para magias é Inteligência."
      },
      {
        "nome": "Linhagens (Feiticeiro)",
        "descricao": "O poder de um feiticeiro vem de seu sangue — mais precisamente, do sangue de um antepassado sobrenatural, como um dragão ou uma fada. Além da capacidade de lançar magias, o feiticeiro herda desse antepassado uma fração de seu poder natural, que ele pode desenvolver ao longo de sua vida. Ao escolher o caminho do feiticeiro, escolha uma linhagem da lista a seguir. Você recebe a herança básica de sua linhagem e pode desenvolver as demais através de poderes de arcanista.\n\n• Linhagem Dracônica. Um de seus antepassados foi um majestoso dragão. Escolha um tipo de dano entre ácido, eletricidade, fogo ou frio. Básica: Você soma seu Carisma em seus pontos de vida iniciais e recebe redução de dano 5 ao tipo escolhido. Aprimorada: Suas magias do tipo escolhido custam –1 PM e causam +1 ponto de dano por dado. Superior: Você passa a somar o dobro do seu Carisma em seus pontos de vida iniciais e se torna imune a dano do tipo escolhido. Além disso, sempre que reduz um ou mais inimigos a 0 PV ou menos com uma magia do tipo escolhido, você recebe uma quantidade de PM temporários igual ao círculo da magia.\n\n• Linhagem Feérica. Seu sangue foi tocado pelas fadas. Básica: Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, a sua escolha. Aprimorada: A CD para resistir a suas magias de encantamento e ilusão aumenta em +2 e suas magias dessas escolas custam –1 PM. Superior: Você recebe +2 em Carisma. Se uma criatura passar no teste de resistência contra uma magia de encantamento ou ilusão lançada por você, você fica alquebrado até o final da cena.\n\n• Linhagem Rubra. Seu sangue foi corrompido pela Tormenta. Básica: Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta. Aprimorada: Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –1 PM. Sempre que recebe um novo poder da Tormenta, você pode escolher uma nova magia. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma). Superior: Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma)."
      },
      {
        "nome": "Magias",
        "descricao": "Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante). Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar. Seu atributo-chave para lançar magias é definido pelo seu Caminho e você soma seu atributo-chave no seu total de PM."
      },
      {
        "nome": "Alta Arcana",
        "descricao": "No 20º nível, seu domínio das artes arcanas é total. O custo em PM de suas magias arcanas é reduzido à metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo)."
      }
    ],
    "poderes": [
      {
        "nome": "Arcano de Batalha",
        "descricao": "Quando lança uma magia, você soma seu atributo-chave na rolagem de dano."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Caldeirão do Bruxo",
        "descricao": "Você pode criar poções, como se tivesse o poder geral Preparar Poção. Se tiver ambos, pode criar poções de até 5º círculo. Pré-requisitos: Bruxo, treinado em Ofício (alquimista)."
      },
      {
        "nome": "Conhecimento Mágico",
        "descricao": "Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser."
      },
      {
        "nome": "Contramágica Aprimorada",
        "descricao": "Uma vez por rodada, você pode fazer uma contramágica como uma reação. Pré-requisito: Dissipar Magia."
      },
      {
        "nome": "Envolto em Mistério",
        "descricao": "Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo."
      },
      {
        "nome": "Escriba Arcano",
        "descricao": "Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender uma magia de 3º círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500. Pré-requisitos: Mago, treinado em Ofício (escriba)."
      },
      {
        "nome": "Especialista em Escola",
        "descricao": "Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2. Pré-requisito: Bruxo ou Mago."
      },
      {
        "nome": "Familiar",
        "descricao": "Você possui um animal de estimação mágico. Um familiar é uma criatura mágica. Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo familiar com um ritual que exige um dia e T$ 100 em ingredientes. Escolha um tipo de familiar:\n\n• Borboleta. A CD dos testes de Vontade para resistir a suas magias aumenta em +1.\n• Cobra. A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.\n• Coruja. Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.\n• Corvo. Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.\n• Falcão. Você não pode ser surpreendido e nunca fica desprevenido.\n• Gato. Você recebe visão no escuro e +2 em Furtividade.\n• Lagarto. A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.\n• Morcego. Você adquire percepção às cegas em alcance curto.\n• Rato. Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.\n• Sapo. Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo)."
      },
      {
        "nome": "Fluxo de Mana",
        "descricao": "Você pode manter dois efeitos sustentados ativos simultaneamente com apenas uma ação livre, pagando o custo de cada efeito separadamente. Pré-requisito: 10º nível de arcanista."
      },
      {
        "nome": "Foco Vital",
        "descricao": "Se você estiver segurando seu foco e sofrer dano que o levaria a 0 PV ou menos, você fica com 1 PV e o foco perde PV igual ao valor excedente ou até ser destruído (se o foco for destruído, você sofre o dano excedente). Pré-requisito: Bruxo."
      },
      {
        "nome": "Fortalecimento Arcano",
        "descricao": "A CD para resistir a suas magias aumenta em +1. Se você puder lançar magias de 4º círculo, em vez disso ela aumenta em +2. Pré-requisito: 5º nível de arcanista."
      },
      {
        "nome": "Herança Aprimorada",
        "descricao": "Você recebe a herança aprimorada de sua linhagem sobrenatural. Pré-requisitos: Feiticeiro, 6º nível de arcanista."
      },
      {
        "nome": "Herança Superior",
        "descricao": "Você recebe a herança superior de sua linhagem sobrenatural. Pré-requisitos: Herança Aprimorada, 11º nível de arcanista."
      },
      {
        "nome": "Magia Pungente",
        "descricao": "Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela."
      },
      {
        "nome": "Mestre em Escola",
        "descricao": "Escolha uma escola de magia. O custo para lançar magias dessa escola diminui em –1 PM. Pré-requisitos: Especialista em Escola com a escola escolhida, 8º nível de arcanista."
      },
      {
        "nome": "Poder Mágico",
        "descricao": "Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder no 4º nível, recebe 4 PM. Quando subir para o 5º nível, recebe +1 PM e assim por diante."
      },
      {
        "nome": "Raio Arcano",
        "descricao": "Você pode gastar uma ação padrão para causar 1d8 pontos de dano de essência num alvo em alcance curto. Esse dano aumenta em +1d8 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade. O raio arcano conta como uma magia para efeitos de habilidades e itens que beneficiem suas magias."
      },
      {
        "nome": "Raio Elemental",
        "descricao": "Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de ácido, eletricidade, fogo, frio ou trevas, a sua escolha. Se o alvo falhar no teste de Reflexos, sofre uma condição: Ácido (vulnerável por 1 rodada); Eletricidade (ofuscado por 1 rodada); Fogo (fica em chamas); Frio (lento por 1 rodada); Trevas (não pode curar PV por 1 rodada). Pré-requisito: Raio Arcano."
      },
      {
        "nome": "Raio Poderoso",
        "descricao": "Os dados de dano do seu Raio Arcano aumentam para d12 e o alcance dele aumenta para médio. Pré-requisito: Raio Arcano."
      },
      {
        "nome": "Tinta do Mago",
        "descricao": "Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, seu custo para criar pergaminhos é reduzido à metade. Pré-requisitos: Mago, treinado em Ofício (escriba)."
      },
      {
        "nome": "Agrilhoar os Caídos",
        "descricao": "Quando uma de suas magias de necromancia reduz os PV de um inimigo vivo a 0 ou menos, você pode aprisionar uma parte de seu espírito, que então fica flutuando ao seu redor. Para cada espírito, você recebe +2 na Defesa e em testes de resistência. Quando lança uma magia de dano, você pode libertar um espírito para causar +2d6 pontos de dano de trevas. Você pode acumular um máximo de espíritos simultâneos igual ao seu atributo-chave e eles permanecem ao seu redor até serem libertados ou até o fim do dia. Pré-requisito: 3º nível de arcanista."
      },
      {
        "nome": "Alquimia Arcana",
        "descricao": "A CD para resistir aos preparados alquímicos e poções que você usa aumenta em +1 para cada círculo de magia a que você tiver acesso. Pré-requisito: treinado em Ofício (alquimista)."
      },
      {
        "nome": "Apoteose Celestial",
        "descricao": "Sua conexão com o divino se torna ainda mais profunda, às custas de uma fração de sua mortalidade. Você recebe +1 em Sabedoria e aprende uma magia divina de cada círculo a que tenha acesso. Entretanto, sua Constituição diminui em –1. Pré-requisitos: Herança Superior (linhagem celestial), 17° nível de arcanista."
      },
      {
        "nome": "Apoteose Dracônica",
        "descricao": "A influência de sua magia dracônica se torna cada vez mais evidente, tornando-o mais e mais próximo dos dragões. As magias do seu elemento escolhido causam +1 ponto de dano por dado e, contra criaturas imunes a esse elemento, ainda causam metade do dano. Contudo, você não pode mais lançar magias do tipo oposto ao seu elemento escolhido (fogo para frio e ácido para eletricidade). Pré-requisitos: Herança Superior (linhagem dracônica), 17° nível de arcanista."
      },
      {
        "nome": "Apoteose Feérica",
        "descricao": "Sua natureza feérica se acentua, mas isso o afasta do mundo dos mortais. Sempre que um ou mais inimigos falharem em um teste de Vontade contra uma de suas magias, você recebe 1 PM temporário cumulativo que dura até o fim da cena. Se a magia é de encantamento ou ilusão, em vez disso você recebe 2 PM temporários. Em ambos os casos, o ganho é limitado pelo total de PM gasto na magia. Contudo, você não pode mais lançar magias de convocação e necromancia. Pré-requisitos: Herança Superior (linhagem feérica), 17° nível de arcanista."
      },
      {
        "nome": "Apoteose Rubra",
        "descricao": "Você acolheu a corrupção rubra em seu ser — uma escolha que pode ser percebida por todos ao redor. Escolha uma magia que cause dano de cada círculo a que tem acesso. O tipo de dano dessas magias muda para psíquico. Além disso, quando lança uma magia de dano psíquico, você soma seu total de poderes da Tormenta na rolagem de dano. Este poder conta como um poder da Tormenta (exceto para perda de Carisma). Pré-requisitos: Herança Superior (linhagem rubra), 17° nível de arcanista."
      },
      {
        "nome": "Arcanista de Linha de Frente",
        "descricao": "Quando você lança uma magia, criaturas adjacentes sofrem –2 em seus testes de resistência contra ela e, se ela causar dano, causa um dado extra do mesmo tipo."
      },
      {
        "nome": "Asas de Sapo",
        "descricao": "Você pode empunhar dois catalisadores diferentes em uma mão ao mesmo tempo e, quando lança uma magia, pode gastar ambos para aplicar seus efeitos. Pré-requisito: treinado em Ofício (alquimista)."
      },
      {
        "nome": "Contingência Arcana",
        "descricao": "Quando lança Runa de Proteção com o aprimoramento que muda o alvo para 'você', você pode substituir o componente material da magia por uma penalidade em PM igual ao círculo da magia inscrita na runa. Pré-requisito: Runa de Proteção."
      },
      {
        "nome": "Contramágica Superior",
        "descricao": "Quando anula uma magia com uma contramágica, você recebe uma quantidade de PM temporários igual ao círculo da magia anulada (limitada pelos PM que gastou para anular). Pré-requisitos: Contramágica Aprimorada, 9º nível de arcanista."
      },
      {
        "nome": "Especialista em Invocações",
        "descricao": "Você soma seu atributo-chave na Defesa de suas criaturas conjuradas por habilidades mágicas (incluindo capangas) e a ação necessária para comandá-las diminui em um passo (de padrão para movimento e de movimento para livre). Contudo, cada comando só pode ser executado uma vez por rodada."
      },
      {
        "nome": "Familiar Aprimorado",
        "descricao": "Seu familiar pode falar e passa a fornecer um segundo benefício, escolhido entre os tipos comuns de familiares. Pré-requisitos: Familiar, 5º nível de arcanista."
      },
      {
        "nome": "Ingrediente Especial",
        "descricao": "Quando usa uma poção, você pode usar um catalisador e aplicar seus efeitos a ela. Pré-requisitos: Caldeirão do Bruxo, 5º nível de arcanista."
      },
      {
        "nome": "Magia Performática",
        "descricao": "Quando lança uma magia diante de uma ou mais criaturas inteligentes (Int –3 ou mais), você pode fazer um teste de Atuação (CD 20 + custo em PM da magia) para lançá-la de forma impressionante. Se você passar, a CD da magia aumenta em +1. Esse bônus aumenta em +1 para cada 10 pontos pelos quais o teste passar da CD. Se falhar, a magia não funciona. Pré-requisitos: Car 1, treinado em Atuação."
      },
      {
        "nome": "Memória Súbita",
        "descricao": "Escolha uma de suas magias que não esteja memorizada. Você pode gastar uma ação de movimento para memorizar essa magia até o fim da cena. Se fizer isso, uma de suas outras magias memorizadas, a sua escolha, deixa de estar memorizada. Pré-requisito: Mago."
      },
      {
        "nome": "O Próprio Sangue",
        "descricao": "Se você aprender novamente como feiticeiro uma magia que já possa lançar por uma habilidade qualquer (como uma habilidade de raça ou um poder concedido), a CD para resistir a ela aumenta em +2. Pré-requisito: Feiticeiro."
      },
      {
        "nome": "Raio Dividido",
        "descricao": "Você pode usar Raio Arcano como uma ação completa, em vez de padrão. Se fizer isso, ele afeta um número de alvos igual ao seu atributo-chave. Pré-requisitos: Raio Arcano, 5º nível de arcanista."
      },
      {
        "nome": "Sifão de Mana",
        "descricao": "Quando você lança uma magia e pelo menos um inimigo falha no teste de resistência contra ela, você recupera uma quantidade de pontos de mana igual ao círculo da magia (limitada pelo total de PM gastos nela). Pré-requisito: 17° nível de arcanista."
      },
      {
        "nome": "Trama Célere",
        "descricao": "Uma vez por rodada, quando usa uma ação padrão para lançar uma magia, você pode gastar 2 PM para fazer uma conjuração dupla. Isso permite que você lance uma segunda magia de 1º círculo como ação livre, pagando seu custo em PM como normal. Pré-requisito: 9º nível de arcanista."
      },
      {
        "nome": "Transliteração Impossível",
        "descricao": "Quando usa um pergaminho de uma magia que conheça, você recebe +2 PM para gastar em aprimoramentos e a magia não pode ser anulada por contramágica. Pré-requisito: Escriba Arcano."
      },
      {
        "nome": "Encanto Feérico - DB 212 -",
        "descricao": "Escolha uma das suas magias de encantamento de 1º círculo. Uma vez por cena, você pode lançar a versão básica desta magia sem custo em PM (você ainda pode gastar PM para aprimorá-la). Pré-requisitos: eiradaan, qareen ou sílfide."
      },
      {
        "nome": "Familiar Elemental - DB 212 -",
        "descricao": "Se seu familiar tiver o mesmo elemento da sua Resistência Elemental, a redução de dano recebida por essa habilidade aumenta para 15. Pré-requisitos: qareen; um Familiar aquin’ne, paak, terrier ou t’peel; 5º nível de arcanista.",
      },
      {
        "nome": "Herança Erudita - DB 212 -",
        "descricao": "Seu sangue não carrega apenas a fagulha arcana que lhe dá poder, mas o conhecimento do dragão ou criatura feérica de quem você descende. Escolha uma perícia de Inteligência. Você soma seu Carisma nos testes dessa perícia. Pré-requisitos: eiradaan, kallyanach ou sílfide, Feiticeiro.",
      }
    ]
  },
  {
    "nome": "Inventor",
    "livro": "Livro Básico",
    "descricao": "Mais cedo ou mais tarde, as tradições devem dar lugar a algo novo. Enquanto segredos mágicos estão ocultos em tomos empoeirados dentro de torres antigas e a bênção divina depende do favor de entidades caprichosas e imprevisíveis, a ciência está disponível para todos. Aos poucos, gênios espalham conhecimento e avanços por todo o mundo de Arton, por meio de alquimia, mecânica e engenharia. São os inventores.\n\nO inventor é um dos mais raros tipos de aventureiros. Enquanto outros se preocupam com glória, riquezas e missões divinas, o inventor almeja testar e aprimorar suas criações mirabolantes. Enquanto outros contam com força bruta, fé ou mistérios ancestrais, o inventor confia em si mesmo e olha para o futuro. Criatividade, otimismo, paciência e trabalho duro: estas são as armas do inventor.\n\nPoucas pessoas compreendem o papel da ciência na vida dos aventureiros ou no progresso de Arton, vendo os aparatos dos inventores como engenhocas perigosas e instáveis que podem se desmantelar ou explodir a qualquer momento. Nos lugares mais ignorantes, um inventor pode ser tratado como um herege ou um louco imprevisível. Mas mesmo os supersticiosos e desconfiados usam todos os dias as criações de inventores do passado: desde moinhos até armaduras de placas, tudo que hoje em dia é comum já foi uma inovação impressionante.\n\nA maioria dos inventores está sempre insatisfeita. Podem ser irritantes, pois não aceitam passivamente quase nada. Se a noite é escura, o inventor imagina um sistema de lampiões automáticos. Se um abismo é intransponível, o inventor idealiza uma máquina voadora. Se todos ficam velhos e morrem, o inventor especula se algum remédio mirabolante não pode reverter esse processo. Às vezes estes heróis tentam modificar ou aprimorar objetos comuns apenas por tédio ou porque podem: uma espada funciona bem do jeito como é, mas e se colocássemos algumas engrenagens e roldanas para torná-la mais dinâmica? Leis e dogmas que limitam o progresso não fazem sentido para os inventores — muitos deles trabalham com pólvora, dissecam cadáveres ou pesquisam sobre a Tormenta sem se importar com normas ditadas por aristocratas antiquados.\n\nNuma vida de aventuras, muitos inventores não têm tempo para estudar todos os campos científicos e precisam se focar em uma área. Contudo, um inventor veterano é um exemplo do triunfo do intelecto: capaz de imbuir objetos com energia arcana e construir inventos que vão modificar o mundo, facilmente escreve seu nome para sempre na história de Arton.\n\nInventores são exploradores de lugares desconhecidos, cobaias de seus próprios testes e grandes ajudantes de seus aliados. Sua postura inconformada e temerária pode incomodar alguns, mas um inventor não se importa. Ele pertence ao futuro e sabe que nada detém o progresso.",
    "imagem": "https://i0.wp.com/jogaod20.com/wp-content/uploads/2020/08/ua-artifice-revisitado.jpeg",
    "famosos": "Dok, Ingram Brassbones, Marlin, Lorde Niebling.",
    "pv": "12 + Constituição no 1º nível; +3 + Constituição por nível.",
    "pm": "4 PM por nível.",
    "pericias": "Ofício (Int) e Vontade (Sab), mais 4 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Investigação (Int), Luta (For), Misticismo (Int), Ofício (Int), Pilotagem (Des), Percepção (Sab) e Pontaria (Des).",
    "proficiencias": "Nenhuma.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Engenhosidade, protótipo"
      },
      {
        "nivel": "2º",
        "habilidades": "Fabricar item superior (1 melhoria), poder de inventor"
      },
      {
        "nivel": "3º",
        "habilidades": "Comerciante, poder de inventor"
      },
      {
        "nivel": "4º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "5º",
        "habilidades": "Fabricar item superior (2 melhorias), poder de inventor"
      },
      {
        "nivel": "6º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "7º",
        "habilidades": "Encontrar fraqueza, poder de inventor"
      },
      {
        "nivel": "8º",
        "habilidades": "Fabricar item superior (3 melhorias), poder de inventor"
      },
      {
        "nivel": "9º",
        "habilidades": "Fabricar item mágico (menor), poder de inventor"
      },
      {
        "nivel": "10º",
        "habilidades": "Olho do dragão, poder de inventor"
      },
      {
        "nivel": "11º",
        "habilidades": "Fabricar item superior (4 melhorias), poder de inventor"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "13º",
        "habilidades": "Fabricar item mágico (médio), poder de inventor"
      },
      {
        "nivel": "14º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "17º",
        "habilidades": "Fabricar item mágico (maior), poder de inventor"
      },
      {
        "nivel": "18º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "20º",
        "habilidades": "Obra-prima, poder de inventor"
      }
    ],
    "habilidades": [
      {
        "nome": "Engenhosidade",
        "descricao": "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque."
      },
      {
        "nome": "Protótipo",
        "descricao": "Você começa o jogo com um item superior, ou com 10 itens alquímicos, com preço total de até T$ 500."
      },
      {
        "nome": "Fabricar Item Superior",
        "descricao": "No 2º nível, você recebe um item superior com preço de até T$ 2.000 e passa a poder fabricar itens superiores com uma melhoria. Nos níveis 5, 8 e 11, você pode substituir esse item por um item superior com duas, três e quatro melhorias, respectivamente, e passa a poder fabricar itens superiores com essa quantidade de melhorias. Considera-se que você estava trabalhando nos itens e você não gasta dinheiro ou tempo neles (mas gasta em itens que fabricar futuramente)."
      },
      {
        "nome": "Comerciante",
        "descricao": "No 3º nível, você pode vender itens 10% mais caro (não cumulativo com barganha)."
      },
      {
        "nome": "Encontrar Fraqueza",
        "descricao": "A partir do 7º nível, você pode gastar uma ação de movimento e 2 PM para analisar um objeto em alcance curto. Se fizer isso, ignora a redução de dano dele. Você também pode usar esta habilidade para encontrar uma fraqueza em um inimigo. Se ele estiver de armadura ou for um construto, você recebe +2 em seus testes de ataque contra ele. Os benefícios desta habilidade duram até o fim da cena."
      },
      {
        "nome": "Fabricar Item Mágico",
        "descricao": "No 9º nível, você recebe um item mágico menor e passa a poder fabricar itens mágicos menores. Nos níveis 13 e 17, você pode substituir esse item por um item mágico médio e maior, respectivamente, e passa a poder fabricar itens mágicos dessas categorias. Considera-se que você estava trabalhando nos itens que recebe e você não gasta dinheiro, tempo ou pontos de mana neles (mas gasta em itens que fabricar futuramente)."
      },
      {
        "nome": "Olho do Dragão",
        "descricao": "A partir do 10º nível, você pode gastar uma ação completa para analisar um item. Você automaticamente descobre se o item é mágico, suas propriedades e como utilizá-las."
      },
      {
        "nome": "Obra-Prima",
        "descricao": "No 20º nível, você fabrica sua obra-prima, aquela pela qual seu nome será lembrado em eras futuras. Você é livre para criar as regras do item, mas ele deve ser aprovado pelo mestre. Como linha geral, ele pode ter benefícios equivalentes a de um item com cinco melhorias e quatro encantos. Considera-se que você estava trabalhando no item e você não gasta dinheiro, tempo ou PM nele."
      },
      {
        "nome": "Engenhocas",
        "descricao": "Uma engenhoca é uma invenção que simula o efeito de uma magia. Exemplos incluem um canhão (simula o efeito da magia Bola de Fogo), uma arma de raios (Relâmpago), um casaco blindado (Armadura Arcana), um emplastro curativo (Curar Ferimentos), um guarda-costas mecânico (Conjurar Monstro), um projetor de imagens (Criar Ilusão), um veículo a vapor (Montaria Arcana) etc.\n\nUma engenhoca é um item mundano Minúsculo que ocupa 1 espaço e possui Defesa 15, pontos de vida iguais à metade dos PV de seu fabricante e RD 5. Quando é fabricada, escolha se ela será empunhada (precisa estar na sua mão para ser ativada) ou vestida (precisa estar vestida para ser ativada, conta para seu limite de itens vestidos). Ao ser ativada, uma engenhoca pode assumir outra forma. Suas estatísticas não mudam.\n\nFABRICAÇÃO: Para fabricar uma engenhoca, escolha uma magia arcana ou divina de 1º círculo. Essa será a magia que a engenhoca irá simular. A partir do 6º nível, você pode criar engenhocas com magias de 2º círculo e, a cada quatro níveis, pode criar engenhocas de um círculo maior. O custo de fabricação da engenhoca é T$ 100 x o custo em PM da magia que ela simula e a CD do teste é 20 + o custo em PM da magia. O tempo de fabricação é uma semana.\n\nLIMITE DE ENGENHOCAS: O máximo de engenhocas que você pode ter ao mesmo tempo é igual a sua Inteligência.\n\nATIVAÇÃO: Apenas o fabricante de uma engenhoca pode ativá-la. Ativar uma engenhoca exige uma ação padrão (ou a execução da magia, o que for maior) e um teste de Ofício (engenhoqueiro) contra CD 15 + custo em PM da magia. Se você passar, a engenhoca gera o efeito da magia (atributo-chave Int). Se falhar, ela enguiça e não pode ser utilizada até ser consertada, o que exige uma hora de trabalho. Cada nova ativação da engenhoca no mesmo dia aumenta a CD do teste de Ofício em +5.\n\nQuando ativa uma engenhoca, você pode usar quaisquer aprimoramentos da magia que ela simula, até um custo igual a sua Inteligência. A CD para ativar a engenhoca aumenta em +1 por PM e você paga o custo em PM dos aprimoramentos.\n\nEFEITO MUNDANO: O efeito de uma engenhoca não é mágico. Isso significa que ele não pode ser dissipado, funciona em áreas de antimagia etc.\n\nPENALIDADE DE ARMADURA: O teste de Ofício (engenhoqueiro) para ativar engenhocas sofre penalidade de armadura. Porém, você pode ativar engenhocas que geram magias arcanas enquanto usa armadura sem precisar fazer testes de Misticismo.\n\nEFEITOS QUE IMPEDEM CONJURAÇÃO: Um efeito que especificamente impeça um personagem de lançar magias (como a Fúria de um bárbaro ou a magia Transformação de Guerra) também impede um inventor de ativar engenhocas."
      },
      {
        "nome": "Livro de Fórmulas",
        "descricao": "Quando adquire o poder Alquimista Iniciado, você recebe um livro de fórmulas. Uma 'fórmula' é uma magia divina ou arcana (atributo-chave Inteligência) que serve para cumprir os pré-requisitos de fabricação de poções.\n\nVocê começa com três fórmulas de 1º círculo. A cada nível além do 1º, aprende uma fórmula adicional. A partir do 6º nível, pode aprender fórmulas de 2º círculo e, se possuir o poder Mestre Alquimista, a cada quatro níveis (10º, 14º e 18º) pode aprender fórmulas de um círculo maior.\n\nSe não tiver seu livro de fórmulas, você não pode fabricar poções. Se perder seu livro, você pode preparar outro com uma semana de trabalho e o gasto de T$ 100."
      }
    ],
    "poderes": [
      {
        "nome": "Agite Antes de Usar",
        "descricao": "Quando usa um preparado alquímico que cause dano, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo. Pré-requisito: treinado em Ofício (alquimista)."
      },
      {
        "nome": "Ajuste de Mira",
        "descricao": "Você pode gastar uma ação padrão e uma quantidade de PM a sua escolha (limitado pela sua Inteligência) para aprimorar uma arma de ataque à distância. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena. Pré-requisito: Balística."
      },
      {
        "nome": "Alquimista de Batalha",
        "descricao": "Quando usa um preparado alquímico ou poção que cause dano, você soma sua Inteligência na rolagem de dano. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Alquimista Iniciado",
        "descricao": "Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos. Pré-requisitos: Int 1, Sab 1, treinado em Ofício (alquimista)."
      },
      {
        "nome": "Armeiro",
        "descricao": "Você recebe proficiência com armas marciais corpo a corpo. Quando empunha uma arma corpo a corpo, pode usar sua Inteligência em vez de Força nos testes de ataque e rolagens de dano. Pré-requisitos: treinado em Luta e Ofício (armeiro)."
      },
      {
        "nome": "Ativação Rápida",
        "descricao": "Ao ativar uma engenhoca com ação padrão, você pode pagar 2 PM para ativá-la com uma ação de movimento, em vez disto. Pré-requisitos: Engenhoqueiro, 7º nível de inventor."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Autômato",
        "descricao": "Você fabrica um autômato, um construto que obedece a seus comandos. Ele é um parceiro iniciante de um tipo a sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele muda para veterano e, no 15º nível, para mestre. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Autômato Prototipado",
        "descricao": "Você pode gastar uma ação padrão e 2 PM para ativar uma melhoria experimental em seu autômato. Role 1d6. Em um resultado 2 a 6, você aumenta o nível de parceiro do autômato em um passo (até mestre), ou concede a ele a habilidade iniciante de outro de seus tipos, até o fim da cena. Em um resultado 1, o autômato enguiça como uma engenhoca. Pré-requisito: Autômato."
      },
      {
        "nome": "Balística",
        "descricao": "Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar sua Inteligência em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano). Pré-requisitos: treinado em Pontaria e Ofício (armeiro)."
      },
      {
        "nome": "Blindagem",
        "descricao": "Você pode usar sua Inteligência na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso. Pré-requisitos: Couraceiro, 8º nível de inventor."
      },
      {
        "nome": "Cano Raiado",
        "descricao": "Quando usa uma arma de disparo feita por você mesmo, ela recebe +1 na margem de ameaça. Pré-requisitos: Balística, 5º nível de inventor."
      },
      {
        "nome": "Catalisador Instável",
        "descricao": "Você pode gastar uma ação completa e 3 PM para fabricar um preparado alquímico ou poção cuja fórmula conheça instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimista), mas ele só dura até o fim da cena. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Chutes e Palavrões",
        "descricao": "Uma vez por rodada, quando faz um teste de Ofício (engenhoqueiro) para ativar uma engenhoca, você pode gastar 1 PM para rolá-lo novamente. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Conhecimento de Fórmulas",
        "descricao": "Você aprende três fórmulas de quaisquer círculos que possa aprender. Você pode escolher este poder quantas vezes quiser. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Couraceiro",
        "descricao": "Você recebe proficiência com armaduras pesadas e escudos. Quando usa armadura, pode usar sua Inteligência em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada). Pré-requisito: treinado em Ofício (armeiro)."
      },
      {
        "nome": "Engenhoqueiro",
        "descricao": "Você pode fabricar engenhocas. Pré-requisitos: Int 3, treinado em Ofício (engenhoqueiro)."
      },
      {
        "nome": "Farmacêutico",
        "descricao": "Quando usa um item alquímico que cure pontos de vida, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item cura um dado extra do mesmo tipo. Pré-requisitos: Sab 1, treinado em Ofício (alquimista)."
      },
      {
        "nome": "Ferreiro",
        "descricao": "Quando usa uma arma corpo a corpo feita por você mesmo, o dano dela aumenta em um passo. Pré-requisitos: Armeiro, 5º nível de inventor."
      },
      {
        "nome": "Granadeiro",
        "descricao": "Você pode arremessar itens alquímicos e poções em alcance médio. Você pode usar sua Inteligência em vez de Destreza para calcular a CD do teste de resistência desses itens. Pré-requisito: Alquimista de Batalha."
      },
      {
        "nome": "Homúnculo",
        "descricao": "Você possui um homúnculo, uma criatura Minúscula feita de alquimia. Vocês podem se comunicar telepaticamente em alcance longo e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho pode fazer. Um homúnculo é um parceiro ajudante iniciante. Você pode perder 1d6 pontos de vida para seu homúnculo assumir uma forma capaz de protegê-lo e se tornar também um parceiro guardião iniciante até o fim da cena. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Invenção Potente",
        "descricao": "Quando usa um item ou engenhoca fabricado por você mesmo, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ele."
      },
      {
        "nome": "Maestria em Perícia",
        "descricao": "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários. Quando faz um teste dessas perícias, você pode gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque."
      },
      {
        "nome": "Manutenção Eficiente",
        "descricao": "A quantidade de engenhocas que você pode manter aumenta em +3. Além disso, cada engenhoca passa a ocupar meio espaço. Pré-requisitos: Engenhoqueiro, 5º nível de inventor."
      },
      {
        "nome": "Mestre Alquimista",
        "descricao": "Você pode fabricar poções com fórmulas que conheça de qualquer círculo. Pré-requisitos: Int 3, Sab 3, Alquimista Iniciado, 10º nível de inventor."
      },
      {
        "nome": "Mestre Cuca",
        "descricao": "Todas as comidas que você cozinha têm seu bônus numérico aumentado em +1. Pré-requisito: treinado em Ofício (cozinheiro)."
      },
      {
        "nome": "Mistura Fervilhante",
        "descricao": "Quando usa um item alquímico ou poção, você pode gastar 2 PM para dobrar a área de efeito dele. Pré-requisitos: Alquimista Iniciado, 5º nível de inventor."
      },
      {
        "nome": "Oficina de Campo",
        "descricao": "Você pode gastar uma hora e 2 PM para fazer a manutenção do equipamento de seu grupo. Cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque, armaduras e escudos aumentam seu bônus na Defesa em +1. Os benefícios duram um dia. Pré-requisito: treinado em Ofício (armeiro)."
      },
      {
        "nome": "Pedra de Amolar",
        "descricao": "Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado por sua Inteligência) para aprimorar uma arma corpo a corpo que esteja empunhando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena. Pré-requisito: Armeiro."
      },
      {
        "nome": "Síntese Rápida",
        "descricao": "Quando fabrica um item alquímico ou poção, você pode fabricar o dobro de doses no mesmo tempo (pagando o custo de matéria-prima de cada uma). Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Alquimista Exímio",
        "descricao": "Quando você usa um preparado alquímico ou uma poção, a CD para resistir a ele aumenta em +2 e, se ele causar dano ou recuperar PV ou PM, esse efeito aumenta em +1 por dado. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Alterar Programação",
        "descricao": "Você pode gastar uma ação completa e 3 PM para alterar a programação de um construto não inteligente (Int –4 ou menor) adjacente. Faça um teste de Ofício (artesão) oposto ao teste de Vontade do construto. Se você vencer, ele fica confuso por 1 rodada e vulnerável. Se for um lacaio, em vez disso fica sob seu controle até o fim da aventura. Você só pode controlar um construto dessa forma por vez e cada construto só pode ser alvo deste poder uma vez por cena. Pré-requisito: treinado em Ofício (artesão)."
      },
      {
        "nome": "Aparato Personalizado",
        "descricao": "O primeiro aparato de cada uma de suas engenhocas não aumenta a CD para ativá-la. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Armadura Avançada",
        "descricao": "Quando ativa uma engenhoca acoplada, você recebe um bônus no teste de ativação igual ao número de melhorias da armadura. Além disso, você pode gastar 4 PM para ativar uma engenhoca acoplada como ação livre (apenas se sua ativação for ação de movimento, padrão ou completa). Pré-requisitos: Armadura Mecanizada, 7º nível de inventor."
      },
      {
        "nome": "Armadura Mecanizada",
        "descricao": "Você pode gastar T$ 100 e 1 dia de trabalho para acoplar uma engenhoca em sua armadura. Armaduras leves podem ter uma engenhoca acoplada e armaduras pesadas podem ter até três. Uma engenhoca acoplada não conta em seu limite de itens vestidos e não precisa ser empunhada. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Artesão Criativo",
        "descricao": "Você pode usar Ofício (artesão) no lugar de qualquer outro Ofício para qualquer fim (como pré-requisitos, por exemplo). Pré-requisito: treinado em Ofício (artesão)."
      },
      {
        "nome": "Autômato Alquímico",
        "descricao": "Seu autômato pode armazenar itens alquímicos e poções, com uma capacidade de carga igual à sua Inteligência. Além disso, uma vez por rodada, você pode gastar 1 PM para usar um desses itens como uma ação livre. Pré-requisito: Autômato."
      },
      {
        "nome": "Autômato Engenhocado",
        "descricao": "Você pode gastar T$ 100 e 1 dia de trabalho para acoplar em seu autômato uma engenhoca que simule uma magia de 1º círculo com alvo 1 criatura ou objeto, ou que afete uma área. Uma vez por rodada, se o autômato estiver em alcance curto, você pode gastar +2 PM para ativar essa engenhoca como uma ação de movimento, tendo como origem o autômato. Pré-requisito: Autômato Prototipado."
      },
      {
        "nome": "Catalisador Experimental",
        "descricao": "Quando ativa uma engenhoca, você pode usar um catalisador e aplicar seus efeitos a ela. Pré-requisitos: Engenhoqueiro, 5º nível de inventor."
      },
      {
        "nome": "Estilista",
        "descricao": "Se estiver vestindo um item de vestuário feito por você mesmo, o bônus em perícias fornecido por ele aumenta em +1 e se aplica também a testes de Diplomacia e Enganação com criaturas inteligentes (Int –3 ou maior). Pré-requisitos: Car 1, treinado em Ofício (alfaiate)."
      },
      {
        "nome": "Explicação Científica",
        "descricao": "Você pode gastar uma ação de movimento e uma quantidade de PM limitada pela sua Inteligência para receber resistência a magia igual aos PM gastos até o fim da cena. Pré-requisito: 5º nível de inventor."
      },
      {
        "nome": "Explorar Fraqueza",
        "descricao": "Quando usa Encontrar Fraqueza em um inimigo, você também ignora 5 pontos da redução de dano dele até o fim da cena. Pré-requisito: Encontrar Fraqueza."
      },
      {
        "nome": "Farmácia Mágica",
        "descricao": "Você pode usar Farmacêutico em poções de cura. Pré-requisitos: Alquimista Iniciado, Farmacêutico."
      },
      {
        "nome": "Forçar a Calibragem",
        "descricao": "Quando faz um teste para ativar uma engenhoca, você pode sofrer uma penalidade de –5 nesse teste para aumentar a CD para resistir à engenhoca em +2. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Galvanização",
        "descricao": "Você pode gastar uma ação padrão para adicionar um material especial a um item adequado (isso não conta no limite de melhorias do item e se acumula com outros materiais especiais). O preço do material é reduzido a 5% do normal e você não precisa fazer o teste de Ofício para aplicá-lo, mas ele só dura até o fim da cena. Pré-requisito: treinado em Ofício (artesão)."
      },
      {
        "nome": "Gênio Inovador",
        "descricao": "Você entende o mundo de forma diferente, e sua capacidade de inovar é quase ilimitada. Você pode usar Inteligência como atributo-chave de até duas perícias a sua escolha (em vez do atributo normal). Além disso, quando fabrica um item superior, você pode adicionar uma melhoria extra gratuita, que não conta no limite. Por fim, os itens que você fabrica podem ter dois materiais especiais diferentes (em vez de apenas um). Pré-requisito: 17º nível de inventor."
      },
      {
        "nome": "Golpe de Gênio",
        "descricao": "Uma vez por aventura (ou uma vez por mês, de acordo com o mestre), você pode usar Engenhosidade duas vezes em um mesmo teste, ou pode fabricar um item superior ou mágico com uma semana de trabalho (em vez de um mês). Pré-requisito: 11º nível de inventor."
      },
      {
        "nome": "Infusão Distante",
        "descricao": "Quando usa um item alquímico ou uma poção que normalmente afetaria apenas um alvo adjacente, você pode gastar 1 PM para afetar um alvo em alcance curto. Se tiver o poder Granadeiro, em vez disso você afeta um alvo em alcance médio. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Oficina Esotérica",
        "descricao": "Você pode usar Oficina de Campo em itens esotéricos, poções e pergaminhos. Itens esotéricos aumentam o limite de PM para magias em +1, poções rendem duas doses (a segunda dose deve ser consumida até o fim do dia) e pergaminhos permitem gastar +1 PM em aprimoramentos (mesmo que o usuário não conheça a magia). Pré-requisitos: treinado em Misticismo, Oficina de Campo."
      },
      {
        "nome": "Saraivada Alquímica",
        "descricao": "Quando usa um preparado alquímico ou uma poção de dano, você pode gastar 2 PM e uma dose extra do mesmo item para aumentar o dano causado em 50%. Pré-requisitos: Granadeiro, 7º nível de inventor."
      },
      {
        "nome": "Armadura de Suporte - DB 212 -",
        "descricao": "Se estiver usando armadura pesada, você pode gastar 1 PM para ignorar o dano adicional que sofreria por conta da habilidade Ossos Frágeis. Pré-requisitos: kliren, Couraceiro.",
      },
      {
        "nome": "Síntese Goblin - DB 212 -",
        "descricao": "Quando fabrica um item alquímico ou poção, você pode fabricar uma dose a mais (pagando metade do seu custo em matéria-prima); mas o item é feito de forma rápida e desleixada; ao ser usado, tem 25% de chance (1 em 1d4) de não surtir efeito. Pré-requisitos: goblin, Síntese Alquímica.",
      }
    ]
  },
  {
    "nome": "Alquimista",
    "livro": "Heróis de Arton",
    "descricao": "\"Transformar chumbo em ouro é apenas o começo.\"\n\nInventores são artesãos versáteis, capazes de fabricar, consertar e aprimorar vários tipos de itens. Contudo, alguns pensam que os únicos itens que merecem tamanho esmero são aqueles que elevam Arton de forma física e espiritual. O único ofício verdadeiramente transcendente é a alquimia.\n\nO alquimista é um inventor que busca mais do que criar objetos mundanos: cada preparado teria um componente místico, afetando a alma de quem o usa. Assim, ácido não seria apenas uma maneira de causar dano, mas um modo de destruir o que é velho, para que possa ser substituído pelo novo. Essência de mana não seria apenas um elixir de ervas, mas energia materializada, capaz de elevar a mente. Para o alquimista, o verdadeiro ofício é compreender como Arton está conectada a outras dimensões, outros mundos, outras realidades — e imbuir seus preparados com essa compreensão transcendental.\n\nUm ditado comum entre alquimistas é \"Assim acima como abaixo\": todo ato em Arton teria um reflexo nos reinos dos deuses e todo item alquímico seria uma metáfora para algum processo de transformação espiritual. Dizem que os maiores alquimistas podem transformar chumbo em ouro... Mas apenas os aprendizes pensam que isso é sobre riqueza.",
    "imagem": "https://static.wikia.nocookie.net/nightupmare/images/5/5a/Alquimista.jpg/revision/latest?cb=20190605030006&path-prefix=pt-br",
    "famosos": "",
    "pv": "12 + Constituição no 1º nível; +3 + Constituição por nível.",
    "pm": "4 PM por nível.",
    "pericias": "Ofício (Int) e Vontade (Sab), mais 4 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Investigação (Int), Luta (For), Misticismo (Int), Ofício (Int), Pilotagem (Des), Percepção (Sab) e Pontaria (Des).",
    "proficiencias": "Nenhuma.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Engenhosidade, laboratório pessoal"
      },
      {
        "nivel": "2º",
        "habilidades": "Alquimista iniciado, poder de inventor"
      },
      {
        "nivel": "3º",
        "habilidades": "Mistura básica, poder de inventor"
      },
      {
        "nivel": "4º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "5º",
        "habilidades": "Aplicação rápida, poder de inventor"
      },
      {
        "nivel": "6º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "7º",
        "habilidades": "Magia engarrafada, poder de inventor"
      },
      {
        "nivel": "8º",
        "habilidades": "Odores alquímicos, poder de inventor"
      },
      {
        "nivel": "9º",
        "habilidades": "Fabricar emulsão (1 encanto), poder de inventor"
      },
      {
        "nivel": "10º",
        "habilidades": "Mestre alquimista, poder de inventor"
      },
      {
        "nivel": "11º",
        "habilidades": "Bombardeio eficiente, poder de inventor"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "13º",
        "habilidades": "Fabricar emulsão (2 encantos), poder de inventor"
      },
      {
        "nivel": "14º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "17º",
        "habilidades": "Fabricar emulsão (3 encantos), poder de inventor"
      },
      {
        "nivel": "18º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de inventor"
      },
      {
        "nivel": "20º",
        "habilidades": "Pedra filosofal, poder de inventor"
      }
    ],
    "habilidades": [
      {
        "nome": "Engenhosidade",
        "descricao": "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque."
      },
      {
        "nome": "Laboratório Pessoal",
        "descricao": "Você começa o jogo com instrumentos de alquimista aprimorados e 10 itens alquímicos com preço total de até T$ 300."
      },
      {
        "nome": "Alquimista Iniciado",
        "descricao": "No 2º nível, você recebe o poder Alquimista Iniciado. Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos. Pré-requisitos: Int 1, Sab 1, treinado em Ofício (alquimista)."
      },
      {
        "nome": "Mistura Básica",
        "descricao": "A partir do 3º nível, você pode usar catalisadores em itens alquímicos como se fossem magias."
      },
      {
        "nome": "Aplicação Rápida",
        "descricao": "No 5º nível, você pode gastar uma ação completa e 2 PM para usar dois preparados alquímicos ao mesmo tempo. Você precisa ter ambos em suas mãos ou ser capaz de sacá-los como ação livre."
      },
      {
        "nome": "Magia Engarrafada",
        "descricao": "No 7º nível, você pode usar Mistura Básica e Aplicação Rápida em poções."
      },
      {
        "nome": "Odores Alquímicos",
        "descricao": "A partir do 8º nível, você pode gastar uma ação completa para detectar a presença de itens alquímicos e poções em alcance médio. No caso de itens alquímicos, você descobre seu tipo (preparado, veneno etc.) e uso geral (curar, fornecer bônus etc.). Para poções, você identifica qual magia ela emula e com quantos pontos de mana foi fabricada."
      },
      {
        "nome": "Fabricar Emulsão",
        "descricao": "No 9º nível, você aprende a fabricar emulsões com um encanto. Nos níveis 13 e 17, você aprende a fabricar emulsões com respectivamente dois e três encantos. Uma emulsão é um óleo que concede propriedades mágicas a um item. Usá-la é uma ação padrão e fornece um ou mais encantos para um item até o fim da cena. Conceder um encanto através de uma emulsão não tem custo adicional (além do gasto do óleo) e conta no limite de encantos do item. Fabricar uma emulsão segue as mesmas regras para itens alquímicos, com custo e CD baseados na quantidade de encantos: 1 encanto (T$ 250, CD 25), 2 encantos (T$ 750, CD 30), 3 encantos (T$ 1.500, CD 35). Por sua volatilidade, emulsões não são comercializadas."
      },
      {
        "nome": "Mestre Alquimista",
        "descricao": "No 10º nível, você recebe o poder Mestre Alquimista. Você pode fabricar poções com fórmulas que conheça de qualquer círculo. Pré-requisitos: Int 3, Sab 3, Alquimista Iniciado, 10º nível de inventor."
      },
      {
        "nome": "Bombardeio Eficiente",
        "descricao": "A partir do 11º nível, quando usa um preparado alquímico ou uma poção que causa dano, você pode gastar 1 PM para que esse item ignore 10 pontos da redução de dano das criaturas atingidas."
      },
      {
        "nome": "Pedra Filosofal",
        "descricao": "No 20º nível, você recebe uma pedra filosofal, um material que combina alquimia, magia e sua própria energia vital em uma fórmula única. Enquanto estiver de posse de sua pedra filosofal, você tem Cura Acelerada 10 e, quando faz um teste de Fortitude, rola dois dados e usa o melhor resultado. Além disso, se você ou um aliado em alcance curto for reduzido a 0 PV ou morrer, você pode sacrificar sua pedra filosofal para salvar essa criatura. A pedra se estilhaça em uma explosão de energia positiva que fornece ao alvo o efeito básico da magia Segunda Chance (com o efeito adicional de reconstruir o corpo do alvo, caso tenha sido destruído ou desintegrado). Você só pode ter uma pedra filosofal por vez; se perdê-la, pode fabricar outra com uma semana de trabalho e o gasto de T$ 18.000."
      }
    ],
    "poderes": [
      {
        "nome": "Agite Antes de Usar",
        "descricao": "Quando usa um preparado alquímico que cause dano, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo. Pré-requisito: treinado em Ofício (alquimista)."
      },
      {
        "nome": "Ajuste de Mira",
        "descricao": "Você pode gastar uma ação padrão e uma quantidade de PM a sua escolha (limitado pela sua Inteligência) para aprimorar uma arma de ataque à distância. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena. Pré-requisito: Balística."
      },
      {
        "nome": "Alquimista de Batalha",
        "descricao": "Quando usa um preparado alquímico ou poção que cause dano, você soma sua Inteligência na rolagem de dano. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Alquimista Exímio",
        "descricao": "Quando você usa um preparado alquímico ou uma poção, a CD para resistir a ele aumenta em +2 e, se ele causar dano ou recuperar PV ou PM, esse efeito aumenta em +1 por dado. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Alterar Programação",
        "descricao": "Você pode gastar uma ação completa e 3 PM para alterar a programação de um construto não inteligente (Int –4 ou menor) adjacente. Faça um teste de Ofício (artesão) oposto ao teste de Vontade do construto. Se você vencer, ele fica confuso por 1 rodada e vulnerável. Se for um lacaio, em vez disso fica sob seu controle até o fim da aventura. Você só pode controlar um construto dessa forma por vez e cada construto só pode ser alvo deste poder uma vez por cena. Pré-requisito: treinado em Ofício (artesão)."
      },
      {
        "nome": "Aparato Personalizado",
        "descricao": "O primeiro aparato de cada uma de suas engenhocas não aumenta a CD para ativá-la. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Armadura Avançada",
        "descricao": "Quando ativa uma engenhoca acoplada, você recebe um bônus no teste de ativação igual ao número de melhorias da armadura. Além disso, você pode gastar 4 PM para ativar uma engenhoca acoplada como ação livre (apenas se sua ativação for ação de movimento, padrão ou completa). Pré-requisitos: Armadura Mecanizada, 7º nível de inventor."
      },
      {
        "nome": "Armadura Mecanizada",
        "descricao": "Você pode gastar T$ 100 e 1 dia de trabalho para acoplar uma engenhoca em sua armadura. Armaduras leves podem ter uma engenhoca acoplada e armaduras pesadas podem ter até três. Uma engenhoca acoplada não conta em seu limite de itens vestidos e não precisa ser empunhada. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Armeiro",
        "descricao": "Você recebe proficiência com armas marciais corpo a corpo. Quando empunha uma arma corpo a corpo, pode usar sua Inteligência em vez de Força nos testes de ataque e rolagens de dano. Pré-requisitos: treinado em Luta e Ofício (armeiro)."
      },
      {
        "nome": "Artesão Criativo",
        "descricao": "Você pode usar Ofício (artesão) no lugar de qualquer outro Ofício para qualquer fim (como pré-requisitos, por exemplo). Pré-requisito: treinado em Ofício (artesão)."
      },
      {
        "nome": "Ativação Rápida",
        "descricao": "Ao ativar uma engenhoca com ação padrão, você pode pagar 2 PM para ativá-la com uma ação de movimento, em vez disto. Pré-requisitos: Engenhoqueiro, 7º nível de inventor."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Autômato",
        "descricao": "Você fabrica um autômato, um construto que obedece a seus comandos. Ele é um parceiro iniciante de um tipo a sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele muda para veterano e, no 15º nível, para mestre. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Autômato Alquímico",
        "descricao": "Seu autômato pode armazenar itens alquímicos e poções, com uma capacidade de carga igual à sua Inteligência. Além disso, uma vez por rodada, você pode gastar 1 PM para usar um desses itens como uma ação livre. Pré-requisito: Autômato."
      },
      {
        "nome": "Autômato Engenhocado",
        "descricao": "Você pode gastar T$ 100 e 1 dia de trabalho para acoplar em seu autômato uma engenhoca que simule uma magia de 1º círculo com alvo 1 criatura ou objeto, ou que afete uma área. Uma vez por rodada, se o autômato estiver em alcance curto, você pode gastar +2 PM para ativar essa engenhoca como uma ação de movimento, tendo como origem o autômato. Pré-requisito: Autômato Prototipado."
      },
      {
        "nome": "Autômato Prototipado",
        "descricao": "Você pode gastar uma ação padrão e 2 PM para ativar uma melhoria experimental em seu autômato. Role 1d6. Em um resultado 2 a 6, você aumenta o nível de parceiro do autômato em um passo (até mestre), ou concede a ele a habilidade iniciante de outro de seus tipos, até o fim da cena. Em um resultado 1, o autômato enguiça como uma engenhoca. Pré-requisito: Autômato."
      },
      {
        "nome": "Balística",
        "descricao": "Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar sua Inteligência em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano). Pré-requisitos: treinado em Pontaria e Ofício (armeiro)."
      },
      {
        "nome": "Blindagem",
        "descricao": "Você pode usar sua Inteligência na Defesa quando usa armadura pesada. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos permitam isso. Pré-requisitos: Couraceiro, 8º nível de inventor."
      },
      {
        "nome": "Cano Raiado",
        "descricao": "Quando usa uma arma de disparo feita por você mesmo, ela recebe +1 na margem de ameaça. Pré-requisitos: Balística, 5º nível de inventor."
      },
      {
        "nome": "Catalisador Experimental",
        "descricao": "Quando ativa uma engenhoca, você pode usar um catalisador e aplicar seus efeitos a ela. Pré-requisitos: Engenhoqueiro, 5º nível de inventor."
      },
      {
        "nome": "Catalisador Instável",
        "descricao": "Você pode gastar uma ação completa e 3 PM para fabricar um preparado alquímico ou poção cuja fórmula conheça instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimista), mas ele só dura até o fim da cena. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Chutes e Palavrões",
        "descricao": "Uma vez por rodada, quando faz um teste de Ofício (engenhoqueiro) para ativar uma engenhoca, você pode gastar 1 PM para rolá-lo novamente. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Conhecimento de Fórmulas",
        "descricao": "Você aprende três fórmulas de quaisquer círculos que possa aprender. Você pode escolher este poder quantas vezes quiser. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Couraceiro",
        "descricao": "Você recebe proficiência com armaduras pesadas e escudos. Quando usa armadura, pode usar sua Inteligência em vez de Destreza na Defesa (mas continua não podendo somar um atributo na Defesa quando usa armadura pesada). Pré-requisito: treinado em Ofício (armeiro)."
      },
      {
        "nome": "Engenhoqueiro",
        "descricao": "Você pode fabricar engenhocas. Pré-requisitos: Int 3, treinado em Ofício (engenhoqueiro)."
      },
      {
        "nome": "Estilista",
        "descricao": "Se estiver vestindo um item de vestuário feito por você mesmo, o bônus em perícias fornecido por ele aumenta em +1 e se aplica também a testes de Diplomacia e Enganação com criaturas inteligentes (Int –3 ou maior). Pré-requisitos: Car 1, treinado em Ofício (alfaiate)."
      },
      {
        "nome": "Explicação Científica",
        "descricao": "Você pode gastar uma ação de movimento e uma quantidade de PM limitada pela sua Inteligência para receber resistência a magia igual aos PM gastos até o fim da cena. Pré-requisito: 5º nível de inventor."
      },
      {
        "nome": "Explorar Fraqueza",
        "descricao": "Quando usa Encontrar Fraqueza em um inimigo, você também ignora 5 pontos da redução de dano dele até o fim da cena. Pré-requisito: Encontrar Fraqueza."
      },
      {
        "nome": "Farmacêutico",
        "descricao": "Quando usa um item alquímico que cure pontos de vida, você pode gastar uma quantidade de PM a sua escolha (limitado por sua Inteligência). Para cada PM que gastar, o item cura um dado extra do mesmo tipo. Pré-requisitos: Sab 1, treinado em Ofício (alquimista)."
      },
      {
        "nome": "Farmácia Mágica",
        "descricao": "Você pode usar Farmacêutico em poções de cura. Pré-requisitos: Alquimista Iniciado, Farmacêutico."
      },
      {
        "nome": "Ferreiro",
        "descricao": "Quando usa uma arma corpo a corpo feita por você mesmo, o dano dela aumenta em um passo. Pré-requisitos: Armeiro, 5º nível de inventor."
      },
      {
        "nome": "Forçar a Calibragem",
        "descricao": "Quando faz um teste para ativar uma engenhoca, você pode sofrer uma penalidade de –5 nesse teste para aumentar a CD para resistir à engenhoca em +2. Pré-requisito: Engenhoqueiro."
      },
      {
        "nome": "Galvanização",
        "descricao": "Você pode gastar uma ação padrão para adicionar um material especial a um item adequado (isso não conta no limite de melhorias do item e se acumula com outros materiais especiais). O preço do material é reduzido a 5% do normal e você não precisa fazer o teste de Ofício para aplicá-lo, mas ele só dura até o fim da cena. Pré-requisito: treinado em Ofício (artesão)."
      },
      {
        "nome": "Gênio Inovador",
        "descricao": "Você entende o mundo de forma diferente, e sua capacidade de inovar é quase ilimitada. Você pode usar Inteligência como atributo-chave de até duas perícias a sua escolha (em vez do atributo normal). Além disso, quando fabrica um item superior, você pode adicionar uma melhoria extra gratuita, que não conta no limite. Por fim, os itens que você fabrica podem ter dois materiais especiais diferentes (em vez de apenas um). Pré-requisito: 17º nível de inventor."
      },
      {
        "nome": "Golpe de Gênio",
        "descricao": "Uma vez por aventura (ou uma vez por mês, de acordo com o mestre), você pode usar Engenhosidade duas vezes em um mesmo teste, ou pode fabricar um item superior ou mágico com uma semana de trabalho (em vez de um mês). Pré-requisito: 11º nível de inventor."
      },
      {
        "nome": "Granadeiro",
        "descricao": "Você pode arremessar itens alquímicos e poções em alcance médio. Você pode usar sua Inteligência em vez de Destreza para calcular a CD do teste de resistência desses itens. Pré-requisito: Alquimista de Batalha."
      },
      {
        "nome": "Homúnculo",
        "descricao": "Você possui um homúnculo, uma criatura Minúscula feita de alquimia. Vocês podem se comunicar telepaticamente em alcance longo e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho pode fazer. Um homúnculo é um parceiro ajudante iniciante. Você pode perder 1d6 pontos de vida para seu homúnculo assumir uma forma capaz de protegê-lo e se tornar também um parceiro guardião iniciante até o fim da cena. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Infusão Distante",
        "descricao": "Quando usa um item alquímico ou uma poção que normalmente afetaria apenas um alvo adjacente, você pode gastar 1 PM para afetar um alvo em alcance curto. Se tiver o poder Granadeiro, em vez disso você afeta um alvo em alcance médio. Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Invenção Potente",
        "descricao": "Quando usa um item ou engenhoca fabricado por você mesmo, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ele."
      },
      {
        "nome": "Maestria em Perícia",
        "descricao": "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários. Quando faz um teste dessas perícias, você pode gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque."
      },
      {
        "nome": "Manutenção Eficiente",
        "descricao": "A quantidade de engenhocas que você pode manter aumenta em +3. Além disso, cada engenhoca passa a ocupar meio espaço. Pré-requisitos: Engenhoqueiro, 5º nível de inventor."
      },
      {
        "nome": "Mestre Cuca",
        "descricao": "Todas as comidas que você cozinha têm seu bônus numérico aumentado em +1. Pré-requisito: treinado em Ofício (cozinheiro)."
      },
      {
        "nome": "Mistura Fervilhante",
        "descricao": "Quando usa um item alquímico ou poção, você pode gastar 2 PM para dobrar a área de efeito dele. Pré-requisitos: Alquimista Iniciado, 5º nível de inventor."
      },
      {
        "nome": "Oficina de Campo",
        "descricao": "Você pode gastar uma hora e 2 PM para fazer a manutenção do equipamento de seu grupo. Cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque, armaduras e escudos aumentam seu bônus na Defesa em +1. Os benefícios duram um dia. Pré-requisito: treinado em Ofício (armeiro)."
      },
      {
        "nome": "Oficina Esotérica",
        "descricao": "Você pode usar Oficina de Campo em itens esotéricos, poções e pergaminhos. Itens esotéricos aumentam o limite de PM para magias em +1, poções rendem duas doses (a segunda dose deve ser consumida até o fim do dia) e pergaminhos permitem gastar +1 PM em aprimoramentos (mesmo que o usuário não conheça a magia). Pré-requisitos: treinado em Misticismo, Oficina de Campo."
      },
      {
        "nome": "Pedra de Amolar",
        "descricao": "Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado por sua Inteligência) para aprimorar uma arma corpo a corpo que esteja empunhando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena. Pré-requisito: Armeiro."
      },
      {
        "nome": "Saraivada Alquímica",
        "descricao": "Quando usa um preparado alquímico ou uma poção de dano, você pode gastar 2 PM e uma dose extra do mesmo item para aumentar o dano causado em 50%. Pré-requisitos: Granadeiro, 7º nível de inventor."
      },
      {
        "nome": "Síntese Rápida",
        "descricao": "Quando fabrica um item alquímico ou poção, você pode fabricar o dobro de doses no mesmo tempo (pagando o custo de matéria-prima de cada uma). Pré-requisito: Alquimista Iniciado."
      },
      {
        "nome": "Armadura de Suporte - DB 212 -",
        "descricao": "Se estiver usando armadura pesada, você pode gastar 1 PM para ignorar o dano adicional que sofreria por conta da habilidade Ossos Frágeis. Pré-requisitos: kliren, Couraceiro.",
      },
      {
        "nome": "Síntese Goblin - DB 212 -",
        "descricao": "Quando fabrica um item alquímico ou poção, você pode fabricar uma dose a mais (pagando metade do seu custo em matéria-prima); mas o item é feito de forma rápida e desleixada; ao ser usado, tem 25% de chance (1 em 1d4) de não surtir efeito. Pré-requisitos: goblin, Síntese Alquímica.",
      }
    ]
  },
  {
    "nome": "Treinador",
    "livro": "Heróis de Arton",
    "descricao": "Quando um poderoso tachygloss ou uma alcateia gorlogg irrompem no campo de batalha, dilacerando alvos em apenas um lado do conflito, é quase certo que existe um treinador por trás.\n\nFigura mística e enigmática, o treinador é um mestre das criaturas ferais que compartilham Arton com os povos humanoides. Suas habilidades permitem convocar animais, monstros e outras feras como combatentes, montarias, bestas de carga ou simples mascotes. Há quem os confunda com druidas, por sua afinidade com o mundo selvagem, mas é um erro pensar assim. Embora alguns sejam de fato abençoados por Allihanna ou Megalokk, outros adquirem seus talentos exóticos de formas totalmente diferentes, tão variadas quanto os seres que comandam. Treinadores podem ser selvagens, mas também urbanos, eruditos, até palacianos.\n\nAlguns treinadores foram criados por animais após serem abandonados ou perdidos quando crianças, adotados por matilhas de gorloggs, bandos de lagartos-terror ou outras bestas. Crescendo entre feras, desenvolveram entendimento instintivo de suas linguagens e comportamentos. Outros receberam seus dons como bênçãos, escolhidos pelos deuses como seus campeões no mundo mortal. Há aqueles cuja conexão com animais e monstros é fruto de alguma herança sobrenatural, descendentes de antigos espíritos, celestiais ou abissais. E outros, ainda, apenas passaram por treinamento severo e obsessivo, aprendendo a domar e treinar bestas com paciência, coragem e conhecimento profundo.\n\nUma das habilidades mais impressionantes do treinador é ser capaz de deter, acalmar ou domar feras selvagens, derrotando-as sem lutar. Com uma combinação de palavras, gestos e uma aura natural de autoridade, ele pode neutralizar as criaturas mais ferozes sem derramamento de sangue — ou mesmo transformá-las em aliadas! Pode assim resolver conflitos de forma pacífica, protegendo tanto as pessoas quanto as próprias feras.\n\nEnquanto muitos treinadores atraem animais e monstros conhecidos, outros podem adotar seleções mais estranhas. Talvez exista um deles capaz de invocar bestas elementais que emergem da natureza ao redor. Outro que manifesta e controla enxames de construtos animalescos. Outro ainda que roga aos deuses para invocar feras celestiais — ou abissais, quando recorre a deuses malignos. E algum pode até ser louco ou depravado o bastante para convocar aberrações da Tormenta…\n\nAssim, por magia, prática ou destino, treinadores são peritos em controlar e invocar criaturas — que podem existir nas redondezas, ser conjuradas por magia ou apenas se manifestar num instante, como produto de sua vontade. Sejam pássaros para reconhecimento aéreo, ursos para rastreamento e ataque ou grifos selvagens para transporte rápido, o treinador sempre pode contar com fiéis ajudantes. Alguns treinadores desenvolvem um vínculo especial com uma criatura única e poderosa, como um imenso lagarto-trovão, um elemental gigantesco, uma fera abissal profana ou mesmo um construto de guerra!\n\nMais que simples invocadores, treinadores são eruditos e protetores do mundo não humanoide, com vasto conhecimento sobre os seres que comandam. Em combate são adversários formidáveis, pois nunca estão sozinhos: enquanto suas criaturas atacam ou defendem, treinadores permanecem em posição estratégica, coordenando com precisão e eficiência, usando seus poderes para curar e fortificar seus mascotes. E, quando atuam com colegas aventureiros, são sempre valiosos e versáteis — afinal, um treinador conta como dois heróis… no mínimo!",
    "imagem": "https://static.wikia.nocookie.net/tsrd/images/1/10/Domador.png/revision/latest/scale-to-width-down/1200?cb=20210102023124&path-prefix=pt-br",
    "famosos": "",
    "pv": "12 + Constituição no 1º nível; +3 + Constituição por nível.",
    "pm": "4 PM por nível.",
    "pericias": "Adestramento (Car) e Vontade (Sab), mais 4 a sua escolha entre Atletismo (For), Cavalgar (Des), Diplomacia (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des), Reflexos (Des), Religião (Sab) e Sobrevivência (Sab).",
    "proficiencias": "Nenhuma.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Direcionar, melhor amigo (2 truques)"
      },
      {
        "nivel": "2º",
        "habilidades": "Domar criatura (2d8), poder de treinador"
      },
      {
        "nivel": "3º",
        "habilidades": "Poder de treinador"
      },
      {
        "nivel": "4º",
        "habilidades": "Melhor amigo (3 truques), poder de treinador"
      },
      {
        "nivel": "5º",
        "habilidades": "Domar criatura (cena), poder de treinador, treino especializado"
      },
      {
        "nivel": "6º",
        "habilidades": "Domar criatura (4d8), poder de treinador, sincronia de combate"
      },
      {
        "nivel": "7º",
        "habilidades": "Melhor amigo (4 truques), poder de treinador"
      },
      {
        "nivel": "8º",
        "habilidades": "Domar criatura (dia), poder de treinador"
      },
      {
        "nivel": "9º",
        "habilidades": "Poder de treinador"
      },
      {
        "nivel": "10º",
        "habilidades": "Domar criatura (6d8), melhor amigo (5 truques), poder de treinador"
      },
      {
        "nivel": "11º",
        "habilidades": "Poder de treinador"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de treinador"
      },
      {
        "nivel": "13º",
        "habilidades": "Melhor amigo (6 truques), poder de treinador"
      },
      {
        "nivel": "14º",
        "habilidades": "Domar criatura (8d8), poder de treinador"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de treinador"
      },
      {
        "nivel": "16º",
        "habilidades": "Melhor amigo (7 truques), poder de treinador"
      },
      {
        "nivel": "17º",
        "habilidades": "Poder de treinador"
      },
      {
        "nivel": "18º",
        "habilidades": "Domar criatura (10d8), poder de treinador"
      },
      {
        "nivel": "19º",
        "habilidades": "Melhor amigo (8 truques), poder de treinador"
      },
      {
        "nivel": "20º",
        "habilidades": "Poder de treinador, sincronia perfeita"
      }
    ],
    "habilidades": [
      {
        "nome": "Direcionar",
        "descricao": "Se o seu melhor amigo estiver em alcance curto e fizer um teste de perícia, você pode gastar 2 PM para somar seu Carisma no teste dele."
      },
      {
        "nome": "Melhor Amigo",
        "descricao": "Você recebe um melhor amigo, um parceiro especial que o acompanha em suas aventuras. Ele começa com dois truques a sua escolha e recebe um novo truque a cada três níveis seguintes. Caso seu melhor amigo morra, você fica atordoado por 1d4 rodadas. Você pode treinar um novo melhor amigo com um mês de trabalho.\n\nSeu melhor amigo é uma criatura com a qual você possui uma afinidade única. Em termos de regras, é um parceiro iniciante de um tipo a sua escolha condizente com suas características. Seu melhor amigo só fornece seus benefícios de parceiro se estiver em alcance curto de você.\n\nTRUQUES DISPONÍVEIS:\n• Alado: Seu melhor amigo ganha deslocamento de voo 15m. Pré-requisitos: Asas, 5º nível de treinador.\n• Amigão: Seu melhor amigo recebe +1 em Força e o tamanho dele muda para Enorme. Pré-requisito: melhor amigo Grande, 7º nível de treinador.\n• Amigo Feroz: Seu melhor amigo recebe +2 em testes de ataque e na margem de ameaça com suas armas naturais, e o dano delas aumenta em um passo.\n• Amigo Protetor: Quando você sofre dano, caso seu melhor amigo esteja em alcance curto, você pode gastar 2 PM para que ele salte em sua defesa.\n• Amigo Veterano: Seu amigo vira um parceiro veterano de seu tipo. Pré-requisito: 5º nível de treinador.\n• Amigo Mestre: Seu amigo veterano vira um parceiro mestre de seu tipo. Pré-requisito: Amigo Veterano, 11º nível de treinador.\n• Anatomia Humanoide: Forma humanoide e Int -2. Proficiência com armas simples e armaduras leves. Pré-requisito: construto ou morto-vivo.\n• Arma Natural Adicional: Recebe uma arma natural adicional. Pré-requisito: animal ou monstro.\n• Asas: Possui asas para pairar a 1,5m do chão com deslocamento 12m.\n• Bote: Quando faz uma investida, pode atacar com todas as suas armas naturais. Pré-requisito: duas armas naturais.\n• Condicionamento Especial: Recebe +2 em um atributo e +1 em outro (exceto Int). Uma vez por patamar.\n• Deslocamento Especial: Recebe deslocamento de escalada ou natação igual ao deslocamento base.\n• Magia Inata: Aprende e pode lançar uma magia de 1º círculo. Pré-requisito: espírito.\n• Manobra Ensaiada: Recebe +2 em uma manobra e pode executá-la como ação livre.\n• Reanimação Sombria: Uma vez por cena, pode ser reerguido com metade dos PV. Pré-requisito: morto-vivo.\n• Redução de Dano: Recebe redução de dano 5. Pré-requisito: 5º nível de treinador.\n• Sopro: Recebe um sopro de ácido, fogo, frio ou eletricidade. Pré-requisito: construto, espírito ou monstro.\n• Táticas de Matilha: +2 em ataques e dano contra inimigo flanqueado.\n• Treinamento de Companhia: Recebe uma ação de movimento adicional (apenas para se deslocar). Pré-requisito: animal.\n• Treinamento Defensivo: Bônus na Defesa igual ao seu nível (em vez de metade).\n• Treinamento Marcial: +2 em ataques e dano. Para cada patamar, +1 adicional.\n• Veloz: +2 na Defesa e +3m nos deslocamentos, treinado em Atletismo.\n\nFICHA DO MELHOR AMIGO:\n• Tamanho: Pequeno, Médio ou Grande.\n• Atributos: For 1, Des 1, Con 1, Int -4, Sab 1, Car 0.\n• PV: 16 + Constituição no 1º nível; +4 + Con por nível.\n• PM: Não possui. Você usa seus próprios PM para ativar as habilidades dele.\n• Perícias Treinadas: Escolha 3 entre Acrobacia, Atletismo, Fortitude, Furtividade, Luta, Percepção, Pontaria, Reflexos, Sobrevivência e Vontade.\n• Defesa: 10 + Destreza + Carisma do treinador + metade do nível do treinador.\n• Deslocamento: 12m (8q).\n• Ataques: Uma arma natural (dano 1d8, crítico x2, corte, impacto ou perfuração).\n• Tipo: animal, construto, espírito, monstro ou morto-vivo.\n• Ações: Você pode gastar suas ações com seu personagem ou com seu melhor amigo, em qualquer combinação.\n• Nível: Usa o nível do treinador."
      },
      {
        "nome": "Domar Criatura",
        "descricao": "A partir do 2º nível, você pode gastar uma ação de movimento e 1 PM para fazer um teste de Adestramento oposto ao teste de Vontade de uma criatura não inteligente em alcance curto. Se você vencer, causa 2d8 pontos de dano psíquico não letal à criatura. Se perder, causa metade desse dano. Se a criatura for reduzida a 0 ou menos PV, em vez de cair inconsciente, ela se rende. A cada quatro níveis, você pode gastar +1 PM para aumentar o dano em +2d8.\n\nA partir do 5º nível, quando rende uma criatura com ND igual ou menor que seu nível, você pode gastar uma quantidade de pontos de mana igual ao ND dela. Se fizer isso, ela recupera todos os PV perdidos por esta habilidade e, até o fim da cena, você controla as ações dela.\n\nA partir do 8º nível, se o ND da criatura for igual ou menor que seu nível -3, ela fica com você até o fim do dia. Enquanto estiver sendo controlada, a criatura conta em seu limite de parceiros."
      },
      {
        "nome": "Sincronia de Combate",
        "descricao": "A partir do 6º nível, uma vez por rodada, quando seu melhor amigo acerta um ataque usando a ação agredir, você pode gastar 2 PM para fazer um ataque contra o mesmo alvo."
      },
      {
        "nome": "Treino Especializado",
        "descricao": "No 5º nível, escolha entre Conquistar pelos Números e Treino Intensivo.\n\n• Conquistar pelos Números: Você recebe um segundo melhor amigo. Uma vez por rodada, quando faz uma ação padrão com um de seus melhores amigos, você pode gastar 3 PM para fazer uma ação padrão com o outro.\n\n• Treino Intensivo: Seu melhor amigo recebe +4 PV por nível, redução de dano 5 e um truque. No 11º nível, a RD aumenta para 10 e ele recebe outro truque. No 17º nível, a RD aumenta para 15."
      },
      {
        "nome": "Sincronia Perfeita",
        "descricao": "No 20º nível, você pode gastar uma ação de movimento e 6 PM para entrar em um estado de sincronia perfeita com um dos seus melhores amigos. Até o fim da cena, o tamanho dele aumenta em uma categoria. Além disso, uma vez por rodada, quando usa uma ação padrão consigo mesmo, você recebe uma ação padrão extra para usar com ele."
      }
    ],
    "poderes": [
      {
        "nome": "Amigo Divino",
        "descricao": "Seu melhor amigo vive em um mundo divino, mas você pode gastar uma ação de movimento e 2 PM para invocá-lo a Arton. Ele surge em um espaço desocupado em alcance curto e permanece até o fim da cena ou até você enviá-lo de volta (uma ação livre). Enquanto estiver no mundo divino e com menos da metade de seus PV, o melhor amigo tem Cura Acelerada 10."
      },
      {
        "nome": "Asas Aliadas",
        "descricao": "Uma vez por rodada, se você estiver em alcance curto de seu melhor amigo e ele usar deslocamento de voo, você pode pagar 1 PM para ser alçado aos céus. Se fizer isso, você se desloca para um quadrado desocupado no trajeto do amigo. Além disso, seu próximo ataque nesse turno conta como uma investida."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Bom Garoto",
        "descricao": "Uma vez por rodada, quando seu melhor amigo faz um acerto crítico em combate ou reduz um inimigo a 0 PV em seu turno, você recebe uma ação padrão que só pode usar consigo mesmo. Pré-requisito: 11º nível de treinador."
      },
      {
        "nome": "Comando Defensivo",
        "descricao": "Quando seu melhor amigo sofre dano, você pode gastar 2 PM para fazer um teste de Adestramento e reduzir o resultado do teste desse dano. Você pode usar esta habilidade uma vez por rodada para cada melhor amigo."
      },
      {
        "nome": "Comandos Distantes",
        "descricao": "O alcance de suas habilidades de treinador aumenta em uma categoria (de curto para médio, de médio para longo)."
      },
      {
        "nome": "Convocar Enxame",
        "descricao": "Você aprende e pode lançar Enxame de Pestes (atributo-chave Carisma) e pode usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um clérigo de seu nível. Esta não é uma habilidade mágica e provém de sua capacidade de atrair criaturas. Pré-requisito: 5º nível de treinador."
      },
      {
        "nome": "Coração Grande",
        "descricao": "Seu limite de parceiros aumenta em +1. No 11º nível, esse limite aumenta em +1."
      },
      {
        "nome": "Direcionamento Marcial",
        "descricao": "Quando usa Direcionar em um teste de ataque, você também soma seu Carisma na rolagem de dano desse ataque."
      },
      {
        "nome": "Domador Cativante",
        "descricao": "Você soma seu Carisma no dano de Domar Criatura, e os dados de dano dessa habilidade aumentam para d10."
      },
      {
        "nome": "Domador Lendário",
        "descricao": "Quando usa Domar Criatura, você pode gastar +2 PM para mudar os dados de dano para d12 e atingir todos os alvos dentro do alcance. Pré-requisitos: Domador Cativante, 17º nível de treinador."
      },
      {
        "nome": "Ensinar Truque",
        "descricao": "Um de seus melhores amigos aprende um truque adicional. Você pode escolher este poder uma vez por patamar por amigo."
      },
      {
        "nome": "Investida Conjunta",
        "descricao": "Uma vez por rodada, quando um melhor amigo no qual você está montado faz uma investida, você pode gastar 2 PM para fazer um ataque corpo a corpo (que também conta como uma investida). Pré-requisito: melhor amigo montaria."
      },
      {
        "nome": "Líder da Matilha",
        "descricao": "Quando usa Direcionar, você pode aplicar o bônus ao próximo teste de perícia de outros melhores amigos com a mesma ação ao custo de +1 PM por amigo adicional. O bônus só afeta o teste se ele for feito até o fim do seu turno. Pré-requisito: Conquistar pelos Números."
      },
      {
        "nome": "Língua das Criaturas",
        "descricao": "Você pode se comunicar com criaturas não inteligentes (Int -4 ou -5) por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com essas criaturas para mudar atitude e persuasão."
      },
      {
        "nome": "Mascote",
        "descricao": "Você tem um mascote, uma criatura com a qual desenvolveu grande afinidade. Um mascote é um parceiro especial que não conta em seu limite de parceiros e com o qual você pode se comunicar através de gestos em alcance médio. Mascotes fornecem seus benefícios tanto para você quanto para seus melhores amigos. Se perder um mascote, pode treinar um novo com uma semana de trabalho e T$ 100.\n\nTIPOS DE MASCOTE:\n• Águia Real: Uma vez por rodada, fornece +1d6 em uma rolagem de dano com arma.\n• Bicho Preguiça: Agarrado às costas, ocupa espaço de item vestido, fornece ataque de garra (dano 1d6). Uma vez por rodada, pode gastar 1 PM para um ataque extra com a garra.\n• Camundongo Espiritual: Aumenta a CD para resistir a habilidades mágicas em +1.\n• Fada-Borboleta: Diminui o custo de habilidades mágicas em -1.\n• Gekko Malhado: Fornece +2 na Defesa e em Reflexos.\n• Mico-Leão Dourado: Permite usar Ladinagem para punga em alcance curto.\n• Minivaca: Fornece +1 em testes de ataque. O bônus dobra em investidas.\n• Ossinhos: Esqueleto reanimado. Fornece redução de corte, frio e perfuração 2."
      },
      {
        "nome": "Petisco Merecido",
        "descricao": "Você pode gastar 2 PM para conceder +2 em Força e Destreza a um melhor amigo em alcance curto até o fim da cena."
      },
      {
        "nome": "Proteção Fraterna",
        "descricao": "Quando você e/ou seu melhor amigo sofre um efeito que permite um teste de resistência, se ele estiver em alcance curto, você pode gastar 2 PM para coordenar seus esforços. Os dois fazem o teste de resistência, mas ambos usam o melhor resultado. Se um de vocês tiver uma habilidade que modifica o efeito por passar no teste de resistência (como Evasão), ambos são afetados por ela."
      },
      {
        "nome": "Trabalho em Equipe",
        "descricao": "Uma vez por rodada, quando você faz uma ação de movimento, seus melhores amigos recebem uma ação de movimento. Pré-requisito: 5º nível de treinador."
      },
      {
        "nome": "Treinador Eclético",
        "descricao": "Seus melhores amigos usam seu nível de personagem, em vez de seu nível de treinador, para calcular seus PV, modificadores de perícias e Defesa. Pré-requisito: 6º nível de treinador."
      },
      {
        "nome": "Veterinário de Campo",
        "descricao": "Você pode gastar uma ação completa para fazer um teste de Adestramento em um melhor amigo adjacente. Ele recupera uma quantidade de PV igual ao resultado do teste. Você só pode usar este poder uma vez por dia num mesmo alvo."
      }
    ]
  },
  {
    "nome": "Inovador",
    "livro": "Heróis de Arton",
    "descricao": "\"Espadas? Escudos? Que tédio...\"\n\nElfos arqueiros. Anões com machados. Cavaleiros com armaduras pesadas. Arton é repleta desses tipos. O guerreiro inovador está determinado a não ser um deles.\n\nMuito mais uma filosofia de vida do que uma forma de combater, o estilo inovador não é ensinado em academias ou exércitos, ou mesmo passado de mestre a discípulo. Cada guerreiro inovador desenvolve o estilo por si só, rejeitando o que já existe e procurando se destacar. Inovadores usam armas esquisitas, exibem manobras complicadas, vestem armaduras chamativas... Nada é simples, direto ou comum — o inovador é o mestre do inédito, o centro das atenções na batalha. Alguns adotam este estilo por simples vontade de se mostrar. Outros, porque sua imprevisibilidade é uma grande vantagem em combate — qualquer um está pronto para enfrentar um guerreiro usando espada e escudo, mas ninguém está preparado para o inovador.\n\nInovadores costumam ser jovens. Quando os veteranos veem sua forma de lutar, balançam a cabeça e suspiram de desaprovação, lembrando dos velhos tempos. É raro ver um guerreiro inovador com mais idade. Com o tempo, suas inovações são copiadas por outros e se tornam comuns. Esse é o maior medo de muitos inovadores: ver sua fama transformar seu estilo em clichê.",
    "imagem": "https://i.pinimg.com/originals/40/2b/b2/402bb23821c09aec321a2c612db3be02.png",
    "famosos": "",
    "pv": "20 + Constituição no 1º nível; +5 + Constituição por nível.",
    "pm": "3 PM por nível.",
    "pericias": "Luta (For) ou Pontaria (Des) e Acrobacia (Des), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Conhecimento (Int), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Investigação (Int), Luta (For), Ofício (Int), Pontaria (Des) e Reflexos (Des).",
    "proficiencias": "Armas marciais, armaduras pesadas e escudos.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Do bom e do melhor, sequência especial +2"
      },
      {
        "nivel": "2º",
        "habilidades": "Bombardeio sequencial, poder de guerreiro"
      },
      {
        "nivel": "3º",
        "habilidades": "Acrobacia defensiva, poder de guerreiro"
      },
      {
        "nivel": "4º",
        "habilidades": "Domínio excêntrico, poder de guerreiro"
      },
      {
        "nivel": "5º",
        "habilidades": "Poder de guerreiro, sequência especial +4"
      },
      {
        "nivel": "6º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "7º",
        "habilidades": "Poder de guerreiro, técnica revolucionária"
      },
      {
        "nivel": "8º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "9º",
        "habilidades": "Poder de guerreiro, sequência especial +6"
      },
      {
        "nivel": "10º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "11º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "13º",
        "habilidades": "Poder de guerreiro, sequência especial +8"
      },
      {
        "nivel": "14º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "15º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "17º",
        "habilidades": "Poder de guerreiro, sequência especial +10"
      },
      {
        "nivel": "18º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "19º",
        "habilidades": "Poder de guerreiro"
      },
      {
        "nivel": "20º",
        "habilidades": "Estilo único, poder de guerreiro"
      }
    ],
    "habilidades": [
      {
        "nome": "Do Bom e do Melhor",
        "descricao": "Você começa o jogo com uma arma, armadura ou escudo superior a sua escolha, de até T$ 500. Entretanto, você é considerado não proficiente em qualquer arma, armadura ou escudo que não seja superior ou mágico."
      },
      {
        "nome": "Sequência Especial",
        "descricao": "Você pode gastar 2 PM para iniciar uma sequência de movimentos inovadores. Quando faz isso, a cada vez que ataca com uma arma que ainda não tenha usado nessa sequência, você recebe um bônus de +1 em testes de ataque e rolagens de dano (cumulativo até +2). A cada 4 níveis, você pode gastar +1 PM para aumentar o limite desses bônus em +2. A sequência termina ao fim da cena ou se você ficar 1 rodada sem trocar pelo menos uma arma."
      },
      {
        "nome": "Bombardeio Sequencial",
        "descricao": "No 2º nível, você pode usar sua Sequência Especial ao usar itens alquímicos ou poções (nesse caso, aplica o bônus de ataque acumulado à CD para resistir ao item)."
      },
      {
        "nome": "Acrobacia Defensiva",
        "descricao": "A partir do 3º nível, quando sofre dano, você pode gastar 2 PM para executar uma pirueta defensiva. Você faz um teste de Acrobacia e subtrai o resultado desse teste do dano sofrido."
      },
      {
        "nome": "Domínio Excêntrico",
        "descricao": "A partir do 4º nível, sempre que passar pelo menos uma semana carregando uma arma exótica ou de fogo superior ou mágica, você recebe proficiência nela."
      },
      {
        "nome": "Técnica Revolucionária",
        "descricao": "A partir do 7º nível, você pode gastar 2 PM para, até o fim do combate, usar armas que esteja empunhando como se elas tivessem uma das seguintes habilidades de arma, a sua escolha: adaptável, ágil, alongada, dupla (use as estatísticas da arma em ambas as pontas) ou versátil (para uma manobra escolhida ao usar esta habilidade). Esse efeito termina se você ativar sua Técnica Revolucionária novamente."
      },
      {
        "nome": "Estilo Único",
        "descricao": "No 20º nível, você consolida seu próprio estilo de combate. Escolha dois poderes de guerreiro ou de combate que possua. Para esses poderes, você ignora todos os requisitos e restrições relacionados a armas, incluindo propósito, empunhadura, características e habilidades das armas. Por exemplo, você pode usar Estilo de Duas Mãos com armas leves, Estilo de Arremesso com uma arma de duas mãos ou até Esgrimista com pistolas! O mestre tem a palavra final sobre como os poderes interagem entre si."
      }
    ],
    "poderes": [
      {
        "nome": "Ambidestria",
        "descricao": "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Pré-requisito: Des 2."
      },
      {
        "nome": "Arqueiro",
        "descricao": "Se estiver usando uma arma de ataque à distância, você soma sua Sabedoria em rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 1."
      },
      {
        "nome": "Ataque Reflexo",
        "descricao": "Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover voluntariamente para fora do seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo (apenas uma vez por alvo a cada rodada). Pré-requisito: Des 1."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Bater e Correr",
        "descricao": "Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa."
      },
      {
        "nome": "Destruidor",
        "descricao": "Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 da rolagem de dano da arma. Pré-requisito: For 1."
      },
      {
        "nome": "Esgrimista",
        "descricao": "Quando usa uma arma corpo a corpo leve ou ágil, você soma sua Inteligência em rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 1."
      },
      {
        "nome": "Especialização em Arma",
        "descricao": "Escolha uma arma. Você recebe +2 em rolagens de dano com essa arma. Você pode escolher este poder outras vezes para armas diferentes."
      },
      {
        "nome": "Especialização em Armadura",
        "descricao": "Você recebe redução de dano 5 se estiver usando uma armadura pesada. Pré-requisito: 12º nível de guerreiro."
      },
      {
        "nome": "Golpe de Raspão",
        "descricao": "Uma vez por rodada, quando erra um ataque, você pode gastar 2 PM. Se fizer isso, causa metade do dano que causaria (ignorando efeitos que se aplicariam caso o ataque acertasse)."
      },
      {
        "nome": "Golpe Demolidor",
        "descricao": "Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a redução de dano dele."
      },
      {
        "nome": "Ímpeto",
        "descricao": "Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada."
      },
      {
        "nome": "Mestre em Arma",
        "descricao": "Escolha uma arma. Com esta arma, seu dano aumenta em um passo e quando faz um teste de ataque você pode gastar 2 PM para rolá-lo novamente. Pré-requisitos: Especialização em Arma com a arma escolhida, 12º nível de guerreiro."
      },
      {
        "nome": "Planejamento Marcial",
        "descricao": "Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia. Pré-requisitos: treinado em Guerra, 10º nível de guerreiro."
      },
      {
        "nome": "Romper Resistências",
        "descricao": "Quando faz um Ataque Especial, você pode gastar 1 PM adicional para ignorar 10 pontos de redução de dano."
      },
      {
        "nome": "Solidez",
        "descricao": "Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência."
      },
      {
        "nome": "Tornado de Dor",
        "descricao": "Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque corpo a corpo e compare-o com a Defesa de cada inimigo em seu alcance natural. Então faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido. Pré-requisito: 6º nível de guerreiro."
      },
      {
        "nome": "Valentão",
        "descricao": "Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos."
      },
      {
        "nome": "Análise Tática",
        "descricao": "Você recebe +2 em Guerra e pode fazer testes dessa perícia para identificar criatura contra humanoides. Pré-requisito: treinado em Guerra."
      },
      {
        "nome": "Arremesso de Investida",
        "descricao": "Quando faz uma investida, você pode gastar 1 PM para realizar um ataque à distância adicional com uma arma de arremesso contra o alvo da investida."
      },
      {
        "nome": "Bloqueio Brutal",
        "descricao": "Uma vez por rodada, quando é atingido por um ataque, você pode gastar 2 PM para fazer uma rolagem de dano corpo a corpo e subtrair o resultado dessa rolagem do dano causado pelo ataque. Pré-requisito: For 5."
      },
      {
        "nome": "Corte Ágil",
        "descricao": "Uma vez por rodada, quando faz um ataque com uma arma ágil ou leve, você pode gastar 1 PM para se mover até metade do seu deslocamento antes ou depois de fazer o ataque. Esse movimento não ativa reações dos inimigos. Pré-requisito: Des 1."
      },
      {
        "nome": "Criar Oportunidade",
        "descricao": "Quando você ou um aliado em alcance curto atacar uma criatura sob efeito do seu Xadrez de Batalha, você pode gastar 1 PM para que esse ataque cause +1d10 pontos de dano. Pré-requisito: Xadrez de Batalha."
      },
      {
        "nome": "Defesa Estratégica",
        "descricao": "Você soma sua Inteligência na Defesa, limitada pelo seu nível. Pré-requisito: Int 1."
      },
      {
        "nome": "Determinação Inabalável",
        "descricao": "Enquanto estiver com metade dos seus pontos de vida ou menos, você recebe +2 em testes de resistência e o custo de sua habilidade Durão diminui em –1 PM. Pré-requisito: 11º nível de guerreiro."
      },
      {
        "nome": "Estrategista Inspirador",
        "descricao": "Em seu primeiro turno de um combate, você pode gastar uma ação padrão e fazer um teste de Guerra. Se fizer isso, para cada 10 pontos no resultado do teste, você e seus aliados em alcance curto recebem 1 PM temporário. Esses PM temporários desaparecem no fim da cena. Pré-requisito: treinado em Guerra."
      },
      {
        "nome": "Executor",
        "descricao": "Você recebe +1d6 nas rolagens de dano contra criaturas que estejam com menos da metade dos pontos de vida. A cada quatro níveis além do 1º, esse dano extra aumenta em um passo."
      },
      {
        "nome": "Fender Defesas",
        "descricao": "Quando você acerta um ataque usando Ataque Especial, a criatura sofre uma penalidade na Defesa igual ao total de PM gastos nessa habilidade por 1 rodada."
      },
      {
        "nome": "Inércia do Aço",
        "descricao": "Quando acerta um ataque com uma arma de duas mãos em uma criatura, você pode gastar 3 PM para causar metade do dano desse ataque a cada inimigo adjacente a essa criatura. Pré-requisito: 5º nível de guerreiro."
      },
      {
        "nome": "Investida Ricochete",
        "descricao": "Uma vez por rodada, quando faz uma investida e acerta o ataque, você pode gastar 2 PM para atacar outra criatura que você consiga alcançar como parte dessa investida. Pré-requisitos: Bater e Correr, 5º nível de guerreiro."
      },
      {
        "nome": "Manobra Dupla",
        "descricao": "Uma vez por rodada, quando faz uma manobra de combate usando uma arma versátil, você pode pagar 1 PM para executar uma manobra diferente extra."
      },
      {
        "nome": "Mente Disciplinada",
        "descricao": "Sempre que você é afetado por uma habilidade de um aliado que fornece um bônus numérico em testes de perícia, rolagens de dano ou na Defesa, para você esse bônus aumenta em +1. Pré-requisito: 6º nível de guerreiro."
      },
      {
        "nome": "Operações Combinadas",
        "descricao": "Quando usa Ordens de Engajamento, você pode gastar +3 PM. Se fizer isso, pode atacar junto do aliado e, se um de vocês usar habilidades com custo em PM que forneçam bônus a esse ataque ou a seu dano, o outro também é afetado. Pré-requisitos: Ordens de Engajamento, 14º nível de guerreiro."
      },
      {
        "nome": "Ordens de Engajamento",
        "descricao": "Uma vez por rodada, quando acerta um ataque em uma criatura sob efeito do seu Xadrez de Batalha, você pode gastar 2 PM para que um aliado em alcance curto possa fazer um ataque contra essa criatura. Pré-requisitos: Criar Oportunidade, Xadrez de Batalha, 11º nível de guerreiro."
      },
      {
        "nome": "Recuperar Fôlego",
        "descricao": "Uma vez por cena, se estiver com 0 PM, você pode gastar uma ação de movimento para recuperar 1d8 PM."
      },
      {
        "nome": "Resiliência Marcial",
        "descricao": "Sempre que sofrer dano letal, você recebe redução de dano 1 cumulativa (limitada pelo seu nível). Esse efeito dura até o fim da cena ou até você recuperar pontos de vida de qualquer forma. Pré-requisito: 4º nível de guerreiro."
      },
      {
        "nome": "Soldado de Infantaria",
        "descricao": "Você recebe +3m em seu deslocamento e seu limite de carga aumenta em 6 espaços."
      },
      {
        "nome": "Velho de Guerra",
        "descricao": "Você recebe +5 em Intimidação e imunidade a medo. Além disso, uma vez por cena pode gastar 5 PM para evitar completamente um efeito qualquer usado contra você por outra criatura. Pré-requisito: 17º nível de guerreiro."
      },
      {
        "nome": "Xadrez de Batalha",
        "descricao": "Você pode gastar uma ação de movimento e 1 PM para analisar um oponente em alcance curto. Se fizer isso, você recebe +2 na Defesa e em testes de Reflexos contra essa criatura até o fim da cena. Esse bônus aumenta em +1 para cada outro poder que você possua que tenha Xadrez de Batalha como pré-requisito. Pré-requisito: treinado em Guerra."
      },
      {
        "nome": "Golpe Pessoal",
        "descricao": "Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma técnica única com efeitos determinados por você. Você constrói seu Golpe Pessoal escolhendo efeitos da lista abaixo — a soma dos custos será o custo do Golpe Pessoal (mínimo 1 PM). O Golpe Pessoal só pode ser usado com uma arma específica. Pré-requisito: 5º nível de guerreiro.\n\nEfeitos disponíveis:\n• Amplo (+3 PM): Atinge todas as criaturas em alcance curto.\n• Atordoante (+2 PM): Criatura atingida fica atordoada por uma rodada (Fort CD For anula).\n• Brutal (+1 PM): Fornece um dado extra de dano do mesmo tipo.\n• Conjurador (Custo da Magia +1 PM): Lança uma magia de 1º ou 2º círculo ao acertar.\n• Destruidor (+2 PM): Aumenta o multiplicador de crítico em +1.\n• Distante (+1 PM): Aumenta o alcance em um passo.\n• Elemental (+2 PM): Causa +2d6 de dano de ácido, eletricidade, fogo ou frio.\n• Impactante (+1 PM): Empurra o alvo 1,5m para cada 10 pontos de dano.\n• Letal (+2 PM): Aumenta a margem de ameaça em +2 (pode escolher duas vezes: +5).\n• Penetrante (+1 PM): Ignora 10 pontos de RD.\n• Preciso (+1 PM): Rola dois dados no teste de ataque e usa o melhor.\n• Qualquer Arma (+1 PM): Pode usar com qualquer tipo de arma.\n• Ricocheteante (+1 PM): A arma retorna após o ataque (apenas arremesso).\n• Teleguiado (+1 PM): Ignora penalidades por camuflagem ou cobertura leves.\n• Avanço (+1 PM): Percorre até o deslocamento em linha reta antes do golpe.\n• Brando (+0 PM): Causa dano não letal.\n• Carregado (+1 PM): Gasta ação padrão para energizar; causa +2d8 no próximo ataque.\n• Sequencial (+2 PM): Causa +1d6; aumenta um passo a cada acerto na mesma cena.\n• Sifão (+2 PM): Recebe 1 PM temporário para cada 10 pontos de dano (máx. seu nível/cena).\n• Lento (–2 PM): Exige ação completa para ser usado.\n• Perto da Morte (–2 PM): Só pode ser usado com ¼ dos PV ou menos.\n• Sacrifício (–2 PM): Perde 10 PV sempre que usa o golpe.\n• Golpe de Abertura (–2 PM): Só pode ser usado no primeiro turno do combate.\n• Truque Secreto (–2 PM): Só pode ser usado uma vez contra cada alvo por cena."
      },
      {
        "nome": "Estilo Clássico - DB 212 -",
        "descricao": "Um clichê só é clichê porque funciona! Quando usa Ataque Especial, se estiver empunhando um escudo e uma espada longa, você recebe +2 na Defesa e em rolagens de dano até o início do seu próximo turno. Pré-requisitos: humano, Estilo de Arma e Escudo.",
      },
      {
        "nome": "Duro Como Aço - DB 212 -",
        "descricao": "Você vem de uma linhagem de anões da infantaria. Se estiver usando armadura pesada, você pode somar sua Constituição na Defesa, limitado pelo seu nível. Se fizer isso, não pode somar sua Destreza, mesmo que outras habilidades ou efeitos o façam. Pré-requisitos: anão, Encouraçado, 8º nível de guerreiro.",
      },
      {
        "nome": "Herdeiro dos Gigantes - DB 212 -",
        "descricao": "Poucos são capazes de equiparar sua força. Quando usa Ataque Especial e Força dos Titãs em um mesmo ataque, você aumenta o dano extra conce- dido por Força dos Titãs em +1d12. Pré-requisito: galokk.",
      }
    ]
  },
  {
    "nome": "Ladino",
    "livro": "Livro Básico",
    "descricao": "A maior parte dos perigos pode ser evitada com um pouco de furtividade. A maior parte das dificuldades pode ser superada com um pouco de ouro subtraído de outra pessoa. A maior parte dos vilões pode ser vencida com uma boa mentira. E, quando nada disso dá certo, uma adaga nas costas resolve o problema.\n\nO ladino é o mais esperto, discreto, silencioso e malandro de todos os heróis. Um aventureiro que usa táticas que muitos consideram desleais, mas que para ele são apenas pragmáticas e lógicas. Ladinos se especializam em arrombar portas, esgueirar-se pelas sombras, desarmar armadilhas, roubar itens valiosos... Enfim, fazer tudo que \"heróis de bem\" nunca fariam.\n\nIsto não quer dizer que ladinos sejam traidores ou covardes. Pelo contrário: um ladino conhece bem o valor de um grupo coeso de aventureiros, em que cada um faz sua parte. Ele apenas sabe que, em qualquer grande missão, existe um lado sombrio que exige menos gritos de guerra e mais infiltrações silenciosas.\n\nHá ladinos que fazem parte de grandes guildas de criminosos, mas muitos são malandros solitários, confiando apenas em si mesmos e num pequeno grupo de amigos para sobreviver.\n\nQualquer tipo de atividade escusa ou discreta atrai ladinos. Muitos são mesmo ladrões, furtando bolsas ou entrando em mansões à noite nas ruas escuras das metrópoles. Outros são espiões a serviço de grandes reinos ou mesmo igrejas. Também há muitos ladinos nas cortes, malandros que se especializam em espalhar boatos, descobrir segredos, seduzir alvos e, quando necessário, envenenar algum aristocrata inconveniente. Ladinos podem até mesmo ser assassinos: suas habilidades de furtividade e precisão podem ser mais mortais que a investida tresloucada de um brutamontes enfurecido.\n\nO típico ladino aventureiro tem um pouco de cada uma destas \"profissões\". Um grupo de exploradores de masmorras dura pouco se não houver alguém para procurar armadilhas, escutar atrás de portas, abrir trancas e se esconder de guardas. Muitas vezes o ladino é o herói que realmente resolve a missão: enquanto o resto do grupo está enfrentando o dragão vermelho, o ladino encontra e surrupia o artefato que o monstro estava guardando.\n\nLadinos podem ter qualquer tipo de personalidade, mas poucos são espalhafatosos ou arrogantes. A maioria dos ladinos prefere ficar na sombra dos outros heróis, sem grande reconhecimento, sendo subestimada pelos inimigos. Muitos ladinos adquirem suas habilidades por falta de opção: tendo crescido nas áreas mais pobres de uma cidade, precisaram aprender a roubar e fugir para sobreviver. Outros sempre tiveram vidas confortáveis e acham que a maneira mais fácil de preservá-las é se manter escondidos. Alguns foram treinados especificamente para isto por exércitos ou famílias criminosas.\n\nDe qualquer forma, quase nenhum ladino consegue se manter do lado da lei por muito tempo. Mesmo que sua intenção seja boa, precisam cometer algum crime para atingir seus objetivos.",
    "imagem": "",
    "famosos": "Andrus o Aranha, Ashlen Ironsmith, o Camaleão, Drikka, Leon Galtran.",
    "pv": "12 + Constituição no 1º nível; +3 + Constituição por nível.",
    "pm": "4 PM por nível.",
    "pericias": "Ladinagem (Des) e Reflexos (Des), mais 8 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Ofício (Int), Percepção (Sab), Pilotagem (Des) e Pontaria (Des).",
    "proficiencias": "Nenhuma.",
    "tabela": [
      {
        "nivel": "1º",
        "habilidades": "Ataque furtivo +1d6, especialista"
      },
      {
        "nivel": "2º",
        "habilidades": "Evasão, poder de ladino"
      },
      {
        "nivel": "3º",
        "habilidades": "Ataque furtivo +2d6, poder de ladino"
      },
      {
        "nivel": "4º",
        "habilidades": "Esquiva sobrenatural, poder de ladino"
      },
      {
        "nivel": "5º",
        "habilidades": "Ataque furtivo +3d6, poder de ladino"
      },
      {
        "nivel": "6º",
        "habilidades": "Poder de ladino"
      },
      {
        "nivel": "7º",
        "habilidades": "Ataque furtivo +4d6, poder de ladino"
      },
      {
        "nivel": "8º",
        "habilidades": "Olhos nas costas, poder de ladino"
      },
      {
        "nivel": "9º",
        "habilidades": "Ataque furtivo +5d6, poder de ladino"
      },
      {
        "nivel": "10º",
        "habilidades": "Evasão aprimorada, poder de ladino"
      },
      {
        "nivel": "11º",
        "habilidades": "Ataque furtivo +6d6, poder de ladino"
      },
      {
        "nivel": "12º",
        "habilidades": "Poder de ladino"
      },
      {
        "nivel": "13º",
        "habilidades": "Ataque furtivo +7d6, poder de ladino"
      },
      {
        "nivel": "14º",
        "habilidades": "Poder de ladino"
      },
      {
        "nivel": "15º",
        "habilidades": "Ataque furtivo +8d6, poder de ladino"
      },
      {
        "nivel": "16º",
        "habilidades": "Poder de ladino"
      },
      {
        "nivel": "17º",
        "habilidades": "Ataque furtivo +9d6, poder de ladino"
      },
      {
        "nivel": "18º",
        "habilidades": "Poder de ladino"
      },
      {
        "nivel": "19º",
        "habilidades": "Ataque furtivo +10d6, poder de ladino"
      },
      {
        "nivel": "20º",
        "habilidades": "A pessoa certa para o trabalho, poder de ladino"
      }
    ],
    "habilidades": [
      {
        "nome": "Ataque Furtivo",
        "descricao": "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos."
      },
      {
        "nome": "Especialista",
        "descricao": "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque."
      },
      {
        "nome": "Evasão",
        "descricao": "A partir do 2º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        "nome": "Esquiva Sobrenatural",
        "descricao": "No 4º nível, seus instintos são tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido."
      },
      {
        "nome": "Olhos nas Costas",
        "descricao": "A partir do 8º nível, você consegue lutar contra diversos inimigos como se fossem apenas um. Você não pode ser flanqueado."
      },
      {
        "nome": "Evasão Aprimorada",
        "descricao": "No 10º nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar e sofre apenas metade do dano se falhar. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel."
      },
      {
        "nome": "A Pessoa Certa para o Trabalho",
        "descricao": "No 20º nível, você se torna um mestre da ladinagem. Ao fazer um ataque furtivo ou usar uma perícia da lista de ladino, você pode gastar 5 PM para receber +10 no teste."
      }
    ],
    "poderes": [
      {
        "nome": "Assassinar",
        "descricao": "Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados. Pré-requisito: 5º nível de ladino."
      },
      {
        "nome": "Aumento de Atributo",
        "descricao": "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo."
      },
      {
        "nome": "Contatos no Submundo",
        "descricao": "Quando chega em uma comunidade equivalente a uma vila ou maior, você pode gastar 2 PM para fazer um teste de Carisma (CD 10). Se passar, enquanto estiver nessa comunidade, recebe +5 em testes de Investigação para interrogar, pode comprar itens mundanos, poções e pergaminhos com 20% de desconto (não cumulativo com barganha e outros descontos) e, de acordo com o mestre, tem acesso a itens e serviços proibidos (como armas de pólvora e venenos)."
      },
      {
        "nome": "Emboscar",
        "descricao": "Na primeira rodada de cada combate, você pode gastar 2 PM para executar uma ação padrão adicional em seu turno. Pré-requisito: treinado em Furtividade."
      },
      {
        "nome": "Escapista",
        "descricao": "Você recebe +5 em testes de Acrobacia para escapar, passar por espaço apertado e passar por inimigo e em testes para resistir a efeitos de movimento."
      },
      {
        "nome": "Fuga Formidável",
        "descricao": "Você pode gastar uma ação completa e 1 PM para analisar o lugar no qual está (um castelo, um porto, a praça de uma cidade...). Até o fim da cena, recebe +3m em seu deslocamento, +5 em Acrobacia e Atletismo e ignora penalidades em movimento por terreno difícil. Você perde esses benefícios se fizer uma ação que não seja diretamente relacionada a fugir. Pré-requisito: Int 1."
      },
      {
        "nome": "Gatuno",
        "descricao": "Você recebe +2 em Atletismo. Quando escala, não fica desprevenido e avança seu deslocamento normal, em vez de metade dele."
      },
      {
        "nome": "Ladrão Arcano",
        "descricao": "Quando causa dano com um ataque furtivo em uma criatura capaz de lançar magias, você pode 'roubar' uma magia que já a tenha visto lançar. Você precisa pagar 1 PM por círculo da magia e pode roubar magias de até 4º círculo. Até o fim da cena, você pode lançar a magia roubada (atributo-chave Inteligência). Pré-requisitos: Roubo de Mana, 13º nível de ladino."
      },
      {
        "nome": "Mão na Boca",
        "descricao": "Você recebe +2 em testes de agarrar. Quando acerta um ataque furtivo contra uma criatura desprevenida, você pode fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada. Pré-requisito: treinado em Luta."
      },
      {
        "nome": "Mãos Rápidas",
        "descricao": "Uma vez por rodada, ao fazer um teste de Ladinagem para abrir fechaduras, ocultar item, punga ou sabotar, você pode pagar 1 PM para fazê-lo como uma ação livre. Pré-requisitos: Des 2, treinado em Ladinagem."
      },
      {
        "nome": "Mente Criminosa",
        "descricao": "Você soma sua Inteligência em Ladinagem e Furtividade. Pré-requisito: Int 1."
      },
      {
        "nome": "Oportunismo",
        "descricao": "Uma vez por rodada, quando um inimigo adjacente sofre dano de um de seus aliados, você pode gastar 2 PM para fazer um ataque corpo a corpo contra este inimigo. Pré-requisito: 6º nível de ladino."
      },
      {
        "nome": "Rolamento Defensivo",
        "descricao": "Sempre que sofre dano, você pode gastar 2 PM para reduzir esse dano à metade. Após usar este poder, você fica caído. Pré-requisito: treinado em Reflexos."
      },
      {
        "nome": "Roubo de Mana",
        "descricao": "Quando você causa dano com um ataque furtivo, para cada 1d6 de dano de seu ataque furtivo, você recebe 1 PM temporário e a criatura perde 1 ponto de mana (se tiver). Você só pode usar este poder uma vez por cena contra uma mesma criatura. Pré-requisitos: Truque Mágico, 7º nível de ladino."
      },
      {
        "nome": "Saqueador de Tumbas",
        "descricao": "Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de resistência contra elas. Além disso, gasta uma ação padrão para desabilitar mecanismos, em vez de 1d4 rodadas."
      },
      {
        "nome": "Sombra",
        "descricao": "Você recebe +2 em Furtividade, não sofre penalidade em testes de Furtividade por se mover no seu deslocamento normal e reduz a penalidade por atacar e fazer outras ações chamativas para –10. Pré-requisito: treinado em Furtividade."
      },
      {
        "nome": "Truque Mágico",
        "descricao": "Você aprende e pode lançar uma magia arcana de 1º círculo a sua escolha, pagando seu custo normal em PM. Seu atributo-chave para esta magia é Inteligência. Você pode escolher este poder quantas vezes quiser. Pré-requisito: Int 1."
      },
      {
        "nome": "Velocidade Ladina",
        "descricao": "Uma vez por rodada, você pode gastar 2 PM para realizar uma ação de movimento adicional em seu turno. Pré-requisito: Des 2, treinado em Iniciativa."
      },
      {
        "nome": "Veneno Persistente",
        "descricao": "Quando aplica uma dose de veneno a uma arma, este veneno dura por três ataques (em vez de apenas um). Pré-requisitos: Veneno Potente, 8º nível de ladino."
      },
      {
        "nome": "Veneno Potente",
        "descricao": "A CD para resistir aos venenos que você usa aumenta em +5. Pré-requisito: treinado em Ofício (alquimista)."
      },
      {
        "nome": "Investida Rasteira",
        "descricao": "Se você acertar um ataque corpo a corpo contra uma criatura que sofreu uma investida desde a última rodada, ela fica desprevenida por 1 rodada e caída (Reflexos CD Des evita)."
      },
      {
        "nome": "Mestre Assassino",
        "descricao": "Quando usa Assassinar, você pode gastar +2 PM para: usar esse poder como uma ação livre; rolar dois dados no teste de ataque contra a criatura analisada e usar o melhor resultado; ignorar a imunidade a acertos críticos da criatura analisada. Você pode usar quantos desses modificadores quiser (desde que pague por eles!). Assim, se gastar +6 PM, você usa Assassinar como ação livre, rola dois dados no teste de ataque e afeta criaturas imunes. Pré-requisitos: treinado em Cura e Percepção, Assassinar, Ataque Furtivo Letal, 11º nível de ladino."
      },
      {
        "nome": "Mestre Envenenador",
        "descricao": "Quando afeta uma criatura com um veneno, você pode gastar +2 PM para: aumentar quaisquer efeitos do veneno em mais um dado do mesmo tipo; aumentar a CD para resistir ao veneno em +5; ignorar a imunidade a venenos da criatura. Você pode usar quantos desses modificadores quiser. Pré-requisitos: treinado em Cura, Veneno Persistente, 11º nível de ladino."
      },
      {
        "nome": "Papo Furado",
        "descricao": "Quando você passa em um teste de Diplomacia contra uma criatura, se passar também em um teste de Enganação contra ela até o fim do seu próximo turno, a atitude da criatura em relação a você melhorará em uma categoria. Pré-requisitos: treinado em Diplomacia e Enganação."
      },
      {
        "nome": "Precisão Furtiva",
        "descricao": "O alcance do seu Ataque Furtivo aumenta em uma categoria (de curto para médio e de médio para longo). Além disso, quando você ataca uma criatura desprevenida ou que você esteja flanqueando, sua margem de ameaça aumenta em +2. Pré-requisitos: treinado em Pontaria, Ataque Furtivo."
      },
      {
        "nome": "Rei do Crime",
        "descricao": "Você é uma lenda dos becos e das tavernas, e todos querem lhe servir para ter uma chance de progredir no submundo. Uma vez por cena, você pode gastar 6 PM para invocar 2d4+2 assassinos capangas em espaços desocupados em alcance curto. Os assassinos possuem deslocamento 9m, Defesa 17, dano 1d6+5 de corte cada e Ataque Furtivo +4d6. Uma vez por rodada, quando você é alvo de um efeito, pode sacrificar um capanga adjacente para ignorar o efeito. Pré-requisitos: Chefe de Gangue, Contatos no Submundo, Mente Criminosa, 17º nível de ladino."
      },
      {
        "nome": "Sabotagem Corrosiva",
        "descricao": "Quando faz um teste de Ladinagem para abrir fechaduras ou sabotar, você pode gastar um ácido para receber um bônus de +5 nesse teste. Além disso, pode gastar uma ação de movimento e um ácido para fazer um teste de Ladinagem oposto ao teste de Reflexos de uma criatura em alcance curto. Se você vencer o teste oposto, a criatura fica desprevenida e sofre –5 em testes de ataque por 1 rodada."
      },
      {
        "nome": "Senhor do Submundo",
        "descricao": "Você é uma figura sombria e sua mera presença incita medo e respeito. Você recebe +5 em Intimidação e imunidade a medo. Além disso, quando você fica adjacente a outra criatura (independente de quem tenha se movido), você pode deixá-la apavorada e desprevenida por 1 rodada. Uma mesma criatura só pode ser afetada por este poder uma vez por cena. Pré-requisitos: treinado em Intimidação, 17º nível de ladino."
      },
      {
        "nome": "Truque de Palco",
        "descricao": "Escolha três magias arcanas de 1º círculo que possuam o aprimoramento truque. Você aprende e pode lançar essas magias (atributo-chave Inteligência), mas apenas com esse aprimoramento. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação. Pré-requisito: treinado em Atuação."
      },
      {
        "nome": "Truque do Chapéu",
        "descricao": "Uma vez por rodada, você pode gastar uma ação de movimento para tirar e arremessar um item que esteja vestindo em uma criatura em alcance curto. Se fizer isso, você pode fazer um ataque com uma arma de arremesso, ou arremessar um preparado alquímico ou poção contra ela como parte dessa ação. Pré-requisito: treinado em Enganação."
      },
      {
        "nome": "Vestido para a Ocasião",
        "descricao": "Se estiver usando um traje da corte ou de viajante, você pode gastar uma ação completa e 1 PM para transformar esse item em outro item de vestuário mundano até o fim da cena. Isso fornece +5 em testes de Enganação para disfarce, além dos benefícios do novo item. Pré-requisito: treinado em Enganação."
      },
      {
        "nome": "Assassino em Série",
        "descricao": "Você pode gastar 2 PM para usar Ataque Furtivo uma segunda vez na rodada. Pré-requisito: 11º nível de ladino."
      },
      {
        "nome": "Ataque Furtivo Letal",
        "descricao": "Quando você faz um ataque furtivo, sempre que rolar o resultado máximo ou um ponto abaixo em um dado da habilidade (por exemplo, um 5 ou 6 ao rolar 1d6), role um dado extra. Pré-requisito: 5º nível de ladino."
      },
      {
        "nome": "Bombardeiro Furtivo",
        "descricao": "Você pode usar Ataque Furtivo ao utilizar preparados alquímicos de dano. Pré-requisito: treinado em Ofício (alquimista)."
      },
      {
        "nome": "Chefe de Gangue",
        "descricao": "Seus capangas podem usar Ataque Furtivo +1d6 e Evasão, e podem fazer testes de Reflexos usando o seu valor nessa perícia. Pré-requisito: 5º nível de ladino."
      },
      {
        "nome": "Conhecimento Anatômico",
        "descricao": "Contra humanoides, os dados do seu Ataque Furtivo aumentam em um passo. Pré-requisito: treinado em Cura."
      },
      {
        "nome": "Enganar os Olhos",
        "descricao": "Quando você faz um teste de Acrobacia para passar por inimigo, a criatura o considera invisível por 1 rodada (Reflexos CD Des evita)."
      },
      {
        "nome": "Finta Acrobática",
        "descricao": "Você soma sua Destreza em testes de Enganação para fintar. Pré-requisitos: treinado em Acrobacia e Enganação."
      },
      {
        "nome": "Improvisação Arcana",
        "descricao": "Quando passa em um teste de Misticismo para lançar uma magia arcana que não conhece de um pergaminho, para cada 2 pontos pelos quais seu teste superar a CD, você pode gastar 1 PM em aprimoramentos da magia. Pré-requisito: treinado em Misticismo."
      },
      {
        "nome": "Furtividade Murídea",
        "descricao": "Você é ágil e esguio, difícil de capturar. Para o bônus de Furtividade concedido pelo seu tamanho, você é considerado uma categoria de tamanho menor. Pré-requisito: nezumi."
      },
      {
        "nome": "Papinho",
        "descricao": "Goblins costumam saber se virar para se aproveitar dos outros e conseguir o que querem, mas você foi além. Escolha uma perícia de Carisma. Você muda o atributo-chave dessa perícia para Inteligência. Pré-requisito: goblin."
      },
      {
        "nome": "Táticas Hobgoblin",
        "descricao": "Muitas gerações de hobgoblins fizeram parte da Infinita Guerra contra os elfos. Quando usa Guerra para analisar terreno, você também pode descobrir uma brecha na organização tática dos seus oponentes. Se passar, o alvo do seu próximo ataque corpo a corpo é considerado desprevenido. Pré-requisito: hobgoblin."
      },
      {
        "nome": "Ameaça Brutal",
        "descricao": "Se fizer um teste de Intimidação para assustar uma criatura na qual tenha causado dano desde a última rodada, você recebe +5 no teste e ela fica apavorada se você passar por 5 ou mais (em vez de 10 ou mais)."
      },
      {
        "nome": "Furtividade Murídea - DB 212 -",
        "descricao": "Você é ágil e esguio, difícil de capturar. Para o bônus de Furtividade concedido pelo seu tamanho, você é considerado uma categoria de tamanho menor. Pré-requisito: nezumi.",
      },
      {
        "nome": "Papinho - DB 212 -",
        "descricao": "Goblins costumam saber se virar para se aproveitar dos outros e conseguir o que querem, mas você foi além. Escolha uma perícia de Carisma. Você muda o atributo-chave dessa perícia para Inteligência. Pré-requisito: goblin.",
      },
      {
        "nome": "Táticas Hobgoblin - DB 212 -",
        "descricao": "Táticas Hobgoblin Muitas gerações de hobgoblins fizeram parte da Infinita Guerra contra os elfos. Quando usa Guerra para analisar terreno, você também pode descobrir uma brecha na organização tática dos seus oponentes. Se passar, o alvo do seu próximo ataque corpo a corpo é considerado desprevenido. Pré-requisito: hobgoblin.",
      }
    ]
  },
  paladino,
  santo,
  samurai,
  cavaleiro
];