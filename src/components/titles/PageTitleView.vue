<script setup>
// PROPS && HANDLERS //
const props = defineProps(["title"]);
</script>

<template>
    <section class="page--title">
        <h1>{{ props.title }}</h1>

        <div class="page--title--images">
            <img src="../../assets/images/winter.png" alt="icon" />
            <img src="../../assets/images/spring.png" alt="icon" />
            <img src="../../assets/images/summer.png" alt="icon" />
            <img src="../../assets/images/automn.png" alt="icon" />
        </div>
    </section>
</template>

<style scoped>
.page--title {
    position: relative;
    padding: 40px 0 16px;
    margin-bottom: 60px;

    h1 {
        font-size: 2.4rem;
        font-weight: bold;
        color: #333;
        text-align: center;
        font-family: var(--family-title);
    }

    &:before {
        content: "";
        height: 4px;
        width: clamp(280px, 60%, 600px);
        background-color: rgb(4 47 46);
        border-radius: 8px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }
}

.page--title--images {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    position: absolute;
    bottom: 1px;
    left: 50%;
    transform: translate(-50%, 50%);

    img {
        height: 20px;
        width: auto;
    }
}

@media (min-width: 976px) {
    .page--title {
        margin-bottom: 80px;

        h1 {
            font-size: 2.8rem;
        }
    }
}
</style>
