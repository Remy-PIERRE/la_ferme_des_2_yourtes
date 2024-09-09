<script setup>
import { useRouter } from 'vue-router';

// instance router //
const router = useRouter();

// PROPS && HANDLERS //
const props = defineProps(["data"]);
</script>

<template>
    <div class="carrousel--template--wrapper">
        <div class="carrousel--image">
            <img :src="`/images/${props.data.image}`" :alt="props.data.description" />
        </div>
        <div class="carrousel--content">
            <h2>{{ props.data.title }}</h2>
            <h3>{{ props.data.description }}</h3>
            <div v-if="props.data.cta" class="carrousel--cta">
                <a @click="() => router.push(props.data.cta.page)">{{ props.data.cta.text }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carrousel--template--wrapper {
    height: 100%;
    aspect-ratio: 3 / 2;
    position: relative;
}

.carrousel--image {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.carrousel--content {
    width: 100%;
    padding: 10px 28px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    animation-timing-function: center;
    gap: 4px;
    background: rgba(0, 0, 0, 0.3);

    h2 {
        font-size: 1.4rem;
        color: #fff;
        text-align: center;
    }

    h3 {
        font-size: 1rem;
        color: #fff;
        text-align: center;
    }
}

.carrousel--cta a {
    width: fit-content;
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    border: 1px outset #333;
    border-radius: 2px;
    background-color: rgb(4 47 46);
    font-size: 1rem;
    color: #fff;
    position: relative;
    z-index: 2;
}
</style>
