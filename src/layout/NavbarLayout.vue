<template>
  <div class="d-flex flex-column">
    <div class="header d-none d-md-block">
      <div class="container">
        <div class="content d-flex justify-content-between align-items-center">
          <p>Teléfono: {{ ASIREA_PHONE_NUMBER }}</p>
          <p>{{ ASIREA_ADRESS }}</p>
        </div>
      </div>
    </div>
    <div class="w-100">
      <nav ref="navbar" class="navbar navbar-solid navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center" @click="goToPage('/')">
            <img :src="darkTheme ? AsireaLogo1 : AsireaLogo" alt="logo" class="m-1" width="80" height="60" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <MenuOpen></MenuOpen>
          </button>
          <div class="offcanvas offcanvas-start fs-5"
            :class="{ 'text-bg-dark': darkTheme, 'offcanvas-light': !darkTheme }" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel" ref="navbarCollapse">
            <div class="offcanvas-header">
              <img :src="AsireaLogo1" alt="logo" class="m-1" width="60" height="60" />
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2">
                <li :class="[{ active: currentRoute === '/' }, 'nav-item']" aria-current="page" @click="goToPage('/')"
                  data-bs-dismiss="offcanvas">
                  <label>Inicio</label>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas" @click="goToPage('/services')"
                  :class="{ active: currentRoute === '/services' }">
                  <label>Servicios</label>
                </li>
                <li class="nav-item" @click="goToPage('/announcements')"
                  :class="{ active: currentRoute === '/announcements' }">
                  <label>Anuncios</label>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas" @click="goToPage('/contact')"
                  :class="{ active: currentRoute === '/contact' }">
                  <label>Contactar</label>
                </li>
              </ul>
              <div class="divider-div"></div>
              <ToggleTheme themeLabel="Modo oscuro" class="bs-padding" @theme-change="handleThemeChange"
                data-bs-dismiss="offcanvas" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import ToggleTheme from '@/components/ToggleTheme.vue';
import { MenuOpen } from '@/components/icons';
import AsireaLogo from '@/assets/Logosimbolo.webp'
import AsireaLogo1 from '@/assets/logosimboloblanco.webp'
import { ASIREA_PHONE_NUMBER, ASIREA_ADRESS } from '@/const';


const router = useRouter();
const currentRoute = ref(router.currentRoute.value.path);
const darkTheme = ref(false);

const handleThemeChange = (isDarkTheme: boolean) => {
  darkTheme.value = isDarkTheme
}
function goToPage(url: string) {
  router.push(url);
  currentRoute.value = url;
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: var(--accent-color);

  .content {
    height: 30px;

    p {
      color: #fff;
      font-size: .6em;
      margin: 0;
    }
  }
}

.navbar {
  z-index: 10;
  position: sticky;
  top: 0;
  background: url('../assets/navnoise.png'), var(--bg-body);
  transition: 0.8s ease;
  padding: 0;
  width: 100%;

  img {
    padding: 2px;
    margin-right: 0.5rem;
    border: none;
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

  .offcanvas-light {
    color: var(--text-color);
    background: var(--bg-green);
  }

  .offcanvas.offcanvas-start {
    border-radius: 0 5px 5px 0;

    @media (max-width: 768px) {
      width: 280px;
    }
  }

  li.active label {
    color: var(--accent-color) !important;
  }

  li label {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer !important;
    color: var(--text-color-3);
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  .btn-close {
    --bs-btn-close-focus-shadow: none;
  }
}


@include respond-to(desktop) {
  .menu-icon {
    @include display-control();
  }

  @media (min-width: 992px) {
    .navbar .nav-item {
      height: calc(80px - 2px) !important;
    }

    .navbar .nav-item.active {
      border-bottom: 4px solid var(--accent-color);
      background-color: rgba(var(--accent-color-rgb), 0.3);
    }
  }

  .navbar .nav-item {
    display: flex;
    align-items: center;
    height: 2.5em;
    color: var(--text-color-3);
    padding: 10px 15px;
    transition: background-color 0.3s ease;
  }

  .navbar .nav-item:hover {
    cursor: pointer;
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
    background-color: var(--accent-color);
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
