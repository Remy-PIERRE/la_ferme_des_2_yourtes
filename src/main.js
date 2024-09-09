import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import productsStore from "./stores/products/productsStore";

createApp(App).use(router).use(productsStore).mount("#app");
