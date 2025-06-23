import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'
import AOS from 'aos'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/main.css' // Your Tailwind CSS

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: 'top-right',
  timeout: 2500,
  closeOnClick: true,
  pauseOnHover: true,
})
app.use(createPinia())
app.mount('#app')

// Initialize AOS AFTER mount
AOS.init({
  once: true, // Animate only once per element
  duration: 1000, // Animation duration
})
