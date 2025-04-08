const importAll = (r) => r.keys().map(r);

const logosProjetos = importAll(require.context("../img/capas", false, /\.(png|jpe?g|svg)$/));



export const standInternos = [

  {
    id: 1,
    imgSrc: logosProjetos[0],
    titulo: "Desafio Labirinto: Aventura 3D e Tecnologia",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O projeto 'Labirinto 3D com Arduino e Impressão 3D' é uma interação entre tecnologia e design, onde o labirinto é impresso em 3D e controlado por um sistema Arduino. Os participantes podem mover uma esfera ou objeto por meio de comandos, tentando encontrar a saída do labirinto. O Arduino é responsável por acionar sensores e luzes, tornando a experiência mais dinâmica e desafiadora. Esse projeto une aprendizado em programação, eletrônica e design 3D, oferecendo uma solução criativa e interativa para um festival de tecnologia.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "1"   

  },
  {
    id: 2,
    imgSrc: logosProjetos[0],
    titulo: "LuminaMente: O Desafio da Memória",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O projeto 'Jogo da Memória com Arduino' é uma versão eletrônica do clássico jogo, onde os participantes devem combinar pares de cartas iluminadas por LEDs. Utilizando a placa Arduino, o sistema aciona os LEDs para exibir as cartas, e o jogador precisa memorizar e acertar os pares. O Arduino controla o tempo de exibição das cartas, os acertos e erros, além de fornecer feedback visual e sonoro. Este projeto combina aprendizado em programação, eletrônica e interação, oferecendo uma maneira divertida e educativa de explorar a tecnologia em um festival.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "2"   

  },
  {
    id: 3,
    imgSrc: logosProjetos[0],
    titulo: "EcoLógica: Lixeira Inteligente",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O projeto 'Lixeira com Sensor Feito com Arduino' é uma solução inteligente para promover a sustentabilidade. Utilizando um sensor de proximidade conectado a uma placa Arduino, a lixeira abre automaticamente quando alguém se aproxima, facilitando o descarte de lixo sem a necessidade de contato físico. O Arduino controla o funcionamento do sensor, garantindo que a tampa se abra e feche de maneira eficiente. Este projeto combina aprendizado em programação, eletrônica e inovação, sendo uma maneira prática e interativa de aplicar tecnologia em prol do meio ambiente em um festival de tecnologia.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "3"   
  },
  {
    id: 4,
    imgSrc: logosProjetos[0],
    titulo: "FOTOS COM VISUAL EM LED",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O stand terá como objetivo ser um atrativo no evento, proporcionando aos participantes e visitantes um espaço dedicado para registros fotográficos e de vídeo. Será um local de muita interação, inclusive nas redes sociais da Conexão Social. Incluiremos a logomarca do evento ou da instituição no fundo do stand, garantindo a divulgação da marca em todos os registros realizados no local.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "4"   
  },
  {
    id: 5,
    imgSrc: logosProjetos[0],
    titulo: "Termômetro da Paixão",
    responsavel: "PROFESSOR DANIEL NETO",
    descricao: "Uma demonstração interativa de como o 'Termômetro da Paixão' detecta mudanças simbólicas de temperatura por meio de um sensor (como ao segurar o dispositivo). O projeto utiliza LEDs que mudam de cor gradualmente conforme a temperatura aumenta, simulando diferentes níveis de 'paixão'. Além disso, será explicado como o sensor utilizado pode ter aplicações práticas em dispositivos médicos e de monitoramento térmico.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "5"   
  },
  {
    id: 6,
    imgSrc: logosProjetos[0],
    titulo: "Velozes e Furiosos: Desafio em Lagoa de Itaenga",
    responsavel: "PROFESSOR DANIEL NETO",
    descricao: "O projeto consiste no desenvolvimento de carros controlados por Arduino, equipados com conectividade Bluetooth para operação remota. A proposta é proporcionar uma experiência interativa onde os participantes poderão comandar os veículos por meio de dispositivos móveis, enfrentando um percurso com obstáculos variados.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "6"   
  },
  {
    id: 7,
    imgSrc: logosProjetos[0],
    titulo: "INTELIGÊNCIA ARTIFICIAL EM AÇÃO: CLASSIFICAÇÃO DE IMAGENS E SONS",
    responsavel: "PROFESSOR DANIEL NETO",
    descricao: "Uma demonstração prática de inteligência artificial aplicada ao reconhecimento de imagens e sons. O modelo, treinado na plataforma Teachable Machine, identificará objetos como frutas ou logotipos apresentados à câmera e reconhecerá sons como palmas ou assobios. A atividade incluirá a interação com os participantes, que poderão testar o sistema apresentando objetos e gerando sons para observar o funcionamento da IA em tempo real.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "7"   
  },
  {
    id: 8,
    imgSrc: logosProjetos[0],
    titulo: "EcoSol: Rastreando a Energia do Amanhã",
    responsavel: "PROFESSOR WENDERSON FARIAS",
    descricao: "Este projeto apresenta um seguidor solar automatizado utilizando Arduino, desenvolvido para maximizar a eficiência de captação de energia solar. Ele demonstra como as tecnologias acessíveis podem contribuir para o uso de energias renováveis ​​e abordar desafios globais, como as mudanças climáticas e a dependência de fontes físicas. Alinhado aos Objetivos de Desenvolvimento Sustentável (ODS), especialmente o ODS 7 (energia limpa e acessível), o projeto combinado eletrônico e programação para criar uma solução prática e replicável. A apresentação em uma feira de tecnologia visa educar o público sobre a importância da sustentabilidade e incentivar a inovação na busca por um futuro mais verde.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "8"   
  },

  {
    id: 9,
    imgSrc: logosProjetos[0],
    titulo: "AutoRota: Explorando Novos Caminhos",
    responsavel: "PROFESSOR WENDERSON FARIAS",
    descricao: "Este projeto combina dois comportamentos fundamentais da robótica em um robô multifuncional: seguimento de linha e desvio de obstáculos. Utilizando Arduino UNO como controlador principal, sensores IR para detectar trajetórias e sensores ultrassônicos para evitar colisões, o robô é capaz de navegar com precisão em ambientes controlados.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "9"   
  },
  {
    id: 10,
    imgSrc: logosProjetos[0],
    titulo: "BANCOS DIGITAIS: SEGURANÇA NOS DISPOSITIVOS MÓVEIS",
    responsavel: "PROFESSOR KLEYTTON DIOGENES",
    descricao: "No mundo digital, o uso de bancos digitais tem se tornado cada vez mais comum e conveniente. Porém, é essencial que as pessoas estejam atentas à segurança dos seus dados pessoais. Em nosso estande, vamos apresentar formas de proteger suas informações e evitar golpes financeiros, roubo de dados pessoais, como a importância de não clicar em links desconhecidos recebidos por mensagens ou via whatsapp, usar senhas fortes nos seus dispositivos móveis. Além disso, ensinaremos a navegar com segurança em dispositivos móveis, destacando ferramentas para a utilização segura do celular. A ideia é proporcionar um ambiente de confiança e tranquilidade, garantindo que todos possam aproveitar os benefícios da tecnologia e facilidade com bancos no conforto de sua casa e com maior segurança.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "10"   
  },
  {
    id: 11,
    imgSrc: logosProjetos[0],
    titulo: "SAÚDE MENTAL E TECNOLOGIA",
    responsavel: "PROFESSOR KLEYTTON DIOGENES",
    descricao: "A tecnologia pode ser uma aliada importante no cuidado da nossa saúde mental, desde que usada de forma equilibrada. Neste espaço, exploraremos como o uso consciente da internet pode melhorar a qualidade de vida, como por meio de práticas de meditação e gestão de tempo. Vamos apresentar vídeos e aplicativos que auxiliam na redução do estresse, promovem o bem-estar e incentivam uma rotina mais equilibrada. Ao mesmo tempo, discutiremos a importância de buscar informações confiáveis e de qualidade, evitando o consumo excessivo de conteúdos negativos. A ideia é mostrar que, quando utilizada com sabedoria, a tecnologia pode ser uma poderosa ferramenta para a saúde mental, proporcionando mais clareza e paz interior no dia a dia.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "11"   
  },
  {
    id: 12,
    imgSrc: logosProjetos[0],
    titulo: "Empreendedoras Conectadas: Ferramentas e Estratégias para o Sucesso",
    responsavel: "PROFESSORES KLEYTTON DIOGENES E DANIEL NETO",
    descricao: "Espaço de impulso a troca de conhecimento e experiências entre mulheres empreendedoras. O público visitante deste ecossistema vivenciará oportunidades inovadoras e compartilhamento de trajetórias, desafios e conquistas no mundo dos negócios. Além disso, serão apresentadas ferramentas digitais e estratégicas que auxiliam no crescimento e gestão do empreendimento, abordando temas como marketing digital, finanças, automação de processos e atendimento ao cliente.",
    local: "SALA DO CTACS?",
    data:"A DEFINIR",
    horario:"A DEFINIR",
    stand: "11"   
  }
  
];

// export const apresentacaoList = [

//   {
//     id: 1,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212200&authkey=%21AENFcj_KNuT7ABw",
//     titulo: "Grupo de Capoeira União da Bahia",
//     artista: "Prof. Vermelho",
//     local: "Praça Maria Aurora - Centro",
//     data:"25 de Abril",
//     horario:"15h",
//     tipoApresen: "uniaoBh",
//     descricao: "O Centro Cultural Esportivo e Educacional União da Bahia Capoeira que na época se chamava (grupo União da Bahia Capoeira) foi fundado no final de 1996, na cidade de São Paulo no bairro do Itaim Paulista zona leste, tendo como seus fundadores Mestre João (Presidente) e seus dois formados mais velho Mestre Sombra e Mestre Aventura (in memória), juntos a vários professores formados por sua academia de capoeira da Bahia. Atualmente o grupo de capoeira tem trabalhos na grande São Paulo zona leste, norte e sul.  E em cidades como, Mogi das Cruzes, Biritiba mirim e Guarulhos. E em outros estados, em Pernambuco nas cidades de Lagoa de Itaenga, Vicência, Tracunhaém e Igarassu) e Rio Grande do Sul. E em países como Uruguai, Argentina e Índia.",
//     urlLink: "https://uniaodabahiacapoeira.com.br/portal/"
//   },
//   {
//     id: 2,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212200&authkey=%21AENFcj_KNuT7ABw",
//     titulo: "Cavalo Marinho Boi Teimoso",
//     artista: "Mestre Borges Lucas",
//     local: "Praça Maria Aurora - Centro",
//     data:"24 de Abril",
//     horario:"15h",
//     tipoApresen: "cavaloMarinho",
//     descricao: "'Comecei aos 09 anos brincar de Cavalo Marinho no Terreiro do Sítio do meu avô, em Lagoa de Itaenga, hoje com 59 anos continuo brincando com o Boi Teimoso, mesmo não sendo valorizado como deveria. Essa brincadeira faz parte da minha família, BORGES de Lagoa de Itaenga e de todos que brincam com a gente. Já trabalhei em canavial desde menino, plantando em sítio, criando bodes, me casei, tive filhos e netos, mas nunca deixei de ser um brincante, de ser um fogazão. O que meu pai e avó me passaram hoje meus netos sabem fazer, são caboclos, são mineiros e tocador de coco. E na comunidade rural de Lagoa de Itaenga todos se envolvem nas brincadeiras”, dizia Mestre Borges. A brincadeira reúne encenações, coreografias, improvisos e todas, loas, além de uma série de danças tradicionais, tais como o coco, o mergulhão e a dança de São Gonçalo.' - Mestre Borges",
//     urlLink: "https://www.youtube.com/watch?app=desktop&v=qPbS8JAFDzE"
//   },
//   {
//     id: 3,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212200&authkey=%21AENFcj_KNuT7ABw",
//     titulo: "Ciranda Caboclo",
//     artista: "Mestre Josivaldo Caboclo",
//     local: "Praça Maria Aurora - Centro",
//     data: "25 de Abril",
//     horario: "17h30",
//     tipoApresen: "cirandaCabloco",
//     descricao: "A Ciranda Caboclo é um grupo de cultura popular da zona da mata de Pernambuco, uma iniciativa do Poeta Josivaldo Caboclo, filho do Poeta Bio Caboclo, referência na arte do coco de roda na zona da mata. O grupo surgiu em abril 2017 período em que o Mestre Josivaldo Caboclo gravou seu primeiro CD ciranda, o álbum autoral recebeu o título de “Ciranda Caboclo – Um novo jeito de fazer ciranda”.  A ciranda Caboclo traz uma mistura dos estilos da ciranda carnavalesca com a ciranda da mata norte, moldada pela regra poética dos cantadores de viola e com influência do Poeta Bio Caboclo, violeiro, mestre de maracatu e de coco de roda. Nas letras autoral, o Mestre Cirandeiro faz uma abordagem sobre o fortalecimento das relações entre as pessoas e dos valores éticos, além se utilizar de temas voltadas ao romantismo.  A Família Caboclo há mais de 30 anos vem promovendo e difundindo a arte do coco-de-roda, maracatu, viola e ciranda na zona da mata de Pernambuco para o Brasil e o mundo.",
//     urlLink: "https://www.youtube.com/@GrupoCulturalCaboclo"
//   },
//   {
//     id: 4,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212200&authkey=%21AENFcj_KNuT7ABw",
//     titulo: "Grupo Teatral do Projeto Tô Ligado",
//     artista: "ONG. Geração Futuro",
//     local: "Praça Maria Aurora - Centro",
//     data: "24 de Abril",
//     horario: "16h30",
//     tipoApresen: "touLigado",
//     descricao: "O grupo Tô Ligades conta com 09 (nove) atores e atrizes com idade entre 13 e 18 anos todos residentes na cidade de Lagoa de Itaenga zona da mata norte de Pernambuco a 65,0 km de Recife região metropolitana. O elenco encena o espetáculo: “Experimente Afetos”, uma ação do Projeto Tou Ligado: saúde, educação e sexualidade, executado pela ONG Geração Futuro apoiado pelo FMDCA – Fundo Municipal dos Direitos da Criança e Adolescentes de Lagoa de Itaenga.  O espetáculo “Experimente Afetos” é um drama que retrata a história de uma adolescente que aos 13 anos engravida, e desiste de frequentar a escola pelo machismo sofrido. Narrando a história do espetáculo, ela espera que a história de sua filha seja diferente. 16 anos depois, na escola a filha vivencia junto com os colegas questões/violência como bullying, discriminação, assédio, racismo e LGBTfobia. ",
//     urlLink: "https://gerafuturo.org.br/"
//   },
//   {
//     id: 5,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212200&authkey=%21AENFcj_KNuT7ABw",
//     titulo: "Grupo Teatral “Quando a velhice chegar” do Projeto Comunidade Meu Lugar",
//     artista: "ONG. CEDILI",
//     local: "Praça Maria Aurora - Centro",
//     data: "25 de Abril",
//     horario: "08h00",
//     tipoApresen: "cedili",
//     descricao: "A peça de teatro “Quando a velhice chegar” tem como autora Cyrlene Rita. Organizado pela ONG Centro de Desenvolvimento Integral (CEDILI), apoiado pelo FMDCA – Fundo Municipal dos Direitos da Criança e Adolescentes de Lagoa de Itaenga.  A narrativa apresentada pelo grupo, encena um lugar distante onde um conjunto de amigas idosas que resolveram morar juntas depois da velhice... E para a surpresa de todas receberam uma visita inesperada a velhice, cobrando que essas tenham atitudes consideradas pela sociedade como caracterizados por idosos. É uma peça alegre e divertida que mostra que em qualquer idade podemos fazer tudo ou nada.",
//     urlLink: "https://cedili.com.br/"
//   }
//   // {
//   //   id: 6,
//   //   imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212200&authkey=%21AENFcj_KNuT7ABw",
//   //   titulo: "Maracatu De Baque Virado",
//   //   artista: "Centro Cultural Raio De Luz",
//   //   local: "PERGUNTAR A PEDRO",
//   //   data:"PERGUNTAR A PEDRO",
//   //   horario:"PERGUNTAR A PEDRO"
//   // }

// ];


// export const showList = [

//   {
//     id: 1,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212236&authkey=%21AHBYgDtF1dnd8lQ",
//     nomeArtista: "Cayke João",
//     local: "Praça Maria Aurora - Centro",
//     data:"24 de Abril",
//     horario:"08h00",
//     tipoApresen: "caique",
//     descricao: "",
//     urlLink: ""
//   },
//   {
//     id: 2,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212236&authkey=%21AHBYgDtF1dnd8lQ",
//     nomeArtista: "Alexsandra Santana",
//     local: "Praça Maria Aurora - Centro",
//     data:"24 de Abril",
//     horario:"10h00",
//     tipoApresen: "alexsandra",
//     descricao: "",
//     urlLink: ""
//   },
//   {
//     id: 3,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212236&authkey=%21AHBYgDtF1dnd8lQ",
//     nomeArtista: "DJ Dennys",
//     local: "Praça Maria Aurora - Centro",
//     data:"24 de Abril",
//     horario:"17h00",
//     tipoApresen: "djdennys",
//     descricao: "",
//     urlLink: ""
//   },
//   {
//     id: 4,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212236&authkey=%21AHBYgDtF1dnd8lQ",
//     nomeArtista: "Adalberto Santos",
//     local: "Praça Maria Aurora – Centro",
//     data:"25 de Abril",
//     horario:"10h00",
//     tipoApresen: "adalberto",
//     descricao: "",
//     urlLink: ""
//   },
//   {
//     id: 5,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212236&authkey=%21AHBYgDtF1dnd8lQ",
//     nomeArtista: "Banda N’Zambi – Duas Décadas de Reggae",
//     local: "Praça Maria Aurora – Centro",
//     data:"25 de Abril",
//     horario:"16h30",
//     tipoApresen: "nzambi",
//     descricao: "A banda surgiu em 2003, no Recife, às margens do Rio Capibaribe, especificamente no bairro da Várzea, ambiente fértil para a cultura popular e resistência social. A N’ZAMBI - Duas décadas de Reggae é uma das atuais bandas de reggae de Pernambuco e do Brasil, citadas por vários sites e revistas eletrônicas como a Revista Reggae Brasil, Revista Sebrae, o portal Surforeggae, SomJah, entre outros. O Grupo possui 3 álbuns já gravados: Kaya, Mas Se Oriente! (2008), Pra Verdade Estremecer (2014) e Palavras de Amor (2021).  Em 2023 a banda comemorou 20 anos de carreira, continuando com a proposta de levar aos fãs de todo o Brasil e admiradores da música reggae, essa miscigenação e efervescência da música produzida em Pernambuco.",
//     urlLink: "https://www.youtube.com/channel/UCFMM2RRtQiW_JaYxoPkpdwQ"
//   }
  

// ];

// export const palestraList = [

//   {
//     id: 1,
//     imgSrc:"https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212201&authkey=%21ALv-sGdwbx9dBKo",
//     titulo: "ROBÔLIVRE - como a Tecnologia está Transformando o nosso Mundo?",
//     descricao: "Descubra como as últimas inovações em inteligência artificial, robótica, biotecnologia e nanotecnologia estão revolucionando a saúde, educação, trabalho, meio ambiente e muito mais. Participe de um debate interativo com especialistas e prepare-se para o futuro da tecnologia!",
//     local: "Auditório - CTACS",
//     data:"23 de Abril",
//     horario:"08h30",
//     palestranteNome:"Henrique Foresti",
//     palestranteImgSrc:"henrique",
//     palestranteFormacao:"Professor Mineiro leciona na CESAR School, é bacharel em Ciências da Computação e tem como propósito realizar Transformação Social com Cultura, Arte e Tecnologia. Lidera o Garagino - time de pesquisas em Computação Física e já atuou em grandes empresas de tecnologia executando importantes projetos de inovação. Um dos destaques de sua carreira é a criação da plataforma Robôlivre, que tem revolucionado o cenário da tecnologia.",
//     mediadoraNome:"Andréa Luz",
//     mediadoraImgSrc:"andrea",
//     mediadoraFormacao:"Mestra em Ciências da Linguagem (UNICAP), Especialista em Neurociência, Psicologia Positiva e Mindfulness (PUCPR) e Especialista em Design Instrucional (SENAC SP). Atua como Analista Educacional Pleno, na CESAR School, em Projetos de Educação, Inovação e Tecnologias, com foco em Letramentos Digitais. É pesquisadora na área de Neurociência e sua relação com os processos cognitivos da aprendizagem e Psicanalista membro da Associação Brasileira de Filosofia e Psicanálise de São Paulo (ABRAFP/SP).",
//     numeroPalestrante: 1,
//     mediadoraGenero: 0 
//   },
//   {
//     id: 2,
//     imgSrc:"https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212201&authkey=%21ALv-sGdwbx9dBKo",
//     titulo: "REDES SOCIAIS PARA NEGÓCIOS",
//     descricao: "Nesta palestra, você aprenderá como usar as redes sociais de forma estratégica para alcançar seus objetivos de negócios. Abordaremos desde as melhores práticas para cada plataforma (Facebook, Instagram, LinkedIn, etc.) até a criação de conteúdo relevante e envolvente, gerenciamento eficiente de suas redes, análise de resultados e criação de anúncios eficazes.",
//     local: "Auditório - CTACS",
//     data:"23 de Abril",
//     horario:"13h30",
//     palestranteNome:"Lari e Matheus",
//     palestranteImgSrc:"mateus",
//     palestranteFormacao:"Lari e Matheus uniram sonho e paixão para criar a Saudade D'ocê. Em 4 meses, com R$ 50, mudaram de vida com vendas inovadoras. O sucesso inspirou a Vendup, que já impactou mais de 800 famílias, ajudando mães e empresárias a viverem seus sonhos. A história deles prova que paixão, trabalho e ferramentas certas levam ao sucesso.",
//     mediadoraNome:"Addalaziz de Moura",
//     mediadoraImgSrc:"moura",
//     mediadoraFormacao:"Educador Popular, filósofo e escritor, autor da Pedagogia de Apoio ao Desenvolvimento Sustentável - PEADS. Atuou no Campo da Educação Popular na Arquidiocese de Olinda e Recife com Dom Hélder Câmara, na Diocese de Petrolina, fundador do Serviço de Tecnologia Alternativa e Instituto Abdalaziz de Moura.",
//     numeroPalestrante: 2,
//     mediadoraGenero: 1 //1 é homem, 0 é mulher
//   }

// ];

// export const oficinaList = [

//   {
//     id: 1,
//     imgSrc:"https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212202&authkey=%21ADnXMmdSsO8WiGA",
//     titulo: "Descomplicando a Fotografia!",
//     descricao: "Aprenda tudo sobre sua câmera, domine composição e iluminação, explore técnicas avançadas e edite como um profissional. Ideal para iniciantes, amadores e entusiastas, a oficina oferece aulas teóricas e práticas para você aprender e se divertir. Capture momentos inesquecíveis!",
//     local: "CTACS - Rua Projetada A, sem número, Bairro Salinas",
//     data:"23 de Abril",
//     horario:"08h30",
//     palestranteNome:"Mateus Ferreira",
//     palestranteImgSrc:"mateus",
//     palestranteFormacao:"Graduando em Publicidade e Propaganda na Universidade Estácio de Sá e técnico em design gráfico pele Escola Técnica Estadual. Trabalha com designer gráfico na Conexão Social, Jornalista no Voz de Pernambuco e Diretor de imagem na Siga Comunicação.",
//     numeroPalestrante: 1
//   },
//   {
//     id: 2,
//     imgSrc:"https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212202&authkey=%21ADnXMmdSsO8WiGA",
//     titulo: "Dominância da Câmera e Desenvolvimento Básico de Edição de Vídeos no Celular",
//     descricao: "Na oficina DOMINÂNCIA DA CÂMERA E DESENVOLVIMENTO BÁSICO DE EDIÇÃO DE VÍDEOS NO CELULAR, você vai aprender a filmar como um profissional e editar seus vídeos como um expert, tudo com seu smartphone. Domine técnicas de filmagem, aprenda noções de edição e crie vídeos incríveis para suas redes sociais ou YouTube. A oficina oferece aulas teóricas e práticas para você aprender e se divertir. Inscreva-se agora e domine a arte de criar vídeos!",
//     local: "CTACS - Rua Projetada A, sem número, Bairro Salinas",
//     data:"23 de Abril",
//     horario:"13h30",
//     palestranteNome:"José Willame e Melquiades Alex",
//     palestranteImgSrc:"jose",
//     palestranteFormacao:"José Willame, filmmaker de 31 anos, cria conteúdo através do celular há mais de 6 anos. Formado no curso Mestre da Edição em 2019, ele capacitou mais de 5 alunos para o mundo da criação de conteúdo digital. Seu intuito é inspirar e capacitar jovens para a criação de conteúdo no mundo digital dos dias de hoje. José trabalha na Prefeitura Municipal do Paudalho como criador de conteúdo e presta serviços para o Partido Podemos em Pernambuco, além de outras empresas. Igualmente capacitado, Melquiades Alex, 28 anos, 4 anos de experiência como videomaker e a paixão por transformar ideias em curtidas! Cursando faculdade de filmmaker buscando sempre inovar! Além de vários cursos profissionalizante na bagagem voltado para a área de videomaker. Voluntário na Startup Juventude Criativa na área de marketing e gestor da área de vídeos do LAB de favelas.",
//     numeroPalestrante: 2

//   }

// ];


// export const gameList = [

//   {
//     id: 1,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212234&authkey=%21AHVi2J6o35x4B44",
//     titulo: "COPA FREEFIRE - CONEXÃO TECHFEST",
//     descricao:"Prepare-se para a adrenalina tomar conta da Feira de Tecnologia! Venha participar da COPA FREEFIRE e viva a emoção de um campeonato profissional. Mostre suas habilidades no jogo e dispute prêmios incríveis. Seja você um jogador experiente ou iniciante, a COPA FREEFIRE é para você. Inscreva-se agora e faça parte da história!",
//     local: "Praça Maria Aurora - Centro",
//     data:"24 e 25 de Abril",
//     horario:"08h00",
//     iframeSrc:"https://docs.google.com/forms/d/e/1FAIpQLScv3EDsh82_XHeR4Sjh5QDCjJ4X4OTtUlHR3uQ0EedhWYakMA/viewform?embedded=true",
//     tipoGame: 'freefire'
//   },
//   {
//     id: 2,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212234&authkey=%21AHVi2J6o35x4B44",
//     titulo: "LIGA GAMER DE FUTEBOL - FIFA",
//     descricao:"A Feira de Tecnologia vai sediar um campeonato emocionante que colocará suas habilidades à prova. Dispute partidas acirradas, mostre seu talento e conquiste prêmios incríveis. Seja você um jogador casual ou um pro player, a LIGA GAMER DE FUTEBOL - FIFA é para você. Venha viver a emoção do futebol virtual e faça parte da história! Inscreva-se agora e prepare-se para a grande final!",
//     local: "Praça Maria Aurora - Centro",
//     data:"24 e 25 de Abril",
//     horario:"08h00",
//     iframeSrc:"https://docs.google.com/forms/d/e/1FAIpQLSczYRrA3IJZbD_qExk0TVR2gVlSF-qoT5j8KHV8dk-SD0SobQ/viewform?embedded=true",
//     tipoGame: 'fifa'
//   }
// ];

// export const lazerList = [

//   {
//     id: 1,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212235&authkey=%21ADyKADXvXZjZT4o",
//     titulo: "Esporte, Lazer e Cidania",
//     subtitulo: "Futmesa - Zumba - Pula Corda - Amarelinha Africana - Cabo de Guerra - Coelho Sai da Toca - Dentro e Fora - Jogo da Velha - Transporte de Bambolê - Jogos Cooperativos",
//     local: "Praça Maria Aurora - Centro",
//     data: "24 e 25 de Abril",
//     horario: "08h00"
//   },
//   {
//     id: 2,
//     imgSrc: "https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212235&authkey=%21ADyKADXvXZjZT4o",
//     titulo: "Aulão de Dança",
//     subtitulo: "Org: Centro de Hidroginástica da Conexão Social, Academia da Saúde, Academia Top Fitness, Academia Strong, Academia Geração Saúde e a Academia Extremos",
//     local: "Praça Maria Aurora - Centro",
//     data: "24 de Abril",
//     horario: "18h00"
//   }    

// ];