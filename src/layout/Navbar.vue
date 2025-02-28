
<template>
  <nav ref="navbar" class="navbar navbar-solid navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" @click="goToPage('/')">
 <!--        <img src="/Apaza/.webp/apaza_logo.webp" alt="APAZA Logo" class="me-2 navbar-logo" />
        <span id="title" class="fs-2 fw-semibold">{{ lang.value?.title || '' }}</span> -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
      <MenuOpen></MenuOpen>
      </button>
      <div
        :class="[
          'offcanvas offcanvas-start fs-5',
          { 'text-bg-dark': darkTheme, 'offcanvas-light': !darkTheme },
        ]"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        ref="navbarCollapse"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li
              :class="[{ active: $route.path === '/' }, 'nav-item']"
              aria-current="page"
              @click="goToPage('/')"
              data-bs-dismiss="offcanvas"
            >
              <label>Inicio</label>
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <label>Junta directiva</label>
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <label>Servicios</label>
            </li>

            <li
              :class="[
                { active: $route.path === '/events' || $route.path === '/event' },
                'nav-item',
              ]"
              @click="goToPage('/events')"
              data-bs-dismiss="offcanvas"
            >
              <label>Proyectos</label>
            </li>
            <li class="nav-item" @click="goToPage('/admin/dashboard')">
              <label>Anuncios</label>
            </li>
          </ul>
          <div class="divider-div"></div>
          <ToggleTheme themeLabel="Modo oscuro"
            class="bs-padding"
            @theme-change="handleThemeChange"
            data-bs-dismiss="offcanvas"
          />
          <!--<div class="divider"></div>
           <div class="dropdown">
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {{ lang.value?.navbar?.languages?.language || '' }}
            </button>
            <ul
              :class="[
                'dropdown-menu',
                { 'dropdown-menu-dark': darkTheme },
                { 'dropdown-bg': !darkTheme },
              ]"
            >
              <li>
                <a id="es" class="dropdown-item" @click="changeLanguage(LANGS.ES)">{{
                  lang.value?.navbar?.languages?.spanish || ''
                }}</a>
              </li>
              <li>
                <a id="en" class="dropdown-item" @click="changeLanguage(LANGS.EN)">{{
                  lang.value?.navbar?.languages?.english || ''
                }}</a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import rippleEffect from '@/composables/ripple-effect';
import ToggleTheme from '@/components/ToggleTheme.vue';
import { MenuOpen } from '@/components/icons/menu';

const router = useRouter();
const darkTheme = ref(false);
onMounted(() => {
  rippleEffect();
});

const handleThemeChange = (isDarkTheme: boolean) => {
    darkTheme.value = isDarkTheme
}
function goToPage(url: string) {
    router.push(url)
}
</script>

<style scoped lang="scss">

@include ripple-effect();

.navbar {
  color: var(--text-color);
  background: rgba(var(--tertiary-bg-rgb), 1);
  transition: 0.8s ease;
  border-bottom: 1px solid var(--border-color);
}

.offcanvas-light {
  color: var(--text-color);
  background: rgba(var(--tertiary-bg-rgb), 1);
}
.offcanvas.offcanvas-start {
  border-radius: 0 5px 5px 0;
  @media (max-width: 768px) {
    width: 280px;
  }
}
.btn-close {
  --bs-btn-close-focus-shadow: none;
}

img {
  height: auto;
  width: 50px;
  padding: 2px;
  background: linear-gradient(to right, var(--white-color), #1b91e0);
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 3px solid var(--white-color);

  &.navbar-logo {
    transition: transform 0.3s ease;
  }

  &.navbar-logo:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.2);
  }
}

.nav-item {
  position: relative;
  overflow: hidden;
}

li label {
  cursor: pointer !important;
}
#title {
  color: var(--text-color-1);
  position: relative;
  width: max-content;
  animation: text-shadow-pop-top 0.8s both;
}

@keyframes text-shadow-pop-top {
  0% {
    text-shadow:
      0 0 #555555,
      0 0 #555555,
      0 0 #555555,
      0 0 #555555,
      0 0 #555555,
      0 0 #555555,
      0 0 #555555,
      0 0 #555555;
    transform: translateY(0);
  }
  100% {
    text-shadow:
      0 -1px #1b91e0,
      0 -2px #1b91e0,
      0 -3px #1b91e0,
      0 -4px #1b91e0;
    transform: translateY(8px);
  }
}

.navbar-toggler:focus {
  box-shadow: none;
}

li.active {
  color: var(--accent-color) !important;
}

@media (min-width: 990px) {
  .menu-icon {
    @include display-control();
  }
  .navbar .nav-item {
    color: var(--text-color);
    position: relative;
    padding: 15px 15px;
    transition: background-color 0.3s ease;
  }

  .navbar .nav-item:hover {
    cursor: pointer;
    background-color: rgba(var(--accent-color-rgb), 0.102);
  }
  .nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 3px;
    width: 0;
    background-color: var(--accent-color);
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }

  .navbar li:hover::after {
    width: 100%;
    left: 0;
  }

  button:not(.btn-close, .btn-close-white) {
    border: none;
    color: #fff;
    background-color: var(--background-color);
  }
  button:not(.btn-close, .btn-close-white):focus {
    border: none;
  }
  button:not(.btn-close, .btn-close-white):active {
    border: none;
  }

  .divider {
    margin: 6px 0;
    margin-left: 2.5rem;
    border-right: 1px solid var(--divider-color);
  }
  .dropdown {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;

    li {
      padding: 3px;
    }
  }
}

@media (max-width: 990px) {
  .navbar .nav-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }
  .menu-icon {
    @include menuIcon();
  }

  .offcanvas-header {
    color: rgba(var(--white-rgb), 1);
    background-color: #000;
  }

  .divider-div {
    border-bottom: 1px solid rgba(105, 95, 95, 0.521);
    margin: 10px;
  }
  button:not(.btn-close, .btn-close-white) {
    color: #fff;
    background-color: var(--background-color);
  }

  .btn:focus {
    border: none;
  }

  .dropdown-menu {
    border: 1px solid var(--background-color);
  }
}

.dropdown-menu {
  padding: 5px;
  box-shadow: 0 2px 4px rgba(180, 171, 177, 0.486);
  .dropdown-item {
    border-radius: 5px;
  }
  .dropdown-item.active {
    background-color: var(--background-color);
  }
  .dropdown-item:active {
    background-color: var(--background-color-4);
  }
  .dropdown-item:not(.active):hover {
    background-color: #4ea4d6;
  }
}
.dropdown-bg {
  background: #2f73b7a1 !important;
}
</style>
