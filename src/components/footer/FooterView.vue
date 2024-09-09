<script setup>
import { useRouter } from 'vue-router';

// routing //
const router = useRouter();
</script>

<template>
    <footer class="footer--container container">
        <div class="footer--wrapper wrapper">
            <div class="footer--socials">
                <a href="#">
                    <img src="../../assets/images/facebook_white.png" alt="logo" />
                </a>
                <a href="#">
                    <img src="../../assets/images/instagram_white.png" alt="logo" />
                </a>
            </div>

            <nav class="footer--nav">
                <a @click="() => router.push('/')">ACCUEIL</a>
                <a @click="() => router.push('/boutique')">BOUTIQUE</a>
                <a @click="() => router.push('/a-propos')">&Agrave; PROPOS</a>
            </nav>

            <div class="footer--info">
                <a href="#">Mentions légales</a>
                <a href="#">Copyrights</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer--container {
    position: relative;
    background: #042F2E;
}

.footer--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 40px;
    padding-bottom: 32px;
}

.footer--socials {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        height: 32px;
        width: auto; 
    }
}

.footer--nav {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 20px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        border-right: 2px solid #fff;

        &:last-child {
            border: none;
        }
    }
}

.footer--info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        font-size: 1rem;
        color: #fff;
    }
}

@media (max-width: 420px) {
    .footer--nav {
        a {
            padding: 4px 16px;
            font-size: 1rem;
            white-space: nowrap;
        }
    }
}
</style>
