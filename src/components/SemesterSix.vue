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
    </section>

    <br><br>
  </div>
</template>