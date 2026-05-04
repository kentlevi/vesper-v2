<template>
  <nav class="fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-white/5" 
       :class="{'bg-brand-bg/95 backdrop-blur-3xl py-4': scrolled, 'py-8 bg-transparent': !scrolled}">
    <div class="container mx-auto px-6 lg:px-12 flex justify-between items-center">
      
      <!-- Desktop Links (Left) -->
      <div class="hidden lg:flex items-center gap-8 text-[10px] tracking-[0.25em] font-medium text-white/40 uppercase">
        <a href="#story" class="hover:text-white transition-colors duration-300">About</a>
        <a href="#products" class="hover:text-white transition-colors duration-300">Collections</a>
        <a href="#process" class="hover:text-white transition-colors duration-300">Bespoke</a>
      </div>

      <!-- Logo (Center) -->
      <a href="#" class="flex items-center justify-center text-white/90 text-2xl font-serif font-light tracking-[0.4em] uppercase hover:text-white transition-colors absolute left-1/2 -translate-x-1/2">
        Vesper
      </a>

      <!-- Action CTA (Right) -->
      <div class="flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium ml-auto">
        <a href="#products" class="hidden md:block hover:text-white transition-colors duration-300">Search</a>
        <!-- Cart Icon -->
        <button @click="isCartOpen = true" class="flex items-center gap-2 hover:text-white transition-colors duration-300">
          <span>Cart</span>
          <span class="text-white bg-white/10 px-2 py-0.5 rounded-full">{{ cartCount }}</span>
        </button>
        <!-- Mobile Menu Toggle -->
        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-white/40 hover:text-white text-2xl transition-transform duration-300" :class="{'rotate-90': isMenuOpen}">
          <i class="ph" :class="isMenuOpen ? 'ph-x' : 'ph-list'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="fixed inset-0 top-[70px] bg-brand-bg/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col items-center justify-center gap-8 text-2xl font-serif">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false" class="text-brand-text hover:text-brand-gold transition-colors duration-300">
          {{ link.name }}
        </a>
        <div class="mt-8 flex gap-8 text-3xl text-brand-gold">
           <i class="ph ph-instagram-logo hover:scale-110 transition-transform"></i>
           <i class="ph ph-facebook-logo hover:scale-110 transition-transform"></i>
           <i class="ph ph-twitter-logo hover:scale-110 transition-transform"></i>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCart } from '~/composables/useCart'

const { isCartOpen, cartCount } = useCart()

const scrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'About', href: '#story' },
  { name: 'Menu', href: '#products' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Visit Us', href: '#visit' },
  { name: 'Contact', href: '#' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

nav {
  /* Prevent layout shift */
  will-change: padding, background-color;
}
</style>
