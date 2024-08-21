<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>1º Semestre • 1/2022 - BoardClass</h2>
      <h3>Repositório: <a href="https://github.com/silasprd/BoardClass">GIT</a></h3>
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
        <b>PostgresSQL:</b> Banco de dados
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
        <pre><code>
<span>export const Home = () =&gt; {</span>
<span>
        function onShowAlert(type) {
            setAlert({
            type: type,
            text: "Olá! Sou o assistente BoardClass. Você pode pressionar o botão azul ao lado e me dar um comando por voz! ;)",
            show: true,
            });
        }

        useEffect(() => {
            setTimeout(() => {
            speak({
                text: textSpeek,
            });
            onShowAlert("warning");
            }, 1500);
        }, []);

        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            return (
            <div className={styles.notSupportContainer}>
                Browser is not Support Speech Recognition.
            </div>
            );
        }
        const handleListening = () => {
            setIsListening(true);
            microphoneRef.current.classList.add("listening");
            SpeechRecognition.startListening({
            continuous: true,
            });
        };

        const stopListening = () => {
            setIsListening(false);
            microphoneRef.current.classList.remove("listening");
            SpeechRecognition.stopListening();
        };
</span>
<span>}</span>
        </code></pre>
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
        <pre><code>
<span>export const Home = () =&gt; {</span>
<span>
        useEffect(() => {
            function disciplines() {
            if (text3.includes("criar") || text3.includes("cadastrar")) {
                handleCreateDiscipline();
            }
            }

            disciplines();
        }, [text3]);

        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            return (
            <div className="notSupportContainer">
                Browser is not Support Speech Recognition.
            </div>
            );
        }

        const handleListening = () => {
            setIsListening(true);
            microphoneRef.current.classList.add("listening");
            SpeechRecognition.startListening({
            continuous: true,
            });
        };

        const stopListening = () => {
            if (text1) {
            setText1("");
            setText1(transcript);
            } else {
            setText1(transcript);
            }
            setIsListening(false);
            resetTranscript();
            console.log(text1);
            microphoneRef.current.classList.remove("listening");
            SpeechRecognition.stopListening();
            resetTranscript();
        };

        const handleListening2 = () => {
            setIsListening2(true);
            microphoneRef2.current.classList.add("listening");
            SpeechRecognition.startListening({
            continuous: true,
            });
        };

        const stopListening2 = () => {
            if (text2) {
            setText2("");
            setText2(transcript);
            } else {
            setText2(transcript);
            }
            setIsListening2(false);
            microphoneRef2.current.classList.remove("listening");
            SpeechRecognition.stopListening();
            resetTranscript();
        };

        const handleListening3 = () => {
            setIsListening3(true);
            microphoneRef3.current.classList.add("listening");
            SpeechRecognition.startListening({
            continuous: true,
            });
        };

        const stopListening3 = () => {
            if (text3) {
            setText3("");
            setText3(transcript);
            } else {
            setText3(transcript);
            }
            setIsListening3(false);
            microphoneRef3.current.classList.remove("listening");
            SpeechRecognition.stopListening();
            resetTranscript();
        };

        function onCloseAlert(help) {
            setAlert({
            type: "",
            text: "",
            show: false,
            });
        }

        function onShowAlert(type, index) {
            setAlert({
            type: type,
            text: Globals.messages[index].message,
            show: true,
            });
        }

        const handleCreateDiscipline = async () => {
            if (text1 === "" || text2 === "") {
            onShowAlert("warning", 0);
            } else {
            setLoading(true);

            const name = text1;
            const description = text2;

            try {
                await api.post("subjects", { name, description });

                setTimeout(() => {
                onShowAlert("warning", 2);
                setLoading(false);
                setTimeout(() => {
                    window.location.href = "/Help";
                }, 3000);
                }, 1000);
            } catch (e) {
                onShowAlert("warning", 6);
            }
        }
</span>
<span>}</span>
        </code></pre>
        <p>Inicialmente, são definidos estados para controlar o reconhecimento de voz, o carregamento, as transcrições
          de voz e alertas. O componente também define referências de microfone. A função handleCreateDiscipline é
          acionada quando um comando de voz para criar ou cadastrar uma disciplina é detectado. A função valida se os
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
      <h3><b>Tecnologias desenvolvidas:</b></h3>
      <p>Essas foram as tecnologias que eu desenvolvi e utilizei para realizar minhas tarefas neste projeto.</p>
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
          <summary><b>JavaScript:</b></summary>
          <p>Linguagem de programação fundamental para a interatividade das telas.</p>   
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3>Hard Skills</h3>
      <ul>
        <li><b>ReactJS: </b> Desenvolvimento de habilidades avançadas em ReactJS, sendo capaz de desenvolver interfaces complexas de forma eficiente e escalável. Meu conhecimento inclui o uso de componentes, hooks, roteamento e gerenciamento de estado com Redux ou Context API.</li><br>
        <li><b>HTML e CSS: </b>Domínio de HTML e CSS, utilizando-os para criar layouts responsivos, estilizados com autonomia e o uso eficiente de flexbox e grid.</li><br>
        <li><b>Javascript: </b>Conhecimento solidificado em JavaScript, utilizando-o para implementar interatividade e lógica de negócio nas aplicações web. Estou familiarizado com conceitos como manipulação do DOM, eventos, promessas e assincronicidade.</li><br>
        <li><b>Integração de Reconheimento de Voz: </b> Adquiri habilidades intermediárias na integração de sistemas de reconhecimento de voz em aplicações web. Durante o projeto, aprendi a utilizar APIs e bibliotecas para captura e processamento de comandos de voz.</li><br>
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