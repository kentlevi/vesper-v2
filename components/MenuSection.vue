<template>
  <section id="menu" class="py-24 bg-brand-bg relative transition-colors duration-500">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4 menu-title">Our Curated Menu</h2>
        <div class="w-24 h-1 bg-brand-gold mx-auto menu-line"></div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-12 menu-tabs">
        <button v-for="category in categories" :key="category" 
          @click="activeCategory = category"
          :class="['px-8 py-3 rounded-full border border-brand-gold/30 transition-all duration-300 font-semibold', 
                   activeCategory === category ? 'bg-brand-gold text-brand-bg' : 'text-brand-gold hover:bg-brand-gold/10']">
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 menu-items-grid">
        <div v-for="(item, index) in filteredItems" :key="index" 
             class="flex justify-between items-end border-b border-brand-gold/10 pb-4 group hover:border-brand-gold/40 transition-colors duration-300">
          <div class="flex-grow">
            <h4 class="text-xl font-serif font-bold group-hover:text-brand-gold transition-colors duration-300">{{ item.name }}</h4>
            <p class="text-brand-muted text-sm mt-1 italic">{{ item.description }}</p>
          </div>
          <div class="text-xl font-bold text-brand-gold ml-4">
            {{ item.price }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const categories = ['All', 'Coffee', 'Tea', 'Pastries']
const activeCategory = ref('All')

const menuItems = [
  { name: 'Espresso Macchiato', price: '$4.50', description: 'Double shot with a dash of foam', category: 'Coffee' },
  { name: 'Pour Over Special', price: '$6.00', description: 'Single origin rotating beans', category: 'Coffee' },
  { name: 'Cloudy Cold Brew', price: '$5.50', description: '12-hour steep, velvet milk cap', category: 'Coffee' },
  { name: 'Ceremonial Matcha', price: '$7.50', description: 'Uji grade whisked to perfection', category: 'Tea' },
  { name: 'London Fog Latte', price: '$5.50', description: 'Earl Grey with vanilla & steam', category: 'Tea' },
  { name: 'Truffle Croissant', price: '$8.00', description: 'Hand-laminated flaky pastry', category: 'Pastries' },
  { name: 'Dark Chocolate Tart', price: '$7.00', description: '70% cacao with sea salt', category: 'Pastries' },
  { name: 'Rose Hibiscus Iced', price: '$4.50', description: 'Dried petals, botanicals', category: 'Tea' }
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') return menuItems
  return menuItems.filter(item => item.category === activeCategory.value)
})

onMounted(() => {
  gsap.from(".menu-title", {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".menu-title",
      start: "top 90%"
    }
  })

  gsap.from(".menu-tabs", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".menu-tabs",
      start: "top 90%"
    }
  })
})
</script>
