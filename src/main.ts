
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'
import { definePreset } from '@primeuix/themes'

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{green.50}',
            100: '{green.100}',
            200: '{green.200}',
            300: '{green.300}',
            400: '{green.400}',
            500: '{green.500}',
            600: '{green.600}',
            700: '{green.700}',
            800: '{green.800}',
            900: '{green.900}',
            950: '{green.950}'
        }
    },
    components: {
        card: {
            root: {
                borderRadius: '2px',
                shadow: 'none'
            }
        },
        timeline: {
            eventMarker: {
                borderRadius: '5px'
            }
        }
    }
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.dark-mode',
        }
    }
})
app.use(router)

app.mount('#app');

