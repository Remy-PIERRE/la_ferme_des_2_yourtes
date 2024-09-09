<script setup>
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import productsStore from "./stores/products/productsStore.js";

// TODO => put settings in json for all pages (ex: pageTitle) //
// TODO => go to top of page when change //

// GET PRODUCTS DATA AT START //
onBeforeMount(() => {
  productsStore.dispatch("getDataAtStart");
});

</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
