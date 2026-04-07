
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
| RF-19 |O sistema deve apresentar um gráfico mostrando a evolução das pontuações do usuário ao longo do tempo.| 🔴 ALTA    |                                                                                    
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

Eu quero visualizar uma lista com todas as análises de currículo que já realizei
Para que eu possa acompanhar meu histórico de desempenho e verificar a evolução das minhas análises ao longo do tempo.

---

### História 15 (relacionada ao RF-15)

**Como usuário**  
Eu quero visualizar o relatório completo de uma análise selecionada através do botão “Relatório”
Para que eu possa entender detalhadamente os pontos fortes e melhorias sugeridas para o meu currículo.

---

### História 16 (relacionada ao RF-16)

**Como usuário**  

Eu quero baixar o relatório de análise em formato PDF através do botão “PDF”
Para que eu possa salvar o documento e consultá-lo posteriormente, mesmo fora da plataforma.

---

### História 17 (relacionada ao RF-17)

**Como usuário**  

Eu quero marcar análises como favoritas
Para que eu possa acessar rapidamente as análises mais importantes sem precisar procurar no histórico.

---

### História 18 (relacionada ao RF-18)

**Como usuário**  

Eu quero excluir uma análise específica do histórico através do botão “Excluir”
Para que eu possa remover análises antigas ou irrelevantes e manter meu histórico organizado.

---

### História 19 (relacionada ao RF-19)

**Como usuário**  

Eu quero visualizar um gráfico com a evolução das minhas pontuações ao longo do tempo
Para que eu possa acompanhar meu progresso e identificar se meu currículo está melhorando.

---
> 💡 Dica: Agrupe as histórias por módulo (Cadastro, Relatórios, Pagamentos, etc.) para melhor organização.

---

# 3.3 Requisitos Não Funcionais

Os **Requisitos Não Funcionais (RNF)** definem características de qualidade do sistema, como:

- ⚡ Desempenho  
- 🔒 Segurança  
- 🎨 Usabilidade  
- 📈 Escalabilidade  
- 🌐 Compatibilidade  

Eles garantem a qualidade da solução.

---

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
---

# 3.4 Restrições do Projeto

📌 **Restrições** são limitações externas impostas ao projeto.

Elas podem envolver:
- 📅 Prazo
- 🖥️ Tecnologia obrigatória ou proibida
- 🌐 Ambiente de execução
- 📜 Normas legais
- 🏢 Políticas institucionais

⚠️ Diferente dos RNFs, as restrições impõem **limites fixos** ao projeto.

---

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

> Regras de Negócio definem as condições e políticas que o sistema deve seguir para garantir o correto funcionamento alinhado ao negócio.  
>  
> Elas indicam **quando** e **como** certas ações devem ocorrer, usando o padrão:  
>  
> **Se (condição) for verdadeira, então (ação) deve ser tomada.**  
>  
> Exemplo:  
> - "Um usuário só poderá finalizar um cadastro se todos os dados forem inseridos e validados com sucesso."  
>  
> Também pode ser escrito assim (if/then):  
> - "Se o usuário tem saldo acima de X, então a opção de empréstimo estará liberada."

---

 A tabela abaixo deve ser preenchida com as regras de negócio que **impactam seu projeto**. Os textos no quadro são apenas ilustrativos.

|ID    | Regra de Negócio                                                       |
|-------|-----------------------------------------------------------------------|
|RN-01 | Usuário só pode cadastrar até 10 tarefas por dia.                      |
|RN-02 | Apenas administradores podem alterar permissões de usuários.           |
|RN-03 | Tarefas vencidas devem ser destacadas em vermelho no sistema.          |
|RN-04 | *(Descreva aqui a restrição 4 do seu projeto)*                         |
|RN-05 | *(Descreva aqui a restrição 5 do seu projeto)*                         |

💡 **Dica:** Explique sempre o motivo ou impacto da regra no sistema.

---
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
