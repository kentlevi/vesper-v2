import { ref, computed } from 'vue'

export const isCartOpen = ref(false)
export const cart = ref([])

export function useCart() {
  const addToCart = (product) => {
    const existing = cart.value.find(item => item.name === product.name)
    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
    isCartOpen.value = true
  }

  const removeFromCart = (productName) => {
    cart.value = cart.value.filter(item => item.name !== productName)
  }

  const updateQuantity = (productName, quantity) => {
    const item = cart.value.find(item => item.name === productName)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productName)
      } else {
        item.quantity = quantity
      }
    }
  }

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''))
      return total + (price * item.quantity)
    }, 0).toFixed(2)
  })

  const cartCount = computed(() => {
    return cart.value.reduce((count, item) => count + item.quantity, 0)
  })

  return {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount
  }
}
