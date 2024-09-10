<script setup>
import { onBeforeMount, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import productsStore from "./stores/products/productsStore.js";

// GET PRODUCTS DATA AT START //
onBeforeMount(() => {
  productsStore.dispatch("getDataAtStart");
});

// SCROOL TO TOP WHEN PAGE CHANGE //
const route = useRoute();

watch(() => route.path, (newPath) => {
  window.scrollTo({ top: 0})
});

</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
