import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "../pages/HomePageView.vue";
import AboutPageView from "../pages/AboutPageView.vue";
import StorePageView from "../pages/StorePageView.vue";
import ProductPageView from "../pages/ProductPageView.vue";
import NotFoundedPageView from "../pages/NotFoundedPageView.vue";

const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePageView,
	},
	{
		path: "/a-propos",
		name: "AboutPage",
		component: AboutPageView,
	},
	{
		path: "/boutique",
		name: "StorePage",
		component: StorePageView,
	},
	{
		path: "/produit/:id",
		name: "ProductPage",
		component: ProductPageView,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFoundedPage",
		component: NotFoundedPageView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
