import profVitoria from '../img/oficinas/vitoria.png'
import profCleiton from '../img/oficinas/cleiton.png'

import geracaoEncantada from '../img/palco_musica_cultura/geracao_encantada.png'

import amandaHadassa from '../img/palco_musica_cultura/amanda_hadassa.png'



const importAll = (r) => r.keys().map(r);

const capaEvento = importAll(require.context("../img/capas", false, /\.(png|jpe?g|svg)$/));

const campeonatoLogos = importAll(require.context("../img/campeonatos", false, /\.(png|jpe?g|svg)$/));

export const standInternos = [

  {
    id: 1,
    imgSrc: capaEvento[0],
    titulo: "Desafio Labirinto: Aventura 3D e Tecnologia",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O projeto 'Labirinto 3D com Arduino e Impressão 3D' é uma interação entre tecnologia e design, onde o labirinto é impresso em 3D e controlado por um sistema Arduino. Os participantes podem mover uma esfera ou objeto por meio de comandos, tentando encontrar a saída do labirinto. O Arduino é responsável por acionar sensores e luzes, tornando a experiência mais dinâmica e desafiadora. Esse projeto une aprendizado em programação, eletrônica e design 3D, oferecendo uma solução criativa e interativa para um festival de tecnologia.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "1"   

  },
  {
    id: 2,
    imgSrc: capaEvento[0],
    titulo: "LuminaMente: O Desafio da Memória",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O projeto 'Jogo da Memória com Arduino' é uma versão eletrônica do clássico jogo, onde os participantes devem combinar pares de cartas iluminadas por LEDs. Utilizando a placa Arduino, o sistema aciona os LEDs para exibir as cartas, e o jogador precisa memorizar e acertar os pares. O Arduino controla o tempo de exibição das cartas, os acertos e erros, além de fornecer feedback visual e sonoro. Este projeto combina aprendizado em programação, eletrônica e interação, oferecendo uma maneira divertida e educativa de explorar a tecnologia em um festival.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "2"   

  },
  {
    id: 3,
    imgSrc: capaEvento[0],
    titulo: "EcoLógica: Lixeira Inteligente",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O projeto 'Lixeira com Sensor Feito com Arduino' é uma solução inteligente para promover a sustentabilidade. Utilizando um sensor de proximidade conectado a uma placa Arduino, a lixeira abre automaticamente quando alguém se aproxima, facilitando o descarte de lixo sem a necessidade de contato físico. O Arduino controla o funcionamento do sensor, garantindo que a tampa se abra e feche de maneira eficiente. Este projeto combina aprendizado em programação, eletrônica e inovação, sendo uma maneira prática e interativa de aplicar tecnologia em prol do meio ambiente em um festival de tecnologia.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "3"   
  },
  {
    id: 4,
    imgSrc: capaEvento[0],
    titulo: "FOTOS COM VISUAL EM LED",
    responsavel: "PROFESSOR APARÍCIO LUIS",
    descricao: "O stand terá como objetivo ser um atrativo no evento, proporcionando aos participantes e visitantes um espaço dedicado para registros fotográficos e de vídeo. Será um local de muita interação, inclusive nas redes sociais da Conexão Social. Incluiremos a logomarca do evento ou da instituição no fundo do stand, garantindo a divulgação da marca em todos os registros realizados no local.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "4"   
  },
  {
    id: 5,
    imgSrc: capaEvento[0],
    titulo: "Termômetro da Paixão",
    responsavel: "PROFESSOR DANIEL NETO",
    descricao: "Uma demonstração interativa de como o 'Termômetro da Paixão' detecta mudanças simbólicas de temperatura por meio de um sensor (como ao segurar o dispositivo). O projeto utiliza LEDs que mudam de cor gradualmente conforme a temperatura aumenta, simulando diferentes níveis de 'paixão'. Além disso, será explicado como o sensor utilizado pode ter aplicações práticas em dispositivos médicos e de monitoramento térmico.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "5"   
  },
  {
    id: 6,
    imgSrc: capaEvento[0],
    titulo: "Velozes e Furiosos: Desafio em Lagoa de Itaenga",
    responsavel: "PROFESSOR DANIEL NETO",
    descricao: "O projeto consiste no desenvolvimento de carros controlados por Arduino, equipados com conectividade Bluetooth para operação remota. A proposta é proporcionar uma experiência interativa onde os participantes poderão comandar os veículos por meio de dispositivos móveis, enfrentando um percurso com obstáculos variados.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "6"   
  },
  {
    id: 7,
    imgSrc: capaEvento[0],
    titulo: "INTELIGÊNCIA ARTIFICIAL EM AÇÃO: CLASSIFICAÇÃO DE IMAGENS E SONS",
    responsavel: "PROFESSOR DANIEL NETO",
    descricao: "Uma demonstração prática de inteligência artificial aplicada ao reconhecimento de imagens e sons. O modelo, treinado na plataforma Teachable Machine, identificará objetos como frutas ou logotipos apresentados à câmera e reconhecerá sons como palmas ou assobios. A atividade incluirá a interação com os participantes, que poderão testar o sistema apresentando objetos e gerando sons para observar o funcionamento da IA em tempo real.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "7"   
  },
  {
    id: 8,
    imgSrc: capaEvento[0],
    titulo: "EcoSol: Rastreando a Energia do Amanhã",
    responsavel: "PROFESSOR WENDERSON FARIAS",
    descricao: "Este projeto apresenta um seguidor solar automatizado utilizando Arduino, desenvolvido para maximizar a eficiência de captação de energia solar. Ele demonstra como as tecnologias acessíveis podem contribuir para o uso de energias renováveis ​​e abordar desafios globais, como as mudanças climáticas e a dependência de fontes físicas. Alinhado aos Objetivos de Desenvolvimento Sustentável (ODS), especialmente o ODS 7 (energia limpa e acessível), o projeto combinado eletrônico e programação para criar uma solução prática e replicável. A apresentação em uma feira de tecnologia visa educar o público sobre a importância da sustentabilidade e incentivar a inovação na busca por um futuro mais verde.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "8"   
  },

  {
    id: 9,
    imgSrc: capaEvento[0],
    titulo: "AutoRota: Explorando Novos Caminhos",
    responsavel: "PROFESSOR WENDERSON FARIAS",
    descricao: "Este projeto combina dois comportamentos fundamentais da robótica em um robô multifuncional: seguimento de linha e desvio de obstáculos. Utilizando Arduino UNO como controlador principal, sensores IR para detectar trajetórias e sensores ultrassônicos para evitar colisões, o robô é capaz de navegar com precisão em ambientes controlados.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "9"   
  },
  {
    id: 10,
    imgSrc: capaEvento[0],
    titulo: "BANCOS DIGITAIS: SEGURANÇA NOS DISPOSITIVOS MÓVEIS",
    responsavel: "PROFESSOR KLEYTTON DIOGENES",
    descricao: "No mundo digital, o uso de bancos digitais tem se tornado cada vez mais comum e conveniente. Porém, é essencial que as pessoas estejam atentas à segurança dos seus dados pessoais. Em nosso estande, vamos apresentar formas de proteger suas informações e evitar golpes financeiros, roubo de dados pessoais, como a importância de não clicar em links desconhecidos recebidos por mensagens ou via whatsapp, usar senhas fortes nos seus dispositivos móveis. Além disso, ensinaremos a navegar com segurança em dispositivos móveis, destacando ferramentas para a utilização segura do celular. A ideia é proporcionar um ambiente de confiança e tranquilidade, garantindo que todos possam aproveitar os benefícios da tecnologia e facilidade com bancos no conforto de sua casa e com maior segurança.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "10"   
  },
  {
    id: 11,
    imgSrc: capaEvento[0],
    titulo: "SAÚDE MENTAL E TECNOLOGIA",
    responsavel: "PROFESSOR KLEYTTON DIOGENES",
    descricao: "A tecnologia pode ser uma aliada importante no cuidado da nossa saúde mental, desde que usada de forma equilibrada. Neste espaço, exploraremos como o uso consciente da internet pode melhorar a qualidade de vida, como por meio de práticas de meditação e gestão de tempo. Vamos apresentar vídeos e aplicativos que auxiliam na redução do estresse, promovem o bem-estar e incentivam uma rotina mais equilibrada. Ao mesmo tempo, discutiremos a importância de buscar informações confiáveis e de qualidade, evitando o consumo excessivo de conteúdos negativos. A ideia é mostrar que, quando utilizada com sabedoria, a tecnologia pode ser uma poderosa ferramenta para a saúde mental, proporcionando mais clareza e paz interior no dia a dia.",
    llocal: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "11"   
  },
  {
    id: 12,
    imgSrc: capaEvento[0],
    titulo: "Empreendedoras Conectadas: Ferramentas e Estratégias para o Sucesso",
    responsavel: "PROFESSORES KLEYTTON DIOGENES E DANIEL NETO",
    descricao: "Espaço de impulso a troca de conhecimento e experiências entre mulheres empreendedoras. O público visitante deste ecossistema vivenciará oportunidades inovadoras e compartilhamento de trajetórias, desafios e conquistas no mundo dos negócios. Além disso, serão apresentadas ferramentas digitais e estratégicas que auxiliam no crescimento e gestão do empreendimento, abordando temas como marketing digital, finanças, automação de processos e atendimento ao cliente.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "12"   
  },
  {
    id: 13,
    imgSrc: capaEvento[0],
    titulo: "CARRINHO AUTÔNOMO",
    responsavel: "LIVE UFPE",
    descricao: "No Laboratório de Inovação Veicular (LIVE), são realizadas pesquisas voltadas para o desenvolvimento de tecnologias de Condução Autônoma (ADS), com foco em sistemas que garantam a segurança tanto dos ocupantes dos veículos quanto dos pedestres ao redor. Esses sistemas são fundamentais para que o veículo autônomo perceba seu ambiente e tome decisões eficazes e seguras. A demonstração do trabalho no LIVE consiste na apresentação de um veículo autônomo em escala reduzida, equipado com uma série de funcionalidades avançadas. Entre essas funcionalidades, destaca-se o Lane Keeping Assist (LKA), que permite ao veículo manter-se na faixa de rodagem de forma autônoma, ajustando sua trajetória conforme necessário. Além disso, o sistema de Traffic Sign Recognition (TSRS) identifica sinais de trânsito, permitindo que o veículo reconheça e obedeça às normas viárias, e o Advanced Emergency Braking System (AEBS) detecta obstáculos próximos e aciona os freios automaticamente, prevenindo colisões.Essa demonstração visa mostrar, de forma prática, como as soluções desenvolvidas no laboratório podem ser aplicadas na condução autônoma, garantindo maior segurança e eficiência no trânsito.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "13"   
  },
  {
    id: 14,
    imgSrc: capaEvento[0],
    titulo: "Exposição fotográfica: Minha referência a Biu e o Coco de roda",
    responsavel: "Jadson",
    descricao: "A exposição é um marco na história da vida do poeta, repentista e compositor Biu Caboclo. Os visitantes irão conhecer registro fotográfico da vida do artista e da cultura do coco de roda. Ao longo de sua vida, Biu se dedicou ao Coco de Roda, movimento que ele ajudou a perpetuar e enriquecer. Como poeta de Coco de Roda, Biu liderou com paixão e identidade única, sendo reconhecido por sua habilidade de contar histórias através do ritmo e da dança.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "14"   
  },
  // {
  //   id: 15,
  //   imgSrc: capaEvento[0],
  //   titulo: "Conectas Elas! Um aplicativo para promoção dos direitos da mulher e o combate à violência doméstica e familiar",
  //   responsavel: "Prof. Anderson - LTS/UFAPE",
  //   descricao: "O APP de educacional será desenvolvido com o objetivo de promover os direitos das mulheres e combater a violência doméstica e familiar no município de Lagoa de Itaenga - PE. No qual a população poderá baixar nos seus celulares ou computadores o dispositivo para com painéis de informações, interação e denúncias em combate à violência ou violação dos direitos das mulheres. Programa Institucional de Bolsa de Extensão (PIBEX - UFAPE) pela Pró Reitora de Extensão e Cultura da UFAPE.",
  //   local: "Praça Maria Aurora",
  //   data:"08 e 09 de Maio",
  //   horario:"às 08h00",
  //   stand: "15"   
  // },

  {
    id: 15,
    imgSrc: capaEvento[0],
    titulo: "Conexão Inteligência Artificial na Impressão 3D",
    responsavel: "Prof. Danrley Santiago - ETE Maria Eduarda Ramos de Barros",
    descricao: "Os visitantes irão conhecer a experiência da ETE Maria Eduarda Ramos de Barros. A Inteligência Artificial (IA) e a Impressão 3D são tecnologias complementares que estão transformando indústrias. Enquanto a IA utiliza algoritmos para analisar dados, otimizar processos e prever resultados, a impressão 3D permite a criação rápida de objetos físicos complexos, desde protótipos até peças funcionais. Juntas, elas aceleram a inovação: a IA pode aprimorar projetos 3D, reduzindo falhas e personalizando geometrias, enquanto impressoras 3D materializam soluções inteligentes em tempo recorde. Com a democratização dessas tecnologias, empresas e makers ganham poder para inovar em escala, reduzindo custos e tempo. O futuro promete integração ainda maior, com sistemas autônomos projetando e fabricando sob demanda.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "15"   
  },
  {
    id: 16,
    imgSrc: capaEvento[0],
    titulo: "Centro de Treinamento Esportivo (CTE)",
    responsavel: "Prof. Hernandes Borba - ",
    descricao: "Nesta experiência será apresentado de forma contextualizada como esporte pode transformar vidas, por meio da educação em cidadania e disciplina como prática de convivência na sociedade. O CTE é uma instituição de ensino especializada em artes marciais, dedicada à prática e difusão do Jiu-Jitsu. Fundado em 27 de outubro de 2020, em Lagoa de Itaenga-PE, o CTE nasceu com a missão de promover e fortalecer a modalidade no município. Mesmo enfrentando os desafios da pandemia, consolidou-se como uma referência na formação de atletas e praticantes, impulsionando o crescimento do esporte na região. Sob a liderança do Faixa Preta Hernandes Borba, o CTE se destaca pelo compromisso com a excelência no ensino e o desenvolvimento contínuo dos alunos. A escola tornou-se um verdadeiro polo de formação de talentos no Jiu-Jitsu, incentivando o alto rendimento e o crescimento pessoal de seus praticantes.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "16"   
  },
  {
    id: 17,
    imgSrc: capaEvento[0],
    titulo: "Conexão Diversão",
    responsavel: "Prof. Beatriz Sandra",
    descricao: "Espaço aberto com intuito de recepcionar crianças a partir das diversas idades com brincadeiras, atividades de integração e cidadania. Com o uso de instrumentos de recreação, estimulando o resgate as lembranças de infância. O lúdico e o mágico darão espaço à imaginação dos participantes. Com o apoio dos colaboradores, o Conexão Diversão impulsionará a criatividade e o movimento, oferecendo tempo de lazer de maneira alegre e segura.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "17"   
  },
  {
    id: 18,
    imgSrc: capaEvento[0],
    titulo: "Conexão Skate Livre",
    responsavel: "Prof. Lucas e Rafael",
    descricao: "Espaço skate pela mudança social, essa é a mensagem que pretendemos levar no Conexão Skate Livre. Projeto financiado pela 2x medalhista olímpica Rayssa Leal e atual campeã da SLS, reunirá cerca de 40 meninas e meninos que por meio de atividades com skate estão fazendo parte da mudança social e cidadã. O ambiente estruturado conta com rampas, corrimões e obstáculos tem um intuito de demonstrar manobras e como é o convívio entre skatistas para a população em geral.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "18"   
  },
  {
    id: 19,
    imgSrc: capaEvento[0],
    titulo: "Conexão Saúde e Bem Estar",
    responsavel: "Secretaria de Saúde - Glaucia Beatriz",
    descricao: "Espaço destinado a promoção do bem-estar físico, mental e emocional da população. Iniciativa coordenada pela Secretaria Municipal de Saúde de Lagoa de Itaenga em parceria com o Governo de Pernambuco com o intuito de articular as políticas públicas de saúde e bem estar. O espaço terá muitas trocas de experiências entre profissionais de saúde e o público em geral, de forma interativa e dinâmica. A ação será voltada para o público diversificado, famílias, jovens e idosos com a ideia de possibilitar o acesso as políticas de forma segura e qualidade a vida dos participantes.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "19"   
  },
  {
    id: 20,
    imgSrc: capaEvento[0],
    titulo: "Conexão 4.0 - Juventudes",
    responsavel: "Secretaria de Juventude - Jackson",
    descricao: "Ambiente que articula as políticas públicas para a oferta de serviços aos jovens interessados (15 a 29 anos). Iniciativa coordenada pela Secretaria Municipal de Juventudes de Lagoa de Itaenga em parceria com o Governo de Pernambuco por meio da Gerência de Políticas em Juventudes. A oferta de mini oficinas, cadastro do ID jovem, serviços de retiradas de documentos e acesso a cidadania visa apoiar na inclusão social do acesso aos direitos e garantia do exercício da cidadania.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "20"   
  },
  {
    id: 21,
    imgSrc: capaEvento[0],
    titulo: "Espaço Conecta Elas",
    responsavel: "Secretaria da Mulher - Paloma",
    descricao: "Espaço destinado a sensibilização das políticas públicas de mulheres e das medidas protetivas da violência contra elas. Coordenada pela Secretaria Municipal da Mulher de Lagoa de Itaenga em parceria com o Governo de Pernambuco a iniciativa tem o intuito de articular o acesso as políticas de mulheres de forma prática e democrática. No espaço será ofertado canal de denúncias da violação de direitos, além da distribuição de material institucional de sensibilização e a comercialização de produtos de mulheres empreendedora em uma ampla estrutura de acolhida. A partir da troca de experiências a ação destinada ao público em geral, tem o intuito de fortalecer a rede de garantia de direitos e apoio as mulheres do território.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "21"   
  },
  {
    id: 22,
    imgSrc: capaEvento[0],
    titulo: "Batalha do Capibaribe",
    responsavel: "Dark - Lucas",
    descricao: "A cena do hip hop é um caldeirão pulsante de criatividade e expressão, onde diferentes formas de arte se entrelaçam e se fortalecem. As batalhas de rima, verdadeiros duelos verbais, revelam a habilidade dos MCs em improvisar e usar as palavras como armas e poesias. As batalhas de B-boy, com seus movimentos acrobáticos e coreografias complexas, mostram a força e a leveza do corpo em sintonia com a música. O grafite, com suas cores vibrantes e mensagens impactantes, transforma muros e paredes em telas de protesto e beleza. E o skate, com suas manobras radicais e espírito livre, representa a busca por adrenalina e superação. Juntos, esses elementos compõem uma cultura urbana vibrante e em constante evolução, que ecoa a voz das ruas e celebra a diversidade. ",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "22"   
  },
  {
    id: 23,
    imgSrc: capaEvento[0],
    titulo: "Conexão Games",
    responsavel: "Prof. Arthur Yuri",
    descricao: "Bem-vindo à Sala de Games Festival, um ecossistema onde a diversão não tem limites! Prepare-se para uma imersão completa no universo dos games com várias atrações que prometem agradar a todos os tipos de jogadores. Serão 50M² equipada com os clássicos fliperamas, que trazem de volta a nostalgia dos jogos de arcade, além de um simulador de corrida para você sentir a adrenalina de uma pista de corrida com todo o realismo. Para os fãs de consoles modernos, temos os incríveis kits PlayStation 5, onde você pode jogar os títulos mais recentes e imersivos. E, claro, para quem adora se divertir em grupo, temos o kit Just Dance, com coreografias animadas que vão fazer todo mundo se mover. O ambiente acolhe até 25 pessoas por vez, proporcionando uma experiência divertida e dinâmica para todos. Cada sessão tem duração de aproximadamente 20 minutos, com intervalos, para que mais grupos possam entrar e se divertir. As entradas e saídas serão organizadas de maneira eficiente, garantindo que todos aproveitem ao máximo a experiência sem filas longas. Não perca essa oportunidade de se divertir e testar suas habilidades em diferentes modalidades de jogos!",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "23"   
  },
  {
    id: 24,
    imgSrc: capaEvento[0],
    titulo: "Conexão Robótica Educacional",
    responsavel: "GRE Limoeiro",
    descricao: "Neste espaço os visitantes conhecerão iniciativas de educação em robótica, desenvolvidas por estudantes da rede estadual do ensino médio de Pernambuco.Será apresentado sete projetos desenvolvidos ao longo do currículo escolar como prática educacional e tecnológica. Pilotos lideradas por professores e estudantes das escolas: EREM Mota Silveira, EREM jarina e EREM Jandira.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "24"   
  }
  
];

export const palcoList = [

  {
    id: 1,
    imgSrc: capaEvento[1],
    titulo: "Furmiga Dub",
    foto:"",
    responsavel: "Fabiano Formiga",
    descricao: "FurmigaDub é o projeto de Fabiano Formiga, multi-instrumentista paraibano formado pela (UFPB), que tocou nas Orquestras Sinfônicas do Estado, bandas de reggae, heavy metal, brega, sambarock, etcoco de roda, e que desde 2011 se dedica à produção de faixas autorais, misturando música de cultura popular paraibana com estéticas de música eletrônica. Suas canções vêm conquistando o público das principais festas de música brasileira e eletrônica do Brasil, onde ele é presença constante tanto em DJ sets quanto em apresentações ao vivo. Além de compor suas próprias músicas, FurmigaDub é responsável por resgatar e gravar canções de mestres da cultura popular nunca gravados, ajudando a preservar e difundir esses trabalhos tão únicos da cultura brasileira.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00" 

  },
  {
    id: 2,
    imgSrc: capaEvento[1],
    titulo: "Grupo de Maracatu Geração Encantada",
    foto: geracaoEncantada,
    responsavel: "Centro Cultural Raio de Luz",
    descricao: "O Centro Cultural Raio de Luz, é uma organização não governamental de Lagoa de Itaenga, fundada há 21 anos, vem mantendo viva a cultura popular com a tradição do Maracatu de Baque Virado, com o Grupo Geração Encantada. Formado por 20 adolescentes de 11 a 14 anos são das comunidades Açude de Pedra e Arrombado, com vínculo as escolas municipais Denise Maria, Maria Anunciada e Colégio João Vieira Bezerra. O grupo tem como missão fortalecer a cultura popular e preservar as raízes do Maracatu de baque virado. trás para a avenida toques e danças da cultura enraizada pelo sorriso e brilhos nos olhos de quem faz com a cidadania na prática de convivência social.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00"

  },
  {
    id: 3,
    imgSrc: capaEvento[1],
    titulo: "Espetáculo Musical: Um diálogo para o futuro",
    foto:"",
    responsavel: "Denise Coelho - Centro de Desenvolvimento Local Integrado (CDLI)",
    descricao: "O Centro de Desenvolvimento Integral em Lagoa de Itaenga (CEDILI), é uma Organização Não Governamental atuantes em comunidades do município de Lagoa de Itaenga. De forma intergeracional apresenta o espetáculo musical “Um diálogo para o Futuro”, desenvolvido com os participantes dos Projetos Minha Primeira Opção-Educação e o Projeto Meu lugar-Envelhecer bem. A iniciativa traz ao público as canções dos respectivos compositores, Dudu Falcão com ¨Além do “arco íris” e Luiz Gonzaga com “Asa Branca”. Canções que fazem parte do repertório brasileiro, valorizando a nossa regionalidade.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00" 

  },
  {
    id: 4,
    imgSrc: capaEvento[1],
    titulo: "Grupo Cultural Caboclo",
    foto:"",
    responsavel: "Josuel Caboclo",
    descricao: "A Ciranda Caboclo é um grupo de cultura popular da zona da mata de Pernambuco, uma iniciativa do Poeta Josivaldo Caboclo, filho do Poeta Bio Caboclo, referência na arte do coco de roda na zona da mata. O grupo surgiu em abril 2017 período em que o Mestre Josivaldo Caboclo gravou seu primeiro CD ciranda, o álbum autoral recebeu o título de “Ciranda Caboclo – Um novo jeito de fazer ciranda”.  A ciranda Caboclo traz uma mistura dos estilos da ciranda carnavalesca com a ciranda da mata norte, moldada pela regra poética dos cantadores de viola e com influência do Poeta Bio Caboclo, violeiro, mestre de maracatu e de coco de roda. Nas letras autoral, o Mestre Cirandeiro faz uma abordagem sobre o fortalecimento das relações entre as pessoas e dos valores éticos, além se utilizar de temas voltadas ao romantismo.  A Família Caboclo há mais de 30 anos vem promovendo e difundindo a arte do coco-de-roda, maracatu, viola e ciranda na zona da mata de Pernambuco para o Brasil e o mundo. ",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00"

  },

  {
    id: 5,
    imgSrc: capaEvento[1],
    titulo: "Nildo do Coco 'Tome Xote'",
    foto:"",
    responsavel: "Ana Beatriz",
    descricao: "Nildo do Coco é um artista local que há mais de 25 anos se dedica à música, enaltecendo as raízes do pé de serra, brega e forró. Morador da cidade de Lagoa de Itaenga, Nildo se dedica à música como um hobby apaixonado, e já teve a oportunidade de cantar em alguns bares da cidade, onde é conhecido por sua voz grave. Com uma presença carismática no palco, Nildo nos faz reviver grandes clássicos do pé de serra, forró e brega, transportando o público para um universo de tradição e autenticidade. Através da música Nildo valoriza às raízes culturais da região, e sua paixão e dedicação à arte são evidentes em cada apresentação. Embora a música seja um hobby para Nildo, sua contribuição à cena musical local é inestimável.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00" 

  },
  {
    id: 6,
    imgSrc: capaEvento[1],
    titulo: "MaracaFesng",
    foto:"",
    responsavel: "Ana Lívia",
    descricao: "O Projeto de Extensão MaracaFENSG: Educação Popular e Valorização da Cultura Nordestina é vinculado à Faculdade de Enfermagem Nossa Senhora da Graças (FENSG/UPE) e trabalha, em suas ações, desde de 2010, a promoção de Educação em Saúde através da Educação Popular e ritmos nordestinos, como o Maracatu, o coco e a ciranda, além de promover espaços culturais em eventos intra e extra-muro da Universidade de Pernambuco. Nosso projeto busca a integração entre o saber popular e o saber científico, trazendo sempre a população alcançada para protagonizar seu processo de aprendizagem no que tange o autocuidado, a preservação e a manutenção da saúde.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00"  

  },
  {
    id: 7,
    imgSrc: capaEvento[1],
    titulo: "Aulão de Dança",
    foto:"",
    responsavel: "Profª Debora e Profª Irlane",
    descricao: "Uma atmosfera destinada ao público das diversas idades com o intuito de recepcioná-los com a uma energia e animação sem limites. Uma excelente oportunidade proporcionada por meio da dança com atividades de impulso a diversão e cuidado com a saúde. Neste momento os participantes terão oportunidade de vivenciar diversos estilos de dança em um ambiente descontraído de interação.",
    local: "Praça Maria Aurora",
    data:"07de Maio",
    horario:"às 18h00"   

  },
  {
    id: 8,
    imgSrc: capaEvento[1],
    titulo: "Amanda Vitória & Hadassa Vitória",
    foto:amandaHadassa,
    responsavel: "Amanda Vitória & Hadassa Vitória",
    descricao: "A música gospel, com sua mensagem de fé, esperança e inspiração, tem o poder de tocar corações e transformar ambientes. Em um evento como o TechFest, onde inovação e tecnologia estão em destaque, ela oferece uma pausa para reflexão e conexão espiritual. Assim, a música gospel traz não só diversidade cultural, mas também um momento de renovação, mostrando que, além da tecnologia, ela pode ser um veículo de emoção e fortalecimento da fé.",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00"   

  },
  
  
  
];

export const oficinaList = [

  {
    id: 1,
    imgSrc: capaEvento[4],
    titulo: "Crie seu primeiro site",
    foto: profCleiton,
    responsavel: "Cleiton Melo",
    descricao: "'Crie seu primeiro site' é uma oficina ofertada prática e interativa que visa ensinar os fundamentos do desenvolvimento de sites. Ministrada por Cleiton, Desenvolvedor de software Senior no Ministério da Cidadania do Governo Federal, nessa oficina, você aprenderá a criar um site do zero utilizando as tecnologias mais populares do mercado, incluindo HTML, CSS, JavaScript e Bootstrap. Com orientação passo a passo, você descobrirá como estruturar o conteúdo do seu site, estilizá-lo com CSS, adicionar interatividade com JavaScript e utilizar o framework Bootstrap para criar um design responsivo e moderno. Ao final da oficina, você terá criado seu próprio site e estará preparado para continuar explorando o mundo do desenvolvimento web.",
    tipo:"Minicurso",
    local: "Prédio do CTACS - Sala 02",
    data:"07 de Maio",
    horario:"às 14h00",
    link:"https://forms.gle/24dHt2p1XATZtvfh9"
    

  },
  {
    id: 2,
    imgSrc: capaEvento[4],
    titulo: "Musicalização com FurmigaDub",
    foto:"",
    responsavel: "Fabiano Formiga",
    descricao: "Como cada um se relaciona com a música? - Exercícios de improvisação - Noções básicas de harmonia e teoria musical - Facilitador Fabiano Formiga multi-instrumentista paraibano formado pela (UFPB).",
    local: "Prédio do CTACS - Sala 04",
    tipo:"Minicurso",
    data:"07 de Maio",
    horario:"às 08h30 e às 14h00",
    link:"https://forms.gle/FGta3yy21E1e4kR59"
     

  },
  {
    id: 3,
    imgSrc: capaEvento[4],
    titulo: "Barbearia em Ação: Cortes Grátis e Técnicas Profissionais",
    foto:"",
    responsavel: "Barbeiros Nierlyson e Mateus",
    descricao: "Neste espeço será ofertado ao público em geral conhecimentos sobre cortes de cabelo na prática. Além do corte os participantes terão a oportunidade de conhecer técnicas, utensílios e equipamentos necessários a atividade profissional.",
    tipo:"Minicurso",
    local: "Prédio do CTACS",
    data:"07 de Maio",
    horario:"às 09h00",
    link:"https://forms.gle/jMWqTeQVYotS2CRX8"
     

  },
  {
    id: 4,
    imgSrc: capaEvento[4],
    titulo: "Eletrônica e Programação com Arduino",
    foto:"",
    responsavel: "Prof. Manoel",
    descricao: "Nesta oficina será abordado de forma teórica e prática conhecimentos sobre eletrônica básica, mundos analógico e digital, CPU, conversão A/D, sensores e atuadores; dar uma noção geral e depois sugerir duas práticas com Arduino: Mostrar como o Arduino pode acionar cargas grandes (driver, acoplamento ótico, etc), com aplicação; Desenvolver exemplos de acoplamento de sensores no Arduino (temperatura ou temperatura /umidade, com atuação de solenoides (atuadores) em irrigação. A expectativa da aprendizagem com os participantes terá o objetivo maior de traduzir em linguagem simples a prática a programação com o uso do Arduino em sistemas e sedimentarem em projetos cotidianos.",
    tipo:"Minicurso",
    local: "Prédio do CTACS - Sala 01",
    data:"07 de Maio",
    horario:"às 08h30 e às 14h00",
    link:"https://forms.gle/5XDFNf4SiGK2RJYQA"
     

  },
  {
    id: 5,
    imgSrc: capaEvento[4],
    titulo: "Mulheres empreendedoras: Mãos que Criam, Vozes que Inspiram",
    foto:"",
    responsavel: "Jaciara, Paula, Laiz",
    descricao: "O projeto Empreendedoras Conectadas trará uma série de oficinas práticas voltadas para mulheres que atuam ou desejam ingressar no setor da beleza. As atividades incluirão três áreas fundamentais: manicure, estética e design de sobrancelhas, conduzidas por profissionais experientes que compartilharão suas trajetórias, desafios e aprendizados no empreendedorismo e com práticas.",
    tipo:"Minicurso",
    local: "Prédio do CTACS - Sala 02",
    data:"07 de Maio",
    horario:"às 08h30",
    link: "https://forms.gle/EzFfVXuPwDsAvw6S7"
    

  },
  {
    id: 6,
    imgSrc: capaEvento[4],
    titulo: "Da Terra ao Prato: Cultive Sua Própria Horta!",
    foto: profVitoria,
    responsavel: "Profª Vitória Régia e Prof° Everton Nascimento",
    descricao: "Venham aprender a manter sua própria horta doméstica, mesmo em pequenos espaços, promovendo o cultivo de temperos, hortaliças e ervas medicinais de forma prática, sustentável e acessível. Ao final deste momento serão capazes de escolher os recipientes ideais, preparar o solo, selecionar as plantas adequadas, realizar os cuidados essenciais e colher os benefícios de uma alimentação mais saudável e conectada com a natureza. Além disso, a oficina tem o objetivo de promover a segurança alimentar e a sustentabilidade em diversos contextos. Esperamos que vocês tenham inspiração para produzir alimentos, escolhendo os recipientes e plantas ideais, preparar o solo de forma correta, cuidados básicos do cultivo, reduzir impactos ambientais e garantir uma produção de alimentos segura a sua saúde. Professora Vitória é Engenheira Agrônoma e Mestre em Engenharia Agrícola. Professor Everton é Engenheiro Agrônomo, Mestre em fitopatologia, Doutorando em Fitopatologia.",
    tipo:"Minicurso",
    local: "Prédio do CTACS - Area Externa",
    data:"07 de Maio",
    horario:"às 08h30 e às 14h00",
    link:"https://forms.gle/snBr3DTT3M6aSKet5"
     

  },

  {
    id: 7,
    imgSrc: capaEvento[4],
    // 4 para minicurso 5 para palestra
    titulo: "Design Thinking com o Armazém da Criatividade – Porto Digital",
    foto: "",
    responsavel: "Profª Pâmela Dias",
    descricao: "O Design Thinking é uma abordagem prática e inovadora para solucionar problemas com foco nas pessoas. Neste minicurso, você vai conhecer e aplicar as principais etapas desse processo — empatia, definição, ideação, prototipagem e testes — para desenvolver soluções criativas e eficazes. Ao longo das atividades, você aprenderá a trabalhar de forma colaborativa, exercitando o pensamento crítico e a escuta ativa, sempre com o objetivo de gerar impacto real. Ideal para quem deseja transformar ideias em ações e promover inovação em qualquer área.",
    tipo:"Minicurso",
    local: "Prédio do CTACS - Sala 03",
    data:"07 de Maio",
    horario:"às 14h00",
    link:"https://forms.gle/Z5FN1RRiwi4kTk4w6"
     

  },
  

  {
    id: 8,
    imgSrc: capaEvento[5],
    titulo: "A função social das tecnologias: A experiência do Laboratório Multidisciplinar de Tecnologia Social/UFAPE",
    responsavel: "Professor Dr. Anderson de Alencar",
    descricao: "Nesta palestra, será apresentada a atuação do Laboratório Multidisciplinar de Tecnologia Social (LMTS) da Universidade Federal do Agreste de Pernambuco (UFAPE), destacando como a tecnologia pode ser pensada e aplicada a partir de uma perspectiva voltada para o bem comum e o desenvolvimento social. A proposta é discutir o papel das tecnologias sociais como ferramentas de transformação, inclusão e fortalecimento de comunidades, a partir de experiências concretas desenvolvidas pelo laboratório junto a populações em situação de vulnerabilidade. A atividade também convida à reflexão sobre a responsabilidade social da ciência e da tecnologia, e como práticas colaborativas e interdisciplinares podem gerar soluções inovadoras para desafios sociais reais.",
    tipo:"Painel",
    local: "Prédio do CTACS - Auditório",
    data:"07 de Maio",
    horario:"às 10h00"
     

  },
  // {
  //   id: 8,
  //   imgSrc: capaEvento[2],
  //   titulo: "Tecnologia e Acessibilidade um Futuro presente",
  //   responsavel: "Pedro Izidio",
  //   descricao: "",
  //   tipo:"Painel",
  //   local: "Prédio do CTACS - Auditório",
  //   data:"07 de Maio",
  //   horario:"às 08h00",
  //   stand: "5"   

  // },
  
  
  
];

export const campeonatoList = [

  {
    id: 1,
    imgSrc: capaEvento[3],
    titulo: "Campeonato de FreeFire",
    logo: campeonatoLogos[0],
    tipo:"freefire",
    // tipo:"freefire" a logo do freefire é diferente
    responsavel: "Prof. Alex",
    descricao: "A 2ª edição do Campeonato de Free Fire chega com tudo no TECHfest - Festival de Inovação e Tecnologia! O campo de batalha da disciplina e planejamento das equipes está a vista… e só as verdadeiras lendas sobreviverão! Inscreva seu squad, convoque sua tropa e entre na conexão para disputar cada segundo com estratégia, habilidade e coração. Essa não é só uma competição - é um duelo de titãs onde apenas os melhores alcançarão a glória! Sinta a adrenalina. Viva a emoção. Mostre sua força, lidere sua equipe à vitória e escreva seu nome no topo do pódio. A arena te chama. Vai encarar?",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "14",
    link:"https://forms.gle/rtpadhnXqeCf4hFx8"    
    // add o link do form aq, cada um tem um

  },

  {
    id: 2,
    imgSrc: capaEvento[3],
    titulo: "Campeonato de Futebol eletrônico",
    logo: campeonatoLogos[1],
    tipo:"futebol",
    responsavel: "Prof. Geovane",
    descricao: "Mostre suas habilidades no futebol virtual! Se você é de Lagoa de Itaenga ou região, venha disputar a segunda edição do campeonato de FIFA no TECHfest - Festival de Inovação e Tecnologia. Prepare-se para encarar os melhores jogadores e fazer história nos gramados digitais! Participe de uma competição emocionante, repleta de inovação e tecnologia, e ainda tenha a chance de ganhar prêmios incríveis. Não perca essa oportunidade de brilhar no universo dos eSports!",
    local: "Praça Maria Aurora",
    data:"08 e 09 de Maio",
    horario:"às 08h00",
    stand: "15",
    link:"https://forms.gle/2xh6brbLbJroWjyYA"    
    // add o link do form aq, cada um tem um

  },
  {
    id: 3,
    imgSrc: capaEvento[3],
    titulo: "Campeonato de Futmesa",
    logo: campeonatoLogos[2],
    tipo:"futebol",
    responsavel: "Prof. Andreis",
    descricao: "É hora do jogo! O Torneio Conexão Futmesa (Duplas) chega com tudo no Conexão TECHfest, no dia 09 de maio! Forme sua dupla, entre em quadra e mostre quem são os Reis da mesa! Desafios, adrenalina e muita rivalidade te esperam. E só os melhores vão levantar o troféu!",
    local: "Praça Maria Aurora",
    data:"09 de Maio",
    horario:"às 08h00",
    stand: "12",
    link:"https://forms.gle/hApjbLMff3AYfvqP9"    
    // add o link do form aq, cada um tem um

  }

  
  
];

