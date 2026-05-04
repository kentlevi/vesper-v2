<template>
  <section id="products" class="py-24 bg-brand-bg relative transition-all duration-700">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-brand-text mb-6">Our Signature Coffees</h2>
        <div class="w-1 h-24 bg-white/5 mx-auto mb-6"></div>
        <p class="text-brand-muted max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-medium opacity-70">
           Curated for delicate coffee lovers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(product, idx) in products" :key="idx" 
             class="group relative h-[500px] border border-white/5 overflow-hidden product-card opacity-0 transform translate-y-12">
           <!-- Background Image -->
           <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-80">
           
           <!-- Hover Overlay Gradient -->
           <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#151515]/40 to-transparent transition-all duration-700 opacity-90"></div>

           <!-- Glassmorphic Card Container -->
           <div class="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end transition-all duration-700 z-10">
              <div class="flex justify-between items-end mb-4">
                 <div>
                   <p class="text-[10px] uppercase tracking-widest text-brand-gold mb-2 font-medium italic">Artisan Roasted</p>
                   <h3 class="font-serif text-2xl font-light text-white">{{ product.name }}</h3>
                 </div>
                 <span class="text-brand-text font-serif text-xl">{{ product.price }}</span>
              </div>
              
              <div class="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4 overflow-hidden">
                 <div class="min-h-0 border-t border-white/10 pt-6">
                    <p class="text-white/60 text-sm leading-relaxed mb-6 font-light">{{ product.desc || 'Premium coffee with rich aromatic profile.' }}</p>
                    <button @click="addToCart(product)" class="w-full py-4 bg-brand-gold text-black text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-brand-goldHover flex items-center justify-center gap-2">
                       Add to Cart
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { useCart } from '~/composables/useCart'

const { addToCart } = useCart()

const products = [
  { name: 'Espresso Cloud', price: '$12.50', desc: 'Floating crema with nutty undertones', image: 'https://images.unsplash.com/photo-1705952285570-113e76f63fb0?q=80&w=800&auto=format&fit=crop' },
  { name: 'Velvet Mocha', price: '$14.00', desc: 'Indulgent chocolate with a velvet finish', image: 'https://images.unsplash.com/photo-1530629159325-9c378fc150b9?q=80&w=800&auto=format&fit=crop' },
  { name: 'Sweet Matcha', price: '$15.50', desc: 'Ceremonial grade with organic notes', image: 'https://images.unsplash.com/photo-1761023717430-e486492e80fd?q=80&w=800&auto=format&fit=crop' },
  { name: 'Espresso Macchiato', price: '$11.00', desc: 'Double shot with a dash of foam', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Spiced Morning', price: '$13.50', desc: 'Autumn notes with cinnamon warmth', image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dark Honey Ash', price: '$16.00', desc: 'Floral sweetness with a charred rim', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop' }
]

onMounted(() => {
  gsap.to(".product-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".product-card",
      start: "top 85%"
    }
  })
})
</script>
