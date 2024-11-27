<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="box">
    <section class="title">
      <h2>2º Semestre • 7/2022 - RH4Vox</h2>
      <h3>Repositório: <a href="https://github.com/equipe-vox/api-2sem" target="_blank">GIT</a></h3>
      <h3>Parceiro Acadêmico: <a href="https://www.pro4tech.com.br/" target="_blank">Pro4Tech</a></h3>
      <img src="/src/assets/semester2/rh4vox.png" alt="boardclass" width="800" height="500">
    </section>


    <section class="section">
      <p>O RH4Vox é um sistema para gerenciamento de vagas de emprego e candidaturas de profissionais interessados. Permite também o controle de RH´s por seus gestores, por meio de relatórios gerados pelo sistema.</p>
      <p>Ele oferece uma plataforma centralizada para empresas controlarem suas oportunidades de emprego e processos de recrutamento, enquanto permite aos candidatos acessarem e se candidatarem a essas vagas de forma eficiente. Além disso, o sistema possibilita que os gestores de Recursos Humanos monitorem e controlem suas atividades por meio de relatórios detalhados gerados automaticamente pelo sistema.</p>
    </section>


    <section class="section">
      <h3><b>Tecnologias utilizadas:</b></h3>
      <br>
      <div>
        <img align="center" alt="Figma-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg">
        <b>Figma:</b> Design
      </div>
      <div>
        <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg">
        <b>Java:</b> Ecossistema
      </div>
      <div>
        <img align="center" alt="JavaFX-icon" height="35" width="50" src="../assets/semester2/JavaFX.png">
        <b>JavaFX:</b> Frontend
      </div>
      <div>
        <img align="center" alt="Postgres-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg">
        <b>PostgresSQL:</b> Banco de dados
      </div>   
    </section>
    <br><br>
    <section class="section">
      <h3>Contribuições pessoais</h3>
      <p>Como Product Owner minhas contribuições foram definir e priorizar os requisitos do produto, alinhando-os com as necessidades dos usuários e os objetivos do negócio. Trabalhei de perto com a equipe de desenvolvimento, fornecendo orientação e feedback contínuo para garantir que o produto atendesse aos padrões de qualidade e usabilidade esperados, e também no desevolvimento de algumas funcionalidades.</p>
      <details>
        <summary><b>Máscaras de entrada para campos de textos</b></summary>
        <p>A classe fornece uma maneira flexível de criar campos de texto com máscaras de entrada personalizadas, permitindo que os desenvolvedores definam regras específicas para o tipo de caracteres que são permitidos em cada posição do campo de texto.</p>
        <img src="/src/assets/semester2/codes/masked-text.png" alt="masked-text" width="800">
        <p>As constantes MASK_ESCAPE, MASK_NUMBER, MASK_CHARACTER, entre outras, são definidas para representar os diferentes tipos de caracteres na máscara de entrada.</p>
        <p>Em seguida, são definidos os atributos da classe, para armazenar o comprimento da máscara de entrada(maskLenght), propriedade de string que armazena a máscara de entrada(mask), string que armazena o texto sem formatação, entre outras. Também é definido o construtor da classe.</p>
        <p>Temos o método buildSemanticMask(), responsável por construir a máscara semântica com base na máscara de entrada. O método updateSemanticMask() atualiza a máscara semântica com base no novo texto sem formatação fornecido. O método resetSemanticMask() define todos os valores na máscara semântica como o marcador de espaço reservado (placeholder).</p>
        <img src="/src/assets/semester2/codes/masked-build.png" alt="masked-build" width="800">
        <p>Esses 3 métodos garantem que o campo de texto seja corretamente formatado de acordo com a máscara de entrada e com o texto inserido pelo usuário.</p>
      </details>
      
      <br>
      <details>
        <summary><b>Validação de CPF</b></summary>
        <p>Também fui responsável por criar a classe de validação de CPF.</p>
        <img src="/src/assets/semester2/codes/cpf-validator.png" alt="masked-build" width="800">
        <p>Este método recebe um CPF como uma string, remove os pontos e o traço do CPF, deixando apenas os números. Após isso criamos uma verificação em que todos os dígitos do CPF são iguais. Se forem, lança uma exceção de validação. Em seguinda calculamos o primeiro dígito verificador do CPF utilizando o algoritmo de validação. Se o primeiro dígito não corresponder, lança uma exceção de validação. Se o segundo dígito calculado corresponde ao segundo dígito real do CPF. Se não corresponder, lança uma exceção de validação.</p>
      </details>
      <br>
      <details>
        <summary><b>Coleta de requisitos</b></summary>
        <p style="font-weight: normal;">Fui responsável por conduzir a comunicação entre a equipe de desenvolvimento e o cliente. Isso envolveu a organização de reuniões, e questionamentos sobre as dúvidas da equipe com o cliente. Mativemos um canal aberto de comunicação com o cliente, garantindo que suas necessidades fossem compreendidas. Após entender profundamente as necessidades do cliente, traduzimos as informações coletadas em requisitos claros e compreensíveis para a equipe de desenvolvimento, como histórias de usuários, especificações de requisitos ou outros artefatos de documentação.</p>
      </details>
      <br>
      <details>
        <summary><b>Backlog priorizado</b></summary>
        <p style="font-weight: normal;">Após a coleta dos requisitos, fui responsável por transformar esses requisitos em itens de backlog priorizado, trabalhando em estreita colaboração com a equipe de desenvolvimento para elaborar os itens de forma clara, detalhada e compreensível. Os itens são priorizados com base no valor para o cliente, riscos, dependências e outras considerações estratégicas. O objetivo é garantir que a equipe esteja sempre trabalhando nas atividades mais importantes e que agreguem valor ao produto.</p>
        <p>Abaixo temos o backlog priorizado desenvolvido para o produto.</p>
        <img align="center" alt="backlog" src="../assets/semester2/backlog.jpeg" width="800">
      </details>
    </section>

    <br><br>

    <section class="section">
      <h3><b>Tecnologias Aplicadas</b></h3>
      <p>Essas foram as tecnologias que eu utilizei para realizar minhas tarefas neste projeto.</p>
      <details>
          <summary><b>Java</b></summary>
          <p>Implementação de funcionalidades avançadas, incluindo a criação de campos de entrada personalizados com máscaras e validação de CPF aplicando algoritmos rigorosos.</p>  
      </details>
      <br>
      <details>
          <summary><b>Git</b></summary>
          <p>Controle de versões e colaboração para garantir rastreabilidade e segurança no desenvolvimento do projeto.</p>   
      </details>
      <br>
      <details>
          <summary><b>Scrum</b></summary>
          <p>Atuação como Product Owner (PO), gerenciando backlog priorizado e transformando requisitos em histórias de usuário claras e compreensíveis.</p>   
      </details>
    </section>

    <br><br>
    <section class="section">
      <h3>Hard Skills</h3>
      <ul style="font-weight: normal;">
        <li><b>Java: </b> Desenvolvi habilidade com a linguagem JAVA, sendo capaz de desenvolver soluções robustas e escaláveis para problemas de negócio. Meu conhecimento inclui o desenvolvimento de componentes reutilizáveis, a implementação de algoritmos eficientes e a utilização de padrões de design como MVC e Factory.</li><br>
        <li><b>Desenvolvimento de Máscaras Customizados: </b>Implementei o MaskedTextField, um componente avançado que permite a aplicação de máscaras customizadas para campos de texto. Este componente possibilita que os desenvolvedores definam regras específicas para entrada de dados, como números, caracteres, valores hexadecimais e mais. Além disso, projetei métodos como buildSemanticMask, resetSemanticMask e updateSemanticMask, que garantem que o campo seja formatado corretamente com base na máscara definida, proporcionando flexibilidade e precisão.</li><br>
        <li><b>Validação de Dados de CPF: </b>Desenvolvi o CpfValidator, uma classe responsável por validar números de CPF com base no algoritmo oficial. A implementação inclui verificações rigorosas, como a identificação de CPFs inválidos (compostos por dígitos iguais) e a validação dos dígitos verificadores. Quando necessário, a classe lança exceções customizadas para garantir a integridade dos dados inseridos, promovendo maior confiabilidade no sistema.</li><br>
        <li><b>Integração de API REST: </b>Adquiri habilidades avançadas na integração de sistemas por meio de APIs RESTful. Durante o projeto, aprendi a consumir e manipular dados de APIs externas de forma eficiente e segura, garantindo a interoperabilidade entre diferentes sistemas.</li><br>
      </ul>
    </section>

    <section class="section">
      <h3>Soft Skills</h3>
      <ul style="font-weight: normal;">
        <li><b>Coleta e Priorização de Requisitos: </b>  Conduzi a comunicação com o cliente, traduzindo suas necessidades em requisitos claros para a equipe de desenvolvimento. Desenvolvi artefatos como histórias de usuários e participei na elaboração de um backlog priorizado, garantindo que as tarefas mais valiosas fossem entregues primeiro, alinhando o planejamento estratégico com os objetivos do cliente.</li><br>
        <li><b>Gestão e Priorização de Backlog: </b> Transformei os requisitos coletados em um backlog organizado e priorizado. Trabalhei em estreita colaboração com a equipe para detalhar as tarefas e identificar prioridades baseadas no valor agregado ao cliente, mitigação de riscos e dependências técnicas, promovendo eficiência no desenvolvimento.</li><br>
        <li><b>Trabalho em Equipe: </b> Colaborei de forma próxima com a equipe de desenvolvimento, trabalhando juntos na elaboração dos itens do backlog, garantindo que cada membro compreendesse sua função. Promovi um ambiente de confiança e troca de ideias, onde todos se sentiam encorajados a propor soluções inovadoras para desafios do projeto.</li><br>
      </ul>
    </section>
    <br><br>
  </div>
</template>