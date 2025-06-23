<template>
  <section class="min-h-screen bg-beige text-navy py-16 px-4 relative">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
      <p class="text-lg mb-8">Browse our full catalog of high-quality tech items.</p>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300 relative backdrop-blur-md bg-opacity-30"
          :data-aos="'fade-up'"
          :data-aos-delay="product.id * 100"
        >
          <img
            :src="product.image"
            alt="product"
            class="w-full h-40 object-cover rounded mb-3"
          />
          <h3 class="font-semibold text-lg mb-1">{{ product.name }}</h3>
          <p class="text-primary font-semibold mb-2">{{ product.price }}</p>

          <!-- Action Buttons -->
          <div class="absolute top-3 right-3 flex flex-col gap-2">
            <button
              class="bg-primary text-white p-2 rounded-full hover:bg-secondary transition"
              @click.prevent="addToCart(product)"
              title="Add to Cart"
            >
              🛒
            </button>

            <button
              class="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-pink-200 transition"
              @click.prevent="addToWishlist(product)"
              title="Add to Wishlist"
            >
              💖
            </button>

            <button
              class="bg-yellow-100 text-yellow-600 p-2 rounded-full hover:bg-yellow-200 transition"
              @click.prevent="markFavorite(product)"
              title="Mark as Favorite"
            >
              ⭐
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Cart Icon -->
    <div
      class="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg cursor-pointer hover:scale-105 transition transform z-50"
      @click="showCart = !showCart"
      title="View Cart"
    >
      🛍️
      <span
        v-if="cartCount > 0"
        class="absolute top-[-8px] right-[-8px] bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
      >
        {{ cartCount }}
      </span>
    </div>

    <!-- Cart Modal -->
    <div
      v-if="showCart"
      class="fixed bottom-20 right-6 bg-white shadow-xl rounded-lg w-80 p-4 border z-50"
    >
      <h3 class="text-lg font-semibold mb-2">🛒 Cart Items</h3>

      <div v-if="cartItems.length">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between items-center border-b py-2"
        >
          <div>
            <p class="text-sm font-medium">{{ item.name }}</p>
            <p class="text-xs text-primary">{{ item.price }}</p>
          </div>
          <button
            @click="removeItem(index)"
            class="text-red-500 hover:text-red-700 text-lg"
            title="Remove"
          >
            ✖️
          </button>
        </div>

        <button
          class="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
          @click="goToCheckout"
        >
          Proceed to Checkout
        </button>
      </div>

      <p v-else class="text-gray-500 text-sm">Your cart is empty.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const cart = useCartStore()
const toast = useToast()

const showCart = ref(false)

const products = ref([
  { id: 1, name: 'Smartphone', price: '$499', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg' },
  { id: 2, name: 'Modern Workspace', price: '$999', image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg' },
  { id: 3, name: 'Camera Setup', price: '$899', image: 'https://images.pexels.com/photos/6093960/pexels-photo-6093960.jpeg' },
  { id: 4, name: 'Gaming Keyboard', price: '$129', image: 'https://images.pexels.com/photos/5380584/pexels-photo-5380584.jpeg' },
  { id: 5, name: 'Smartwatch', price: '$249', image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg' },
  { id: 6, name: 'Gamepad Controller', price: '$799', image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg' },
  { id: 7, name: 'Bluetooth Speaker', price: '$299', image: 'https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg' },
  { id: 8, name: 'Headphones', price: '$199', image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg' },
  { id: 9, name: 'Laptop Stand', price: '$59', image: 'https://images.pexels.com/photos/4792712/pexels-photo-4792712.jpeg' },
  { id: 10, name: 'Compact Camera', price: '$329', image: 'https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg' },
  { id: 11, name: 'Mechanical Mouse', price: '$89', image: 'https://images.pexels.com/photos/8176505/pexels-photo-8176505.jpeg' },
  { id: 12, name: 'Gaming Laptop', price: '$1499', image: 'https://images.pexels.com/photos/19012051/pexels-photo-19012051.jpeg' },
  { id: 13, name: 'Studio Mic', price: '$149', image: 'https://images.pexels.com/photos/7586662/pexels-photo-7586662.jpeg' },
  { id: 14, name: 'Tripod Stand', price: '$79', image: 'https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg' },
  { id: 15, name: 'Designer Glasses', price: '$349', image: 'https://images.pexels.com/photos/1499477/pexels-photo-1499477.jpeg' },
  { id: 16, name: 'Tablet Pro', price: '$999', image: 'https://images.pexels.com/photos/16738220/pexels-photo-16738220.jpeg' },
  { id: 17, name: 'VR Headset', price: '$699', image: 'https://images.pexels.com/photos/3391378/pexels-photo-3391378.jpeg' },
  { id: 18, name: 'LED Monitor', price: '$349', image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg' },
  { id: 19, name: 'Smart Home Hub', price: '$249', image: 'https://images.pexels.com/photos/28940390/pexels-photo-28940390.jpeg' },
  { id: 20, name: 'Wireless Charger', price: '$39', image: 'https://images.pexels.com/photos/15921116/pexels-photo-15921116.jpeg' }
])

const addToCart = (product) => {
  cart.addToCart(product)
  toast.success(`${product.name} added to cart!`, {
    timeout: 2000,
    icon: '✅',
    position: 'bottom-right'
  })
}

const addToWishlist = (product) => {
  toast.success(`${product.name} added to wishlist ❤️`, {
    timeout: 2000,
    icon: '💖',
    position: 'bottom-right'
  })
}

const markFavorite = (product) => {
  toast.info(`${product.name} marked as favorite ⭐`, {
    timeout: 2000,
    icon: '⭐',
    position: 'bottom-right'
  })
}

const cartItems = computed(() => cart.cartItems)
const cartCount = computed(() => cart.cartItems.length)

const removeItem = (index) => {
  cart.cartItems.splice(index, 1)
  toast.info(`Item removed from cart`, {
    timeout: 1500,
    icon: '🗑️',
    position: 'bottom-right'
  })
}

const goToCheckout = () => {
  router.push('/checkout')
  showCart.value = false
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
.bg-secondary {
  background-color: #669bbc;
}
.backdrop-blur-md {
  backdrop-filter: blur(10px);
}
</style>
