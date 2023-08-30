<script setup>
import Header from '@/components/Common/Header.vue';
import Footer from '@/components/Common/Footer.vue';
</script>

<template>
  <div id="app">
    <Header />
    <h1>Bienvenido a mi sitio</h1>
    <p>Explora nuestros productos y servicios.</p>
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: var(--primary-color);
  ;
}
</style>