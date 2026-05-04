<template>
  <section class="container mx-auto px-6 -mt-20 mb-24 relative z-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(item, index) in products" :key="index" 
           class="glass-panel p-5 rounded-3xl flex items-center gap-5 hover:translate-y-[-5px] transition-transform duration-300">
        <div class="w-20 h-20 bg-brand-bg rounded-2xl overflow-hidden flex-shrink-0 border border-brand-gold/5">
          <img :src="item.image" :alt="item.name" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
        </div>
        <div class="flex-grow">
          <h4 class="font-semibold text-base">{{ item.name }}</h4>
          <p class="text-brand-gold text-sm font-medium">{{ item.price }}</p>
        </div>
        <button class="p-3 bg-brand-surfaceLight text-brand-text rounded-2xl hover:bg-brand-gold hover:text-brand-bg transition-colors duration-300">
          <i class="ph ph-shopping-bag"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { name: 'Rwanda Whole Bean', price: '$18.00', image: 'https://images.unsplash.com/photo-1554522432-6a5b7c7eb5f0?w=200&q=80' },
  { name: 'Aura White Mug', price: '$12.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&q=80' },
  { name: 'Ceramic Black Mug', price: '$14.00', image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=200&q=80' }
]
</script>
