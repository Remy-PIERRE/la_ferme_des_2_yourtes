<script setup>
import SectionTitleView from "../titles/SectionTitleView.vue";
import ProductCardView from '../cards/ProductCardView.vue';

// SETTINGS //
const sectionTitle = "Produits similaires";
const sectionImages = ["textile-decoratif.png", "textile.png"];

// PROPS && HANDLERS //
const props = defineProps(["othersProducts"]);
const othersProducts = props.othersProducts;

</script>

<template>
    <section class="othersProducts--wrapper wrapper">
        <SectionTitleView :title="sectionTitle" :images="sectionImages" />

        <div class="othersProducts--grid">
            <ProductCardView v-for="product of othersProducts" :product/>
        </div>
    </section>
</template>

<style scoped>
.othersProducts--wrapper {
    width: 100%;
    padding: 20px;
    margin-bottom: 40px;
}

.othersProducts--title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 12px;
}

.othersProducts--grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

@media (min-width: 976px) {
    .othersProducts--title {
        font-size: 1.8rem;
        margin-bottom: 32px;
    }
}
</style>
