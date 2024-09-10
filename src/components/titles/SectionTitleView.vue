<script setup>
// PROPS && HANDLERS //
const props = defineProps(["title", "images"]);

</script>

<template>
     <div class="article--title">
        <img v-if="props.images[0] === 'textile-decoratif.png'" src="../../assets/images/textile-decoratif.png" alt="deco" />
        <img v-if="props.images[0] === 'textile.png'" src="../../assets/images/textile.png" alt="deco" />
        <img v-if="props.images[0] === 'textiles.png'" src="../../assets/images/textiles.png" alt="deco" />
        <h2>{{ props.title }}</h2>
        <img v-if="props.images[1] === 'textile-decoratif.png'" src="../../assets/images/textile-decoratif.png" alt="deco" />
        <img v-if="props.images[1] === 'textile.png'" src="../../assets/images/textile.png" alt="deco" />
        <img v-if="props.images[1] === 'textiles.png'" src="../../assets/images/textiles.png" alt="deco" />
    </div>
</template>

<style scoped>
.article--title {
    position: relative;
    margin-bottom: 28px;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px outset rgb(4 47 46);
    border-radius: 20px;
    background: rgba(4, 47, 46, 0.2);
    box-shadow: 4px 4px 4px rgba(0,0, 0, 0.5);

    h2 {
        width: fit-content;
        max-width: 70%;
        font-size: 1.6rem;
        font-weight: bold;
        color: #333;
        text-align: center;
        font-family: var(--family-title);
    }

    img {
        width: 24px;
        height: auto;
    }
}

@media (min-width: 976px) {
    .article--title {
        margin-bottom: 40px;

        h2 {
            font-size: 2rem;
        }

        img {
        width: 32px;
    }
    }
}
</style>
