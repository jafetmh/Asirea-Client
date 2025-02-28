<template>
  <div class="d-flex justify-content-between align-items-center mg-left">
    <div class="theme-label">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
        class="menu-icon"
      >
        <path
          d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Z"
        />
      </svg>
      <label for="bs-switch">Modo oscuro</label>
    </div>
    <div class="form-check form-switch">
      <input
        id="bs-switch"
        class="form-check-input"
        type="checkbox"
        role="switch"
        v-model="isDarkMode"
        @change="toggleTheme"
      />
    </div>
    <label class="toggle" :class="{ 'theme-icon-effect': isDarkMode }">
      <div class="icon icon--moon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path
            d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Z"
          />
        </svg>
      </div>
      <div class="icon icon--sun">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path
            d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"
          />
        </svg>
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'

const isDarkMode = ref(false)
const emit = defineEmits(['theme-change'])

onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme === 'enabled') {
    isDarkMode.value = true
    document.body.classList.add('dark-mode')
  }
  emit('theme-change', isDarkMode.value)
})

function toggleTheme() {
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkMode', 'enabled')
  } else {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('darkMode', 'disabled')
  }
  emit('theme-change', isDarkMode.value)
}
</script>

<style scoped>
.form-check-input:checked {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
}
.form-check-input:focus {
  box-shadow: none;
}
.theme-label {
  display: none;
}

@media (max-width: 990px) {
  .theme-label {
    display: block;
    color: var(--text-color-1);
    padding: 10px 0;
  }
  .menu-icon {
    margin-right: 10px;
  }

  .toggle {
    display: none;
  }
}
/* bs switch */
input {
  cursor: pointer;
}

@media (min-width: 990px) {

  /* estilo de iconos de tema */
  .toggle {
    background-color: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    line-height: 1;
  }

  .icon {
    grid-area: 1 / 1;
    transition: transform 500ms ease-in-out;
  }

  .icon--moon {
    transition-delay: 200ms;
  }

  .icon--sun {
    transform: scale(0);
  }

  .toggle.theme-icon-effect .icon--moon {
    transform: rotate(360deg) scale(0);
    transition-delay: 0ms;
  }

  .toggle.theme-icon-effect .icon--sun {
    transition-delay: 200ms;
    transform: scale(1) rotate(360deg);
  }
}
</style>
