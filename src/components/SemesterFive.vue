<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>5º Semestre • 1/2024 - Sistema de Gerenciamento de Contratos</h2>
      <h3>Repositório: <a href="https://github.com/Data-Team23/Tecsus" target="_blank">GIT</a></h3>
      <h3>Parceiro Acadêmico: <a href="https://tecsus.com.br/" target="_blank">Tecsus: Gestão de Utilidades e Telemetria</a></h3>
      <img src="/src/assets/semester5/tecsus-logo.png" alt="tecsus" width="800">
    </section>


    <section class="section">
      <p>A TecSUS realiza a coleta e processamento de contas de energia, água e gás para diversas empresas dos setores do atacado e varejo. Cada conta coletada precisa ter todos os seus campos digitados e salvos em banco de dados para eventuais consultas e análises técnicas/financeiras. Cada unidade do cliente pode possuir vários contratos (água, energia ou gás), cada contrato pode possuir uma ou mais contas (faturas de água, energia ou gás) por mês. Todos esses contratos estão ligados a uma concessionária de abastecimento. A Tecsus possuem uma base de dados de unidades, contratos, contas e concessionárias desestruturada em arquivo texto, a empresa tem interesse em aplicar técnicas de ETL e utilizar ferramentas de visualização de dados do mercado.</p>
      <p>Nossa aplicação consiste em uma solução de gerenciamento de contratos e consumo para a TecSUS, com recursos de ETL para organizar dados de unidades, concessionárias, contratos e contas. O sistema fornece relatórios de consumo (mensal, anual e média) de água e energia, além de alertas para consumos acima da média.</p>
    </section>


    <section class="section">
      <h3><b>Tecnologias utilizadas:</b></h3>
      <br>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg">
        <b>Python:</b> Backend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg">
        <b>Javascript:</b> Frontend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg">
        <b>VueJS:</b> Interfaces
      </div>
      <div>
        <img align="center" alt="Postgres-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg">
        <b>OracleSQL:</b> Banco de dados
      </div>
    </section>
    <br><br>
    <section class="section">
      <h3>Contribuições pessoais</h3>
      <p> Como parte da equipe de desenvolvimento fui responsável por desenvolver API's parap gerenciamento dos dados. Criei pipelines de integração continua para automatizar processos no desenvolvimento da solução. Também concentrei parte da minha atuação na criação e implementação das telas que compõem a interface do usuário. </p>
      <details>
        <summary><b>Desenvolvimento de API para o gerenciamento de Fornecedores</b></summary>
        <p>Desenvolvi uma API para gerenciar fornecedores de água, energia e gás, permitindo a consulta, criação e atualização de dados desses fornecedores. Essa API estrutura as informações essenciais para a TecSUS, facilitando o acesso rápido e a atualização precisa dos dados de abastecimento, essenciais para a análise e otimização de contratos e custos das unidades dos clientes.</p>
        <p>O código abaixo utiliza a arquitetura de views genéricas do Django Rest Framework. </p>
        <img src="/src/assets/semester5/fornecedor-code.png" width="800"/>
        <p>O código define uma API para gerenciar fornecedores de água, com funcionalidades para consulta, criação e atualização de registros. No método get, se um id_fornecedor_agua for fornecido, a API tenta buscar o fornecedor correspondente e retorna os dados serializados; caso contrário, retorna uma lista única e ordenada de todos os fornecedores. O método post recebe novos dados de fornecedores, valida e, se estiverem corretos, os insere no banco, retornando os dados criados com sucesso ou um erro de validação. No método put, a API verifica se o id_fornecedor_agua existe, atualizando os dados do fornecedor com base no ID informado; caso o ID não exista, retorna um erro 404, e, se o ID não for passado, retorna um erro indicando a falta do parâmetro.</p>
      </details>
      <br>
      <details>
        <summary><b>Desenvolvimento da API para o gerenciamento de Alertas</b></summary>
        <p>Desenvolvi uma API para gerenciar alertas de consumo de água, permitindo listar todos os alertas existentes e criar novos registros. A API processa as requisições GET e POST, serializando os dados para garantir consistência e validação antes do armazenamento.</p>
        <p>O código implementa uma API para a gestão de alertas de consumo de água, utilizando a classe APIView do Django Rest Framework.</p>
        <img src="/src/assets/semester5/alerta-code.png" width="800"/>
        <p>O método get busca todos os registros de alertas de consumo no banco de dados, serializando-os com AlertaAguaSerializer e retornando-os como resposta JSON. O método post recebe dados de um novo alerta no formato JSON, aplica o AlertaAguaSerializer para validar os dados e, caso sejam válidos, salva o novo alerta no banco de dados. Em caso de sucesso, retorna o registro criado com o status HTTP 201 (Created); caso contrário, retorna erros de validação com o status HTTP 400 (Bad Request). Essa estrutura facilita a manipulação de dados e garante a integridade dos registros antes da inserção.</p>
      </details>
      <br>
      <details>
        <summary><b>Implementação de Pipelines de Integração Contínua para o Backend</b></summary>
        <p>Implementei pipelines de integração contínua para automação de build, testes unitários e de integração, além do deploy. Esses pipelines garantem a qualidade do código em cada etapa, verificando e validando funcionalidades antes de disponibilizar novas versões em produção.</p>
        <img src="/src/assets/semester5/build-pipeline.png" width="800"/>
        <p>Este pipelinne é acionado em pull requests para a branch dev. Ele realiza o checkout do repositório e configura o ambiente Python com a versão 3.10.5. Em seguida, ativa um ambiente virtual dentro do diretório tecsus, constrói a imagem Docker para garantir que as dependências estão corretas e executa as migrações do banco de dados usando o docker-compose. Por fim, roda testes unitários definidos com pytest, assegurando que a aplicação e suas dependências estejam funcionando corretamente antes de fusões na branch principal.</p>
        <img src="/src/assets/semester5/integration-pipeline.png" width="800"/>
        <p>Este outro pipeline é acionado em pull requests para a branch dev e executa testes de integração para validar a comunicação entre os módulos da aplicação. Ele começa pelo checkout do repositório, configura o ambiente Python com a versão 3.10.5 e ativa um ambiente virtual no diretório tecsus. Após essa preparação, o pipeline executa testes de integração com o pytest, usando docker-compose para garantir que os serviços estão interligados e operando corretamente antes de uma possível fusão no ambiente de desenvolvimento.</p>
        <img src="/src/assets/semester5/deploy-pipeline.png" width="800"/>
        <p>Este é o pipeline de deploy, que é acionado quando um pull request para a branch main é fechado. Ele realiza a automação de construção, envio e implantação da imagem Docker do backend, garantindo que a última versão esteja disponível em produção. Primeiro ele faz o checkout do repositório e configura o ambiente. Em seguida, autentica no Docker Hub usando credenciais armazenadas nos "secrets" DOCKER_USERNAME e DOCKER_PASSWORD. Na etapa de deploy, a imagem é puxada para o servidor de produção, onde o contêiner antigo é removido, e um novo contêiner é criado e executado na porta 8000. As variáveis de ambiente DATABASE_USERNAME, DATABASE_PASSWORD e DATABASE_URL são configuradas dinamicamente para permitir acesso seguro e adequado ao banco de dados, garantindo uma implantação contínua e sem interrupções para o backend.</p>
      </details>
      <br>
      <details>
        <summary><b>Implementação de Pipelines de Integração Contínua para o Frontend</b></summary>
        <p>Também implementei os pipelines de integração contínua para automação de build, testes unitários e de integração, e deploy para o frontend. Verificando a qualidade do código em cada etapa, verificando e validando funcionalidades antes de disponibilizar novas versões em produção.</p>
        <img src="/src/assets/semester5/build-front-pipeline.png" width="800"/>
        <p>Este pipeline é acionado em pushs para qualquer branch exceto dev e main, e em pull requests direcionados ao branch dev. Ele executa uma série de etapas em um ambiente Ubuntu, começando com o checkout do repositório e a configuração do Node.js na versão 18. Em seguida, instala as dependências do projeto com npm install e realiza o build utilizando npm run build. Por fim, o pipeline executa os testes unitários com npm run test para garantir que as funcionalidades básicas do código estejam funcionando corretamente antes de possíveis merges ou deploys.</p>
        <img src="/src/assets/semester5/integration-front-pipeline.png" width="800"/>
        <p>Esse pipeline é responsável por executar testes de integração E2E do frontend no GitHub Actions. Ele verifica a integração entre o frontend e o backend, simulando um ambiente completo para validar o comportamento do sistema. O pipeline é acionado por uma pull request na branch dev. Configura o ambiente com Node.js (versão 18) e Python (versão 3.10.5) para suporte às dependências do frontend e do backend. Em seguida, executa npm install para instalar as dependências Node do projeto, preparando o ambiente para construção e execução dos testes. 
        Na etapa seguinte, faz um pull da imagem do PostgreSQL e inicia um container com variáveis de ambiente específicas (POSTGRES_DB, POSTGRES_USER e POSTGRES_PASSWORD). O comando sleep e um loop pg_isready garantem que o PostgreSQL esteja totalmente pronto antes de continuar.
        </p>
        <p><b>Construção do container backend no ambiente: </b>Nesta etapa, realizmos um pull da imagem Docker do backend, garantindo a atualização, e constrói a imagem caso haja alterações no Dockerfile do backend. Em seguinda as migrações do Django são feitas usando comandos específicos (makemigrations e migrate), garantindo que o banco de dados PostgreSQL esteja sincronizado com o modelo. Criamos um superusuário no Django para garantir acesso administrativo durante os testes. E então, executamos o backend Django em um container expondo a porta 8000 para permitir que o frontend se conecte ao backend para as operações de teste.
        Implementamos uma etapa adicional para garantir a disponibilidade do backend. O loop com sleep garante que o backend esteja pronto antes dos testes do frontend.</p>
        <p>E por fim, utilizamos a ação oficial do Cypress para rodar os testes E2E. Primeiro, compila (npm run build) e serve (npm run serve) o frontend, e aguarda que ele esteja acessível em http://localhost:8080 para iniciar os testes de integração.</p>
        <img src="/src/assets/semester5/deploy-front-pipeline.png" width="800"/>
        <p>Esse pipeline de deploy automatiza o processo de construção e entrega do frontend da aplicação Tecsus. Ele é acionado em pushs para a branch main. Primeiro realizmos o checkout do código, configura o ambiente com Node.js e instala as dependências. Em seguida, executa o comando de build (npm run build), criando o artefato necessário para produção. Realizamos o login no Docker Hub usando secrets DOCKER_USERNAME e DOCKER_PASSWORD_FRONT configurados e faz um push da imagem Docker para o repositório no Docker Hub.
        Por fim, em um ambiente self-hosted, o pipeline baixa a imagem, remove qualquer container em execução do frontend, e inicia um novo container, expondo o serviço na porta 80 para acesso externo.
        </p>
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3><b>Tecnologias desenvolvidas:</b></h3>
      <p>Essas foram as tecnologias que eu desenvolvi e utilizei para realizar minhas tarefas neste projeto.</p>
      <details>
          <summary><b>Vue</b></summary>
          <p>Como principal framework para o desenvolvimento das telas da interface.</p>  
      </details>
      <br>
      <details>
          <summary><b>Python</b></summary>
          <p>Utilizado para gerenciar e configurar o backend, e também realizar integrações entre o backend e o banco de dados</p>
      </details>
      <br>
      <details>
          <summary><b>JavaScript</b></summary>
          <p>Linguagem de programação fundamental para a interatividade das telas.</p>   
      </details>
      <br>
      <details>
          <summary><b>Github Actions</b></summary>
          <p>Ferramenta utilizada para automatização de processos no desenvoltimento do software.</p>   
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3>Hard Skills</h3>
      <ul>
        <li><b>Vue: </b> Aprimorei habilidades em Vue.js ao desenvolver uma interface de usuário robusta e dinâmica para gestão dos contratos e usuários, com destaque para a organização e reutilização de componentes e gerenciamento de estado de forma eficiente.</li><br>
        <li><b>Python: </b>Ganhei proficiência no uso de Python para estruturar e gerenciar o backend da aplicação, incluindo a configuração de banco de dados, execução de migrações e criação de APIs, garantindo um fluxo de dados seguro e bem estruturado.</li><br>
        <li><b>Javascript: </b>Utilizei JavaScript de forma extensiva para integrar a lógica de negócio no frontend, manipulando eventos e interatividade, além de implementar validações e regras de negócio, assegurando uma experiência de usuário fluida.</li><br>
        <li><b>Github Actions: </b> Desenvolvi habilidades em automação de pipelines CI/CD com GitHub Actions, implementando fluxos de build, testes, e deploy para backend e frontend. Otimizei o processo de entrega contínua e integração, integrando banco de dados e testes de integração com Docker, aprimorando a entrega de software de alta qualidade.</li>
      </ul>
    </section>

    <br>
    <section class="section">
      <h3>Soft Skills</h3>
      <ul>
        <li><b>Adaptabilidade: </b>Demonstrei flexibilidade ao lidar com ajustes no escopo do projeto e prazos, e também com ferramentas desconhecidas como as utilizadas na Integração Contínua. A capacidade de adaptar rapidamente soluções técnicas e ajustá-las conforme necessário foi essencial para garantir o progresso contínuo do desenvolvimento.</li><br>
        <li><b>Organização e Gerenciamento de Tempo: </b>Fui capaz de balancear tarefas simultâneas, como o desenvolvimento do frontend e backend e a implementação de pipelines de integração. A priorização das atividades foi crucial para manter o fluxo de entregas no prazo e realizar implementações completas e funcionais.</li><br>
        <li><b>Resolução de problemas: </b>Desenvolvi a habilidade de identificar e resolver problemas complexos, tanto no backend quanto no frontend, incluindo desafios com configurações de CI/CD e integrações de APIs. A capacidade de diagnosticar problemas e encontrar soluções eficazes contribuiu para a estabilidade e o sucesso do projeto.</li><br>
        <li><b>Trabalho em equipe: </b>Colaborei ativamente com colegas em diversas áreas do projeto, dividindo responsabilidades e oferecendo suporte sempre que necessário. Essa colaboração permitiu a integração de componentes complexos e assegurou que todos trabalhássemos alinhados aos objetivos da aplicação.</li><br>
        <li><b>Comunicação Efetiva: </b>Habilidade essencial durante o projeto, especialmente ao articular desafios técnicos e colaborar com a equipe. Participei de reuniões de alinhamento e resolução de problemas, garantindo que todos estivessem informados sobre o progresso e quaisquer obstáculos, além de obter feedbacks para aprimoramentos contínuos.</li>
      </ul>
    </section>
    <br><br>
  </div>
</template>