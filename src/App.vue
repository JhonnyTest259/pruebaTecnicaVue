<script setup>
import Header from '@/components/Common/Header.vue';
import Footer from './components/Common/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
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