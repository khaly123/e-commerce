<template>
  <section class="max-w-3xl mx-auto py-10 px-6">
    <h2 class="text-2xl font-bold mb-6 text-navy">My Profile</h2>
    <ProfilePage />
  </section>
</template>

<script setup>
import ProfilePage from '@/components/ProfilePage.vue'
</script>

<style scoped>
.text-navy {
  color: #003049;
}
</style>
