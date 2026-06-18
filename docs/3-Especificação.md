
# 3. Especificações do Projeto

📌 **Pré-requisito:** Planejamento do Projeto (Cronograma e Sprints definidos).

Nesta seção serão detalhados:

- ✅ Requisitos Funcionais  
- ✅ Histórias de Usuário  
- ✅ Requisitos Não Funcionais  
- ✅ Restrições do Projeto  

O objetivo é organizar claramente as funcionalidades, qualidades e limites da solução.

---

# 3.1 Requisitos Funcionais

Os **Requisitos Funcionais (RF)** descrevem o que o sistema deve fazer.

📌 Cada requisito deve:
- Representar uma funcionalidade única
- Ser claro e objetivo
- Orientar diretamente o desenvolvimento

---

## Tabela de Requisitos Funcionais

| ID    | Descrição do Requisito                                                                   | Prioridade |
| ----- | ---------------------------------------------------------------------------------------- | ---------- |
| RF-01 | O sistema deve permitir que os usuários criem uma conta informando nome, e-mail e senha. | 🔴 ALTA    |
| RF-02 | O sistema deve permitir que os usuários realizem login com e-mail e senha.               | 🔴 ALTA    |
| RF-03 | O sistema deve armazenar os dados do usuário autenticado no navegador (localStorage).    | 🟡 MÉDIA   |
| RF-04 | O sistema deve permitir que o usuário acesse o dashboard após o login.                   | 🔴 ALTA    |
| RF-05 | O sistema deve permitir que o usuário envie um currículo para análise.                   | 🔴 ALTA    |
| RF-06 | O sistema deve utilizar inteligência artificial para analisar o currículo enviado.       | 🔴 ALTA    |
| RF-07 | O sistema deve exibir sugestões e melhorias geradas pela IA no dashboard.                | 🔴 ALTA    |
| RF-08 | O sistema deve permitir que o usuário realize logout do sistema.                         | 🟡 MÉDIA   |
| RF-09 | O sistema deve possuir uma página inicial (Home) com acesso ao sistema.                  | 🔴 ALTA    |
| RF-10 | O sistema deve permitir ao usuário visualizar seus dados pessoais em uma tela de perfil. | 🟡 MÉDIA   |
| RF-11 | O sistema deve permitir ao usuário editar nome, e-mail e telefone.                       | 🟡 MÉDIA   |
| RF-12 | O sistema deve permitir ao usuário alterar sua senha.                                    | 🟡 MÉDIA   |
| RF-13 | O sistema deve permitir ao usuário encerrar sua sessão a partir da tela de perfil.       | 🟡 MÉDIA   |
| RF-14 | O sistema deve exibir uma lista com todas as análises de currículo já realizadas pelo usuário,contendo data, pontuação e status.| 🔴 ALTA    |
| RF-15 |O sistema deve permitir que o usuário visualize o relatório completo de uma análise selecionada por meio do botão “Relatório”.| 🟡 MÉDIA   |
| RF-16 |O sistema deve permitir que o usuário faça o download do relatório de análise em formato PDF através do botão “PDF”.| 🟡 MÉDIA   |
| RF-17 |O sistema deve permitir que o usuário marque análises como favoritas, possibilitando acesso rápido a essas análises.| 🟡 MÉDIA   |
| RF-18 |O sistema deve permitir que o usuário exclua uma análise específica do histórico através do botão “Excluir”.| 🔴 ALTA    |
| RF-19 | O sistema deve permitir que o usuário visualize um gráfico com a evolução das notas das análises realizadas. | 🔴 ALTA |
| RF-20 | O sistema deve exibir a média das notas das análises realizadas pelo usuário. | 🟡 MÉDIA |
| RF-21 | O sistema deve exibir a maior nota obtida pelo usuário nas análises. | 🟡 MÉDIA |
| RF-22 | O sistema deve exibir a quantidade total de análises realizadas pelo usuário. | 🟢 BAIXA |
| RF-23 | O sistema deve classificar o desempenho do usuário em níveis (Baixo, Médio ou Bom) com base na média das notas. | 🟡 MÉDIA |
| RF-24 | O sistema deve exibir o histórico das análises com nome do arquivo, data e nota. | 🔴 ALTA |
| RF-25 | acessar a área de Classificação e Compatibilidade. | 🟡 Média |
| RF-26 | selecionar currículo do histórico ou enviar novo currículo para classificação. | 🟡 Média |
| RF-27 |  IA classificar área principal, nível, tecnologias, hard skills e soft skills. | 🟢 BAIXA |
| RF-28 |  IA classificar área principal, nível, tecnologias, hard skills e soft skills e comparar | 🟡 Média | 
| RF-29 |  Exibir porcentagem e compatibilidade / pontos compativeis/ vaga  | 🟡 Média | 
| RF-30 |  salvar histórico de classificações e compatibilidades por usuário. | 🟡 Média | 
| RF-31 | O sistema deve permitir que o usuário gere um relatório textual automático que consolida o progresso das análises. | 🔴 ALTA |
| RF-32 | O sistema deve exibir um gráfico de barras que se atualiza automaticamente com base nos dados filtrados. | 🔴 ALTA |
| RF-33 | O sistema deve permitir a filtragem de dados por múltiplos critérios simultâneos. | 🟡 Média |
| RF-34 | O sistema deve calcular e exibir em tempo real indicadores de desempenho, incluindo a pontuação atual. | 🟡 Média |
| RF-35 | O sistema deve oferecer a funcionalidade de exportar o histórico de análises filtrado para um arquivo formatado em CSV. | 🟢 BAIXA |
| RF-36 | O sistema deve permitir a seleção múltipla de registros através de checkboxes para a execução de ações coletivas. | 🟢 BAIXA |
# 3.2 Histórias de Usuário

---

## Histórias do Projeto
   
---

### História 1 (relacionada ao RF-01)

**Como usuário**  
Eu quero criar uma conta na plataforma  
Para que eu possa acessar as funcionalidades do sistema  

---

### História 2 (relacionada ao RF-02)

**Como usuário**  
Eu quero fazer login com meu e-mail e senha  
Para que eu possa acessar minha conta  

---

### História 3 (relacionada ao RF-03)

**Como usuário**  
Eu quero permanecer autenticado no sistema  
Para que eu não precise fazer login toda vez que acessar a plataforma  

---

### História 4 (relacionada ao RF-04)

**Como usuário**  
Eu quero acessar o dashboard após o login  
Para que eu possa visualizar minhas informações e análises  

---

### História 5 (relacionada ao RF-05)

**Como usuário**  
Eu quero enviar meu currículo  
Para que ele seja analisado pelo sistema  

---

### História 6 (relacionada ao RF-06)

**Como usuário**  
Eu quero que a inteligência artificial analise meu currículo  
Para identificar melhorias e pontos de destaque  

---

### História 7 (relacionada ao RF-07)

**Como usuário**  
Eu quero visualizar sugestões geradas pela IA  
Para melhorar meu currículo e aumentar minhas chances no mercado  

---

### História 9 (relacionada ao RF-09)

**Como usuário**  
Eu quero acessar a página inicial (Home)  
Para navegar pelas funcionalidades do sistema  

---

### História 10 (relacionada ao RF-10)

**Como usuário**  
Eu quero visualizar meus dados pessoais em uma tela de perfil.
Para acompanhar as informações cadastradas na plataforma 

---

### História 11 (relacionada ao RF-11)

**Como usuário**  
Eu quero editar meu nome, e-mail e telefone.
Para manter meus dados atualizados no sistema

---

### História 12 (relacionada ao RF-12)

**Como usuário**  
Eu quero alterar minha senha.
Para aumentar a segurança da minha conta 

---

### História 13 (relacionada ao RF-13)

**Como usuário**  
Eu quero sair da minha conta pela área de perfil.
Para encerrar minha sessão com segurança

---

### História 14 (relacionada ao RF-14)

**Como usuário**  

Eu quero visualizar uma lista com todas as análises de currículo que já realizei.
Para que eu possa acompanhar meu histórico de desempenho e verificar a evolução das minhas análises ao longo do tempo.

---

### História 15 (relacionada ao RF-15)

**Como usuário**  
Eu quero visualizar o relatório completo de uma análise selecionada através do botão “Relatório”.
Para que eu possa entender detalhadamente os pontos fortes e melhorias sugeridas para o meu currículo.

---

### História 16 (relacionada ao RF-16)

**Como usuário**  

Eu quero baixar o relatório de análise em formato PDF através do botão “PDF”.
Para que eu possa salvar o documento e consultá-lo posteriormente, mesmo fora da plataforma.

---

### História 17 (relacionada ao RF-17)

**Como usuário**  

Eu quero marcar análises como favoritas.
Para que eu possa acessar rapidamente as análises mais importantes sem precisar procurar no histórico.

---

### História 18 (relacionada ao RF-18)

**Como usuário**  

Eu quero excluir uma análise específica do histórico através do botão “Excluir”.
Para que eu possa remover análises antigas ou irrelevantes e manter meu histórico organizado.

---

### História 19 (relacionada ao RF-19)

**Como usuário**  

Eu quero visualizar um gráfico com a evolução das minhas pontuações ao longo do tempo.  
Para que eu possa acompanhar meu progresso e identificar se meu currículo está melhorando.

---

### História 20 (relacionada ao RF-20)

**Como usuário**  

Eu quero visualizar a média das minhas notas.  
Para que eu possa entender meu desempenho geral nas análises.

---
### História 21 (relacionada ao RF-21)

**Como usuário**  

Eu quero visualizar minha maior nota obtida.  
Para que eu possa identificar meu melhor desempenho.

---
### História 22 (relacionada ao RF-22)

**Como usuário**  

Eu quero visualizar a quantidade total de análises realizadas.  
Para que eu possa acompanhar minha atividade no sistema.

---

### História 23 (relacionada ao RF-23)

**Como usuário**  

Eu quero visualizar uma classificação do meu desempenho.  
Para que eu possa entender se meu nível está baixo, médio ou bom.

---

### História 24 (relacionada ao RF-24)

**Como usuário**  

Eu quero visualizar o histórico das minhas análises com informações detalhadas.  
Para que eu possa revisar minhas pontuações e acompanhar minha evolução.

---

### História 25 (relacionada ao RF-25)

**Como usuário**  

Eu quero acessar a área de Classificação e Compatibilidade
Para que eu possa analisar meu currículo e verificar sua compatibilidade com vagas

---

### História 26 (relacionada ao RF-26)

**Como usuário**  

Eu quero selecionar um currículo do histórico ou enviar um novo currículo
Para que eu possa realizar a classificação com base no currículo escolhido

---

### História 27 (relacionada ao RF-27)

**Como usuário**  

Eu quero que a IA classifique minha área principal, nível profissional, tecnologias, hard skills e soft skills
Para que eu possa entender melhor o meu perfil profissional

---

### História 28 (relacionada ao RF-28)

**Como usuário**  

Eu quero que a IA classifique meu currículo e compare com uma vaga
Para que eu possa saber se meu perfil está adequado aos requisitos da oportunidade

---

### História 29 (relacionada ao RF-29)

**Como usuário**  

Eu quero visualizar a porcentagem de compatibilidade, os pontos compatíveis e os requisitos da vaga
Para que eu possa entender meu nível de aderência à oportunidade

---

### História 30 (relacionada ao RF-30)

**Como usuário**  

Eu quero que o sistema salve meu histórico de classificações e compatibilidades
Para que eu possa consultar análises anteriores vinculadas à minha conta

---

### História 31 (relacionada ao RF-31)

**Como usuário**  

Eu quero preencher meus dados em um formulário estruturado
Para que eu possa criar um currículo profissional sem me preocupar com formatação

---

### História 32 (relacionada ao RF-32)

**Como usuário**  

Eu quero utilizar inteligência artificial para aprimorar o texto do meu resumo e experiências
Para que meu currículo tenha uma linguagem mais profissional e impactante

---

### História 33 (relacionada ao RF-33)

**Como usuário**  

Eu quero visualizar a prévia do meu currículo em tempo real enquanto preencho os dados
Para que eu possa ver exatamente como ele será impresso

---

### História 34 (relacionada ao RF-34)

**Como usuário**  

Eu quero imprimir ou salvar meu currículo em PDF
Para que eu possa enviá-lo para candidaturas de emprego

---

### História 35 (relacionada ao RF-31)

**Como usuário**  

Eu quero gerar um relatório de evolução automático em formato de texto
Para que eu possa entender meu progresso detalhado e receber recomendações personalizadas para melhorar meu currículo.

---

### História 36 (relacionada ao RF-32)

**Como usuário**  

Eu quero visualizar um gráfico dinâmico com as pontuações das minhas análises
Para que eu consiga identificar visualmente e de forma rápida como meu desempenho mudou ao longo do tempo.

---

### História 37 (relacionada ao RF-33)

**Como usuário**  

Eu quero filtrar minhas análises por data, área, tipo e pontuação
Para que eu encontre rapidamente registros específicos em meio ao meu histórico sem precisar rolar toda a lista.

---

### História 38 (relacionada ao RF-34)

**Como usuário**  

Eu quero ver métricas automáticas como minha média, melhor pontuação e tendência
Para que eu tenha uma visão clara do meu nível atual de competitividade sem precisar fazer cálculos manuais.

---

### História 39 (relacionada ao RF-35)

**Como usuário**  

Eu quero exportar meu histórico de análises para um arquivo CSV
Para que eu possa salvar meus dados localmente ou utilizá-los em planilhas externas para meu controle pessoal.

---

### História 40 (relacionada ao RF-36)

**Como usuário**  

Eu quero selecionar e excluir várias análises de uma só vez através de checkboxes
Para que eu consiga organizar e limpar meu histórico de forma rápida e eficiente quando necessário.

---

# 3.3 Requisitos Não Funcionais

## Tabela de Requisitos Não Funcionais

| ID     | Descrição do Requisito                                                               | Prioridade |
| ------ | ------------------------------------------------------------------------------------ | ---------- |
| RNF-01 | O sistema deve carregar as páginas em até 3 segundos.                                | 🟡 MÉDIA   |
| RNF-02 | O sistema deve proteger os dados dos usuários durante a comunicação com o servidor.  | 🔴 ALTA    |
| RNF-03 | O sistema deve possuir uma interface simples e intuitiva para facilitar o uso.       | 🔴 ALTA    |
| RNF-04 | O sistema deve ser compatível com os principais navegadores (Chrome, Edge, Firefox). | 🟡 MÉDIA   |
| RNF-05 | O sistema deve estar disponível para acesso via dispositivos desktop.                | 🟡 MÉDIA   |
| RNF-06 | O sistema deve manter o funcionamento estável durante o uso simultâneo por usuários. | 🟡 MÉDIA   |
| RNF-07 | O sistema deve retornar a análise do currículo realizada pela IA em até 7 segundos.  | 🔴 ALTA    |
| RNF-08 | O sistema deve apresentar uma interface simples e intuitiva para gerenciamento do perfil do usuário.  | 🟡 MÉDIA   |
| RNF-09 | O sistema deve atualizar os dados do perfil e refletir as alterações no sistema sem necessidade de novo cadastro.  | 🟡 MÉDIA   |
| RNF-10 |O sistema deve exibir feedback visual ao confirmar alterações de perfil, senha e logout.  | 🟡 MÉDIA   |
| RNF-11 | O sistema deve processar a filtragem de dados e a renderização dos gráficos de evolução em tempo real, garantindo que o tempo de resposta da interface seja inferior a 200ms. | 🔴 ALTA    |
| RNF-12 | A interface do histórico deve ser totalmente responsiva, adaptando automaticamente o layout das tabelas, cards de métricas e gráficos para garantir usabilidade em telas desde 320px até 1920px. | 🟡 MÉDIA   |

---

# 3.4 Restrições do Projeto

## Tabela de Restrições

| ID  | Restrição |
|-----|-----------|
| R-01 | O projeto deverá ser entregue até o final do semestre. |
| R-02 | O sistema deve utilizar a API Gemini Flash 2.5 como tecnologia obrigatória para análise de currículos. |
| R-03 | O software deve ser compatível com Windows e Linux. |
| R-04 | O sistema deve ser desenvolvido utilizando Node.js, Express e MongoDB.  |
| R-05 | O sistema deve ser executado em ambiente web, acessível por navegadores modernos. |
| R-06 | O sistema deve seguir a LGPD (Lei Geral de Proteção de Dados) no tratamento das informações dos usuários. |

---
## 3.5 Regras de Negócio

---

 A tabela abaixo apresenta as regras de negócio que **impactam o funcionamento do TalentScan**.

|ID    | Regra de Negócio                                                       |
|-------|-----------------------------------------------------------------------|
|RN-01 | Se o usuário desejar acessar funcionalidades internas do sistema, então ele deve estar cadastrado e autenticado com e-mail e senha válidos. |
|RN-02 | Se o usuário enviar um currículo para análise, então o arquivo deve estar em formato aceito pelo sistema, como PDF ou DOCX, para que o texto possa ser extraído corretamente. |
|RN-03 | Se o currículo for analisado pela IA, então o sistema deve registrar o resultado da análise com pontos fortes, pontos fracos, sugestões de melhoria e nota geral. |
|RN-04 | Se uma análise de currículo for salva, então ela deve ficar vinculada ao usuário logado por meio do seu identificador, garantindo que cada usuário visualize apenas seus próprios dados. |
|RN-05 | Se o usuário acessar o histórico, então o sistema deve exibir somente as análises associadas à sua conta. |
|RN-06 | Se o usuário selecionar uma análise do histórico, então o sistema deve permitir visualizar o relatório completo e realizar ações como favoritar, excluir ou baixar em PDF, quando disponíveis. |
|RN-07 | Se o usuário alterar dados do perfil, então o sistema deve validar e atualizar as informações sem criar um novo cadastro. |
|RN-08 | Se o usuário solicitar alteração de senha, então o sistema deve validar os dados informados antes de atualizar a credencial da conta. |
|RN-09 | Se o usuário acessar a área de Classificação e Compatibilidade, então ele deve selecionar um currículo do histórico ou enviar um novo currículo antes de iniciar a classificação. |
|RN-10 | Se um currículo for classificado pela IA, então o sistema deve identificar área principal, nível profissional, tecnologias, hard skills, soft skills, pontuação geral, pontos fortes, pontos fracos e sugestões de melhoria. |
|RN-11 | Se o usuário desejar gerar uma vaga com IA, então ele deve informar obrigatoriamente a área e o nível da vaga. |
|RN-12 | Se o usuário desejar analisar compatibilidade com uma vaga, então deve existir uma classificação de currículo previamente gerada. |
|RN-13 | Se o usuário utilizar uma vaga gerada pela IA ou uma vaga personalizada, então o sistema deve comparar os dados da vaga com a classificação do currículo. |
|RN-14 | Se a compatibilidade for analisada, então o sistema deve exibir porcentagem de compatibilidade, pontos compatíveis, pontos ausentes, pontos parcialmente compatíveis, justificativa da nota, recomendação final e sugestões de melhoria. |
|RN-15 | Se uma classificação ou compatibilidade for concluída, então o sistema deve salvar o histórico vinculado ao usuário logado para consulta posterior. |


---
