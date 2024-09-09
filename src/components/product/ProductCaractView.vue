<script setup>
// PROPS && HANDLERS //
const props = defineProps(["title", "value"]);
</script>

<template>
    <div class="productDescription--caract">
        <h3>{{ title }} :</h3>
        <ul>
            <li v-for="line of value">{{ line }}</li>
        </ul>
    </div>
</template>

<style scoped>
.productDescription--caract {
    h3 {
        padding-left: 12px;
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 8px;
    }

    li {
        font-size: 1rem;
        line-height: 1.4;
        position: relative;
    }
}

@media (min-width: 976px) {
    .productDescription--caract {
        h3 {
            font-size: 1.8rem;
            margin-bottom: 12px;
        }

        li {
            font-size: 1.4rem;
        }
    }
}
</style>
