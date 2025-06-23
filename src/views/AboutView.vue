<template>
  <section class="min-h-screen bg-white text-navy py-16 px-4 overflow-hidden">
    <!-- Intro -->
    <div ref="intro" class="max-w-3xl mx-auto text-center mb-16">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">About TechStore</h1>
      <p class="text-lg mb-6">
        At <span class="text-primary font-semibold">TechStore</span>, we are passionate about providing the best
        tech gear to modern users. Whether you're a gamer, creator, student, or pro, we’ve got something for you.
      </p>
      <p class="text-base text-gray-600">
        From hand-picked accessories to cutting-edge electronics, we’re here to help you upgrade your world with
        quality products and top-notch service.
      </p>
    </div>

    <!-- Our Mission -->
    <div ref="mission" class="grid md:grid-cols-2 gap-8 items-center mb-16">
      <div>
        <img
          src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"          alt="Mission"
          class="rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-3">Our Mission</h2>
        <p class="text-gray-600">
          We believe technology should be accessible and enjoyable for everyone. That's why we carefully select every product
          and back it with expert advice and excellent support. Our mission is to inspire confidence in your tech choices.
        </p>
      </div>
    </div>

    <!-- Why Choose Us -->
    <div ref="reasons" class="text-center mb-16">
      <h2 class="text-2xl font-bold mb-6">Why Choose Us</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Top Quality</h3>
          <p class="text-sm text-gray-600">All our products are sourced from trusted brands and tested for performance.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Fast Delivery</h3>
          <p class="text-sm text-gray-600">We work with leading couriers to ensure your items arrive on time.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
          <h3 class="font-semibold text-lg mb-2">Expert Support</h3>
          <p class="text-sm text-gray-600">Our tech-savvy team is here to answer your questions anytime.</p>
        </div>
      </div>
    </div>

    <!-- Meet the Team -->
    <div ref="team" class="text-center">
      <h2 class="text-2xl font-bold mb-6">Meet the Team</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="p-4 bg-gray-50 rounded shadow-md">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="CEO"
            class="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
          <h4 class="font-bold">Prince Ahiable</h4>
          <p class="text-sm text-gray-500">CEO & Founder</p>
        </div>
        <div class="p-4 bg-gray-50 rounded shadow-md">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Marketing"
            class="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
          <h4 class="font-bold">Wisdom sena</h4>
          <p class="text-sm text-gray-500">Head of Marketing</p>
        </div>
        <div class="p-4 bg-gray-50 rounded shadow-md">
          <img
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="Tech"
            class="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
          <h4 class="font-bold">Desmond Khaly</h4>
          <p class="text-sm text-gray-500">Lead Developer</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const intro = ref(null)
const mission = ref(null)
const reasons = ref(null)
const team = ref(null)

onMounted(() => {
  const animate = (el, delay = 0.2) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }

  animate(intro.value, 0)
  animate(mission.value, 0.3)
  animate(reasons.value, 0.4)
  animate(team.value, 0.5)
})
</script>

<style scoped>
.text-navy {
  color: #003049;
}
.text-primary {
  color: #c1121f;
}
</style>
