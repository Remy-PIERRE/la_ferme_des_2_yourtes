<script setup>
import { useRouter } from 'vue-router';

// PROPS && HANDLERS //
const props = defineProps(["product"]);
const { product } = props; 

// ROUTER //
const router = useRouter();

// @click on card //
function goToProductDetails() {
    router.push(`/produit/${product.id}`);
}
</script>

<template>
    <a class="shop--template--wrapper" @click="goToProductDetails">
        <div class="shop--image">
            <img :src="'/images/' + product.image" :key="product.description" />
        </div>
        <div class="shop--content">
            <h2>{{ product.title }}</h2>
            <h3>{{ product.description }}</h3>
        </div>
    </a>
</template>

<style scoped>
.shop--template--wrapper {
    margin: auto;
    width: clamp(100px, 100%, 400px);
    aspect-ratio: 1 / 1;
    border: 2px outset rgb(4 47 46);
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;

    &:hover {
        img {
            width: 120%;
            height: 120%;
        }

        .shop--content {
            max-height: 200px;
        }
    }
}

.shop--image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;


    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: all 0.4s ease-in-out;
    }
}

.shop--content {
    width: 100%;
    max-height: 48px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    transition: all 0.4s ease-in-out;

    h2 {
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
    }

    h3 {
        font-size: 1rem;
        color: #fff;
    }
}
</style>
