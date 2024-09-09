<script setup>
import HeaderView from '../components/header/HeaderView.vue';
import PageTitleView from "../components/titles/PageTitleView.vue";
import AboutSectionView from '../components/about/AboutSectionView.vue';
import FooterView from "../components/footer/FooterView.vue";
import aboutSettings from "../assets/json/aboutSettings.json";

// SETTINGS //
const pageTitle = "Bienvenue à la ferme";

</script>

<template>
    <HeaderView />
    <PageTitleView :title="pageTitle" />
    <AboutSectionView v-for="section of aboutSettings" :data="section" />
    <FooterView />
</template>

<style scoped>
</style>
