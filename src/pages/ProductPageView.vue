<script setup>
import { watch } from "vue";
import { useRoute } from 'vue-router';
import HeaderView from '../components/header/HeaderView.vue';
import PageTitleView from '../components/titles/PageTitleView.vue';
import ProductCarrouselView from '../components/carrousels/ProductCarrouselView.vue';
import ProductDescriptionView from '../components/product/ProductDescriptionView.vue';
import OthersProductsView from '../components/product/OthersProductsView.vue';
import productsStore from '../stores/products/productsStore';
import FooterView from "../components/footer/FooterView.vue";

// GET PRODUCT //
const route = useRoute();
const id = route.params;
const product = productsStore.getters.getProductById(id);
const othersProducts = productsStore.getters.getOthersProductsByCurrentId(id);

watch(route, (newId) => {
    console.log("id : ", newId);
    location.reload();
})

console.log("product : ", product.id)

// DEV //
function cleanStorage() {
    window/localStorage.setItem("products", "");
    productsStore.dispatch("getDataAtStart");
}

</script>

<template>    
    <HeaderView />

    <!-- <button @click="cleanStorage">clean data</button> -->

    <div class="wrapper">
        <PageTitleView :title="product.title" />
        <ProductCarrouselView :product />
        <ProductDescriptionView :product />
    </div>
    
    <OthersProductsView :othersProducts />

    <FooterView />
</template>

<style scoped>
</style>
