<script setup>
import { onMounted } from 'vue';
import Header from '@/components/Common/Header.vue';
import Footer from './components/Common/Footer.vue'
import { fetchData } from '@/services/Services';

// Llamada al método al crear el componente
onMounted(() => {
  fetchDataFromApi();
});

async function fetchDataFromApi() {
  try {
    const data = await fetchData();
    console.log('Datos de la API:', data);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}
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