<script setup>
import ProductCardView from "../cards/ProductCardView.vue";
import productsStore from "../../stores/products/productsStore";

// TODO => limit card display //
// TODO => if needed = pagination //

</script>

<template>
    <section class="gallery--content wrapper">
        <div class="gallery--content--grid">
            <ProductCardView v-for="product of productsStore.state.productsFiltered" :key="product.id" :product="product" />
        </div>
    </section>
</template>

<style scoped>
.gallery--content--grid{
    padding-top: 20px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: center;
}

@media (min-width: 679px) {
    .gallery--content--grid{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1280px) {
    .gallery--content--grid{
        grid-template-columns: repeat(3, 1fr);
        gap: 40px
    }
}
</style>
