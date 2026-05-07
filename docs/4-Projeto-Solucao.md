
# 4. Projeto da Solução

> ⚠️ **Aviso aos Squads (Software House)**
>
> Esta seção **não deve ser preenchida integralmente antes da codificação**.
> Trata-se de um **Documento Vivo**, que deverá ser atualizado **incrementalmente a cada Sprint**, refletindo fielmente o código real implementado.

---

## 4.1 Arquitetura da Solução (Sprint 1 e 2)

O TalentScan segue uma arquitetura de aplicação web  com separação entre front-end, back-end, banco de dados e integração com inteligência artificial.

O fluxo principal é:

Usuário (Navegador) → Front-end (React + JavaScript + CSS) → API (Node.js + Express) → Banco de Dados (MongoDB) → Integração com IA (Gemini)
 
<img src="images/arquitetura da Solução.png" width="80%">

## 4.2 Tecnologias Utilizadas

Descreva as tecnologias, linguagens, frameworks, bibliotecas e serviços escolhidos pelo Squad.

| Dimensão                               | Tecnologia Escolhida                         |
| -------------------------------------- | -------------------------------------------- |
| Banco de Dados (NoSQL)                 | MongoDB Atlas com Mongoose                   |
| Back-end (API)                         | Node.js com Express                          |
| Front-end                              | React (Vite) com JavaScript (JSX) e CSS      |
| Inteligência Artificial                | Google Generative AI (@google/generative-ai) |
| Upload e Processamento de Arquivos     | Multer, pdf-parse e Mammoth                  |
| Gerenciamento de Rotas (Front-end)     | React Router                                 |
| Interface e Experiência do Usuário     | SweetAlert2 e Lucide React                   |
| Gerenciamento de Variáveis de Ambiente | Dotenv                                       |
| Comunicação entre sistemas             | CORS                                         |
| Testes de API                          | Postman                                      |
| Modelagem de Dados                     | dbdiagram.io (diagrama físico)               |
| Prototipação de Interface              | Figma                                        |
| Gestão e Versionamento                 | GitHub e GitHub Projects (Kanban)            |


---

##  4.3 Wireframes ou Mockups (A partir da Sprint 2)

## 📌 Tela de Cadastro (RF-01)

**História associada:** Como usuário, quero criar uma conta para acessar o sistema.

<img src="images/cadastro.png" width="80%">

**Descrição:** A interface contempla todos os campos exigidos pelo RF-01, permitindo o cadastro do usuário de forma completa. Após a validação dos dados no backend, as informações são persistidas no banco de dados, garantindo a integridade do registro.

---

## 📌 Tela de Login (RF-02)

**História associada:** Como usuário, quero fazer login com meu e-mail e senha para acessar minha conta.

<img src="images/login.png" width="80%">

**Descrição:** A interface de login contempla todos os campos exigidos pelo RF-02, permitindo que o usuário informe seu e-mail e senha previamente cadastrados. Os dados são validados no backend e, em caso de sucesso, o usuário é autenticado e redirecionado para o dashboard. Em caso de erro, o sistema exibe mensagens de feedback informando credenciais inválidas.

---

## 📌 Tela de Envio de Currículo (RF-05)

**História associada:** Como usuário, eu quero enviar meu currículo para que ele seja analisado pelo sistema.

<img src="images/envcurriculo.png" width="80%">

**Descrição:** Interface repaginada onde o usuário faz o upload do arquivo do currículo para ser enviado ao backend.

---

## 📌 Tela de Dashboard e Resultados da IA (RF-04, RF-06, RF-07)

**História associada:** Como usuário, quero visualizar sugestões geradas pela IA para melhorar meu currículo e aumentar minhas chances no mercado.

<img src="images/dashboardcv.png" width="80%">

**Descrição:** Dashboard logado do usuário (RF-04). Aqui o sistema exibe os resultados após a IA analisar o currículo (RF-06), listando os pontos fortes, fracos e a nota final (RF-07).

---

## 📌 Tela Inicial / Home (RF-09)

**História associada:** Como usuário, eu quero acessar a página inicial (Home) para visualizar e acessar as principais funcionalidades do sistema.

<img src="images/homeo1.png" width="80%">
<img src="images/home02.png" width="80%">
<img src="images/home03.png" width="80%">

**Descrição:** A página inicial permite que o usuário visualize informações gerais do sistema e acesse funcionalidades como cadastro, login e envio de currículo. A interface contempla todos os requisitos do RF-09, funcionando como ponto de entrada da aplicação e facilitando a navegação do usuário.

---

## 📌 Tela editar perfil / Editar perfil (RF-10-11-12-13)

**História associada:** Como usuário, eu quero visualizar e editar meus dados pessoais para manter minhas informações atualizadas e minha conta segura.

<img src="images/Editar1.png" width="80%">
<img src="images/Editar2.png" width="80%">
<img src="images/Editar3.png" width="80%">
<img src="images/Editar4.png" width="80%">

**Descrição:** A tela de perfil foi desenvolvida para centralizar as informações pessoais e as configurações da conta do usuário. Nela, o sistema apresenta nome, e-mail e telefone cadastrados, além de disponibilizar ações para editar perfil, alterar senha e sair da conta.

---

## 📌 Tela histórico (RF-15, RF-16, RF-17, RF-18)

**História associada:** Como usuário, eu quero visualizar um gráfico com a evolução das minhas pontuações ao longo do tempo. Para que eu possa acompanhar meu progresso e identificar se meu currículo está melhorando.

<img src="images/historico.png" width="80%">

**Descrição:** A tela de histórico foi desenvolvida para que o usuário pesquise o hisórico e visualize todas as análises de currículos já realizadas, com data, pontuação e status. Também oferece filtros e pesquisa para facilitar a organização. Além disso, permite acessar relatórios, baixar em PDF, favoritar e excluir análises.

---

---

## 📌 Tela de desempenho e histórico (RF-19, RF-20, RF-21, RF-22, RF-23, RF-24)

**História associada:** Como usuário, eu quero visualizar meu desempenho nas análises de currículo realizadas no sistema, para que eu possa acompanhar minha evolução, identificar melhorias e analisar meu histórico de resultados.

<img src="images/progresso.png" width="80%">

**Descrição:** A tela de desempenho e histórico foi desenvolvida para permitir que o usuário acompanhe sua evolução nas análises realizadas. O sistema apresenta um gráfico com a evolução das notas ao longo do tempo, além de exibir informações estatísticas como média das notas, maior pontuação obtida, quantidade total de análises realizadas e classificação de desempenho (Baixo, Médio ou Bom). Também é possível visualizar o histórico completo das análises, contendo nome do arquivo enviado, data da análise e nota obtida.

---

## 4.4 Modelagem de Dados (Sprint 2 e 3)

---

### 4.4.1 Script Físico (Entrega na Sprint 2 - MVP)

---

### Banco NoSQL

**users:**

```json
{
  {
  "_id": {
    "$oid": "69d148cf7e3beb9fd7ab3fc8"
  },
  "name": "Junio",
  "email": "junio@teste.com",
   "phone": "999999999",
  "password": "123456",
  "createdAt": {
    "$date": "2026-04-04T17:22:23.049Z"
  },
  "__v": 0
}
}

```

**analises:**

```json
{
  {
  "_id": {
    "$oid": "69d2cd2cc86d4f38a9e496d8"
  },
  "nomeArquivo": "curic.docx",
  "texto": "Washington JúnioEmail: washington.junio@email.comTelefone: (31) 99999-9999LinkedIn: linkedin.com/in/washingtonjunioGitHub: github.com/washingtonjunioBelo Horizonte – MG\n\n\n\nResumo Profissional\n\nEstudante de Tecnologia da Informação com foco em desenvolvimento de software e aplicações web. Possui experiência prática na construção de sistemas full stack utilizando JavaScript, Node.js, Express e React. Atua com bancos de dados relacionais e não relacionais, com ênfase em MongoDB.\n\nTem interesse em inteligência artificial aplicada, análise de dados e desenvolvimento de soluções escaláveis. Participa de projetos acadêmicos voltados para resolução de problemas reais, sempre buscando boas práticas de código, organização e experiência do usuário.\n\n\n\nCompetências Técnicas\n\nLinguagens: JavaScript (ES6+), C#, HTML5, CSS3, SQLFrameworks e Bibliotecas: React.js, Node.js, Express.js, Bootstrap, SweetAlert2Banco de Dados: MongoDB (Mongoose), MySQLFerramentas: Git, GitHub, VS Code, Figma, PostmanConceitos: APIs REST, CRUD, MVC, Programação Orientada a Objetos, Estruturas de Dados, NoSQL vs SQL, ACID e BASE\n\n\n\nProjetos\n\nTalentScan – Sistema de Análise de Currículos com IADesenvolvimento de aplicação web para análise automatizada de currículos utilizando inteligência artificial.Front-end desenvolvido em React com Vite, com interface moderna inspirada em aplicações SaaS.Back-end em Node.js com Express e integração com MongoDB Atlas.Implementação de sistema de autenticação com armazenamento de dados de usuários.Criação de interface interativa com feedback visual utilizando SweetAlert2.Estruturação do projeto em arquitetura organizada (controllers, models, routes e services).\n\nEcoArtes – Plataforma de Produtos SustentáveisDesenvolvimento de plataforma web para divulgação e venda de produtos artesanais e ecológicos.Foco em sustentabilidade, consumo consciente e valorização de produtores locais.Implementação de interface amigável e intuitiva voltada para experiência do usuário.\n\nSistema de Gerenciamento de ProdutosAplicação para controle de estoque com funcionalidades de cadastro, edição e exclusão de produtos.Utilização de lógica de programação para manipulação de dados e organização de informações.\n\n\n\nFormação Acadêmica\n\nGraduação em Análise e Desenvolvimento de Sistemas(Em andamento)\n\n\n\nExperiência Acadêmica e Atividades\n\nParticipação em projetos em grupo com utilização de metodologias colaborativas.Desenvolvimento de protótipos interativos no Figma com foco em usabilidade.Aplicação de testes de usabilidade e análise de comportamento do usuário.\n\n\n\nDiferenciais\n\nFacilidade de aprendizado e adaptação a novas tecnologiasBoa comunicação e trabalho em equipePerfil analítico e foco em resolução de problemasInteresse contínuo em evolução na área de tecnologia\n\n\n\n",
  "analise": {
    "pontosFortes": [
      "Projetos bem detalhados e relevantes, especialmente o TalentScan, que demonstra habilidades full-stack complexas, uso de IA e boas práticas de arquitetura.",
      "Ampla gama de competências técnicas em um stack moderno (MERN), abrangendo linguagens, frameworks, bancos de dados (SQL e NoSQL) e ferramentas essenciais.",
      "Excelente uso de palavras-chave estratégicas e específicas da área, o que otimiza a visibilidade em sistemas ATS (Applicant Tracking Systems) e para recrutadores.",
      "Organização clara e layout limpo, com seções bem definidas que facilitam a leitura e a compreensão rápida das qualificações do candidato.",
      "Foco em resolução de problemas, experiência do usuário e boas práticas de código, demonstrando uma mentalidade valiosa para o desenvolvimento de software."
    ],
    "pontosFracos": [
      "Ausência de experiência profissional formal (estágios, empregos de tempo integral ou freelance pagos), o que pode ser um obstáculo em algumas vagas.",
      "A seção de 'Formação Acadêmica' é breve, sem o nome da instituição ou previsão de conclusão, e poderia incluir mais detalhes sobre o curso ou conquistas.",
      "A seção 'Experiência Acadêmica e Atividades' é um pouco vaga e poderia ser mais específica sobre os projetos ou resultados obtidos, em vez de descrever atividades genéricas."
    ],
    "sugestoes": [
      "Buscar ativamente estágios, projetos freelance ou oportunidades de voluntariado para complementar os projetos pessoais com experiência em um ambiente profissional real.",
      "Detalhar a seção de 'Formação Acadêmica' com o nome completo da instituição de ensino e a previsão de conclusão do curso.",
      "Quantificar os resultados dos projetos sempre que possível (ex: 'redução de X% no tempo de carregamento', 'suporte a Y usuários', 'implementação de Z funcionalidades críticas') para demonstrar impacto e valor.",
      "Expandir a seção 'Experiência Acadêmica e Atividades' com descrições mais concretas de projetos ou tarefas, destacando as tecnologias usadas e os aprendizados, se forem diferentes dos projetos já listados."
    ],
    "nota": 8.5
  },
  "userId": {
    "$oid": "69d148cf7e3beb9fd7ab3fc8"
  },
  "data": {
    "$date": "2026-04-05T20:59:24.123Z"
  },
  "__v": 0
}
}
```

### 📁 Obrigatório

O arquivo .sql ou .js deve ser salvo na pasta: src/bd

 - É permitido colar um trecho do script no README apenas para visualização rápida.
 
---
### 4.4.2 Representação do Modelo Físico de Dados (Entrega na Sprint 3 - Core)

##  Modelo Físico de Dados – TalentScan

<img src="images/modelofisico.png" width="80%">

O diagrama físico de dados representa a estrutura real das coleções implementadas no MongoDB para o sistema TalentScan. Embora o banco utilizado seja não relacional, as coleções foram representadas como tabelas com o objetivo de facilitar a visualização de elementos estruturais, como chaves primárias, chaves estrangeiras e seus respectivos relacionamentos.

A coleção **User** armazena os dados dos usuários do sistema, incluindo identificador único, nome, e-mail, telefone, senha e data de criação. O campo e-mail possui restrição de unicidade, garantindo que não existam registros duplicados.

A coleção **Analise** armazena as análises realizadas pela aplicação, contendo o nome do arquivo, o texto analisado, os resultados obtidos e a nota atribuída. Os campos de pontos fortes, pontos fracos e sugestões correspondem a listas de dados, sendo armazenados como arrays no MongoDB.

O relacionamento entre as coleções é do tipo **um-para-muitos**, no qual um usuário pode possuir várias análises associadas. Esse vínculo é implementado por meio do campo `userId`, que referencia o identificador do usuário.

O modelo apresentado reflete fielmente a estrutura implementada no banco de dados. Algumas características específicas, como a restrição de unicidade do campo e-mail e valores padrão de data, não são exibidas diretamente no diagrama devido a limitações da ferramenta utilizada. Da mesma forma, os atributos que armazenam listas foram representados como texto para simplificação visual, embora no banco de dados sejam tratados como arrays.


