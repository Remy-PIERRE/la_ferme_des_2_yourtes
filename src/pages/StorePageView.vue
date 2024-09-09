<script setup>
import HeaderView from "../components/header/HeaderView.vue";
import FooterView from "../components/footer/FooterView.vue";
import PageTitleView from "../components/titles/PageTitleView.vue";
import StoreFilterView from "../components/filters/StoreFilterView.vue";
import StoreGalleyView from "../components/galleries/StoreGalleyView.vue";
import StorePaginationView from "../components/pagination/StorePaginationView.vue";

// SETTINGS //
const pageTitle = "La Boutique";

</script>

<template>
    <HeaderView />
    <PageTitleView :title="pageTitle" />
    <StoreFilterView />
    <StoreGalleyView />
    <StorePaginationView />
    <FooterView />
</template>

<style scoped>
</style>
