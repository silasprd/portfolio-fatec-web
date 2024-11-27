<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>3º Semestre • 1/2023 - Sistema Gerenciador de Vendas</h2>
      <h3>Repositório: <a href="https://github.com/equipe-vox/api-3" target="_blank">GIT</a></h3>
      <h3>Parceiro Acadêmico: <a href="https://www.domrock.net/" target="_blank">DomRock</a></h3>
      <img src="/src/assets/semester3/domrock.png" alt="boardclass" width="800">
    </section>


    <section class="section">
      <p>Este projeto consiste em um sistema gerenciador que auxilie o setor de vendas e operações de uma grande empresa.</p>
      <p>A aplicação lida com o histórico de movimentação de produtos, predição de movimentação de produtos (feito por um algoritmo de média ideal) e entrada de dados oriundas da força de vendas quanto ao planejamento profundo.</p>
    </section>


    <section class="section">
      <h3><b>Tecnologias utilizadas:</b></h3>
      <br>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg">
        <b>Figma:</b> Design
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg">
        <b>Java:</b> Ecossistema
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg">
        <b>SpringBoot:</b> Backend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg">
        <b>React:</b> Frontend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg">
        <b>MySQL:</b> Banco de dados
      </div>
    </section>
    <br><br>
    <section class="section">
      <h3>Contribuições pessoais</h3>
      <p>Como parte da equipe de desenvolvimento, fui responsável por desenvolver algumas funcionalidades em java para o tratamento de alguns dados disoponibilizados no sistema. Também concentrei a maior parte do meu tempo de desenvolvimento, na criação das interfaces de usuário, como formulários e listas e também dashboards para visualização dos dados.</p>
      <details>
        <summary><b>Algoritmo de predição ideal de vendas</b></summary>
        <p>É um método desenvolvido em Java, que utiliza Spring Boot, especificamente a anotação @PutMapping, para calcular médias de vendas e prever valores ideais para quantidades de vendas futuras. Este algoritmo é útil para prever quantidades ideais de vendas futuras com base em padrões históricos de vendas, permitindo uma melhor tomada de decisão e planejamento de negócios.</p>
        <img src="/src/assets/semester3/codes/calcular-medias.png" alt="masked-build" width="800">
        <p>O método começa recuperando a venda específica com base no ID fornecido. Isso é feito usando o método findById do vendaRepository. Em seguida, o algoritmo itera sobre todas as vendas do cliente associado à venda recuperada, somando as quantidades de venda reais em três períodos diferentes (primeiro, segundo e terceiro mês). Essas somas são divididas pelo número total de vendas (i) para calcular as médias de venda em cada período. Com as médias de vendas calculadas, o algoritmo calcula as quantidades ideais de vendas para cada período futuro. Isso é feito aplicando uma fórmula que combina a quantidade real da venda atual (vendaFound.getFirst_qtd(), vendaFound.getSecond_qtd(), vendaFound.getThird_qtd()) com a média de vendas históricas correspondente.</p>
      </details>
      <br>
      <details>
        <summary><b>Coleta de dados para utilização em gráficos</b></summary>
        <p>Desenvolvimento dos métodos de consulta em Java, utilizando Spring Boot, que recupera dados específicos para serem usados em um gráfico. Este método é uma operação de consulta desenvolvida em Java, utilizando Spring Boot, que recupera dados de lucro por cliente para um determinado vendedor.</p>
        <img src="/src/assets/semester3/codes/graph-by-clients.png" alt="masked-build" width="800">
        <p>Com a anotação GetMapping mapeamos a requisição HTTP GET para o endpoint "/clientsGraph/{vendedorId}", onde {vendedorId} é um parâmetro dinâmico que representa o ID do vendedor. O método começa criando uma lista vazia chamada dataLucroPorCliente. Em seguida, o método recupera o vendedor correspondente ao ID fornecido usando o método findById do vendedorRepository. Se o vendedor existir, sua lista de clientes é obtida. Iteramos sobre a lista de clientes do vendedor. Para cada cliente, ele recupera a lista de vendas associadas a esse cliente. Para cada venda do cliente, o método calcula o lucro total multiplicando o valor do produto pelo total de unidades vendidas. O lucro total de todas as vendas do cliente é acumulado. Após calcular o lucro total por cliente, o método cria um objeto ClienteVendedor, formata o lucro total para exibição adequada e adiciona o objeto à lista dataLucroPorCliente. Por fim retornamos a lista contendo os dados de lucro por cliente.</p>
      </details>
      <br>
      <details>
        <summary><b>Criação das requisições para coleta dos dados de gráfico fornecidos pelo backend</b></summary>
        <p>Essa parte do código desenvolvida em Javascript faz uma requisição ao backend para recuperar dados de lucro por cliente e processa esses dados para uso na interface do usuário.</p>
        <img src="/src/assets/semester3/codes/find-axios.png" alt="masked-build" width="800">
        <p>Esta é uma função assíncrona, que será executada para buscar os dados de lucro por cliente. Primeiro verificamos se nenhum cliente ou venda está selecionado antes de fazer a requisição. Em 'axios.get', é feita uma requisição HTTP GET para o endpoint onde o backend roda. O ID do usuário atual(mapeado por uma constante de estado userId), será usado para recuperar os dados de lucro por cliente específicos desse usuário. Após receber a resposta da requisição, os dados são mapeados para formatá-los de uma maneira mais adequada para uso na interface do usuário. Por fim, os dados processados de lucro por cliente são definidos no estado LucroPorCliente, que será usado para renderizar um gráfico ou exibir informações na interface do usuário.</p>
      </details>
      <br>
      <details>
        <summary><b>Criação dos gráficos nas interfaces de usuário</b></summary>
        <p>Para criação dos gráficos, utilizamos a biblioteca recharts, que é comumente usada para criar gráficos em aplicações React.</p>
        <pre><code>
<span><</span>BarChart
  width={600}
  height={350}
  data={lucroPorCliente}
  >
  <span><</span>CartesianGrid stroke="#B3B0B8" strokeDasharray="2 5" />
  <span><</span>XAxis dataKey="name" stroke="#B3B0B8" />
  <span><</span>YAxis stroke="#F8D210" tickFormatter={(value) => new Intl.NumberFormat('pt-BR').format(value)} />
  <span><</span>Tooltip formatter={(value: any) => parseFloat(value).toLocaleString()} />
  <span><</span> Bar dataKey="value" fill="#8884d8" name="Valor de venda">
      {
          lucroPorCliente.map((entry: any, index) => (
            <span><</span>Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))
      }
  <span><</span>/ Bar >
<span><</span>/ BarChart>
        </code></pre>
        <p>Este componente define o gráfico de barras e especifica suas dimensões. Os dados para o gráfico são passados através da propriedade data, que contém os valores de lucro por cliente. O componente CartesianGrid cria linhas de grade para o gráfico, tornando mais fácil visualizar os dados, nele são definidas a cor da linha e o tipo de traço. Depois utilizamos o componente XAxis para definir o eixo X do gráfico, que normalmente exibe as categorias ou labels. O YAxis normalmente exibe os valores, e utilizamos o tickFormatter para formatar os valores exibidos no eixo Y. O Tooltip adiciona uma dica de ferramenta que mostra informações adicionais quando o usuário passa o mouse sobre as barras. A tag Bar define as barras do gráfico. dataKey especifica qual atributo dos dados será utilizado para determinar a altura das barras. Por fim, criamos um pequeno trecho de código para mapear os dados de lucro por cliente para cada barra do gráfico. Para cada entrada no array lucroPorCliente, uma barra é renderizada.</p>
      </details>
      <br>
    </section>

    <br><br>

    <section class="section">
      <h3><b>Tecnologias Aplicada:</b></h3>
      <p>Essas foram as tecnologias que eu utilizei para realizar minhas tarefas neste projeto.</p>
      <details>
          <summary><b>SpringBoot</b></summary>
          <p>Desenvolvimento do backend, incluindo APIs REST para coleta e manipulação de dados.</p>  
      </details>
      <br>
      <details>
          <summary><b>MySQL</b></summary>
          <p> Armazenamento e gerenciamento de dados relacionados a vendas e clientes.</p>
      </details>
      <br>
      <details>
          <summary><b>React</b></summary>
          <p>Criação de interfaces dinâmicas e interativas, incluindo dashboards para visualização de dados.</p>   
      </details>
      <br>
      <details>
          <summary><b>Recharts</b></summary>
          <p>Implementação de gráficos personalizados para exibir informações de vendas e comportamento de clientes.</p>   
      </details>
    </section>

    <br><br>

    <section class="section">
      <h3>Hard Skills</h3>
      <ul>
        <li><b>Desenvolvimento de Algoritmo de Predição em Java: </b>Criei algoritmos personalizados em Java, como o método calcularMediasePredizer, que calcula médias de vendas e prevê quantidades ideais com base em dados históricos. Este algoritmo permitiu maior precisão no planejamento de vendas, agregando inteligência aos processos da empresa.</li><br>
        <li><b>Extração de Dados para Visualização Gráfico: </b>Desenvolvi habilidades em extração e manipulação de dados, criando métodos otimizados como findDataGraphByVenda e findDataGraphByClients em Java com Spring Boot. Esses métodos integram APIs REST para recuperar e estruturar dados de vendas, facilitando a geração de visualizações gráficas. Esses métodos demonstram minha capacidade de trabalhar com estruturas de dados complexas, realizar cálculos de negócio e garantir compatibilidade entre backend e frontend.</li><br>
        <li><b>Integração de APIs REST com SpringBoot: </b>Adquiri experiência na integração de sistemas por meio de APIs REST através do SpringBoot, garantindo a comunicação eficiente entre o backend Java e o frontend React, permitindo a manipulação e apresentação de dados de vendas. Um exemplo foi a criação do endpoint clientsGraph, que coleta dados de lucro por cliente. Essas integrações garantiram a comunicação fluída entre os sistemas.</li><br>
        <li><b>Criação de Interfaces de Usuário Interativas com React: </b>Desenvolvi interfaces dinâmicas utilizando React e a biblioteca Recharts. Com ela, transformei dados complexos do backend em gráficos interativos e visualmente atrativos, como gráficos de barras que apresentam lucros por cliente, facilitando o entendimento dos dados por usuários do sistema.</li><br>
      </ul>
    </section>

    <br>
    <section class="section">
      <h3>Soft Skills</h3>
      <ul>
        <li><b>Planejamento Estratégico: </b>Durante o desenvolvimento do projeto, foi essencial definir prioridades e estruturar funcionalidades como os métodos de extração de dados findDataGraphByVenda e findDataGraphByClients. Planejei a implementação para garantir a entrega de uma solução eficiente e alinhada aos objetivos do sistema.</li><br>
        <li><b>Organização: </b>A integração entre backend e frontend, envolvendo a manipulação de dados complexos e a criação de gráficos interativos, demandou uma abordagem estruturada para documentar processos e entregar soluções claras para a equipe.</li><br>
        <li><b>Pensamento Analítico: </b>Identifiquei padrões e requisitos nos dados de vendas e clientes para transformá-los em insights visuais. Essa habilidade foi essencial para entender as necessidades do projeto e traduzi-las em funcionalidades práticas.</li><br>
        <li><b>Atenção: </b>A construção de métodos para análise de dados exigiu um cuidado minucioso com a precisão dos cálculos, garantindo a exatidão das informações apresentadas nos gráficos e a integridade dos dados manipulados.</li><br>
      </ul>
    </section>
    <br><br>
  </div>
</template>