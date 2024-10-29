<template>
    <div class="navbar-container">
        <router-link to="/portfolio-fatec-web/" :class="getPath('/portfolio-fatec-web/')">SOBRE</router-link>
        <router-link to="/portfolio-fatec-web/apis" :class="getPath('/portfolio-fatec-web/apis')">API's</router-link>
        <router-link to="/portfolio-fatec-web/contato" :class="getPath('/portfolio-fatec-web/contato')">CONTATO</router-link>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute()

    console.log(route.path)

    const getPath = (path: string) => {
        return route.path === path ? 'active' : '';
    };
</script>

<style scoped>
.navbar-container{
    display: flex;
    justify-content: space-around;
    background-color: #47c7c760;
    margin-top: 30px;
    width: 40%;
    padding: 15px 30px 15px 40px;
    border-radius: 0 30px 30px 0;
}

a{
    font-weight: bold;
    color: white;
}

a.active, a:hover{
    color: #47c7c7;
}

@media screen and (max-width: 768px) {
    .navbar-container{
        width: 80%;
    }
}
</style>