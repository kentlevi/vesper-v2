<template>
  <section id="testimonials" class="py-24 bg-brand-bg relative overflow-hidden transition-all duration-700">
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-white mb-6 testimonial-title opacity-0 lg:-translate-y-8 transition-transform duration-700">Artisan Voices</h2>
        <div class="w-1 h-24 bg-white/5 mx-auto mb-6"></div>
        <p class="text-white/40 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-medium opacity-70">
           What our guests say about us.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="(review, index) in reviews" :key="index" 
             class="testimonial-editorial bg-[#151515] p-10 border border-white/5 hover:border-white/20 transition-all duration-700 transform group testimonial-card opacity-0 lg:translate-y-12 transition-all duration-700 border-t-2 border-t-brand-gold/50">
          
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 overflow-hidden border border-white/10 p-1 group-hover:border-white/30 transition-colors duration-500">
               <img :src="review.avatar" :alt="review.author" class="w-full h-full object-cover grayscale group-hover:grayscale-[0.2] transition-all duration-500">
            </div>
            <div>
               <h4 class="font-serif font-light text-xl text-white">{{ review.author }}</h4>
               <p class="text-brand-gold text-[10px] uppercase tracking-widest font-medium">{{ review.role }}</p>
            </div>
          </div>

          <div class="flex gap-1 mb-6 text-brand-gold text-[10px]">
            <i class="ph-fill ph-star" v-for="i in 5" :key="i"></i>
          </div>

          <p class="text-white/60 italic text-sm leading-loose mb-8 font-light">
            "{{ review.text }}"
          </p>

          <div class="pt-6 border-t border-white/5 flex items-center justify-between text-brand-gold/30">
             <i class="ph ph-quotes text-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-700"></i>
             <div class="w-1.5 h-1.5 bg-brand-gold/20 group-hover:bg-brand-gold transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decor (Faint swirls like in design) -->
    <svg class="absolute top-[10%] right-[-10%] w-full h-full pointer-events-none opacity-5 animate-pulse-slow" viewBox="0 0 1000 1000">
       <path d="M0,500 Q250,250 500,500 T1000,500" fill="none" stroke="#C5A059" stroke-width="2"></path>
       <path d="M0,450 Q250,200 500,450 T1000,450" fill="none" stroke="#C5A059" stroke-width="1"></path>
    </svg>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const reviews = [
  {
    text: "Vesper Coffee provides a level of sophistication I haven't found elsewhere. The attention to detail in every cup is remarkable and artistic.",
    author: "Elena Rossi",
    role: "Coffee Aficionado",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/45.jpg"
  },
  {
    text: "The signature Espresso Cloud is genuinely life-changing. Combined with the atmosphere, it's my favorite spot for morning rituals.",
    author: "Julian Vance",
    role: "Design Critic",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/32.jpg"
  },
  {
    text: "Perfect for morning meetings or late afternoon reading. The staff knows their beans and treats every brew like a masterpiece.",
    author: "Sophia Chen",
    role: "Local Columnist",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg"
  }
]

onMounted(() => {
  gsap.to(".testimonial-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".testimonial-title",
      start: "top 90%"
    }
  })

  gsap.to(".testimonial-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".testimonial-card",
      start: "top 85%"
    }
  })
})
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { opacity: 0.05; }
  50% { opacity: 0.1; }
}
.animate-pulse-slow { animation: pulse-slow 10s infinite; }
</style>
