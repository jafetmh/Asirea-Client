<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './NavbarLayout.vue';
import Footer from './FooterLayout.vue';
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
    box-shadow: 0 10px 30px rgba(0, 0, 0, .05);
}

main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}
</style>