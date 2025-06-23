<template>
  <section class="py-12 bg-gray-100">
    <h2 class="text-center text-3xl font-bold mb-10">Shop by Category</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-500"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <img :src="category.image" class="h-48 w-full object-cover" />
        
        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <button class="bg-white text-primary px-4 py-2 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition">
            Shop Now
          </button>
        </div>

        <!-- Label Tag -->
        <div
          v-if="category.tag"
          class="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow"
        >
          {{ category.tag }}
        </div>

        <!-- Title -->
        <div class="text-center bg-white py-3">
          <h3 class="font-semibold text-lg text-navy">{{ category.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: 'Audio',
    tag: 'New',
    image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Computing',
    tag: 'Trending',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
  },
  {
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Electronics',
    tag: 'Hot',
    image: 'https://images.pexels.com/photos/4792725/pexels-photo-4792725.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Gaming',
    tag: 'Popular',
    image: 'https://images.pexels.com/photos/133579/pexels-photo-133579.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Smartphones',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'
  },
  {
    name: 'Wearables',
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Home Gadgets',
    image: 'https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]
</script>

<style scoped>
.text-navy {
  color: #003049;
}
.bg-primary {
  background-color: #780000;
}
</style>
