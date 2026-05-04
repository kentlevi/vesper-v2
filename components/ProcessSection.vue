<template>
  <section id="process" class="py-24 bg-brand-bg relative overflow-hidden">
    <!-- Abstract Background Decor -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
       <div class="absolute top-[10%] left-[-5%] w-[40%] h-[1px] bg-gradient-to-r from-brand-gold to-transparent rotate-12"></div>
       <div class="absolute bottom-[20%] right-[-10%] w-[50%] h-[1px] bg-gradient-to-l from-brand-gold to-transparent -rotate-6"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <p class="text-brand-gold max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold mb-4 italic">
          Bespoke
        </p>
        <h2 class="text-4xl md:text-5xl font-serif font-light text-white mb-6">Our Process</h2>
        <div class="w-1 h-24 bg-white/5 mx-auto mb-6"></div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-5 gap-0 border border-white/5 bg-[#050505]">
        <div v-for="(step, idx) in steps" :key="idx" 
             class="relative group h-[500px] border border-white/5 overflow-hidden process-card opacity-0 transform translate-y-12 transition-all">
          <!-- Background Image -->
          <img :src="step.image" :alt="step.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 grayscale-[0.5]">
          
          <!-- Overlay -->
          <div class="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0a] to-transparent h-1/2">
            <h3 class="text-2xl font-serif font-light text-white mb-3">{{ step.title }}</h3>
            <p class="text-white/60 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 font-medium">
              {{ step.description }}
            </p>
            
            <div class="mt-6 flex items-center justify-between">
              <span class="text-white/20 font-serif text-4xl font-light italic">{{ (idx + 1).toString().padStart(2, '0') }}</span>
              <div class="w-6 h-6 border border-white/20 flex items-center justify-center text-white/50 text-[10px] group-hover:border-white transition-all duration-500">
                <i class="ph ph-arrow-up-right"></i>
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

const steps = [
  {
    title: 'Cultivation',
    description: 'Each bean begins its life as a cherry on a shaded coffee tree in volcanic soil.',
    image: '/images/process_01.png'
  },
  {
    title: 'Roasting',
    description: 'Small-batch roasting brings out the complex sugars and aromatic oils.',
    image: '/images/process_02.png'
  },
  {
    title: 'Brewing',
    description: 'Precision temperature and timing extract the perfect clarity of flavor.',
    image: '/images/process_03.png'
  },
  {
    title: 'Pouring',
    description: 'The final presentation, where crema and texture meet artistic intuition.',
    image: '/images/process_04.png'
  },
  {
    title: 'Enjoying',
    description: 'Savoring the deep earthy notes and bright acidity of a perfect cup.',
    image: '/images/process_05.png'
  }
]

onMounted(() => {
  gsap.to(".process-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".process-card",
      start: "top 85%"
    }
  })
})
</script>
