<script setup>
import { ref, watch } from 'vue';

// PROPS && HANDLERS //
const props = defineProps(["isHeaderEffectOn"]);

// handle banner visual effect according to header state //
const isBannerEffectOnRef = ref(false);

watch(() => props.isHeaderEffectOn, (newState) => {
    // activate effect //
    if (newState) {
        isBannerEffectOnRef.value = true;
    }
    // desactivate effect //
    else {
        isBannerEffectOnRef.value = false;
    }
})
</script>

<template>
    <section class="banner--container container" :class="isBannerEffectOnRef ? 'reduced' : null">
			<div class="banner--wrapper wrapper">
				<div class="banner--socials">
					<a href="#">
						<img src="../../assets/images/facebook_white.png" alt="logo" />
					</a>
					<a href="#">
						<img src="../../assets/images/instagram_white.png" alt="logo" />
					</a>
				</div>

				<div class="banner--info">
					<a href="#">
						<img src="../../assets/images/mail_white.png" alt="icone" />
						docchatminou@exemple.com
					</a>
					<a href="#">
						<img src="../../assets/images/phone_white.png" alt="icone" />
						06 01 02 03 04
					</a>
				</div>
			</div>
		</section>
</template>

<style scoped>
.banner--container {
    background-color: var(--bg-main);
    max-height: 1000px;
    overflow: hidden;
    transition: max-height 0.2s;

    &.reduced {
        max-height: 0;
    }
}

.banner--wrapper {
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    align-items: center;
}

.banner--socials {
    display: none;
}

.banner--info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        gap: 8px;

        font-size: 0.8rem;
        color: #fff;

        img {
            height: 14px;
            width: auto;
        }
    }
}

@media (max-width: 400px) {
    .banner--info {
        a {
            font-size: 0.6rem;
    
            img {
                height: 12px;
            }
        }
    }
}

@media (min-width: 769px) {
    .banner--wrapper {
        justify-content: space-between;
    }

    .banner--socials {
        display: flex;
        align-items: center;
        gap: 20px;

        img {
            height: 20px;
            width: auto;
        }
    }

    .banner--info {
        width: fit-content;
        justify-content: flex-end;
        gap: 20px;
    }
}
</style>
