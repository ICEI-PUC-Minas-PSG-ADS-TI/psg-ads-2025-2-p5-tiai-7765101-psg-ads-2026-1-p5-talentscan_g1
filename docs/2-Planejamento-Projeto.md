# 2. Planejamento do Projeto

Esta seção apresenta como o grupo organizará o trabalho ao longo do semestre.  
O projeto adota uma metodologia ágil, simulando o ambiente de uma Software House.

---

# 2.1 Sprints do Projeto

O projeto será realizado em **4 Sprints**, com entregas contínuas de código e documentação.

---

## 📅 Visão Geral

### 🟢 Sprint 1 – Setup, Hello World e Visão do Produto
- README com descrição do projeto
- ODS escolhida
- Backlog macro
- Repositório criado
- Banco de dados instanciado (vazio)
- Tela "Hello World" conectada à API

---

### 🟡 Sprint 2 – MVP (Primeira Fatia Vertical)
- Requisitos Funcionais documentados
- Script do Banco de Dados
- 1ª funcionalidade completa funcionando
- Dados sendo salvos no banco

⚠️ Se não salvar no banco, não pontua.

---

### 🔵 Sprint 3 – Core e Regras de Negócio
- Implementação das regras de negócio
- Validações no backend
- DER atualizado via Engenharia Reversa
- Diagrama de Classes atualizado

---

### 🔴 Sprint 4 – Finalização e Deploy
- Correção de bugs
- Testes finais ponta a ponta
- Documentação final consolidada
- Relatório preenchido no APC
- Sistema pronto para Arguição

---

# 👥 Papéis de Gestão

Todos programam.  
Os papéis abaixo são apenas para organização do time.

- 👨‍💻 **Tech Lead (Git Master)**  
  Responsável pelo repositório e merges.

- 🗄️ **Arquiteto de Dados (DBA Guard)**  
  Responsável pela modelagem e padronização do banco.

- 🧪 **Gerente de Qualidade (QA & Code Reviewer)**  
  Responsável por revisar código e validar testes.

- 📋 **Facilitador Ágil (PO / Scrum Master)**  
  Responsável por prazos, Kanban e priorização do backlog.

---

##  Definição dos Papéis – Sprint 1

- 👨‍💻 Tech Lead: Washington Junio Lima
- 🗄️ Arquiteto de Dados: Washington Junio Lima
- 🧪 Gerente de Qualidade: Gabriel Baumgratz de Paula Botaro
- 📋 Facilitador Ágil: Henrique Gonçalves Sousa, André Oliveira Burle

> Caso os papéis mudem nas próximas Sprints, atualizar neste documento.

---

# 2.2 Execução e Controle

## 🗂️ Kanban (OBRIGATÓRIO)

O projeto pode utilizar a aba **Projects** do GitHub, porém é **OBRIGATÓRIO preencher os quadros Kanban de cada Sprint** (apresentados abaixo).

### Estrutura obrigatória do Board:

- A Fazer
- Desenvolver
- Fila para Teste
- Teste
- Feito

### Regras

- Cada cartão deve representar uma Fatia Vertical.
- Todo cartão deve conter:
  - Responsável
  - Descrição
  - Prazo
- A avaliação individual considerará:
  - Histórico de commits
  - Movimentação no Kanban

⚠️ Se não está no Git, não foi feito.

---

# 📋 Acompanhamento das Sprints

## Legenda de Status

- [x] ✔️ Concluído
- [ ] 📝 Em andamento
- [ ] ⌛ Atrasado
- [ ] ❌ Não iniciado

---

# 🟢 Sprint 1 – Setup

| Responsável | Papel | Tarefa | Início | Prazo | Status |
|-------------|--------|--------|--------|--------|--------|
|Henrique Gonçalves sousa |Facilitador Ágil | Preencher Visão do Produto | 12/03 | 15/03 | ✔️ |
|Gabriel Baumgratz de Paula Botaro |Gerente de Qualidade | Preencher Visão ODS e Backlog no README | 12/03 | 15/03 | ✔️ |
|Henrique Gonçalves sousa E Gabriel Baumgratz de Paula Botaro |Gerente de Qualidade E Facilitador Ágil   | Criar instância do Banco de Dados | 12/03 | 16/03 |✔️ |
|Washington Junio Lima |Arquiteto de Dados | Criar repositório e estruturar pastas | 12/03 | 18/03 | ✔️ |
|Washington Junio Lima |Arquiteto de Dados | Criar tela Hello World conectada à API | 15/03 | 20/03 | ✔️ |

---

# 🟡 Sprint 2 – MVP

| Responsável             | Papel               | Tarefa                                                                 | Início | Prazo | Status |
|------------------------|--------------------|------------------------------------------------------------------------|--------|--------|--------|
| Washington Junio Lima  | Arquiteto de Dados | Melhoria da interface e experiência do usuário (UI/UX) nas telas de cadastro e login | 22/03 | 05/04 | ✔️ |
| Henrique Gonçalves Sousa  | Facilitador Ágil | Implementação da tela de perfil do usuário     | 24/03 | 05/04 | ✔️ |
| Washington Junio Lima  | Arquiteto de Dados | Desenvolvimento da página inicial (Home) com navegação do sistema      | 25/03 | 05/04 | ✔️ |
| Henrique Gonçalves Sousa  | Facilitador Ágil | Exibição das informações pessoais cadastradas     | 25/03 | 05/04 | ✔️ |
| Henrique Gonçalves Sousa  | Facilitador Ágil | Funcionalidade de edição de perfil com atualização de nome, e-mail e telefone     | 25/03 | 05/04 | ✔️ |
| Washington Junio Lima  | Arquiteto de Dados | Integração da IA no dashboard para análise de currículos               | 28/03 | 05/04 | ✔️ |
| Washington Junio Lima  | Arquiteto de Dados | Exibição de resultados da IA (pontos fortes, fracos e sugestões)       | 30/03 | 05/04 | ✔️ |
| Henrique Gonçalves Sousa  | Facilitador Ágil | Funcionalidade de alteração de senha    | 30/03 | 05/04 | ✔️ |
| Henrique Gonçalves Sousa  | Facilitador Ágil | Implementação de logout diretamente na área de perfil  | 30/03 | 05/04 | ✔️ |
| Gabriel Baumgratz de Paula Botaro | Gerente de Qualidade | Upload de Currículo: Envio (Front), Processamento (Back) e Salvar no BD | 28/03 | 05/04 | ✔️ |
| Gabriel Baumgratz de Paula Botaro | Gerente de Qualidade | Dashboard IA: Enviar texto para Gemini e exibir nota/feedbacks na tela | 30/03 | 05/04 | ✔️ |
| André Oliveira Burle  | Facilitador Ágil | Desenvolvimento da página de pesquisa do histórico do usuário | 30/03 | 06/04  | ✔️ |
| André Oliveira Burle  | Facilitador Ágil | Exibição das opções de filtragem, favoritar currículos e download em PDF  | 30/03 | 06/04 | ✔️ |
---

# 🔵 Sprint 3 – Core

| Responsável | Papel | Tarefa | Início | Prazo | Status |
|-------------|--------|--------|--------|--------|--------|
| Washington Junio Lima | Arquiteto de Dados| Implementar cálculo de média, melhor nota e status            | 06/04 | 25/04 | ✔️ |
| Washington Junio Lima | Arquiteto de Dados| Implementar exibição de histórico de análises                 | 06/04 | 25/04 | ✔️ |
| Washington Junio Lima | Arquiteto de Dados| Implementar página de progresso com gráfico de evolução       | 06/04 | 15/04 | ✔️ |
| Washington Junio Lima | Arquiteto de Dados   | Modelar o banco de dados físico (MongoDB)                  | 16/04 | 20/04 | ✔️ |
| Washington Junio Lima | Arquiteto de Dados   | Gerar diagrama físico no dbdiagram                         | 16/04 | 20/04 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil   | Implementar tela de Classificação e Compatibilidade.                       | 16/04 | 07/05 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil   | Implementar geração de vaga com IA.                      | 16/04 | 07/05 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil   | Implementar análise de compatibilidade currículo x vaga.                   | 20/04 | 07/05 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil   | Criar models/coleções para classificação, vaga gerada e compatibilidade.                   | 20/04 | 07/05 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil   | Criar rotas de API para classificação, vaga e compatibilidade.                | 20/04 | 07/05 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil   | Salvar histórico vinculado ao usuário logado.             | 27/04 | 07/05 | ✔️ |
| Gabriel Baumgratz de Paula Botaro | Gerente de Qualidade | Implementar Criador de Currículo com aprimoramento por IA e exportação em PDF | 27/04 | 07/05 | ✔️ |
| Gabriel Baumgratz de Paula Botaro | Gerente de Qualidade | Refinamento da Navbar e UI/UX global do sistema | 01/05 | 07/05 | ✔️ |


---

# 🔴 Sprint 4 – Finalização

| Responsável | Papel | Tarefa | Início | Prazo | Status |
|-------------|--------|--------|--------|--------|--------|
| Washington Junio Lima | Arquiteto de Dados | Correção de bugs e ajustes finais do sistema | 08/05 | 17/06 | ✔️ |
| Gabriel Baumgratz de Paula Botaro | Gerente de Qualidade | Testes finais das funcionalidades implementadas | 10/06 | 15/06 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil | Produção e edição do vídeo de apresentação do projeto | 14/06 | 17/06 | ✔️ |
| Henrique Gonçalves Sousa | Facilitador Ágil | Revisão e complementação da documentação final do projeto | 02/06 | 17/06 | ✔️ |
| Washington Junio Lima | Arquiteto de Dados | Consolidação do README e documentação final | 10/06 | 17/06 | ✔️ |
| André Oliveira Burle | Facilitador Ágil | Implementação das funcionalidades finais | 11/06 | 18/06 | ✔️ |
| André Oliveira Burle | Facilitador Ágil | Implementação das funcionalidades de gráfico dinâmico e relatório automático | 11/06 | 18/06 | ✔️ |
| André Oliveira Burle | Facilitador Ágil | Implementação das funcionalidades de filtro inteligente e estatísticas em tempo real | 11/06 | 18/06 | ✔️ |
| André Oliveira Burle | Facilitador Ágil | Ajustes finais, revisão e complementação da documentação final | 11/06 | 18/06 | ✔️ |
---
