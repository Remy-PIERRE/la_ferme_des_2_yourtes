<script setup>
import { onMounted, ref, watch } from "vue";
import HomeCarrouselSlideView from "./HomeCarrouselSlideView.vue";
import settings  from "../../assets/json/settings.json";

// SETTINGS //
const transitionDuration = 500; // ms
const autoSlideInterval = 7000; // ms

// HANDLE SLIDE TRANSITION //
const isCarrouselIntoTransition = ref("");

// @click on prev button //
function handlePrevSlide() {
    // only one transition at time //
    if (isCarrouselIntoTransition.value !== "") {
        return;
    }

    isCarrouselIntoTransition.value = "prev";
    handleResetTransition();
};

// @click on next button //
function handleNextSlide() {
     // only one transition at time //
     if (isCarrouselIntoTransition.value !== "") {
        return;
    }

    isCarrouselIntoTransition.value = "next";
    handleResetTransition();
};

// transition end //
function handleResetTransition() {
    // when transition end => update index && transition ref //
    setTimeout(() => {
        if (isCarrouselIntoTransition.value === "prev") {
            handlePrevIndex();
        }
        else if (isCarrouselIntoTransition.value === "next") {
            handleNextIndex();
        }

        isCarrouselIntoTransition.value = "";
    }, transitionDuration);
}

// HANDLE SLIDE INDEX //
const slideTotal = settings.home_carrousel.length;
const slideIndexRef = ref(0);

// update to prev index //
function handlePrevIndex() {
    // update index ref value //
    if (slideIndexRef.value <= 0) {
        slideIndexRef.value = slideTotal - 1;
    }
    else {
        slideIndexRef.value = slideIndexRef.value - 1;
    }

    // order slides display //
    orderSlides();
}

// update to next index //
function handleNextIndex() {
    // update index ref value //
    if (slideIndexRef.value >= slideTotal - 1) {
        slideIndexRef.value = 0;
    }
    else {
        slideIndexRef.value = slideIndexRef.value + 1;
    }

    // order slides display //
    orderSlides();
}

// ORDER SLIDES //
const slidesRef = ref(settings.home_carrousel);

function orderSlides() {
    let index = slideIndexRef.value;
    const slidesProvisional = [];

    for (let i = 0; i < slideTotal; i++) {
        slidesProvisional.push(settings.home_carrousel[index]);

        if (index >= slideTotal - 1) {
            index = 0;
        }
        else {
            index++;
        }
    }

    slidesRef.value = slidesProvisional;
}

// AUTO GO TO NEXT SLIDE //
const timeoutRef = ref();

// first timeout //
onMounted(() => {
    timeoutRef.value = setTimeout(() => {
        handleNextSlide();
    }, autoSlideInterval);
})

// new timeout on transition end //
watch(() => isCarrouselIntoTransition.value, (newState) => {
    // clear already started timeout //
    if (timeoutRef.value) {
        clearTimeout(timeoutRef.value);
    }

    // start new timeout if slide isn't into transition //
    if (newState === "") {
        timeoutRef.value = setTimeout(() => {
            handleNextSlide();
        }, autoSlideInterval);
    }
})
</script>

<template>
    <section class="carrousel--container container section">
        <div class="carrousel--wrapper wrapper">
            <div class="carrousel--cache">
                <div class="carrousel--sections" :class="isCarrouselIntoTransition" >
                    <HomeCarrouselSlideView v-for="slide of slidesRef" :key="slide.id" :data="slide" />
                </div>
            </div>

            <div class="carrousel--buttons wrapper">
                <div @click="handlePrevSlide" class="carrousel--prev">
                    <img src="../../assets/images/triangle.png" alt="icone" />
                </div>
                <div @click="handleNextSlide" class="carrousel--next">
                    <img src="../../assets/images/triangle.png" alt="icone" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.carrousel--wrapper {
    width: 100%;
    position: relative;
}

.carrousel--cache {
    width: 100%;
    aspect-ratio: 3 / 2;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
}

.carrousel--sections {
    height: 100%;
    width: 200%;
    position: absolute;
    top: 0;
    left: -100%;
    display: flex;
    align-items: center;

    &.prev {
        transition: all 0.5s ease-in-out;
        left: 0;
    }

    &.next {
        transition: all 0.5s ease-in-out;
        left: -200%;
    }
}



.carrousel--buttons {
    width: calc(100% - 8px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    left: 4px;
    z-index: 1;
    
    div {
        height: 30px;
        aspect-ratio: 1 / 1;
        border: 1px outset #fff;
        border-radius: 100px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    img {
        height: 12px;
        width: auto;
        position: relative;       
    }

    .carrousel--prev img {
        transform: rotate(-90deg);
        left: -2px
    }

    .carrousel--next img {
        transform: rotate(90deg);
        left: 2px
    }
}

@media(min-width: 769px) {
    .carrousel--cache {
        aspect-ratio: 4 / 2;
    }

    .carrousel--template--wrapper {
        aspect-ratio: 4 / 2;
    }
}

@media(min-width: 976px) {
    .carrousel--cache {
        aspect-ratio: 5 / 2;
    }

    .carrousel--template--wrapper {
        aspect-ratio: 5 / 2;
    }

    .carrousel--content {
        padding: 20px 28px;
        gap: 4px;
    
        h2 {
            font-size: 1.8rem;
        }
    
        h3 {
            font-size: 1.2rem;
        }
    }

    .carrousel--cta a {
        margin: 12px auto 0;
        padding: 12px 20px;
        font-size: 1.2rem;
    }

    .carrousel--buttons {
        width: calc(100% - 20px);
        bottom: 28px;
        left: 10px;
        
        div {
            height: 40px;
        }
    
        img {
            height: 16px;
        }
    }
}
</style>
