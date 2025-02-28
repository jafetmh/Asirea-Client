<script setup>
import { RouterView } from 'vue-router'
import Aside from './Aside.vue';
</script>

<template>
  <div class="admin-layout">
    <Aside class="aside"></Aside>
    <main class="main">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar main';
}

.main {
  overflow-y: scroll;
}

.aside {
  grid-area: sidebar;
}
</style>
