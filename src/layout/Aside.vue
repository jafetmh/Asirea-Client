<template>
  <aside ref="aside" id="sidebar">
    <ul>
      <li>
        <span class="logo">ASIREA</span>
        <button id="toggle-btn" ref="toggleButton" @click="toggleSidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"
            />
          </svg>
        </button>
      </li>
      <li class="active">
        <a href="index.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-home-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M10 12h4v4h-4z" />
          </svg>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="dashboard.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
            <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
            <path
              d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"
            />
            <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
          </svg>
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <button @click="toggleSubMenu($event)" class="dropdown-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-square-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
            <path
              d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"
            />
          </svg>
          <span>Create</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"
            />
          </svg>
        </button>
        <ul class="sub-menu">
          <div>
            <li><a href="#">Folder</a></li>
            <li><a href="#">Document</a></li>
            <li><a href="#">Project</a></li>
          </div>
        </ul>
      </li>
      <li>
        <button @click="toggleSubMenu($event)" class="dropdown-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="m221-313 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-228q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm0-320 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-548q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm339 353q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h280q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H560Zm0-320q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h280q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H560Z"
            />
          </svg>
          <span>Todo-Lists</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"
            />
          </svg>
        </button>
        <ul class="sub-menu">
          <div>
            <li><a href="#">Work</a></li>
            <li><a href="#">Private</a></li>
            <li><a href="#">Coding</a></li>
            <li><a href="#">Gardening</a></li>
            <li><a href="#">School</a></li>
          </div>
        </ul>
      </li>
      <li>
        <a href="calendar.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
            />
          </svg>
          <span>Calendar</span>
        </a>
      </li>
      <li>
        <a href="profile.html">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
            />
          </svg>
          <span>Profile</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const aside = ref<HTMLElement | null>(null)
const toggleButton = ref<HTMLElement | null>(null)
const subMenus = ref<HTMLElement[]>([])

onMounted(() => {
  if (aside.value) {
    subMenus.value = Array.from(aside.value.getElementsByClassName('sub-menu')) as HTMLElement[]
  }
})

function toggleSidebar() {
  aside.value?.classList.toggle('close')
  toggleButton.value?.classList.toggle('rotate')
  closeAllSubMenus()
}

function toggleSubMenu(e: Event) {
  const button = e.currentTarget as HTMLElement
  const subMenu = button.nextElementSibling as HTMLElement | null
  if (subMenu) {
    if (!subMenu.classList.contains('show')) {
      closeAllSubMenus()
    }
    subMenu.classList.toggle('show')
    button.classList.toggle('rotate')
  }

  if (aside.value?.classList.contains('close')) {
    aside.value.classList.toggle('close')
    toggleButton.value?.classList.toggle('rotate')
  }
}

function closeAllSubMenus() {
  if (aside.value) {
    subMenus.value.forEach((ul) => {
      ul.classList.remove('show')
      ul.previousElementSibling?.classList.remove('rotate')
    })
  }
}
</script>
<style scoped>
#sidebar {
  box-sizing: border-box;
  height: 100vh;
  width: 250px;
  padding: 5px 1em;
  background-color: rgba(var(--tertiary-bg-rgb), 1);
  border-right: 1px solid var(--border-color);

  position: sticky;
  top: 0;
  align-self: start;
  transition: 300ms ease-in-out;
  overflow: hidden;
  text-wrap: nowrap;
}
#sidebar.close {
  padding: 5px;
  width: 60px;
}
#sidebar ul {
  list-style: none;
}
#sidebar > ul > li:first-child {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
  .logo {
    font-weight: 600;
  }
}
#sidebar ul li.active a {
  color: var(--accent-clr);

  /*   svg {
    fill: var(--accent-clr);
  } */
}

#sidebar a,
#sidebar .dropdown-btn,
#sidebar .logo {
  border-radius: 0.5em;
  padding: 0.85em;
  text-decoration: none;
  color: var(--text-clr);
  display: flex;
  align-items: center;
  gap: 1em;
}
.dropdown-btn {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}
#sidebar svg {
  flex-shrink: 0;
}
#sidebar a span,
#sidebar .dropdown-btn span {
  flex-grow: 1;
}
#sidebar a:hover,
#sidebar .dropdown-btn:hover {
  background-color: var(--hover-clr);
}
#sidebar .sub-menu {
  display: grid;
  grid-template-rows: 0fr;
  transition: 300ms ease-in-out;

  > div {
    overflow: hidden;
  }
}
#sidebar .sub-menu.show {
  grid-template-rows: 1fr;
}
.dropdown-btn svg {
  transition: 200ms ease;
}
.rotate svg:last-child {
  rotate: 180deg;
}
#sidebar .sub-menu a {
  padding-left: 2em;
}
#toggle-btn {
  margin-left: auto;
  padding: 1em;
  border: none;
  border-radius: 0.5em;
  background: none;
  cursor: pointer;

  svg {
    transition: rotate 150ms ease;
  }
}
#toggle-btn:hover {
  background-color: var(--hover-clr);
}

.container {
  border: 1px solid var(--line-clr);
  border-radius: 1em;
  margin-bottom: 20px;
  padding: min(3em, 15%);

  h2,
  p {
    margin-top: 1em;
  }
}

@media (max-width: 800px) {
  body {
    grid-template-columns: 1fr;
  }
  main {
    padding: 2em 1em 60px 1em;
  }
  .container {
    border: none;
    padding: 0;
  }
  #sidebar {
    height: 60px;
    width: 100%;
    border-right: none;
    border-top: 1px solid var(--line-clr);
    padding: 0;
    position: fixed;
    top: unset;
    bottom: 0;

    > ul {
      padding: 0;
      display: grid;
      grid-auto-columns: 60px;
      grid-auto-flow: column;
      align-items: center;
      overflow-x: scroll;
    }
    ul li {
      height: 100%;
    }
    ul a,
    ul .dropdown-btn {
      width: 60px;
      height: 60px;
      padding: 0;
      border-radius: 0;
      justify-content: center;
    }

    ul li span,
    ul li:first-child,
    .dropdown-btn svg:last-child {
      display: none;
    }

    ul li .sub-menu.show {
      position: fixed;
      bottom: 60px;
      left: 0;
      box-sizing: border-box;
      height: 60px;
      width: 100%;
      background-color: var(--hover-clr);
      border-top: 1px solid var(--line-clr);
      display: flex;
      justify-content: center;

      > div {
        overflow-x: auto;
      }
      li {
        display: inline-flex;
      }
      a {
        box-sizing: border-box;
        padding: 1em;
        width: auto;
        justify-content: center;
      }
    }
  }
}
</style>
