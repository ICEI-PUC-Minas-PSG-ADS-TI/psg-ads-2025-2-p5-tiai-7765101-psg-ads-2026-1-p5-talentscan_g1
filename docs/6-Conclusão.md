
# 6. Conclusão

## 6.1 Síntese dos Resultados
O TalentScan atendeu ao objetivo proposto inicialmente ao disponibilizar uma plataforma capaz de analisar currículos utilizando Inteligência Artificial, oferecendo feedbacks, sugestões de melhoria e recursos que auxiliam os usuários na construção e aperfeiçoamento de seu perfil profissional. O sistema permite que estudantes, recém-formados e profissionais identifiquem pontos fortes e oportunidades de melhoria em seus currículos, contribuindo para uma apresentação mais clara e competitiva no mercado de trabalho.

Além da análise automatizada de currículos, a solução evoluiu ao longo do desenvolvimento e passou a oferecer funcionalidades como classificação profissional, geração de vagas com Inteligência Artificial, análise de compatibilidade entre currículo e vaga, histórico de desempenho e criador de currículos com exportação em PDF. Esses recursos ampliam o potencial da ferramenta como apoio à preparação profissional dos usuários.

O projeto está diretamente relacionado à ODS 8 Trabalho Decente e Crescimento Econômico, pois busca promover o acesso a melhores oportunidades de emprego por meio da utilização da tecnologia. Ao auxiliar usuários na organização de suas competências, experiências e qualificações, o sistema contribui para o desenvolvimento da empregabilidade e para a inserção mais qualificada no mercado de trabalho.

Como resultado, o TalentScan proporcionou uma solução digital capaz de apoiar o crescimento profissional dos usuários, incentivando a qualificação, a preparação para processos seletivos e a utilização da Inteligência Artificial como ferramenta de desenvolvimento de carreira.

---
## 6.2 Limitações e Trabalhos Futuros

Embora o TalentScan tenha alcançado os objetivos propostos e disponibilize diversas funcionalidades voltadas para análise e aprimoramento de currículos, algumas limitações ainda podem ser observadas.

Atualmente, a qualidade das análises depende diretamente das informações presentes no currículo enviado pelo usuário. Currículos com poucas informações, descrições genéricas ou dados incompletos podem resultar em análises menos precisas e detalhadas.

Outra limitação refere-se à dependência de serviços externos de Inteligência Artificial, como a API Gemini. A qualidade das análises geradas depende diretamente das respostas fornecidas pelo modelo, podendo ocorrer variações nos resultados conforme o conteúdo enviado pelo usuário. Embora a ferramenta apresente resultados relevantes, a análise realizada não substitui a avaliação de profissionais especializados em recrutamento e seleção.

Além disso, o sistema realiza análises com foco geral em empregabilidade, não contemplando critérios específicos de determinadas áreas profissionais. Profissões da área de tecnologia, saúde, engenharia ou administração, por exemplo, possuem exigências e competências próprias que poderiam ser avaliadas de forma mais especializada.

O sistema também não possui integração direta com plataformas de recrutamento e seleção, limitando-se à análise, classificação e comparação de currículos e vagas informadas pelo próprio usuário.

Para uma futura versão 2.0, são propostas as seguintes melhorias:

- Integração com plataformas de emprego e recrutamento;
- Análises especializadas por área profissional;
- Autenticação utilizando contas Google e LinkedIn;
- Recomendação de cursos, certificações e trilhas de aprendizagem com base nas competências identificadas;
- Sistema de otimização para ATS (Applicant Tracking Systems);
- Disponibilização de modelos profissionais adicionais para geração de currículos;
- Dashboard avançado com indicadores de evolução profissional;
- Desenvolvimento de aplicativo mobile para Android e iOS;

Dessa forma, o TalentScan apresenta uma base sólida para futuras expansões, com potencial para se tornar uma plataforma ainda mais completa de apoio ao desenvolvimento profissional, à empregabilidade e à preparação para processos seletivos.
---
## 6.3 Lições Aprendidas

O desenvolvimento do TalentScan permitiu acompanhar todas as etapas da construção de um sistema, desde o levantamento dos requisitos até a implementação das funcionalidades e documentação final do projeto. A organização por Sprints e a utilização do Kanban contribuíram para um melhor acompanhamento das atividades, permitindo visualizar a evolução do sistema ao longo do semestre e definir prioridades para cada entrega.

Um dos principais desafios foi integrar a Inteligência Artificial às funcionalidades da plataforma. Foi necessário compreender o funcionamento da API Gemini, estruturar requisições adequadas e tratar os retornos gerados pela IA para transformá-los em análises úteis e compreensíveis para os usuários. Durante esse processo, diversos testes e ajustes foram realizados para melhorar a qualidade das respostas apresentadas pelo sistema.

Também foi desafiador desenvolver funcionalidades que dependiam da comunicação entre diferentes partes da aplicação, como upload de currículos, processamento de arquivos PDF e DOCX, armazenamento dos resultados no banco de dados e exibição das análises na interface do usuário. A implementação dessas funcionalidades exigiu atenção à integração entre Front-end, Back-end, Banco de Dados e serviços externos.

Outro aspecto importante foi perceber como uma ideia inicial pode evoluir durante o desenvolvimento. O projeto começou com o objetivo de analisar currículos utilizando Inteligência Artificial e, ao longo das Sprints, incorporou novas funcionalidades, como histórico de análises, classificação profissional, geração de vagas, compatibilidade entre currículo e vaga e criador de currículos, tornando a solução mais completa do que a proposta originalmente planejada.

Ao final do projeto, foi possível compreender melhor a importância do planejamento, da documentação, dos testes e da integração entre diferentes tecnologias para a construção de uma aplicação funcional, organizada e alinhada às necessidades dos usuários.
