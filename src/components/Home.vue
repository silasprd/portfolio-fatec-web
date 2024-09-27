<script setup lang="ts">
import "../style.css"
</script>

<template>
  <div class="container">
    <div class="person">
      <figure>
        <img src="/src/assets/person-icon.png" alt="person-icon">
      </figure>
    </div>
    <div class="intro">
      <h1>Silas Rafael Barreto Prado</h1>
      <h3>Portfólio de Aprendizagem por Projetos Integrados (API)</h3>
      <h3>FATEC - Banco de Dados</h3>
      <p>Este portfólio foi criado para apresentar os projetos desenvolvidos ao longo da minha trajetória acadêmica na FATEC, com ênfase na Aprendizagem por Projetos Integrados (API). O objetivo é destacar a aplicação prática dos conhecimentos adquiridos durante os semestres, demonstrando a capacidade de resolver problemas reais e complexos através de abordagens multidisciplinares. Cada projeto reflete o aprendizado e as habilidades adquiridas em diferentes áreas do conhecimento, evidenciando a integração entre teoria e prática.</p>
      <br>
      <div class="semesters">
        <router-link class="semesters-box" to="/portfolio-fatec-web/semestre-1">1°<br> SEMESTRE</router-link>
        <router-link class="semesters-box" to="/portfolio-fatec-web/semestre-2">2°<br> SEMESTRE</router-link>
        <router-link class="semesters-box" to="/portfolio-fatec-web/semestre-3">3°<br> SEMESTRE</router-link>
        <router-link class="semesters-box" to="/portfolio-fatec-web/semestre-4">4°<br> SEMESTRE</router-link>
        <router-link class="semesters-box" to="/portfolio-fatec-web/semestre-5">5°<br> SEMESTRE</router-link>
        <router-link class="semesters-box" to="/portfolio-fatec-web/semestre-6">6°<br> SEMESTRE</router-link>
      </div>
    </div>
  </div>
</template>