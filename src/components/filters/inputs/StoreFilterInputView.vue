<script setup>
import { ref } from "vue";
import productsStore from "../../../stores/products/productsStore";

// TODO => send data to store //

// HANDLE INPUT //
const inputRef = ref("");

function handleUserInput() {
    // TODO => sanitize //

        productsStore.dispatch("filterProducts", {
            name: "input",
            value: inputRef.value.toLowerCase(),
        })
    }

function resetInput() {
    inputRef.value = "";
    handleUserInput();
}
</script>

<template>
    <div class="filterInput--wrapper">
        <div class="filterInput--glass--wrapper">
            <img src="../../../assets/images/loupe.png" alt="icone d'une loupe pour indiquer le menu de recherche">
        </div>
        <input type="text" v-model="inputRef" @input="handleUserInput">
        <img src="../../../assets/images/croix.png" 
            alt="icone d'une croix pour réinitialiser le menu de recherche" 
            class="filterInput--cross"
            @click="resetInput">
    </div>
</template>

<style scoped>
.filterInput--wrapper {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        height: 40px;
        padding: 0 12px;
        font-size: 1.2rem;
        border: 1px solid #333;
        border-radius: 0 4px 4px 0;
    }
}

.filterInput--glass--wrapper {
    height: 40px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    border-right: none;
    border-radius: 4px 0 0 4px;

    img {
        height: 20px;
    }
    
}

.filterInput--cross {
    height: 16px;
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(0, 12px);
}
</style>
