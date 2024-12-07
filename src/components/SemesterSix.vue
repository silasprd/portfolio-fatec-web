<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>6º Semestre • 7/2024 - Software de Análise Financeira</h2>
      <h3>Repositório: <a href="https://github.com/Data-Team23/SPC-Grafeno" target="_blank">GIT</a></h3>
      <h3>Parceiro Acadêmico: <a href="https://spcgrafeno.com.br/" target="_blank">SPC Grafeno</a></h3>
      <img src="/src/assets/semester6/spc-grafeno.png" alt="jaia" width="800">
    </section>


    <section class="section">
      <p>Esse projeto consiste no desenvolvimento de produtos financeiros inovadores utilizando técnicas de aprendizado de máquina. O objetivo é explorar uma base de dados diversificada, fornecida pelo registrador de ativos financeiros, contendo informações históricas sobre ativos financeiros, transações e comportamentos de mercado. A partir dessa análise, busca-se identificar padrões, prever tendências, avaliar riscos e propor soluções para qualificação de ativos.</p>
      <p>Como parte do projeto, foi criada uma prova de conceito para demonstrar a viabilidade dos produtos propostos, detalhando o modelo utilizado, a justificativa das técnicas aplicadas e a avaliação de desempenho do modelo. O resultado final foi documentado em um relatório técnico e apresentado por meio de uma apresentação, destacando os benefícios do produto para o registrador e seus clientes.</p>
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
        <b>VueJS:</b> Frontend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg">
        <b>PostgreSQL:</b> Banco de dados relacional
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg">
        <b>MongoDB:</b> Banco de dados não relacional
      </div>
    </section>

    <br><br>

    <section class="section">
      <h3>Contribuições pessoais</h3>
      <p> Como parte da equipe de desenvolvimento fui responsável pelo desenvolvimento das interfaces de usuário da aplicação. Participei ativamente na modelagem dos dados da aplicação, principalmente na parte de usuários(LGPD). </p>
      <details>
        <summary><b>Desenvolvimento de componentes dinâmicos</b></summary>
        <p>Desenvolvi componentes reutilizáveis no frontend, como o componente de tabela que nos permite exibir grandes volumes de dados de maneira organizada e navegável.</p>
        <img src="/src/assets/semester6/codes/table-component.png" width="800"/>
        <p>Este código gerencia o estado e o comportamento da tabela, incluindo filtros, ordenação e paginação. Ele utiliza referências (ref) e propriedades computadas (computed) para calcular os dados filtrados e ordenados com base nos valores inseridos pelo usuário. A paginação divide os dados em partes, navegáveis por botões de próxima e anterior. A ordenação é aplicada clicando nos cabeçalhos das colunas, alternando entre ascendente e descendente. Além disso, funções emitem eventos ao editar ou excluir linhas, enquanto o cálculo de linhas vazias mantém o layout consistente na última página.</p>
      </details>
      <br>
      <details>
        <summary><b>Configuração do Ambiente de Desenvolvimento com Docker</b></summary>
        <p>Configurei a aplicação para funcionar em ambiente Docker utilizando um Dockerfile e um docker-compose garantindo um setup padronizado e replicável para desenvolvimento.</p>
        <p>O código implementa uma API para a gestão de alertas de consumo de água, utilizando a classe APIView do Django Rest Framework.</p>
        <img src="/src/assets/semester6/codes/dockerfile.png" width="800"/>
        <p>O Dockerfile define a imagem base como node:18-alpine, configura o diretório de trabalho, instala as dependências do projeto e copia os arquivos necessários. Também expõe a porta 5173 e inicia o servidor com npm run dev, adequado para desenvolvimento.</p>
        <img src="/src/assets/semester6/codes/docker-compose.png" width="800"/>
        <p>Já o docker-compose organiza o ambiente, criando um serviço chamado app, que utiliza o Dockerfile.dev para construir a imagem. Ele mapeia a porta 5173 para acesso local e usa volumes para refletir alterações do código em tempo real. O arquivo também gerencia variáveis de ambiente</p>
      </details>
      <br>
      <details>
        <summary><b>Criação de Gráficos Dinâmicos com Vue.js para Visualização de Métricas</b></summary>
        <p>Implementei gráficos dinâmicos utilizando Vue.js e a biblioteca vue-chart-3, baseada no Chart.js, para exibir métricas RFM (Recência, Frequência e Valor Monetário). A solução inclui um gráfico de barras interativo.</p>
        <img src="/src/assets/semester6/codes/graph-html.png" width="800"/>
        <img src="/src/assets/semester6/codes/graph-options.png" width="800"/>
        <p>Registramos os componentes que configuram o Chart.js para criar gráficos de barras e linhas e definimos opções que garantem um gráfico responsivo e bem formatado com escalas começando em zero.</p>
        <img src="/src/assets/semester6/codes/graph-data.png" width="800"/>
        <p>A função updateGraphData formata os dados recebidos da API para exibição no gráfico. Primeiro, ela obtém os dados utilizando clientApi.metricGraph e valida a resposta para garantir que seja um objeto válido. Em seguida, extrai os nomes dos clusters como labels e utiliza as métricas R (Recência), F (Frequência) e M (Valor Monetário) para criar arrays individuais de dados correspondentes. Esses valores são organizados em um formato esperado pelo componente de gráfico, com cada métrica representada como um dataset, incluindo configurações de cor e legenda. Por fim, o gráfico é atualizado dinamicamente.</p>
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3><b>Tecnologias Aplicadas</b></h3>
      <p>Essas foram as tecnologias que eu utilizei para realizar minhas tarefas neste projeto.</p>
      <details>
          <summary><b>VueJS</b></summary>
          <p>Como principal framework para o desenvolvimento das telas da interface.</p>  
      </details>
      <br>
      <details>
          <summary><b>JavaScript</b></summary>
          <p>Linguagem de programação fundamental para a interatividade das telas.</p>   
      </details>
      <br>
      <details>
          <summary><b>Docker</b></summary>
          <p>Utilizado para isolar e padronizar o ambiente de desenvolvimento e execução da aplicação, garantindo consistência e facilidade de uso.</p>   
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3>Hard Skills</h3>
      <ul>
        <li><b>Configuração e Gestão de Containers com Docker: </b>Configurei e gerenciei contêineres Docker para criar um ambiente de desenvolvimento padronizado e replicável. Utilizei Dockerfile e docker-compose para isolar o frontend, backend e banco de dados, otimizando a consistência e escalabilidade do projeto. Essa abordagem reduziu o tempo de configuração e minimizou erros causados por inconsistências entre os ambientes.</li><br>
        <li><b>Desenvolvimento de Componentes Dinâmicos no Frontend com Vue.js: </b>Desenvolvi componentes reutilizáveis e modulares, como o componente de tabela com funcionalidades de paginação, ordenação e filtros, melhorando a organização de grandes volumes de dados.</li><br>
        <li><b>Criação de Gráficos Interativos para Visualização de Dados: </b> Implementei gráficos dinâmicos utilizando Vue.js e a biblioteca vue-chart-3, baseados no Chart.js, para exibir métricas como Recência, Frequência e Valor Monetário (RFM). Configurei os gráficos com opções personalizadas para responsividade e formatação clara, incluindo atualizações dinâmicas de dados provenientes de APIs.</li><br>
      </ul>
    </section>

    <br>
    <section class="section">
      <h3>Soft Skills</h3>
      <ul>
        <li><b>Trabalho em equipe: </b>Atuei de forma colaborativa com o resposável pela LGPD na aplicação, atuando principalmente na modelagem da estrutura de usuários com foco em proteção de dados pessoais e privacidade, utilizando boas práticas para armazenar informações sensíveis e criptografia.</li><br>
        <li><b>Pensamento crítico: </b>Contribuí para decisões técnicas fundamentadas, avaliando o impacto das escolhas de  criptografia de dados, design de componentes e arquitetura no desempenho e na usabilidade da aplicação.</li><br>
        <li><b>Organização e Gestão de Tempo: </b>Consegui equilibrar múltiplas responsabilidades, como desenvolvimento de componentes front-end dinâmicos, para serem usados por outros desenvolvedores do time, e configuração do ambiente de desenvolvimento com Docker para eliminar problemas causados por inconsistências entre os ambientes.</li><br>
      </ul>
    </section>
    <br><br>
  </div>
</template>