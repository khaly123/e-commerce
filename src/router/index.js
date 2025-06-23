import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Login shown first by default
    { path: '/', name: 'Login', component: LoginView },

    //  main pages
    { path: '/home', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/products', name: 'Products', component: ProductsView },
    { path: '/signup', name: 'Signup', component: SignUpView },
    { path: '/profile', name: 'Profile', component: ProfileView },
    { path: '/checkout', name: 'Checkout', component: CheckoutView },
    { path: '/forgot-password', name: 'ForgotPassword',component:ForgotPasswordView },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
