# TalentScan

`Análise e Desenvolvimento de Sistemas`

`Trabalho Interdisciplinar: Aplicações Inovadoras`

`01/2026`

O TalentScan busca melhorar a empregabilidade de pessoas através da análise automática de currículos utilizando inteligência artificial. O sistema fornece feedback sobre competências, estrutura do currículo e oportunidades de melhoria, auxiliando candidatos a se prepararem melhor para processos seletivos e aumentando suas chances de inserção no mercado de trabalho.

ODS Alinhados: ODS 8 – Trabalho Decente e Crescimento Econômico

Muitos candidatos, especialmente estudantes e profissionais em início de carreira, enfrentam dificuldades na elaboração de currículos eficazes e não possuem acesso a orientação profissional especializada. Como consequência, acabam apresentando currículos com informações incompletas, mal estruturadas ou que não destacam adequadamente suas competências.
Isso pode reduzir significativamente suas chances de inserção no mercado de trabalho.

## 👥 Integrantes

- **Gabriel Baumgratz de Paula Botaro**  
  📧 gabrielbotaro100@gmail.com

- **Henrique Gonçalves Sousa**  
  📧 henriquegsousa.contato1@gmail.com

- **Washington Junio Lima**  
  📧 Washington_jlp@hotmail.com

- **André Oliveira Burle**

## Orientador

* Juliana Padilha

# Instruções de Utilização

## Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js (versão 18 ou superior)
- NPM
- MongoDB Atlas ou MongoDB local
- Conta com chave da API Gemini

## Clonar o Repositório

```bash
git clone https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2025-2-p5-tiai-7765101-psg-ads-2026-1-p5-talentscan_g1.git

cd psg-ads-2025-2-p5-tiai-7765101-psg-ads-2026-1-p5-talentscan_g1
```

## Instalar Dependências

### Front-end

```bash
cd src/front
npm install
```

### Back-end

```bash
cd src/backend
npm install
```

## Configurar Variáveis de Ambiente

Criar um arquivo `.env` na pasta `src/backend`:

```env
MONGODB_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
GEMINI_API_KEY=sua_chave_gemini
PORT=5000
```

## Executar o Projeto

### Iniciar o Back-end

```bash
cd src/backend
npm run dev
```

### Iniciar o Front-end

Em outro terminal:

```bash
cd src/front
npm run dev
```

Após iniciar os serviços, acessar:

```text
http://localhost:5173
```

## Funcionalidades Disponíveis

- Cadastro de usuários
- Login e autenticação
- Upload de currículos
- Análise de currículos com Inteligência Artificial
- Histórico de análises
- Dashboard de desempenho
- Classificação profissional de currículos
- Compatibilidade entre currículo e vaga
- Geração de vagas com IA
- Criador de currículo
- Exportação de currículos e relatórios em PDF

# Documentação

<ol>
<li><a href="docs/1-Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/2-Planejamento-Projeto.md"> Planejamento do Projeto</a></li>
<li><a href="docs/3-Especificação.md"> Especificação do Projeto</a></li>
<li><a href="docs/4-Projeto-Solucao.md"> Projeto da solução</a></li>
<li><a href="docs/5-Interface-Sistema.md"> Interface do Sistema</a></li>
<li><a href="docs/6-Conclusão.md"> Conclusão</a></li>
<li><a href="docs/7-Referências.md"> Referências</a></li>
</ol>

# Código

<li><a href="src/README.md"> Código Fonte</a></li>

# Apresentação

<li><a href="docs/apresentacao/README.md"> Apresentação da solução</a></li>


## Histórico de versões

### 1.0.0
- Entrega final do TalentScan.
- Correção de bugs e ajustes de interface.
- Implementação da tela de progresso e histórico de análises.
- Consolidação da documentação do projeto.

### 0.3.0
- Classificação profissional de currículos.
- Geração de vagas com Inteligência Artificial.
- Compatibilidade entre currículo e vaga.
- Criador de currículo com exportação em PDF.

### 0.2.0
- Upload e análise de currículos com IA.
- Dashboard de resultados e feedbacks.
- Histórico de análises.
- Perfil e gerenciamento de conta.

### 0.1.0
- Cadastro e login de usuários.
- Integração entre Front-end, Back-end e Banco de Dados.
- Estrutura inicial da aplicação.

### 0.0.1
- Criação do repositório.
- Planejamento do projeto.
- Definição dos requisitos e modelagem inicial da solução.

