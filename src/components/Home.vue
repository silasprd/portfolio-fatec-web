<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="container">
    
    <div class="intro">
      
      <h1>Sobre Mim</h1>
      
      <p>Sou aluno de Banco de Dados na Fatec São José dos Campos e atuo como Analista de Desenvolvimento de Sistemas, trabalhando com as tecnologias NodeJS e Angular. Tenho experiência com linguagens como Java, JavaScript, PHP, HTML, CSS e frameworks como Angular, React, Vue, além de Node.js e bancos de dados como MySQL e MongoDB.

      Estou sempre aprimorando meus conhecimentos em desenvolvimento web e novas tecnologias, com foco em oferecer soluções criativas e eficientes.</p>
      <div class="contact">
        <router-link to="https://github.com/silasprd">Github</router-link>
        <router-link to="https://github.com/silasprd">Linkedin</router-link>
      </div>
      <br>
    </div>
    <div class="person">
      <figure>
        <img src="/src/assets/person-icon.png" alt="person-icon">
      </figure>
      <h2>Silas Rafael Barreto Prado</h2>
    </div>
    <div class="knowledges">
      <h1>Meus conhecimentos</h1>
      <ul>
        <li>
          <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg">
          <b>Typescript</b>
        </li>
        <li>
          <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg">
          <b>Java</b>
        </li>
        <li>
          <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg">
          <b>Go</b>
        </li>
        <li>       
          <img align="center" alt="Python-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />        
          <b>Python</b>
        </li>
        <li>
          <img align="center" alt="JS-icon" height="35" width="50"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg">
          <b>MySQL</b>
        </li>
        <li>
          <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg">
          <b>MongoDB</b>
        </li>
        <li>
          <img align="center" alt="Java-icon" height="35" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg">
          <b>Git</b>
        </li>
      </ul>
    </div>
  </div>
  <hr style="width: 90%;">
  <br><br>
  <div class="portfolios">
    <div>
      <router-link to="/portfolio-fatec-web/semestre-1">
        <img src="/src/assets/semester1/boardclass.jpeg" alt="boardclass" width="800">
      </router-link>
      <h4>Semestre 1</h4>
    </div>
    <div>
      <router-link to="/portfolio-fatec-web/semestre-2">
        <img src="/src/assets/semester2/image.png" alt="boardclass" width="800">
      </router-link>
      <h4>Semestre 2</h4>
    </div>
    <div>
      <router-link to="/portfolio-fatec-web/semestre-3">
        <img src="/src/assets/semester3/domrock.png" alt="boardclass" width="800">
      </router-link>
      <h4>Semestre 3</h4>
    </div>
    <div>
      <router-link to="/portfolio-fatec-web/semestre-4">
        <img src="/src/assets/semester4/jaia_logo.png" alt="boardclass" width="800">
      </router-link>
      <h4>Semestre 4</h4>
    </div>
    <div>
      <router-link to="/portfolio-fatec-web/semestre-5">
        <img src="/src/assets/semester1/boardclass.jpeg" alt="boardclass" width="800">
      </router-link>
      <h4>Semestre 5</h4>
    </div>
    <div>
      <router-link to="/portfolio-fatec-web/semestre-6">
        <img src="/src/assets/semester1/boardclass.jpeg" alt="boardclass" width="800">
      </router-link>
      <h4>Semestre 6</h4>
    </div>
  </div>
</template>