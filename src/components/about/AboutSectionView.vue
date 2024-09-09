<script setup>
import SectionTitleView from '../titles/SectionTitleView.vue';

// PROPS && HANDLERS //
const props = defineProps(["data"]);
const { title, decoration, image, text } = props.data;

</script>

<template>
    <article class="article--container container section">
        <div class="article--wrapper wrapper">
            <SectionTitleView :title="title" :images="decoration" />

            <div class="article--content">
                <div class="article--image">
                    <img :src="'/images/' + image" :alt="title" />
                </div>

                <div class="article--text">
                    <p v-for="paraph of text">{{ paraph }}</p>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.article--image {
    width: clamp(200px, 100%, 400px);
    aspect-ratio: 3 / 2;
    margin: auto;
    overflow: hidden;
    border: 2px outset rgb(4 47 46);
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.article--content {
    p {
        font-size: 1rem;
        color: #333;
        margin-bottom: 12px;
    }
}

@media (min-width: 976px) {
    .article--wrapper {
        position: relative;
        margin-bottom: 60px;
    }    

    .article--content {
        display: flex;
        justify-content: center;
        gap: 20px;

        p {
            font-size: 1.2rem;
        }
    }

    .article--text {
        width: 60%;
        position: relative;
        top: 20px;
    }

    .article--image {
        width: clamp(200px, 40%, 400px);
    }

    .article--container:nth-child(even) {
        .article--image {
            order: 2;
        } 
    }
}
</style>
