<script setup>
import ProductCardView from '../cards/ProductCardView.vue';

// PROPS && HANDLERS //
const props = defineProps(["othersProducts"]);
const othersProducts = props.othersProducts;

console.log("othersProducts : ", othersProducts.map(p => p.id));

</script>

<template>
    <section class="othersProducts--wrapper wrapper">
        <h2 class="othersProducts--title">Autres produits</h2>

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
