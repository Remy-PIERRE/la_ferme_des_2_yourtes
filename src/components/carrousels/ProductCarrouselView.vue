<script setup>
import { ref } from "vue";

// SETTINGS //
const transitionDuration = 500; // ms

// PROPS && HANDLERS //
const props = defineProps(["product"]);
const product = props.product;

// HANDLE DISPLAY SELECTED IMAGE //
const imageSelectedRef = ref(0);

// HANDLE SELECT IMAGE TRANSITION //
const isInTransition = ref(false);

function handleSelectImage(index) {
    // used for img class //
    isInTransition.value = true;

    // when transition ok, change to selected image and clear transition //
    setTimeout(() => {
            imageSelectedRef.value = index;
            isInTransition.value = false;
        }, transitionDuration / 2);
}


</script>

<template>
    <section class="carrousel--container container" v-if="product.images">
        <div class="carrousel--wrapper">
            <div class="carrousel--cache">
                <div class="carrousel--section" >
                    <img :src="'/images/' + product.images[imageSelectedRef]" :alt="product.description" :class="isInTransition && 'transition'"  />
                </div>
            </div>

            <div class="carrousel--resume">
                <img v-for="(image, index) of product.images" 
                    :src="'/images/' + product.images[index]" 
                    alt="product.description"
                    @click="() => handleSelectImage(index)">
            </div>
        </div>
    </section>
</template>

<style scoped>
.carrousel--wrapper {
    width: 100%;
    margin-bottom: 32px;
}

.carrousel--cache {
    width: 100%;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
}

.carrousel--section {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        transition: opacity 0.5s;

        &.transition {
            opacity: 0;
        }
    }
}

.carrousel--resume {
    width: 100%;
    height: 100px;
    margin-top: 20px;
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;

    img {
        width: auto;
        height: 100%;
        object-fit: fill;
    }
}

@media (min-width: 976px) {
    .carrousel--wrapper {
        border-right: 1px solid #333;
        display: flex;
        margin-bottom: 60px;
    }

    .carrousel--section {
        border-right: 1px solid #333;
        padding-right: 20px;
    }

    .carrousel--cache {
        box-shadow: none;
    }

    .carrousel--resume {
        width: 200px;
        height: 100%;
        margin-top: 0;
        padding: 12px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        border-top: none;
        border-bottom: none;

    img {
        width: 100%;
        height: auto;
        object-fit: fill;
    }
}
}
</style>
