<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>1º Semestre • 1/2022 - BoardClass</h2>
      <h3>Repositório: <a href="https://github.com/silasprd/BoardClass" target="_blank">GIT</a></h3>
      <h3>Parceiro Acadêmico: <a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank">Faculdade de Tecnologia
          de São José dos Campos - FATEC</a></h3>
      <img src="/src/assets/semester1/boardclass.jpeg" alt="boardclass" width="800">
    </section>


    <section class="section">
      <p>A assistente BoardClass é uma assistente virtual web. Seu objetivo é auxiliar professores com o gerenciamento
        de turmas, alunos e disciplinas: permitindo a criação de novas turmas/disciplinas, agendamento de provas, adição
        de novos alunos, entre outras funcionalidades.</p>
      <p>Ela funciona recebendo o comando por voz (por meio do professor) e realizando em seguida o que foi pedido. Em
        alguns casos, é necessário que o professor dê o comando por voz e então tenha que inserir manualmente os dados
        para que a ação seja concluída. Por exemplo na criação de um aluno, ele deve inserir as informações do aluno por
        meio do teclado do próprio computador.</p>
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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg">
        <b>NodeJS:</b> Ecossistema
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg">
        <b>React:</b> Frontend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg">
        <b>AdonisJS:</b> Backend
      </div>
      <div>
        <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg">
        <b>PostgreSQL:</b> Banco de dados
      </div>
    </section>
    <br><br>
    <section class="section">
      <h3>Contribuições pessoais</h3>
      <p>Como parte da equipe de desenvolvimento do projeto da assistente virtual web, concentrei minha atuação na
        criação e implementação das telas que compõem a interface do usuário. Minha contribuição foi crucial para
        garantir uma experiência intuitiva e eficiente para os professores que utilizam a plataforma, permitindo-lhes
        gerenciar turmas, alunos e disciplinas de forma simples e organizada.</p>
      <details>
        <summary><b>Ativação por Voz</b></summary>
        <p>Colaborei com a equipe de backend para integrar a funcionalidade de ativação por voz, permitindo que os
          professores acionem a assistente virtual simplesmente usando comandos de voz. Desenvolvi a interface de
          usuário para exibir feedback visual quando a assistente está ouvindo ativamente os comandos do usuário.</p>
        <p>O código abaixo permite aos usuários interagirem com o aplicativo por meio de comandos de voz. Para tal,
          utilizamos a bilbioteca SpeechRecognition do React. </p>
        <img src="/src/assets/semester1/codes/on-show.png" width="800"/>
        <p>O componente inicializa os estados das variáveis para controlar se o aplicativo está ouvindo, mensagens a
          serem exibidas, e um alerta. Além disso, define funções para manipular o estado do alerta e exibir mensagens
          de boas-vindas. Se o navegador não suportar o reconhecimento de voz, uma mensagem de erro é renderizada. O
          componente também inclui lógica para redirecionar o usuário com base nos comandos de voz reconhecidos.</p>
      </details>
      <br>
      <details>
        <summary><b>Comandos de adição por Voz</b></summary>
        <p>Implementei a integração dos comandos de voz para adição de novos alunos e criação de turmas. Trabalhei na
          definição e reconhecimento dos padrões de voz para cada comando, garantindo que a assistente entendesse
          corretamente as solicitações dos professores e executasse as ações correspondentes de forma precisa e
          eficiente.</p>
        <p> Este trecho de código habilita a criação de uma nova disciplina por meio de comandos de voz em um aplicativo
          React.</p>
        <img src="/src/assets/semester1/codes/create-discipline.png" alt="discipline-register-screen" width="800">
        <p>Inicialmente, são definidos estados para controlar o reconhecimento de voz, o carregamento, as transcrições
          de voz e alertas. O componente também define referências de microfone. A função handleCreateDiscipline é
          acionada quando um comando de voz para criar ou cadastrar uma disciplina é detectado. As funções handleListening e stopListening são acionadas com ações nos botões dentro dos inputs. A função valida se os
          campos de nome e descrição da disciplina estão preenchidos. Em caso positivo, os dados são coletados e uma
          solicitação POST é enviada ao servidor para criar a disciplina.</p>
      </details>
      <br>
      <details>
        <summary><b>Implementação das telas de cadastro</b></summary>
        <p>Implementei as telas de cadastro de alunos, turmas e disciplinas, permitindo que os professores adicionem
          novos alunos, criem novas turmas e criem novas disciplinas. Utilizei formulários interativos e validações em
          tempo real para garantir a precisão e integridade dos dados inseridos.</p>
        <p>Abaixo está uma das telas desenvolvidas, neste caso, para o cadastro de disciplinas.</p>
        <img src="/src/assets/semester1/discipline-register.png" alt="discipline-register-screen" width="800">
      </details>
      <br>
      <details>
        <summary><b>Implementação Responsiva</b></summary>
        <p>Consciente da importância da acessibilidade em diferentes dispositivos, implementei um design responsivo em
        todas as telas desenvolvidas.</p>
      </details>
      <br>
      <details>
        <summary><b>Feedback Visual</b></summary>
        <p>Integrei elementos visuais de feedback para fornecer aos usuários retorno imediato sobre suas ações.</p>
      </details>
      <br>
      <details>
        <summary><b>Análise de requisitos</b></summary>
        <p>Participei da análise detalhada dos requisitos funcionais e não funcionais fornecidos.</p>
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3><b>Tecnologias Aplicadas</b></h3>
      <p>Essas foram as tecnologias que eu utilizei para realizar minhas tarefas neste projeto.</p>
      <details>
          <summary><b>ReactJS</b></summary>
          <p>Como principal framework para o desenvolvimento das telas da interface.</p>  
      </details>
      <br>
      <details>
          <summary><b>HTML e CSS</b></summary>
          <p>Utilizados para a estruturação e estilização das páginas.</p>
      </details>
      <br>
      <details>
          <summary><b>JavaScript</b></summary>
          <p>Linguagem de programação fundamental para a interatividade das telas.</p>   
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3>Hard Skills</h3>
      <ul>
        <li><b>Integração de Reconheimento de Voz: </b> Habilidade em integrar sistemas de reconhecimento de voz em aplicações ReactJS, utilizando a biblioteca SpeechRecognition para capturar e processar comandos. Atuei na definição de padrões de voz e no desenvolvimento de uma interface para feedback visual em tempo real, aprimorando a interação usuário-aplicativo.</li><br>
        <li><b>Validação e Cadastro de Dados: </b> Desenvolvimento de telas e formulários com validação em tempo real para cadastro de alunos, turmas e disciplinas. Meu trabalho garantiu a integridade dos dados e a usabilidade por meio de feedback visual e mensagens de erro claras.</li><br>
        <li><b>Desenvolvimento de Interfaces de Usuario com ReactJS: </b> Desenvolvimento de interfaces escaláveis e complexas com ReactJS, utilizando componentes reutilizáveis, hooks, roteamento e gerenciamento de estado com Redux ou Context API. Contribuí significativamente para a criação de uma interface com reconhecimento de voz, integrando funcionalidades avançadas para melhorar a acessibilidade e a experiência do usuário.</li><br>
        <li><b>Desenvolvimento Javascript: </b>Sólido conhecimento em JavaScript, aplicado à lógica de negócios e interatividade em aplicações web. Durante o projeto, implementei funcionalidades como manipulação do DOM, gerenciamento de eventos e integração de APIs. Um dos destaques foi a implementação de comandos por voz para adicionar alunos e criar disciplinas, utilizando promessas e assincronicidade.</li><br>
      </ul>
    </section>

    <br>
    <section class="section">
      <h3>Soft Skills</h3>
      <ul>
        <li><b>Comunicação Efetiva: </b>A comunicação clara e objetiva foi essencial em todas as etapas do projeto. Participei ativamente de reuniões para levantamento e análise de requisitos, além de fornecer feedbacks construtivos e colaborar na resolução de problemas. Essa habilidade foi crucial para alinhar as expectativas dos usuários finais e garantir uma entrega satisfatória.</li><br>
        <li><b>Trabalho em Equipe: </b>Colaborei de forma eficaz com outros membros da equipe de desenvolvimento, compartilhando conhecimento, dividindo as tarefas e apoiando os colegas conforme necessário. Estabeleci um ambiente de trabalho colaborativo, onde ideias e soluções foram discutidas e implementadas em conjunto para alcançar os objetivos do projeto.</li><br>
        <li><b>Adaptabilidade: </b>Demonstrei flexibilidade ao lidar com mudanças nos requisitos do projeto e nos prazos de entrega. A capacidade de me ajustar rapidamente a novas circunstâncias e prioridades foi crucial para manter o progresso do desenvolvimento e garantir a entrega.</li><br>
        <li><b>Criatividade e Inovação: </b>Propostas inovadoras foram parte do meu trabalho, especialmente na integração de reconhecimento de voz ao sistema e na criação de soluções para acessibilidade. Minha abordagem criativa permitiu enfrentar problemas de design e desenvolvimento de forma eficiente, sempre buscando atender as expectativas do usuário com soluções práticas e intuitivas.</li>
      </ul>
    </section>
    <br><br>
  </div>
</template>