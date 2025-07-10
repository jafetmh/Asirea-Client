<template>
  <div class="d-flex flex-column wrapper">
    <div class="header d-none d-md-flex align-items-center">
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
            <img :src="AsireaLogo1" alt="logo" class="m-1" width="80" height="60" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <MenuOpen></MenuOpen>
          </button>
          <div class="offcanvas offcanvas-start fs-5"
            :class="{ 'text-bg-dark': darkTheme, 'offcanvas-light': !darkTheme }" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel" ref="navbarCollapse">
            <div class="offcanvas-header">
              <img :src="AsireaLogo1" alt="logo" class="m-1" width="80" height="60" />
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2">
                <li :class="[{ active: currentRoute === '/' }, 'nav-item']" aria-current="page" @click="goToPage('/')"
                  data-bs-dismiss="offcanvas">
                  <i class="bi bi-house-fill menu-icon"></i>
                  <label>Inicio</label>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas" @click="goToPage('/services')"
                  :class="{ active: currentRoute === '/services' }">
                  <i class="bi bi-briefcase-fill menu-icon"></i>
                  <label>Servicios</label>
                </li>
                <li class="nav-item" @click="goToPage('/announcements')"
                  :class="{ active: currentRoute === '/announcements' }">
                  <i class="bi bi-megaphone-fill menu-icon"></i>
                  <label>Anuncios</label>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas" @click="goToPage('/contact')"
                  :class="{ active: currentRoute === '/contact' }">
                  <i class="bi bi-envelope-fill menu-icon"></i>

                  <label class="position-relative">Contactar
                    <span
                      class="position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle">
                      <span class="visually-hidden">¡Nuevo!</span>
                    </span>
                  </label>
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
/* import AsireaLogo from '@/assets/Logosimbolo.webp'
 */import AsireaLogo1 from '@/assets/logosimboloblanco.webp'
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
.wrapper {
  max-width: 100%;
}

.navbar, .header {
  background-color: var(--p-emerald-950);
}
.header {
  height: 30px;
  width: 100%;
  .content p {
    color: #fff;
    font-size: .6em;
    margin: 0;
  }
}

.navbar {
  top: 0;
  position: sticky;
  z-index: 10;
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
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .offcanvas-light {
    color: var(--text-color);
    background: var(--p-emerald-700);
  }

  .offcanvas.offcanvas-start {
    border-radius: 0 10px 10px 0;
  }

  .menu-icon {
    @include menuIcon();
  }

  li label {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: .8em;
    font-weight: 400;
    cursor: pointer !important;
    letter-spacing: 0.11em;
    text-transform: capitalize;
  }

  .btn-close {
    --bs-btn-close-focus-shadow: none;
  }
}

@include respond-to(mobile) {
  .offcanvas.offcanvas-start {
    width: 280px;
  }

  .menu-icon {
    @include menuIcon();
  }
}

@media (min-width: 992px) {
  .navbar .nav-item.active {
    border-bottom: 4px solid var(--p-emerald-700);
  }

  .navbar .nav-item .menu-icon {
    display: none;
  }

  .navbar .nav-item {
    display: flex;
    align-items: center;
    height: 2.5em;
    color: rgba(var(--white-rgb), 1);
    padding: 10px 15px;
    transition: background-color 0.3s ease;
    height: calc(80px - 2px) !important;
  }

  .navbar .nav-item label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
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
    border-right: 1px solid var(--border-color);
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

    label {
      color: var(--text-color-3);
    }
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
