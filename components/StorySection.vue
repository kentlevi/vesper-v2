<template>
  <section id="story" class="py-24 bg-brand-bg relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Text Column -->
        <div class="story-content order-2 lg:order-1 transition-all">
          <p class="text-[10px] uppercase tracking-widest text-[#c5a47e] mb-4 story-stagger font-bold italic">The Ritual</p>
          <h2 class="text-4xl md:text-5xl font-serif font-light text-white mb-8 story-stagger opacity-0 leading-tight">Our Story</h2>
          <div class="w-1 h-24 bg-white/5 mb-12 story-stagger opacity-0"></div>
          
          <div class="space-y-6 text-white/60 text-[12px] md:text-sm tracking-wide leading-loose story-stagger opacity-0 font-medium">
            <p>
              Vesper Coffee was founded on a singular obsession: to capture the profound, silent moment when the world slows down. Our beans are sourced from extreme altitudes where the air is thin and the flavor is concentrated.
            </p>
            <p>
              Roasting at Vesper is a ritual. We utilize time-honored techniques to unveil the hidden notes of dark chocolate, stone fruit, and smoke—tailoring each profile to the unique character of the land.
            </p>
          </div>

          <div class="mt-12 py-10 border-t border-b border-white/10 story-stagger opacity-0">
             <p class="italic text-2xl font-serif text-white/80 leading-snug font-light">
               "We invite you to experience the quality and care behind every cup we brew."
             </p>
             <a href="#products" class="inline-block mt-8 px-10 py-4 bg-brand-gold text-black font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-brand-goldHover transition-colors text-[11px]">
               Shop Now
             </a>
          </div>
        </div>

        <!-- Image Column -->
        <div class="relative order-1 lg:order-2 story-img-container opacity-0 transform translate-x-12">
          <div class="absolute -z-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] blur-3xl opacity-50"></div>
          <div class="h-[700px] border border-white/10 p-6 bg-gradient-to-b from-[#151515] to-[#050505] shadow-2xl relative group">
             <div class="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
             <img src="/images/story_hands.png" alt="Hands with Coffee Beans" 
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 grayscale-[0.2]">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to(".story-stagger", {
    opacity: 1,
    y: -20,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".story-content",
      start: "top 80%"
    }
  })

  gsap.to(".story-img-container", {
    opacity: 1,
    x: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".story-img-container",
      start: "top 80%"
    }
  })
})
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.05); opacity: 0.3; }
}
.animate-pulse-slow { animation: pulse-slow 6s infinite; }
</style>
