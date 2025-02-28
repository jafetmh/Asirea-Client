<script setup>
import { RouterView } from 'vue-router';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<template>
    <div class="user-layout">
        <Navbar class="navbar"></Navbar>
        <main>
            <RouterView></RouterView>
        </main>
        <Footer class="footer"></Footer>
    </div>
</template>
<style scoped>

.user-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
    "navbar"
    "main"
    "footer";
}
.navbar{
 grid-area: navbar;
}
main{
    grid-area: main;
}
.footer {
    grid-area: footer;
}
</style>