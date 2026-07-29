

export const vassalo = {
  nome: "Vassalo",
  livro: "Heróis de Arton",
  descricao: "\"Sim, meu lorde.\"\n\nO cavaleiro vassalo é um servo por natureza. Ao contrário de outros aventureiros, que levam vidas de liberdade e independência, o vassalo possui um lorde, um nobre a quem deve obedecer, e faz parte de uma estrutura social rígida. Esse senhor é sempre um aristocrata tradicional, alguém que vive segundo os costumes mais antigos da sociedade artoniana. À medida que adquire experiência, o vassalo recebe responsabilidades e posições de prestígio em seu reino, feudo ou domínio. Seu início é humilde, como um mero pajem, mas ele acaba sua carreira como um grande senhor de terras, responsável por uma população numerosa.\n\nExiste muita variedade e diversidade em Arton, mas o vassalo escolhe um caminho convencional e até mesmo antiquado. Ele vê grande valor na hierarquia nobiliárquica, tem orgulho de ostentar títulos de nobreza e erguer o estandarte de seu senhor. Contudo, não é um mero burocrata, nem tem sede de poder: o vassalo personifica o lado heroico da nobreza, vendo como seu dever proteger a plebe. Derrama seu sangue tanto por seu senhor quanto por seus próprios súditos.\n\nÉ uma vida de servidão e deveres. Mas recompensada pela satisfação de fazer o que é certo — e pelo luxo da aristocracia.",
  imagem: "",
  famosos: "",
  pv: "20 + Constituição no 1º nível; +5 + Constituição por nível.",
  pm: "3 PM por nível.",
  pericias: "Fortitude (Con) e Luta (For), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Diplomacia (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Nobreza (Int), Percepção (Sab) e Vontade (Sab).",
  proficiencias: "Armas marciais e escudos.",
  tabela: [
    { nivel: "1º", habilidades: "Baluarte +2, código de honra, jovem pajem, suserano" },
    { nivel: "2º", habilidades: "Valete" },
    { nivel: "3º", habilidades: "Escudeiro aprendiz" },
    { nivel: "4º", habilidades: "Guarda do castelo" },
    { nivel: "5º", habilidades: "Baluarte +4, vigilante das estradas" },
    { nivel: "6º", habilidades: "Cavaleiro do reino" },
    { nivel: "7º", habilidades: "Sargento do reino" },
    { nivel: "8º", habilidades: "Capitão do reino" },
    { nivel: "9º", habilidades: "Baluarte +6, lorde" },
    { nivel: "10º", habilidades: "Barão" },
    { nivel: "11º", habilidades: "Visconde" },
    { nivel: "12º", habilidades: "Conde" },
    { nivel: "13º", habilidades: "Baluarte +8, marquês" },
    { nivel: "14º", habilidades: "Duque" },
    { nivel: "15º", habilidades: "Arquiduque" },
    { nivel: "16º", habilidades: "Conselheiro real" },
    { nivel: "17º", habilidades: "Baluarte +10, rei mercenário" },
    { nivel: "18º", habilidades: "Rei" },
    { nivel: "19º", habilidades: "Alto rei" },
    { nivel: "20º", habilidades: "Imperador" }
  ],
  habilidades: [
    { nome: "Código de Honra", descricao: "Como o cavaleiro básico. Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto para mostrar que estão acima dos mercenários e bandoleiros que infestam os campos de batalha. Você não pode atacar um oponente pelas costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos covardes e desesperados abala a autoconfiança que eleva o cavaleiro." },
    { nome: "Baluarte", descricao: "Como o cavaleiro básico. Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2.\n\nA partir do 7º nível, quando usa esta habilidade, você pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. Por exemplo, pode gastar 4 PM ao todo para receber +4 na Defesa e nos testes de resistência e fornecer este mesmo bônus aos outros. A partir do 15º nível, você pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os aliados em alcance curto." },
    { nome: "Jovem Pajem", descricao: "Você inicia sua carreira como um pajem, servindo a um sir ou dame mais experiente. Você se torna treinado em Adestramento ou Ofício (armeiro)." },
    { nome: "Suserano", descricao: "Escolha um membro da nobreza aprovado pelo mestre. Você serve a esse nobre, sendo oficialmente reconhecido como parte de sua corte. Os efeitos de seu status ficam a cargo do mestre mas, como regra geral, você recebe +5 em testes de Diplomacia e Intimidação ao lidar com vassalos de seu suserano de nível inferior ao seu e, nas terras dele, pode obter alojamento e alimentação sem custo. Se deixar de servir a seu suserano por qualquer motivo, você perde todos os seus PM e só pode recuperá-los após ser aceito por outro suserano." },
    { nome: "Valete", descricao: "A partir do 2º nível, você já acompanha seu senhor na corte e nos salões nobres. Você se torna treinado em Diplomacia ou Nobreza e recebe um poder de cavaleiro a sua escolha." },
    { nome: "Escudeiro Aprendiz", descricao: "A partir do 3º nível, você ajuda seu senhor na batalha. Você se torna treinado em Cavalgar e recebe proficiência com armaduras pesadas, recebe +2 na Defesa enquanto usa uma armadura pesada." },
    { nome: "Guarda do Castelo", descricao: "No 4º nível, você já patrulha as muralhas do castelo sozinho. Você se torna treinado em Intuição e recebe um poder de cavaleiro a sua escolha." },
    { nome: "Vigilante das Estradas", descricao: "A partir do 5º nível, você expande suas responsabilidades para além do castelo. Você recebe a habilidade Montaria e se torna treinado em Percepção." },
    { nome: "Cavaleiro do Reino", descricao: "No 6º nível, você recebe o título de sir ou dame e atinge o grau mais baixo da nobreza. Você recebe uma armadura ou escudo superior com duas melhorias a sua escolha e recebe um poder de cavaleiro a sua escolha." },
    { nome: "Sargento do Reino", descricao: "No 7º nível, você adquire uma posição no exército do reino. Você recebe um poder de cavaleiro ou de guerreiro a sua escolha (como um guerreiro de nível igual ao seu para propósitos de pré-requisitos)." },
    { nome: "Capitão do Reino", descricao: "No 8º nível, você se torna um oficial no exército, respeitado e prestigiado por militares, nobres e plebeus. Você recebe o poder Escudeiro e a habilidade Golpe Divino (Tormenta20, p. 82), como um paladino de nível igual ao seu. Esta não é uma habilidade mágica e provém de seu senso de justiça e determinação em combate (veja \"Magias Simuladas\", p. 44)." },
    { nome: "Lorde", descricao: "No 9º nível você ascende dentro da nobreza, recebendo um feudo — e muitas responsabilidades. Você recebe o poder Autoridade Feudal. Se já possui esse poder, as pessoas convocadas passam a contar com uma parceiro veterano. Além disso, escolha um dos caminhos a seguir.\n\nCaminho do Soldado. Você recebe um poder de guerreiro (como um guerreiro de nível igual ao seu) a sua escolha.\n\nCaminho do Governante. Você recebe um poder de nobre (como um nobre de nível igual ao seu) a sua escolha." },
    { nome: "Barão", descricao: "No 10º nível, você ascende dentro da nobreza e passa a receber impostos de seus plebeus. Você recebe o poder Título e um domínio de nível 1 (veja p. 314). Se já tiver um domínio, em vez disso ele recebe uma construção gratuita (cujos pré-requisitos seu domínio cumpra)." },
    { nome: "Visconde", descricao: "No 11º nível, você adquire um título mais alto. Se escolheu o Caminho do Soldado, recebe +1 PV por nível de vassalo. Se escolheu o Caminho do Governante, recebe +1 em Inteligência." },
    { nome: "Conde", descricao: "A partir do 12º nível, você é um alto nobre e tem acesso a equipamentos poderosos. No início de cada aventura, você recebe um \"orçamento\" de T$ 30.000 que pode gastar em itens mágicos. Esses itens devem ser devolvidos ou reembolsados no fim da aventura. Além disso, recebe um poder de cavaleiro ou geral a sua escolha." },
    { nome: "Marquês", descricao: "No 13º nível, seus feitos alçam-no a um título ainda mais alto. Se escolheu o Caminho do Soldado, você recebe redução de dano 5 e +2 na Defesa. Se escolheu o Caminho do Governante, você passa a somar seu Carisma em seus testes de resistência." },
    { nome: "Duque", descricao: "No 14º nível, você se tornou um dos mais altos nobres do reino. Duque é um cavaleiro, o nível do parceiro convocado aumenta em um passo. Além disso, você recebe um poder de cavaleiro a sua escolha." },
    { nome: "Arquiduque", descricao: "No 15º nível você atinge o mais alto grau da nobreza, possuindo uma aura que o distingue das pessoas normais e o torna quase intocável. Uma vez por rodada, quando uma criatura inteligente lhe causar dano, você pode gastar 5 PM para reduzir esse dano a 0." },
    { nome: "Conselheiro Real", descricao: "A partir do 16º nível, você se torna um dos conselheiros do rei e passa a partir do poder de Sua Majestade. Você recebe um poder de cavaleiro a sua escolha e aprende e pode lançar uma magia divina de até 4º círculo a sua escolha (atributo-chave Carisma)." },
    { nome: "Rei Mercenário", descricao: "No 17º nível, você dá seus primeiros passos rumo à majestade, e a terra responde às suas aspirações. Se escolheu o Caminho do Soldado, você recebe 3 pontos de atribuição e 1 ponto de atribuição para distribuir como quiser em Força, Destreza e Constituição. Se escolheu o Caminho do Governante, recebe 3 pontos de atributo para distribuir como quiser em Inteligência, Sabedoria e Carisma." },
    { nome: "Rei", descricao: "No 18º nível, seu reino já não precisa mais do apoio de seu antigo lorde — mas vocês ainda são aliados. Você recebe +1 em Carisma e um poder de cavaleiro a sua escolha." },
    { nome: "Alto Rei", descricao: "No 19º nível, você se torna um alto rei, senhor de seu reino e do antigo reino de seu lorde. Tem a sua disposição seguidores e riquezas sem fim — seu \"orçamento\" de itens mágicos aumenta para T$ 100.000 e seu limite de parceiros aumenta em 2." },
    { nome: "Imperador", descricao: "No 20º nível, você chegou ao ápice político de Arton. Talvez tenha colonizado um continente desconhecido. Talvez tenha conquistado o Império de Tauron ou o Reinado. De qualquer forma, você agora é um grande imperador, respeitado e temido por todos. Sua fama não tem limites e as pessoas atribuem a você os mais variados poderes. Você recebe +1 em dois atributos diferentes a sua escolha e aprende e pode lançar uma magia divina de até 5º círculo a sua escolha (atributo-chave Carisma). Você pode começar a pensar em dar terras a seu antigo escudeiro, formando mais um rei e continuando o nobre ciclo do cavaleiro vassalo." }
  ],
  poderes: [
    // O vassalo não possui uma lista de poderes própria como outras classes.
    // Ele recebe poderes de cavaleiro, guerreiro, nobre e geral através de suas habilidades de classe.
    // Esta lista está vazia, mas mantida para consistência com o formato dos outros arquivos.
  ]
}