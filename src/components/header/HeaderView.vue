
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BannerView from './BannerView.vue';
import NavigationView from './NavigationView.vue';

// handle header visual effect on scroll y //
const isHeaderEffectOnRef = ref(false);

// create listener //
onMounted(() => {
    window.addEventListener("scroll", handleWindowScroll);
})

// remove listener //
onUnmounted(() => {
    window.removeEventListener("scroll", handleWindowScroll);
})

// handle listener //
function handleWindowScroll() {
    // adapt to banner height //
    let scrollLimit;
    if (window.innerWidth <= 769) {
        scrollLimit = 44;
    } else {
        scrollLimit = 51;
    }

    // activate effect when user scroll down //
    if (window.scrollY > scrollLimit && !isHeaderEffectOnRef.value) {
        isHeaderEffectOnRef.value = true;
    }

    // desactivate effect when user scroll at top of the page
    else if (window.scrollY <= 0 && isHeaderEffectOnRef.value) {
        isHeaderEffectOnRef.value = false;
    }
};
</script>

<template>
    <header class="header--container container" :class="isHeaderEffectOnRef ? 'sticky' : null" id="headerContainer">
        <BannerView :isHeaderEffectOn="isHeaderEffectOnRef" />
        <NavigationView :isHeaderEffectOn="isHeaderEffectOnRef"  /> 
    </header>
</template>

<style scoped>
.header--container {
    background: #fff;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
    z-index: 10;
    position: sticky;
    top: 0;
    left: 0;
    transition: all 0.4s ease-in-out;

    &.sticky {
        background-color: var(--bg-main);
    }
}
</style>
