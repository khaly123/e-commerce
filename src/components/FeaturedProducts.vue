<template>
  <section class="py-16 bg-gradient-to-br from-beige via-white to-beige relative">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-extrabold text-navy tracking-tight mb-2 animate-fade-in">🌟 Featured Products</h2>
      <p class="text-lg text-gray-600 animate-fade-in-delayed">Hand-picked items just for you!</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-16">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="bg-white bg-opacity-60 backdrop-blur-lg border border-gray-200 shadow-xl p-5 rounded-2xl relative group hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 ease-in-out"
        :data-aos="'zoom-in'"
        :data-aos-delay="index * 150"
      >
        <!-- Badge -->
        <div v-if="product.badge" class="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
          {{ product.badge }}
        </div>

        <!-- Image -->
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
        />

        <!-- Product Info -->
        <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ product.name }}</h3>
        <p class="text-primary text-md font-bold mb-3">{{ product.price }}</p>

        <!-- CTA -->
        <button
          @click="viewProduct(product)"
          class="w-full bg-primary text-white py-2 rounded-md hover:bg-navy hover:scale-[1.02] transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: '$499',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Laptop',
    price: '$999',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Speaker',
    price: '$199',
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1f70b08?auto=format&fit=crop&w=800&q=80'
  }
]

const viewProduct = (product) => {
  router.push({ name: 'ProductView', query: { id: product.id } })
}
</script>

<style scoped>
.bg-beige {
  background-color: #fdf0d5;
}
.text-navy {
  color: #003049;
}
.text-primary {
  color: #c1121f;
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}
.animate-fade-in-delayed {
  animation: fadeIn 1s ease-in-out forwards;
  animation-delay: 0.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
