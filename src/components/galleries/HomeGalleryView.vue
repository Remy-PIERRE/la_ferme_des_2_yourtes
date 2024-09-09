<script setup>
import SectionTitleView from '../titles/SectionTitleView.vue';
import ProductCardView from '../cards/ProductCardView.vue';
import productsStore from '../../stores/products/productsStore';

// TODO => limit card display //

// SETTINGS //
const sectionTtitle = "Notre séléction";
const sectionImages = ["textile-decoratif.png", "textile.png"];
</script>

<template>
    <article class="shop--container container section">
        <div class="shop--wrapper wrapper">
            <SectionTitleView :title="sectionTtitle" :images="sectionImages" />

            <div class="shop--grid" id="shopGridFav">
                <ProductCardView v-for="(product, index) of productsStore.state.products" :key="product.id" :product="product" />
            </div>
        </div>
    </article>
</template>

<style scoped>
.shop--grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: center;
}

@media (min-width: 679px) {
    .shop--grid{
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 976px) {
    .shop--grid{
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1280px) {
    .shop--grid{
        grid-template-columns: repeat(4, 1fr);
        gap: 40px
    }
}
</style>
