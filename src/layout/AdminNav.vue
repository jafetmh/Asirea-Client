<template>
    <nav class="navbar navbar-expand-lg admin-navbar d-flex justify-content-end align-items-center">
        <div class="h-100">
            <a class="nav-link pe-0 py-0 lh-1 h-100 d-flex align-items-center me-3" role="button"
                data-bs-toggle="offcanvas" href="#useroffcanvas" aria-controls="useroffcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                    style="scale: 1.2;" fill="currentColor">
                    <path
                        d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                </svg>
            </a>
        </div>
        <button class="fullscreen-btn" @click="toggleFullscreen">
            <svg v-if="!fullscreen" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px" fill="currentColor">
                <path
                    d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="currentColor">
                <path
                    d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z" />
            </svg>
        </button>
    </nav>
    <!-- Offcanvas -->
    <div>
        <div class="offcanvas offcanvas-end" id="useroffcanvas" tabindex="-1">
            <!-- user profile image -->
            <div class="offcanvas-body position-relative">
                <div class="text-center pt-4 pb-3">
                    <div class="avatar avatar-xl ">
                        <img :src="authStore.user?.picture" class="rounded-circle" width="80px" height="80px">
                    </div>
                    <h6 class="mt-2 text-body-emphasis">{{ authStore.user?.name }}</h6>
                </div>
                <div class="overflow-auto">
                    <ul class="nav d-flex flex-column">
                        <li class="nav-item mx-1">
                            <a class="nav-link" href="/profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="currentColor" class="me-2">
                                    <path
                                        d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z">
                                    </path>
                                </svg>
                                <span>Perfil</span>
                            </a>
                        </li>
                        <li class="nav-item mx-1">
                            <a class="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="currentColor" class="me-2">
                                    <path
                                        d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z">
                                    </path>
                                </svg>
                                <span>Agregar cuenta</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <ButtonComponent label="Cerrar sesion" class="logout-btn" @click="logout"/>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import useAuthStore from '@/store/authStore';

const fullscreen = ref(false);
const authStore = useAuthStore();

const logout = () => {
    authStore.logout();
}

const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => { fullscreen.value = !fullscreen.value })
            .catch(err => {
                console.error("Error al entrar en pantalla completa:", err);
            });
    } else {
        fullscreen.value = !fullscreen.value
        document.exitFullscreen();
    }
};
</script>

<style scoped lang="scss">
* {
    padding: 0%;
    margin: 0%;
}

.admin-navbar {
    position: sticky;
    min-width: 100vw;
    top: 0;
    padding: 1em;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--tertiary-bg);
    z-index: 1000;

    .fullscreen-btn {
        border: none;
        background-color: transparent;

        >svg {
            scale: 1.2;
        }
    }
}

li {
    border-radius: 5px;

    .nav-link:hover {
        cursor: pointer;
        color: var(--accent-color);
    }
}

li:hover {
    background-color: var(--nav-link-active-hover);
}

li.nav-item:active {
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
}

a,
button {
    color: var(--text-secondary-clr);

    svg {
        transform: scale(0.800);
        opacity: 0.7;
    }
}
.logout-btn {
    width: calc(100% - 32px);
    position: absolute;
    bottom: 20px;
}
</style>