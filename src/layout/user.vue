<script setup>
import { RouterView } from 'vue-router';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<template>
    <div class="user-layout">
        <Navbar class="navbar"></Navbar>
        <main>
            <div class="container">
                <RouterView></RouterView>
            </div>
        </main>
        <Footer class="footer"></Footer>
    </div>
</template>

<style scoped lang="scss">

.user-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    grid-template-areas: 
    "navbar"
    "main"
    "footer";
}
.navbar {
    grid-area: navbar;
}
main{
    grid-area: main;
}
.footer {
    grid-area: footer;
}
</style>