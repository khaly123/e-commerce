<template>
  <section
    class="bg-gradient-to-r from-navy to-sky text-white text-center py-20 px-4"
    data-aos="fade-up"
  >
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Premium Tech Products</h1>
    <p class="text-lg mb-6">Discover the latest in technology with curated accessories</p>
    <button
      class="bg-red hover:bg-dark-red text-white px-6 py-3 rounded shadow-md transition duration-300"
    >
      Shop Now
    </button>
  </section>
</template>

<style scoped>
.from-navy {
  --tw-gradient-from: #003049;
  --tw-gradient-to: #669bbc;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-sky {
  --tw-gradient-to: #669bbc;
}
.bg-red {
  background-color: #c1121f;
}
.hover\:bg-dark-red:hover {
  background-color: #780000;
}
</style>
