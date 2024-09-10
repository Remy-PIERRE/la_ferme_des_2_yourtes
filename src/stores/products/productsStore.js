import { createStore } from "vuex";
import appSettings from "../../assets/json/settings.json";
import productsJson from "../../assets/json/products.json";

// SETTINGS //
const updateLimit = 24 * 60 * 60 * 1000; // 24h

export default createStore({
	// INITIAL STATES //
	state() {
		return {
			products: [],
			productsFiltered: [],
			filters: [],
		};
	},

	// MUTATIONS //
	mutations: {
		// update state products //
		update(state, payload) {
			const { data } = payload;

			state.products.length = 0;
			state.products = data;

			state.productsFiltered = data;
		},

		// update state filtered products //
		updateProductsFiltered(state, payload) {
			const { productsFiltered } = payload;

			state.productsFiltered = productsFiltered;
		},

		// update filter selection //
		updateFilters(state, payload) {
			const { name, value } = payload;

			const filter = state.filters.find((f) => f.name === name);

			// filter exists //
			if (filter) {
				state.filters.map((f) => {
					if (f.name === name) {
						f.value = value;
					}
				});
			}
			// filter doesn't exist //
			else {
				state.filters.push({
					name,
					value,
				});
			}
		},
	},

	// ACTIONS //
	actions: {
		// get data from local storage or json //
		getDataAtStart(context, payload) {
			// data are in local storage && time limit is valid //
			if (window.localStorage.getItem("products") && isStorageValid()) {
				const data = JSON.parse(window.localStorage.getItem("products"));
				context.commit("update", {
					data,
				});
			}

			// get data from json //
			else {
				const data = productsJson;
				context.commit("update", {
					data,
				});

				// update local storage //
				window.localStorage.setItem("products", JSON.stringify(data));
				window.localStorage.setItem("last_updated", JSON.stringify(Date.now()));
			}

			// check products data validation timing //
			function isStorageValid() {
				const lastUpdated = window.localStorage.getItem("last_updated");
				if (lastUpdated && lastUpdated + updateLimit > Date.now()) {
					return true;
				} else {
					return false;
				}
			}
		},

		filterProducts(context, payload) {
			// get payload //
			const { name, value } = payload;

			// update current filters //
			context.commit("updateFilters", {
				name,
				value,
			});

			// setup products //
			let productsFiltered = [...context.state.products];

			context.state.filters.map((f) => {
				// is input //
				if (f.name === "input" && f.value !== "") {
					productsFiltered = productsFiltered.filter(
						(p) =>
							p.title.toLowerCase().includes(f.value) ||
							p.description.toLowerCase().includes(f.value)
					);
				}

				// is array //
				else if (f.name.slice(-1) === "s" && f.value[0] !== "") {
					productsFiltered = productsFiltered.filter((p) => {
						if (p[f.name] && p[f.name].find((e) => f.value.includes(e))) {
							return p;
						}
					});
				}
				// is not array //
				else if (f.name.slice(-1) !== "s" && f.value !== "") {
					productsFiltered = productsFiltered.filter(
						(p) => p[f.name] === f.value
					);
				}
			});

			// update filtered products state //
			context.commit("updateProductsFiltered", {
				productsFiltered,
			});
		},
	},

	// GETTERS //
	getters: {
		getProductById:
			(state) =>
			({ id }) => {
				return state.products.find((p) => p.id == id);
			},

		getOthersProductsByCurrentId:
			(state) =>
			({ id }) => {
				const productCurrent = state.products.find((p) => +p.id === +id);
				const othersProducts = [];

				// get product with same type //
				const productsType = state.products.filter(
					(p) => p.type === productCurrent.type && +p.id !== +productCurrent.id
				);

				if (productsType.length > 0) {
					const productType =
						productsType[Math.floor(Math.random() * productsType.length)];
					othersProducts.push(productType);
				}

				// get product with same matiere //
				const productsMatiere = state.products.filter((p) => {
					for (const matiere of p.matieres) {
						if (
							productCurrent.matieres.includes(matiere) &&
							+p.id !== +id &&
							!othersProducts.find((o) => o.id === p.id)
						) {
							return p;
						}
					}
				});

				if (productsMatiere.length > 0) {
					const productMatiere =
						productsMatiere[Math.floor(Math.random() * productsMatiere.length)];
					othersProducts.push(productMatiere);
				}

				// get product with same gender //
				const productsGender = state.products.filter((p) => {
					if (othersProducts.find((o) => +o.id === +p.id)) {
						return null;
					}

					if (!productCurrent.genders || !p.genders) {
						return p;
					}

					for (const gender of p.genders) {
						if (
							productCurrent.genders.includes(gender) &&
							p.id !== id &&
							!othersProducts.find((o) => o.id === p.id)
						) {
							return p;
						}
					}
				});

				if (productsGender.length > 0) {
					const productGender =
						productsGender[Math.floor(Math.random() * productsGender.length)];
					othersProducts.push(productGender);
				}

				return othersProducts;
			},

		getCategories(state, payload) {
			// setup object //
			const categories = [];

			// get categories name from settings //
			const categoriesName = appSettings.filters_categories;

			categoriesName.map((name) => {
				// get categories values//
				let values;
				// is array //
				if (name.slice(-1) === "s") {
					values = [
						...new Set(productsJson.reduce((a, b) => a.concat(b[name]), [])),
					].filter((v) => v !== undefined);
				}
				// is not array //
				else {
					values = [...new Set(productsJson.map((p) => p[name]))].filter(
						(v) => v !== undefined
					);
				}

				// provide categories object //
				if (values.length > 0) {
					categories.push({
						name,
						values,
					});
				}
			});

			return categories;
		},
	},
});
