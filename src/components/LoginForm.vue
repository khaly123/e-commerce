<template>
  <div class="min-h-screen flex items-center justify-center bg-beige px-4">
    <form
      class="max-w-sm w-full bg-white rounded-lg shadow-lg p-8"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-2xl font-bold text-center mb-6 text-navy">Sign in</h2>

      <!-- Email -->
      <div class="mb-4">
        <label class="block text-gray-700 mb-1" for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="email"
          required
          class="w-full px-5 py-3 border border-gray-200 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <!-- Password -->
      <div class="mb-6">
        <label class="block text-gray-700 mb-1" for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          required
          class="w-full px-5 py-3 border border-gray-200 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <!-- Sign in button -->
      <button
        type="submit"
        class="w-full bg-primary text-white py-3 rounded-full hover:bg-red-dark transition font-semibold"
      >
        Sign in
      </button>

      <!-- Links -->
      <div class="mt-4 flex justify-between text-sm text-gray-500">
        <a href="#" class="hover:underline">Forgot password?</a>
        <button type="button" class="hover:underline" @click="goToSignup">
          Create account
        </button>
      </div>

      <!-- Divider -->
      <div class="flex items-center my-6">
        <div class="flex-grow h-px bg-gray-300"></div>
        <span class="mx-4 text-gray-400 text-sm">or sign in with</span>
        <div class="flex-grow h-px bg-gray-300"></div>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center gap-4">
        <a href="#" class="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <i class="fab fa-google text-red-500 text-xl"></i>
        </a>
        <a href="#" class="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <i class="fab fa-facebook text-blue-600 text-xl"></i>
        </a>
        <a href="#" class="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <i class="fab fa-apple text-black text-xl"></i>
        </a>
        <a href="#" class="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <i class="fab fa-x-twitter text-gray-800 text-xl"></i>
        </a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const email = ref('')
const password = ref('')
const router = useRouter()
const toast = useToast()

function handleSubmit() {
  if (email.value && password.value) {
    toast.success('Login successful 🎉')
    router.push('/home')
  } else {
    toast.error('Please fill in both fields')
  }
}

function goToSignup() {
  router.push('/signup')
}
</script>

<style scoped>
.bg-beige {
  background-color: #fdf0d5;
}
.text-navy {
  color: #003049;
}
.bg-primary {
  background-color: #780000;
}
.hover\:bg-red-dark:hover {
  background-color: #c1121f;
}
.focus\:ring-primary:focus {
  --tw-ring-color: #780000;
}
</style>
