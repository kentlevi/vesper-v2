<template>
  <section id="visit" class="py-24 bg-brand-bg relative overflow-hidden transition-all duration-700">
    <!-- Subtle Background Decor -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
       <div class="absolute top-[20%] left-[-10%] w-[50%] h-[1px] bg-gradient-to-r from-brand-gold to-transparent"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Info Column -->
        <div class="visit-content opacity-0 transform -translate-x-12">
          <h2 class="text-4xl md:text-6xl font-serif font-light text-white mb-8">Visit Our <br> <span class="text-brand-gold italic">Sanctuary</span></h2>
          <div class="w-1 h-24 bg-white/5 mb-12"></div>
          
          <div class="space-y-10 group">
            <div class="flex items-start gap-6 border-b border-white/5 pb-8 group-hover:border-brand-gold/20 transition-all duration-500">
              <div class="w-12 h-12 border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                <i class="ph ph-map-pin text-xl"></i>
              </div>
              <div>
                <h4 class="font-serif font-light text-xl mb-2 text-white">Location</h4>
                <p class="text-white/60 text-sm leading-loose italic font-light">123 Golden Bean Avenue, Suite 404<br>Vesper District, CM 80210</p>
              </div>
            </div>

            <div class="flex items-start gap-6 border-b border-white/5 pb-8">
              <div class="w-12 h-12 border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                <i class="ph ph-clock text-xl"></i>
              </div>
              <div>
                <h4 class="font-serif font-light text-xl mb-2 text-white">Opening Hours</h4>
                <div class="grid grid-cols-2 gap-x-12 gap-y-1 text-brand-gold text-[10px] uppercase tracking-widest font-medium">
                  <span>Mon – Fri</span> <span class="text-right text-white/60">7:00 – 19:00</span>
                  <span>Sat – Sun</span> <span class="text-right text-white/60">8:00 – 21:00</span>
                </div>
              </div>
            </div>

            <div class="flex items-start gap-6">
              <div class="w-12 h-12 border border-white/10 flex items-center justify-center text-brand-gold shrink-0">
                <i class="ph ph-phone text-xl"></i>
              </div>
              <div>
                <h4 class="font-serif font-light text-xl mb-2 text-white">Contact</h4>
                <p class="text-white/60 text-sm leading-loose italic font-light">+1 (555) 012-3456<br>hello@vespercoffee.com</p>
              </div>
            </div>
          </div>

          <a href="mailto:hello@vespercoffee.com" class="inline-block mt-16 px-10 py-5 border border-white/20 text-white font-medium uppercase tracking-[0.2em] text-[11px] hover:border-white transition-colors">
            Book a Table
          </a>
        </div>

        <!-- Map Column -->
        <div class="relative visit-map-container opacity-0 transform translate-x-12">
          <div class="aspect-square bg-[#050505] p-6 border border-white/5 shadow-2xl relative group">
            <div class="absolute inset-0 bg-[#151515] opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <!-- Luxury Map Sanctuary -->
            <div class="w-full h-full relative z-10 overflow-hidden border border-white/10">
              <div class="w-full h-full bg-[#0a0a0a] relative group/map overflow-hidden">
                <!-- Generated Cinematic Map Image -->
                <img src="/images/map_sanctuary.png" alt="Vesper Sanctuary Map" class="w-full h-full object-cover grayscale-[0.5] brightness-90 contrast-110 group-hover/map:brightness-110 transition-all duration-1000">
                
                <div class="absolute inset-0 bg-[#0a0a0a]/40 pointer-events-none"></div>
                
                <div class="relative z-10 w-full h-full flex items-center justify-center">
                   <div class="flex flex-col items-center">
                      <div class="w-16 h-16 bg-brand-gold flex items-center justify-center animate-bounce shadow-2xl shadow-brand-gold/40 cursor-pointer hover:scale-110 transition-transform">
                          <i class="ph ph-map-pin text-black text-2xl"></i>
                      </div>
                      <div class="mt-6 bg-[#0a0a0a]/90 border border-white/10 px-8 py-4 text-white font-medium shadow-2xl backdrop-blur-md uppercase tracking-[0.2em] text-[10px]">
                         Vesper Sanctuary
                      </div>
                   </div>
                </div>
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

onMounted(() => {
  gsap.to(".visit-content", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".visit-content",
        start: "top 80%"
    }
  })

  gsap.to(".visit-map-container", {
    opacity: 1,
    x: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".visit-map-container",
        start: "top 80%"
    }
  })
})
</script>
