<script setup>
import ProductCaractView from './ProductCaractView.vue';

// SETTINGS //
const caracts = [
    {
        title: "Description",
        value: "description_2",
    },
    {
        title: "Composition",
        value: "composition",
    },
    {
        title: "Teintures",
        value: "teintures",
    },
    {
        title: "Lavage",
        value: "lavage",
    },
    {
        title: "Disponibilité",
        value: "disponibilite",
    },
    {
        title: "Prix",
        value: "price_details",
    },
]

// PROPS && HANDLERS //
const props = defineProps(["product"]);
const { product } = props;
</script>

<template>
    <section class="productDescription--wrapper">
        <h2 class="productDescription--title">{{ product.title }}</h2>

        <div class="productDescription--description">
            <p>{{ product.description_long }}</p>
        </div>

        <div class="productDescription--caracts wrapper">
            <ProductCaractView v-for="caract of caracts" :title="caract.title" :value="product[caract.value]" />
        </div>
    </section>
</template>

<style scoped>
.productDescription--title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 12px;
}

.productDescription--description {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 20px;
}

.productDescription--caracts {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 32px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px outset #333;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (min-width: 976px) {
    .productDescription--title {
        font-size: 1.8rem;
    }

    .productDescription--description {
        font-size: 1.4rem;
        margin-bottom: 32px;
    }
}
</style>
