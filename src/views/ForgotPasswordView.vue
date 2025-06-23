<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#780000] to-[#c1121f] text-white px-4">
    <div class="bg-white text-[#780000] p-8 rounded-lg shadow-xl max-w-md w-full animate-fade-in">
      <h2 class="text-2xl font-bold mb-2 text-center">Forgot Your Password?</h2>
      <p class="mb-6 text-sm text-center">Enter your email and we'll send you a reset link.</p>

      <form @submit.prevent="submitEmail">
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          required
          class="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c1121f] text-black mb-4"
        />

        <button
          type="submit"
          class="w-full bg-[#c1121f] hover:bg-[#a10e1a] text-white py-2 rounded transition duration-300"
        >
          Send Reset Link
        </button>
      </form>

      <router-link
        to="/"
        class="block mt-6 text-center text-sm text-[#780000] hover:underline"
      >
        Back to Login
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const email = ref('')
const toast = useToast()

const submitEmail = () => {
  if (!email.value) return
  toast.success('Reset link sent to your email!', {
    timeout: 3000,
    position: 'top-right',
    icon: '📩',
  })
  email.value = ''
}
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>
