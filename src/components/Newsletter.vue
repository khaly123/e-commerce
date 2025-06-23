<template>
  <section
    class="relative bg-gradient-to-r from-[#780000] to-[#c1121f] text-white py-16 text-center px-6 overflow-hidden"
    data-aos="fade-up"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

    <!-- Header -->
    <div class="relative z-10 max-w-3xl mx-auto mb-8 animate-fade-in">
      <h2 class="text-4xl font-extrabold tracking-tight mb-2">📬 Stay in the Loop</h2>
      <p class="text-lg text-beige-light">Join 5,000+ subscribers for weekly deals, drops & tech tips</p>
    </div>

    <!-- Form -->
    <form
      @submit.prevent="subscribe"
      class="relative z-10 flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto glass p-2 rounded-xl shadow-xl gap-3 animate-fade-in-delayed"
    >
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="w-full sm:flex-1 px-4 py-3 rounded-md text-navy bg-white bg-opacity-90 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige transition"
        required
      />
      <button
        type="submit"
        class="bg-beige text-[#780000] font-semibold px-6 py-3 rounded-md hover:bg-white transition-all duration-300 animate-pulse hover:scale-105"
      >
        Subscribe
      </button>
    </form>

    <!-- Feedback -->
    <p
      v-if="subscribed"
      class="mt-4 text-green-200 font-medium animate-fade-in-up"
    >
      ✅ Thanks for subscribing! Check your inbox for a welcome message.
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

const subscribe = () => {
  if (!email.value) return
  subscribed.value = true
  setTimeout(() => {
    subscribed.value = false
    email.value = ''
  }, 5000)
}
</script>

<style scoped>
/* Tailwind Extensions */
.bg-beige {
  background-color: #fdf0d5;
}
.text-beige-light {
  color: #fdf0d5;
}
.text-navy {
  color: #003049;
}

/* Glass effect */
.glass {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Background pattern */
.bg-pattern {
  background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
.animate-fade-in-delayed {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.5s;
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
