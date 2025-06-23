<template>
  <section class="py-12 bg-gray-100">
    <h2 class="text-center text-2xl font-bold mb-6">Featured Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md p-4 text-center"
        data-aos="fade-up"
      >
        <img :src="product.image" class="h-40 w-full object-cover rounded mb-3" />
        <h3 class="font-semibold text-lg">{{ product.name }}</h3>
        <p class="text-primary font-medium">{{ product.price }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: '$499',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Laptop',
    price: '$999',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Speaker',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1f70b08?auto=format&fit=crop&w=800&q=80'
  }
]
</script>
