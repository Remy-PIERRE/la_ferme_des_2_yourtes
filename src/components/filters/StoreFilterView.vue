<script setup>
import { ref } from "vue";
import productsStore from "../../stores/products/productsStore";
import StoreFilterInputView from "./inputs/StoreFilterInputView.vue";
import StoreFilterSelectView from "./selects/StoreFilterSelectView.vue";
import StoreFilterCheckboxView from "./checkboxes/StoreFilterCheckboxView.vue";


// HANDLE OPEN / CLOSE && ICON TRANSITION //
const isFilterOpenRef = ref(false);

function handleOpening() {
    isFilterOpenRef.value = !isFilterOpenRef.value;
}

// HANDLE SELECTS OPENING //
const openedSelectRef = ref("");

function handleOpeningSelect(category) {
    if (openedSelectRef.value === category) {
        openedSelectRef.value = "";
    }
    else {
        openedSelectRef.value = category;
    }
}

</script>

<template>
    <section class="storeFilter--container container">
        <div class="storeFilter--wrapper wrapper"  :class="isFilterOpenRef ? 'opened' : null">
            <div class="storeFilter--main" @click="handleOpening">
                <h3>Rechercher</h3>
                <img src="../../assets/images/triangle.png" :class="isFilterOpenRef ? 'reversed' : null" alt="Icone d'un triangle pour ouvrir ou fermer le menu de recherche">
            </div>

            <div class="storeFilter--list--wrapper">
                <StoreFilterInputView />
                <StoreFilterSelectView v-for="category of productsStore.getters.getCategories" :category="category" :state="openedSelectRef" @opening="handleOpeningSelect" />
                <StoreFilterCheckboxView />
            </div>
        </div>
        
    </section>
</template>

<style scoped>
.storeFilter--container {
    padding: 0 20px;
    margin-bottom: 40px;
}

.storeFilter--wrapper {
    max-height: 60px;
    border: 2px outset #333;
    border-radius: 4px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;

    &.opened {
        max-height: 500px;
    }
}

.storeFilter--main {
    width: 100%;
    height: 60px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-size: 1.4rem;
    }

    img {
        height: 20px;
        width: auto;
        transition: transform 0.4s ease-in-out;

        &.reversed {
            transform: rotate(180deg);
        }
    }
}

.storeFilter--list--wrapper {
    width: 100%;
    padding: 12px 2px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
