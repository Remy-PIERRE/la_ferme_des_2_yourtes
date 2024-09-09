<script setup>
import { ref } from "vue";
import productsStore from "../../../stores/products/productsStore";

// TODO => send data to store //

// HANDLE CHECKBOXES //
const allCheckboxRef = ref(true);
const childrenCheckboxRef = ref(false);
const womenCheckboxRef = ref(false);
const menCheckboxRef = ref(false);

function handleCheckboxClick(checkbox) {
    // if "all", uncheck other boxes //
    if (checkbox === "all") {
        allCheckboxRef.value = true;
        childrenCheckboxRef.value = false;
        womenCheckboxRef.value = false;
        menCheckboxRef.value = false;
    }

    else {
        // uncheck "all" box //
        allCheckboxRef.value = false;

        // check or uncheck selected box according current state //
        if (checkbox === "children") {
            childrenCheckboxRef.value = childrenCheckboxRef.value ? false : true;
        }
        else if (checkbox === "women") {
            womenCheckboxRef.value = womenCheckboxRef.value ? false : true;
        }
        else if (checkbox === "men") {
            menCheckboxRef.value = menCheckboxRef.value ? false : true;
        }
    }

    // if all are uncheck, check "all" box //
    if (
        !allCheckboxRef.value &&
        !childrenCheckboxRef.value &&
        !womenCheckboxRef.value &&
        !menCheckboxRef.value
    ) {
        allCheckboxRef.value = true;
    }

    // setup values for store //
    const value = [];

    if (allCheckboxRef.value) {
        value.push("");
    }
    if (childrenCheckboxRef.value) {
        value.push("children");
    }
    if (womenCheckboxRef.value) {
        value.push("women");
    }
    if (menCheckboxRef.value) {
        value.push("men");
    }

    // send data to store //
    productsStore.dispatch("filterProducts", {
        name: "genders",
        value,
    })
}

</script>

<template>
    <section class="filterCheckbox--wrapper">
        <div class="filterCheckbox--section" >
            <h3>Tous</h3>
            <div class="filterCheckbox--box" @click="() => handleCheckboxClick('all')">
                <div v-if="allCheckboxRef" class="filterCheckbox--content"></div>
            </div>
        </div>

        <div class="filterCheckbox--section">
            <h3>Enfants</h3>
            <div class="filterCheckbox--box" @click="() => handleCheckboxClick('children')">
                <div v-if="childrenCheckboxRef" class="filterCheckbox--content"></div>
            </div>
        </div>

        <div class="filterCheckbox--section">
            <h3>Femmes</h3>
            <div class="filterCheckbox--box" @click="() => handleCheckboxClick('women')">
                <div v-if="womenCheckboxRef" class="filterCheckbox--content"></div>
            </div>
        </div>

        <div class="filterCheckbox--section">
            <h3>Hommes</h3>
            <div class="filterCheckbox--box" @click="() => handleCheckboxClick('men')">
                <div v-if="menCheckboxRef" class="filterCheckbox--content"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.filterCheckbox--wrapper {
    width: clamp(200px, 100%, 600px);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filterCheckbox--section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    h3 {
        font-size: 0.8rem;
    }
}

.filterCheckbox--box {
    height: 20px;
    aspect-ratio: 1 / 1;
    border: 2px inset #333;
    border-radius: 4px;
}

.filterCheckbox--content {
    width: 100%;
    height: 100%;
    background: var(--bg-main);
}
</style>
