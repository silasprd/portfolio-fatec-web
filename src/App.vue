<script setup lang="ts">
import Navbar from "./components/shared/Navbar.vue";
import "./style.css"
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
