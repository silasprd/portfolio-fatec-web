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
      </details>
      <br>
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
          <p>Utilizados para a estruturação e gerenciamento dos dados.</p>
      </details>
      <br>
      <details>
          <summary><b>JavaScript:</b></summary>
          <p>Linguagem de programação fundamental para a interatividade das telas.</p>   
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3>Hard Skills</h3>
      <ul>
        <li><b>Vue: </b> Desenvolvimento de habilidades avançadas em Vue, sendo capaz de desenvolver interfaces complexas de forma eficiente e escalável.</li><br>
        <li><b>HTML e CSS: </b>Domínio de HTML e CSS, utilizando-os para criar layouts responsivos, estilizados com autonomia e o uso eficiente de flexbox e grid.</li><br>
        <li><b>Javascript: </b>Conhecimento solidificado em JavaScript, utilizando-o para implementar interatividade e lógica de negócio nas aplicações web. Estou familiarizado com conceitos como manipulação do DOM, eventos, promessas e assincronicidade.</li><br>
        <li><b>Análise de Requisitos e Design de Interface: </b>Desenvolvi habilidades avançadas na análise de requisitos de projeto e no design de interfaces de usuário. Minha capacidade inclui a compreensão das necessidades do usuário e a tradução dessas necessidades em soluções de design eficazes e intuitivas.</li>
      </ul>
    </section>

    <br>
    <section class="section">
      <h3>Soft Skills</h3>
      <ul>
        <li><b>Comunicação Efetiva: </b>A habilidade de comunicação foi fundamental durante todo o projeto, especialmente na interação com outros membros da equipe e na compreensão das necessidades dos usuários finais. Participei ativamente de reuniões para discussão de requisitos, feedbacks e resolução de problemas.</li><br>
        <li><b>Trabalho em Equipe: </b>Colaborei de forma eficaz com outros membros da equipe de desenvolvimento, compartilhando conhecimento, dividindo tarefas e apoiando os colegas conforme necessário. Estabeleci um ambiente de trabalho colaborativo, onde ideias e soluções foram discutidas e implementadas em conjunto para alcançar os objetivos do projeto.</li><br>
        <li><b>Adaptabilidade: </b>Demonstrei adaptabilidade ao lidar com mudanças nos requisitos do projeto e nos prazos de entrega. A capacidade de me ajustar rapidamente a novas circunstâncias e prioridades foi crucial para manter o progresso do desenvolvimento e garantir a entrega.</li><br>
        <li><b>Criatividade e Inovação: </b>Demonstrei criatividade ao enfrentar desafios de design e implementação, propondo soluções inovadoras para problemas complexos. Explorei diferentes abordagens e técnicas para encontrar as melhores soluções que atendessem às necessidades dos usuários e aos requisitos do projeto.</li>
      </ul>
    </section>
    <br><br>
  </div>
</template>