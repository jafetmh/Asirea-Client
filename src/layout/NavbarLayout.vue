<template>
  <nav ref="navbar" class="navbar navbar-solid navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" @click="goToPage('/')">
        <img :src="darkTheme?AsireaLogo1:AsireaLogo" alt="logo" class="m-1" width="70" height="60" />
        <p class="asirea">Asociación para el Desarrollo Sostenible de la Región Atlántica.</p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <MenuOpen></MenuOpen>
      </button>
      <div :class="[
        'offcanvas offcanvas-start fs-5',
        { 'text-bg-dark': darkTheme, 'offcanvas-light': !darkTheme },
      ]" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" ref="navbarCollapse">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center mt-xl-4 flex-grow-1 pe-3 gap-2">
            <li :class="[{ active: currentRoute === '/' }, 'nav-item']" aria-current="page" @click="goToPage('/')"
              data-bs-dismiss="offcanvas">
              <label>Inicio</label>
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas" @click="goToPage('/directorsboard')"
              :class="{ active: currentRoute === '/directorsboard' }">
              <label>Junta directiva</label>
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas" @click="goToPage('/services')"
              :class="{ active: currentRoute === '/services' }">
              <label>Servicios</label>
            </li>
            <li class="nav-item" @click="goToPage('/announcements')"
              :class="{ active: currentRoute === '/announcements' }">
              <label>Anuncios</label>
            </li>
          </ul>
          <div class="divider-div"></div>
          <ToggleTheme themeLabel="Modo oscuro" class="bs-padding" @theme-change="handleThemeChange"
            data-bs-dismiss="offcanvas" />
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
import { MenuOpen } from '@/components/icons';
import AsireaLogo from '@/assets/Logosimbolo.webp'
import AsireaLogo1 from '@/assets/logosimboloblanco.webp'


const router = useRouter();
const currentRoute = ref(router.currentRoute.value.path);
const darkTheme = ref(false);

onMounted(() => {
  Array.from(document.querySelectorAll('li'), el => el as HTMLElement).forEach((element: HTMLElement) => {
    element.style.position = 'relative';
    element.style.overflow = 'hidden'
    element.addEventListener('click', rippleEffect)
  })
});

const handleThemeChange = (isDarkTheme: boolean) => {
  darkTheme.value = isDarkTheme
}
function goToPage(url: string) {
  router.push(url);
  currentRoute.value = url;
}
</script>

<style scoped lang="scss">
@include ripple-effect();

.navbar {
  z-index: 1001;
  position: sticky;
  top: 0;
  height: 80px;
  color: var(--text-color);
  background: var(--tertiary-bg);
  transition: 0.8s ease;
  border-bottom: 1px solid var(--border-color);
  padding-right: 0;

  p {
    margin: 0 10px;
    font-size: small;
    text-wrap: wrap;
    width: 160px;
    font-style: normal;
    font-family: inherit;
    font-weight: bold;
    color: var(--text-color-3);
  }
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
  padding: 2px;
  margin-right: 0.5rem;
  border: none;
}

.nav-item {
  position: relative;
  overflow: hidden;
}

li label {
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer !important;
}

.navbar-toggler {
  border: none;
  svg {
    fill: var(--text-color-1);
  }
}

.navbar-toggler:focus {
  box-shadow: none;
}

li.active {
  color: var(--accent-color) !important;
}

@include respond-to(desktop) {
  .menu-icon {
    @include display-control();
  }

  .navbar .nav-item {
    color: var(--text-color);
    position: relative;
    padding: 10px 15px;
    transition: background-color 0.3s ease;
  }

  .navbar .nav-item:hover {
    cursor: pointer;
  }

  .nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 3px;
    width: 0;
    border-radius: 2px;
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
    border-bottom: 1px solid var(--border-color);
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
