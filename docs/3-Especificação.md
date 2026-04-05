
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


---

# 3.2 Histórias de Usuário

Cada história deve seguir o padrão ensinado na disciplina:

> **Como** [persona],  
> **eu quero** [funcionalidade],  
> **para que** [benefício].

⚠️ **ATENÇÃO:**  
Cada História de Usuário deve estar associada a um Requisito Funcional específico (RF-XX).

---

## Exemplos

**História 1 (relacionada ao RF-01):**  
Como usuário, quero registrar minhas tarefas para não esquecer de fazê-las.

**História 2 (relacionada ao RF-02):**  
Como administrador, quero alterar permissões para controlar o acesso ao sistema.

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

### História 8 (relacionada ao RF-08)

**Como usuário**  
Eu quero sair da minha conta  
Para encerrar minha sessão com segurança  

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
| R-02 | O sistema deve funcionar apenas dentro da rede interna da empresa. |
| R-03 | O software deve ser compatível com Windows e Linux. |
| R-04 | (Descreva aqui a restrição 4 do seu projeto) |
| R-05 | (Descreva aqui a restrição 5 do seu projeto) |
| R-06 | (Descreva aqui a restrição 6 do seu projeto) |
| R-07 | (Descreva aqui a restrição 7 do seu projeto) |
| R-08 | (Descreva aqui a restrição 8 do seu projeto) |

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
