<script setup>
import SectionTitleView from '../titles/SectionTitleView.vue';

// SETTINGS //
const sectionTitle = "Nous rencontrer";
const sectionImages = ["textiles.png", "textile-decoratif.png"];
</script>

<template>
    <article class="contact--container container section">
        <div class="contact--wrapper wrapper">
            <SectionTitleView :title="sectionTitle" :images="sectionImages" class="contact--title" />

            <div class="contact--image">
                <img src="../../assets/images/yourte.webp" alt="deco" />
            </div>

            <div class="contact--hours">
                <h3>Accueil à la ferme</h3>
                <p>Du <strong>lundi</strong> au <strong>vendredi</strong>.</p>
                <p>De <strong>14h</strong> à <strong>18h</strong>.</p>
            </div>

            <div class="contact--info">
                <h3>Ou à distance</h3>
                <div>
                    <img src="../../assets/images/phone.png" alt="" />
                    <a href="#">06 01 02 03 04</a>
                </div>
                <div>
                    <img src="../../assets/images/mail.png" alt="" />
                    <a href="#">docchatminou@exemple.com</a>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.contact--wrapper {
    display: flex;
    flex-direction: column;

    .contact--hours, .contact--image {
        margin-bottom: 40px;
    }

    h3 {
        width: fit-content;
        padding: 0 12px;
        margin-left: 20px;
        font-size: 1.4rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 12px;
        position: relative;
        background: #fff;

        &:after {
            content: "";
            height: 3px;
            width: calc(100vw - 40px);
            border-radius: 8px;
            background: rgb(4 47 46);
            position: absolute;
            bottom: 14px;
            left: -20px;
            z-index: -1;
        }
    }
}

.contact--image {
    width: clamp(250px, 100%, 300px);
    max-height: 300px;
    margin: auto;
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 2px outset rgb(4 47 46);
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.contact--hours {
    order: 1;
    
    p {
        font-size: 1rem;
        color: #333;
    }
}

.contact--info {
    order: 3;

    div {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 6px;
    }

    img {
        height: 20px;
    }

    a {
        font-size: 1rem;
        color: #333;
    }
}

@media (min-width: 679px) {
    .contact--wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 40px;

        h3:after {
            width: calc(100vw / 2 - 50px) !important;
            max-width: 560px;
        }

        .contact--image {
            width: 100%;
            grid-area: 2 / 1 / 4 / 2;
            margin-bottom: 0;
        }
    }

    .contact--title {
        grid-area: 1 / 1 / 2 / 3;
    }    

    .contact--hours {
        grid-area: 2 / 2 / 3 / 3;
        align-self: center;

        p {
            font-size: 1.2rem;
        }
    }

    .contact--info {
        grid-area: 3 / 2 / 4 / 3;
        align-self: center;

        a {
            font-size: 1.2rem;
        }
    }
}

@media (min-width: 976px) {
    .contact--wrapper {
        h3:after {
            width: calc(100vw / 2 - 65px);
        }
    }
}

@media (min-width: 1280px) {
    .contact--wrapper {
        h3:after {
            width: calc(1280px / 2 - 65px);
        }
    }
}
</style>
