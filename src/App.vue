<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
    <!-- Show Navbar only if not on login or signup pages -->
    <Navbar v-if="!hideLayout" />

    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Show Footer only if not on login or signup pages -->
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

// List of routes where Navbar and Footer should be hidden
const hideLayout = computed(() =>
  ['login', 'signup'].includes(route.name?.toLowerCase())
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
