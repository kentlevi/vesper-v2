<template>
  <div id="top" class="min-h-screen selection:bg-brand-gold selection:text-brand-bg">
    <!-- Navigation -->
    <Navbar />

    <!-- Cart Sidebar -->
    <CartSidebar />

    <!-- Hero Section with Features Bar -->
    <Hero />

    <!-- Our Story Section -->
    <StorySection />

    <!-- Signature Products Grid -->
    <ProductGrid />

    <!-- The Journey / Process Section -->
    <ProcessSection />

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- Why Choose Us Section -->
    <WhyChooseUs />

    <!-- Visit Us / Sanctuary Section -->
    <VisitUs />

    <!-- Contact CTA Footer -->
    <CTAFooter />

    <!-- Main Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
</script>

<style>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for premium look */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #18100A;
}
::-webkit-scrollbar-thumb {
  background: #322318;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #D4AF37;
}
</style>
