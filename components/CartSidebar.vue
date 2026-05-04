<template>
  <Transition name="slide">
    <div v-if="isCartOpen" class="fixed inset-y-0 right-0 w-full md:w-[480px] bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-2xl z-[200] border-l border-white/10 flex flex-col pt-6 pb-12 px-8 h-screen font-sans">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8 border-b border-white/10 pb-6 text-white text-[10px] tracking-widest uppercase">
        <h2 class="font-medium"><i class="ph ph-shopping-bag mr-2 text-[14px]"></i>Your Order</h2>
        <button @click="isCartOpen = false" class="text-white/60 hover:text-white transition-colors">
          Close
        </button>
      </div>

      <!-- Items -->
      <div class="flex-1 overflow-y-auto space-y-6 pr-2 mb-6 custom-scrollbar">
        <div v-if="successState" class="flex flex-col items-center justify-center h-full text-brand-gold">
           <div class="w-16 h-16 border border-white/10 flex items-center justify-center mb-6">
              <i class="ph ph-check text-2xl text-white"></i>
           </div>
           <h3 class="font-serif text-2xl mb-2 text-white font-light text-center">Order Confirmed</h3>
           <p class="text-white/60 text-center max-w-[280px] text-[12px] font-medium tracking-wide">Your artisan brews are being prepared. You will receive an email confirmation shortly.</p>
           <button @click="closeAndReset" class="mt-8 px-8 py-3 bg-white/5 border border-white/10 text-white font-medium uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition duration-300">
             Continue Shopping
           </button>
        </div>
        <template v-else>
          <div v-if="cart.length === 0" class="flex flex-col items-center justify-center h-full text-white/40">
             <i class="ph ph-mask-sad text-4xl mb-4 text-white/20"></i>
             <p class="font-serif italic text-sm text-brand-gold">Your cart is empty.</p>
          </div>
          
          <div v-for="item in cart" :key="item.name" class="flex gap-4 items-center bg-[#151515] p-3 border border-white/5">
            <img :src="item.image" :alt="item.name" class="w-20 h-24 object-cover" />
            <div class="flex-1">
              <h3 class="font-serif font-light text-white uppercase tracking-tight text-sm mb-1">{{ item.name }}</h3>
              <p class="text-brand-gold font-medium tracking-widest text-[10px] mb-4">{{ item.price }}</p>
              <div class="flex items-center gap-3">
                <button @click="updateQuantity(item.name, item.quantity - 1)" class="w-6 h-6 border border-white/20 text-white/60 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
                   <i class="ph ph-minus text-[10px]"></i>
                </button>
                <span class="text-white font-mono text-[10px] w-4 text-center">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.name, item.quantity + 1)" class="w-6 h-6 border border-white/20 text-white/60 flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
                   <i class="ph ph-plus text-[10px]"></i>
                </button>
              </div>
            </div>
            <button @click="removeFromCart(item.name)" class="text-white/40 hover:text-white p-2 transition duration-300 text-[10px] tracking-widest uppercase">
              Remove
            </button>
          </div>
        </template>
      </div>

      <!-- Footer & Checkout -->
      <div v-if="!successState" class="border-t border-white/10 pt-6 mt-auto">
        <div class="flex justify-between items-center mb-6">
          <span class="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium">Total</span>
          <span class="font-serif text-white text-xl">${{ cartTotal }}</span>
        </div>
        <button 
           :disabled="cart.length === 0 || processing"
           @click="handleCheckout"
           class="w-full bg-brand-gold text-black py-4 text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-brand-goldHover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
          <i v-if="processing" class="ph ph-spinner animate-spin text-xl"></i>
          {{ processing ? 'Processing...' : 'Secure Checkout' }}
        </button>
        <p class="text-center text-[9px] text-white/40 tracking-[0.2em] uppercase opacity-60 mt-4">
           Taxes & shipping calculated at checkout
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '~/composables/useCart'

const { cart, isCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()

const processing = ref(false)
const successState = ref(false)

const handleCheckout = () => {
  processing.value = true
  setTimeout(() => {
    processing.value = false
    successState.value = true
    cart.value = [] // clear cart
  }, 2000)
}

const closeAndReset = () => {
  isCartOpen.value = false
  setTimeout(() => {
    successState.value = false
  }, 500)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(197, 160, 89, 0.2); 
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(197, 160, 89, 0.5); 
}
</style>
