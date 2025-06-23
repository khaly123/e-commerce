<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
    <div class="glass-card w-full max-w-5xl p-6 md:p-10 rounded-2xl shadow-2xl text-gray-900 overflow-y-auto">
      <!-- Profile Header -->
      <div class="flex flex-col items-center gap-4 relative">
        <div class="relative">
          <img
            :src="user.profilePicture || 'https://via.placeholder.com/120'"
            alt="Profile"
            class="w-32 h-32 rounded-full border-4 border-primary object-cover"
          />
          <label for="upload" class="absolute bottom-2 right-2 bg-primary p-1.5 rounded-full cursor-pointer">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
            </svg>
          </label>
          <input type="file" id="upload" class="hidden" @change="onImageUpload" />
        </div>

        <h2 class="text-2xl font-bold text-navy">{{ user.name }}</h2>
        <p class="text-gray-600">{{ user.email }}</p>
        <button
          class="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-red-dark transition"
          @click="showEdit = true"
        >
          Edit Profile
        </button>
      </div>

      <!-- Edit Modal -->
      <transition name="fade">
        <div v-if="showEdit" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div class="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
            <h3 class="text-lg font-bold mb-4 text-navy">Edit Profile</h3>
            <input v-model="user.name" class="input-field" placeholder="Full Name" />
            <input v-model="user.email" class="input-field mt-2" placeholder="Email" />
            <div class="flex gap-4 mt-3">
              <label><input type="radio" value="Male" v-model="user.gender" /> Male</label>
              <label><input type="radio" value="Female" v-model="user.gender" /> Female</label>
            </div>
            <div class="mt-4 flex justify-between gap-4">
              <button @click="showEdit = false" class="w-full border border-gray-300 py-2 rounded">Cancel</button>
              <button @click="saveProfile" class="w-full bg-primary text-white py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      </transition>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10" data-aos="fade-up">
        <div class="stat-card">
          <p class="text-xl font-bold text-navy">120</p>
          <p class="text-sm text-gray-500">Orders</p>
        </div>
        <div class="stat-card">
          <p class="text-xl font-bold text-navy">{{ wishlist.length }}</p>
          <p class="text-sm text-gray-500">Wishlists</p>
        </div>
        <div class="stat-card">
          <p class="text-xl font-bold text-navy">3</p>
          <p class="text-sm text-gray-500">Cart Items</p>
        </div>
        <div class="stat-card">
          <p class="text-xl font-bold text-navy">{{ favorites.length }}</p>
          <p class="text-sm text-gray-500">Favorites</p>
        </div>
      </div>

      <!-- Order History -->
      <section class="mt-10">
        <h3 class="text-xl font-bold mb-3 text-navy">Recent Orders</h3>
        <ul class="space-y-3">
          <li class="order-card">
            <span>Order #TS-2024-0012</span>
            <span class="text-green-600 font-semibold">Delivered</span>
          </li>
          <li class="order-card">
            <span>Order #TS-2024-0011</span>
            <span class="text-yellow-600 font-semibold">In Transit</span>
          </li>
        </ul>
      </section>

      <!-- Wishlist -->
      <section class="mt-10">
        <h3 class="text-xl font-bold mb-3 text-navy">Wishlist</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div class="wishlist-card relative" v-for="(item, index) in wishlist" :key="index">
            <img :src="item.img" class="w-20 h-20 object-contain mx-auto" />
            <p class="text-sm mt-2 text-center">{{ item.name }}</p>
            <button
              class="absolute top-2 right-2 text-red-500 hover:text-red-700"
              @click="removeFromWishlist(index)"
              title="Remove"
            >
              ✖
            </button>
          </div>
        </div>
      </section>

      <!-- Favorites -->
      <section class="mt-10">
        <h3 class="text-xl font-bold mb-3 text-navy">Favorites</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div class="wishlist-card relative" v-for="(item, index) in favorites" :key="index">
            <img :src="item.img" class="w-20 h-20 object-contain mx-auto" />
            <p class="text-sm mt-2 text-center">{{ item.name }}</p>
            <button
              class="absolute top-2 right-2 text-yellow-600 hover:text-yellow-800"
              @click="removeFromFavorites(index)"
              title="Remove"
            >
              ✖
            </button>
          </div>
        </div>
      </section>

      <!-- Logout Button -->
      <div class="mt-12 text-center">
        <button
          class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()

const user = ref({
  name: 'Desmond Khaly',
  email: 'desmond@example.com',
  gender: 'Male',
  profilePicture: ''
})

const wishlist = ref([
  { name: 'Smart Watch', img: 'https://via.placeholder.com/80' },
  { name: 'Bluetooth Speaker', img: 'https://via.placeholder.com/80' }
])

const favorites = ref([
  { name: 'Gaming Headset', img: 'https://via.placeholder.com/80' },
  { name: 'Mechanical Keyboard', img: 'https://via.placeholder.com/80' }
])

const showEdit = ref(false)

function saveProfile() {
  showEdit.value = false
  toast.success('Profile updated successfully!')
}

function logout() {
  toast.info('You have been logged out.')
  router.push('/')
}

function onImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      user.value.profilePicture = e.target.result
      toast.success('Profile picture updated!')
    }
    reader.readAsDataURL(file)
  }
}

function removeFromWishlist(index) {
  wishlist.value.splice(index, 1)
  toast.info('Removed from wishlist!')
}

function removeFromFavorites(index) {
  favorites.value.splice(index, 1)
  toast.info('Removed from favorites!')
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  outline: none;
  transition: box-shadow 0.2s;
}
.input-field:focus {
  box-shadow: 0 0 0 2px #780000;
  border-color: #780000;
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.order-card,
.wishlist-card {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: relative;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
