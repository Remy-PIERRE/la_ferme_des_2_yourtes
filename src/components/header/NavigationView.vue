<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

// ROUTING //
const router = useRouter();

// PROPS && HANDLERS //
const props = defineProps(["isHeaderEffectOn"]);

// HANDLE NAVIGATION VISUAL EFFECT //
const isNavigationEffectOnRef = ref(false);

watch(() => props.isHeaderEffectOn, (newState) => {
    // activate effect //
    if (newState) {
        isNavigationEffectOnRef.value = true;
    }
    // desactivate effect //
    else {
        isNavigationEffectOnRef.value = false;
    }
})

// MOBILE NAV //
const isMobileNavigationOpenedRef = ref(false);

function toggleMobileNavigation() {
    isMobileNavigationOpenedRef.value = !isMobileNavigationOpenedRef.value;
}

// HANDLE LOGO //
function handleLogoClick() {
    router.push("/");
}
</script>

<template>
    <div class="header--wrapper wrapper" :class="isNavigationEffectOnRef ? 'activated' : null">
        <img
            v-if="!isNavigationEffectOnRef"
            src="../../assets/images/ferme_logo.png"
            alt="logo"
            class="header--logo"
            @click="handleLogoClick"/>
        <img
            v-else
            src="../../assets/images/ferme_logo_white.png"
            alt="logo"
            class="header--logo"
            @click="handleLogoClick"/>

        <img
            v-if="!isNavigationEffectOnRef"
            @click="toggleMobileNavigation"
            src="../../assets/images/menu.png"
            alt="icone"
            class="mobile--menu--icon" />
        <img
            v-else
            @click="toggleMobileNavigation"
            src="../../assets/images/menu_white.png"
            alt="icone"
            class="mobile--menu--icon" />

        <section class="header--nav--mobile" :class="isMobileNavigationOpenedRef ? 'opened' : null">
            <div class="mobile--nav--top">
                <img
                    src="../../assets/images/ferme_logo.png"
                    alt="logo"
                    class="mobile--nav--logo" />
            </div>

            <nav class="mobile--nav">
                    <a @click="() => router.push('/')">ACCUEIL</a>
                    <a @click="() => router.push('/boutique')">BOUTIQUE</a>
                    <a @click="() => router.push('/a-propos')">&Agrave; PROPOS</a>
                </nav>

            <div class="mobile--nav--socials">
                <a href="#">
                    <img src="../../assets/images/facebook.png" alt="logo" />
                </a>
                <a href="#">
                    <img src="../../assets/images/instagram.png" alt="logo" />
                </a>
            </div>
        </section>

        <nav class="header--nav--desk">
            <a @click="() => router.push('/')">ACCUEIL</a>
            <a @click="() => router.push('/boutique')">BOUTIQUE</a>
            <a @click="() => router.push('/a-propos')">&Agrave; PROPOS</a>
        </nav>
    </div>
</template>

<style scoped>
.header--wrapper {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;  
    position: relative;  

    &.activated {
        .header--nav--desk a {
            color: #fff;
            border-color: #fff;
        }

        .header--wrapper {
            padding-top: 4px;
            padding-bottom: 4px;
        }

        .header--logo {
            height: 40px;
        }

        .mobile--menu--icon {
            height: 24px;
        }

        .header--nav--desk a:after {
                    background: #fff;
                    height: 2px;
                    bottom: 4px;
        }
    }
}

.header--logo {
    height: 60px;
    width: auto;
    transition: opacity 0.4s;
    cursor: pointer;
}

.mobile--menu--icon {
    height: 32px;
    width: auto;
}

.header--nav--mobile {
    height: 100vh;
    width: 80%;
    padding: 60px 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    box-shadow: 4px 4px 4px rgba(0, 0, 0,0.5);
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 10;
    transition: all 0.4s ease-in-out;

    &.opened {
        left: 0;
    }
}

.mobile--nav--top {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.mobile--nav--logo {
    height: 80px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

.mobile--nav {
    display: flex;
    flex-direction: column;

    a {
        font-size: 1.4rem;
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;
        height: 60px;
        border-bottom: 2px solid #333;

        &:last-child {
            border: none
        }
    }
}

.mobile--nav--socials {
    display: flex;
    align-items: center;
    gap: 40px;

    a{
        display: flex;
        align-items: center;
    }

    img {
        height: 40px;
        width: auto;
    }
}

.header--nav--desk {
    display: none;
}

@media(min-width: 769px) {
    .mobile--menu--icon {
        display: none;
    }

    .header--nav--mobile {
        display: none;
    }

    .header--nav--desk {
        display: flex;
        align-items: center;

        a {
            font-size: 1.4rem;
            font-weight: bold;
            color: #333;
            display: flex;
            align-items: center;
            padding: 4px 20px;
            border-right: 2px solid #333;
            transition: all 0.4s;
            position: relative;
    
            &:last-child {
                border: none
            }

            &:after {
                content: "";
                width: calc(100% - 28px);
                max-width: 0;
                height: 4px;
                background: #333;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
                transition: all 0.4s;
            }

            &:hover::after {
                max-width: 200px;                
            }
        }
    }
}
</style>
