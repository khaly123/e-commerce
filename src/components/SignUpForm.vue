<template>
  <form
    class="max-w-md w-full bg-white rounded-lg shadow-lg p-10"
    @submit.prevent="handleSignUp"
  >
    <h2 class="text-2xl font-bold text-center mb-6 text-navy">Create Account</h2>

    <!-- Name -->
    <div class="mb-4">
      <label class="block text-gray-700 mb-1" for="name">Full Name</label>
      <input
        id="name"
        type="text"
        v-model="name"
        required
        class="w-full px-5 py-3 border border-gray-200 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

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
    <div class="mb-4">
      <label class="block text-gray-700 mb-1" for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="password"
        required
        class="w-full px-5 py-3 border border-gray-200 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <!-- Gender -->
    <div class="mb-6">
      <label class="block text-gray-700 mb-2">Gender</label>
      <div class="flex gap-4">
        <label class="flex items-center gap-2">
          <input
            type="radio"
            value="Male"
            v-model="gender"
            class="form-radio text-primary"
          />
          <span>Male</span>
        </label>
        <label class="flex items-center gap-2">
          <input
            type="radio"
            value="Female"
            v-model="gender"
            class="form-radio text-primary"
          />
          <span>Female</span>
        </label>
        <label class="flex items-center gap-2">
          <input
            type="radio"
            value="Other"
            v-model="gender"
            class="form-radio text-primary"
          />
          <span>Other</span>
        </label>
      </div>
    </div>

    <!-- Slide to Verify -->
    <div class="mb-6">
      <label class="block text-gray-700 mb-2">Slide to Verify</label>
      <input
        type="range"
        min="0"
        max="100"
        v-model="slider"
        class="w-full"
      />
    </div>

    <!-- Submit -->
    <button
      type="submit"
      class="w-full bg-primary text-white py-3 rounded-full hover:bg-red-dark transition font-semibold"
    >
      Sign Up
    </button>

    <!-- Already have an account -->
    <div class="mt-6 text-center text-sm text-gray-500">
      Already have an account?
      <button @click="goToLogin" class="text-primary hover:underline font-semibold">
        Login
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()

const name = ref('')
const email = ref('')
const password = ref('')
const gender = ref('')
const slider = ref(0)

function handleSignUp() {
  if (slider.value >= 100) {
    toast.success('Account created successfully ✅')
    console.log('Account:', { name: name.value, email: email.value, gender: gender.value })
    router.push('/home')
  } else {
    toast.error('Please slide to verify before signing up')
  }
}

function goToLogin() {
  router.push('/')
}
</script>

<style scoped>
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
