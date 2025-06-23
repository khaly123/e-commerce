<template>
  <div class="min-h-screen bg-beige text-navy flex justify-center items-center px-4 py-10">
    <div class="w-full max-w-lg bg-white rounded-xl shadow-xl p-6 space-y-6">
      <h2 class="text-2xl font-bold">Checkout</h2>

      <!-- Shipping Info -->
      <div>
        <h3 class="font-semibold mb-1">SHIPPING</h3>
        <p>221B Baker Street, W1U 8ED</p>
        <p>London, United Kingdom</p>
        <hr class="my-3 border-t border-primary" />
      </div>

      <!-- Payment Method -->
      <div>
        <h3 class="font-semibold mb-1">PAYMENT METHOD</h3>
        <p>Visa</p>
        <p>**** **** **** 4243</p>
        <hr class="my-3 border-t border-primary" />
      </div>

      <!-- Promo Code -->
      <div>
        <h3 class="font-semibold mb-1">HAVE A PROMO CODE?</h3>
        <div class="flex gap-2">
          <input
            v-model="promoCode"
            type="text"
            placeholder="Enter a Promo Code"
            class="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            @click="applyPromo"
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red-dark transition"
          >
            Apply
          </button>
        </div>
      </div>

      <!-- Payment Summary -->
      <div>
        <h3 class="font-semibold mb-2">PAYMENT</h3>
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping:</span>
          <span>${{ shipping.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between">
          <span>Tax:</span>
          <span>${{ tax.toFixed(2) }}</span>
        </div>
        <hr class="my-3 border-t border-gray-300" />
        <div class="flex justify-between text-xl font-bold text-primary">
          <span>Total:</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>
      </div>

      <!-- Checkout Button -->
      <button
        class="w-full bg-primary text-white py-3 rounded-lg hover:bg-red-dark transition font-semibold"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const promoCode = ref('')
const subtotal = ref(240.0)
const shipping = ref(10.0)
const tax = ref(30.4)

const total = computed(() => subtotal.value + shipping.value + tax.value)

function applyPromo() {
  if (promoCode.value.trim().toLowerCase() === 'save10') {
    subtotal.value = subtotal.value * 0.9
    alert('Promo code applied: 10% off!')
  } else {
    alert('Invalid promo code.')
  }
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
