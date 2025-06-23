<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
    <!-- Conditionally show Navbar -->
    <Navbar v-if="!hideLayout" />

    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Conditionally show Footer -->
    <Footer v-if="!hideLayout" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const route = useRoute()

// Set of route names where layout (Navbar & Footer) should be hidden
const hiddenRoutes = new Set(['login', 'signup', 'forgotpassword'])

const hideLayout = computed(() =>
  hiddenRoutes.has(route.name?.toLowerCase())
)

onMounted(() => {
  AOS.init({ duration: 1000, once: true })
})

watch(route, () => {
  setTimeout(() => {
    AOS.refreshHard()
  }, 100)
})
</script>
