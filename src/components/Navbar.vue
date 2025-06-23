<template>
  <nav class="bg-primary text-white p-4 shadow-md relative">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <h1 class="text-xl font-bold">TechStore</h1>

      <!-- Centered Navigation Links -->
      <div class="absolute left-1/2 transform -translate-x-1/2 space-x-6">
        <router-link to="/home" class="hover:underline">Home</router-link>
        <router-link to="/products" class="hover:underline">Products</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
      </div>

      <!-- Profile icon -->
      <router-link to="/profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          class="w-10 h-10 rounded-full border-2 border-white hover:border-secondary transition"
        />
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.bg-primary {
  background-color: #780000;
}
.text-primary {
  color: #780000;
}
</style>
