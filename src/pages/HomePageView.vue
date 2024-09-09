<script setup>
import HeaderView from "../components/header/HeaderView.vue";
import PageTitleView from "../components/titles/PageTitleView.vue";
import HomeCarrouselView from "../components/carrousels/HomeCarrouselView.vue";
import HomeGalleryView from "../components/galleries/HomeGalleryView.vue";
import HomeContactView from "../components/contact/HomeContactView.vue";
import FooterView from "../components/footer/FooterView.vue";

// SETTINGS //
const pageTitle = "La ferme des 2 yourtes";
</script>

<template>
    <HeaderView />
    <PageTitleView :title="pageTitle" />
    <HomeCarrouselView />
    <HomeGalleryView />
    <HomeContactView />
    <FooterView />
</template>

<style scoped>

</style>
