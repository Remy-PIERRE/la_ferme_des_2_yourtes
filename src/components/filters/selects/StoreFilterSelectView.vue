<script setup>
import { ref} from "vue";
import productsStore from "../../../stores/products/productsStore";

// TODO => send data to store //

// PROPS && HANDLERS //
const props = defineProps(["category", "state"]);
const { name, values } = props.category;
const emits = defineEmits(["opening"]);

// HANDLE OPEN / CLOSE FROM PARENT (StoreFilterView) //
function handleOpening() {
    emits("opening", name);
}

// HANDLE SELECTION //
const selectionValueRef = ref("");

function handleSelection(value) {
    // update value //
    selectionValueRef.value = value;

    // update soreproducts selected //
    productsStore.dispatch("filterProducts", {
        name,
        value,
    });

    // close select //
    handleOpening();
}
</script>

<template>
    <section class="filterSelect--container">
        <div class="filterSelect--wrapper" :class="props.state === name ? 'opened' : null">
            <div class="filterSelect--main" @click="handleOpening">
                <h3>{{ selectionValueRef !== "" ? selectionValueRef : name }}</h3>
                <img src="../../../assets/images/triangle.png" alt="Icone d'un triangle pour ouvrir ou fermer le menu de recherche de catégorie" :class="props.state === name ? 'reversed' : null">
            </div>

            <div class="filterSelect--list--wrapper">
                <h3 @click="() => handleSelection('')" 
                    class="filterSelect--list--value"
                    :class="selectionValueRef === '' ? 'selected' : null"
                    >aucun</h3>
                <h3 v-for="value of values"
                    @click="() => handleSelection(value)"
                    class="filterSelect--list--value"
                    :class="selectionValueRef === value ? 'selected' : null"
                    >
                    {{ value }}
                </h3>
            </div>
        </div>
    </section>
</template>

<style scoped>
.filterSelect--wrapper {
    max-height: 40px;
    border: 2px outset #333;
    border-radius: 4px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;

    &.opened {
        max-height: 500px;
    }
}

.filterSelect--main {
    width: 100%;
    height: 40px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-size: 1rem;
    }

    img {
        height: 12px;
        width: auto;
        transition: transform 0.4s ease-in-out;

        &.reversed {
            transform: rotate(180deg);
        }
    }
}

.filterSelect--list--wrapper {
    width: 100%;
    padding: 4px 0 12px;
    display: flex;
    flex-direction: column;
    gap: 4  px;
    font-size: 0.8rem;
}

.filterSelect--list--value {
    padding: 2px 12px;

    &.selected {
        background: var(--bg-main-screen);
    }
}
</style>
