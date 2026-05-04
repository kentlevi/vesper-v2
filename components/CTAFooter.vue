<template>
  <section class="py-24 bg-brand-bg relative overflow-hidden transition-all duration-700">
    <div class="container mx-auto px-6">
      <div class="bg-gradient-to-tr from-[#151515] to-[#050505] overflow-hidden relative shadow-2xl border border-white/5 group">
        <div class="grid lg:grid-cols-2 items-center">
          
          <!-- Text Column -->
          <div class="p-16 lg:p-24 relative z-10 border-r border-white/5">
            <h2 class="text-5xl md:text-7xl font-serif font-light text-white mb-8 leading-tight cta-reveal">
              Ready to <br>
              <span class="text-brand-gold italic">Experience</span> <br>
              the Best?
            </h2>
            <p class="text-white/60 text-sm tracking-wide mb-12 max-w-md italic cta-reveal leading-loose opacity-0 font-light">
               Taste the distinction made by devotion and craftsmanship in every single cup we brew.
            </p>
            <a href="#products" class="inline-block px-10 py-5 bg-brand-gold text-black uppercase tracking-[0.2em] font-bold text-[11px] hover:bg-brand-goldHover transition-colors shadow-lg cta-reveal opacity-0">
              Check Products
            </a>
          </div>

          <!-- Image Column -->
          <div class="h-[600px] relative overflow-hidden cta-reveal opacity-0">
             <div class="absolute inset-0 bg-gradient-to-r from-[#151515] via-transparent to-transparent z-10 lg:block hidden"></div>
             <img src="/images/cta_machine.png" alt="Premium Espresso Machine" 
                  class="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-[0.2] group-hover:brightness-90 transition-all duration-[2s]">
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
  gsap.to(".cta-reveal", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".cta-reveal",
      start: "top 85%"
    }
  })
})
</script>
