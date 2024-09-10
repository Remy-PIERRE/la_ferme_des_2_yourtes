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

// FORCE PAGE RELOAD WHEN SELECT OTHER PRODUCT //
watch(route, (newId) => {
    location.reload();
});
</script>

<template>    
    <HeaderView />

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
