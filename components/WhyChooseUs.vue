<template>
  <section class="py-24 bg-brand-surface relative">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-white mb-6">Why Choose Us</h2>
        <div class="w-1 h-24 bg-white/5 mx-auto mb-6"></div>
        <p class="text-white/40 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-medium opacity-70">
           Craftsmanship in every grain.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5 bg-[#151515]">
        <div v-for="(item, idx) in features" :key="idx" 
             class="text-center feature-card transform translate-y-0 group p-10 border border-white/5 hover:bg-white/5 transition-colors duration-500">
          <div class="w-24 h-24 mx-auto bg-[#0a0a0a] flex items-center justify-center p-6 border border-white/10 group-hover:border-white/30 transition-all duration-700 relative mb-8 overflow-hidden shadow-2xl">
              <div class="absolute inset-0 bg-[#c5a47e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <i :class="[item.icon, 'text-4xl z-10 text-brand-gold transition-transform duration-700 group-hover:scale-110']"></i>
          </div>
          <h4 class="text-lg font-serif font-light text-white mb-3">{{ item.title }}</h4>
          <p class="text-white/60 text-[11px] leading-loose max-w-xs mx-auto">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const features = [
  {
    title: 'Quality',
    description: '100% Arabica beans sourced from ethically managed farms.',
    icon: 'ph ph-coffee-bean'
  },
  {
    title: 'Freshness',
    description: 'Roasted in small batches daily to ensure peak aromatic intensity.',
    icon: 'ph ph-timer'
  },
  {
    title: 'Variety',
    description: 'A curated selection of single origin and house-crafted blends.',
    icon: 'ph ph-tray'
  },
  {
    title: 'Sustainability',
    description: 'Eco-friendly packaging and fair trade partnerships across the globe.',
    icon: 'ph ph-leaf'
  }
]

onMounted(() => {
  gsap.to(".feature-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".feature-card",
      start: "top 90%"
    }
  })
})
</script>
